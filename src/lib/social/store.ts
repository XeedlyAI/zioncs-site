/**
 * Social post storage. Mirrors the booking-store pattern: a small interface
 * with two implementations selected at call time.
 *
 *  - StaticSocialStore  — reads the hand-curated src/data/social-posts.ts.
 *                         Default. upsert() is a no-op. This is what ships live
 *                         until the client completes Meta + Supabase setup.
 *  - SupabaseSocialStore — reads/writes a Supabase table over the REST API
 *                         (fetch only, no @supabase/supabase-js dependency).
 *
 * getSocialStore() returns Supabase only when the sync is fully operational;
 * otherwise Static. getSyncedPosts() is the single accessor the UI calls, and
 * it always falls back to the static feed on any error — the homepage can
 * never render empty because of a storage hiccup.
 */
import type { SocialPost } from "@/data/social-posts";
import { SOCIAL_POSTS, getRecentPosts } from "@/data/social-posts";
import {
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  SOCIAL_TABLE,
  isSyncOperational,
} from "./config";

export interface SocialStore {
  list(limit?: number): Promise<SocialPost[]>;
  upsert(posts: SocialPost[]): Promise<number>;
}

/** Static, read-only store backed by the curated data file. */
class StaticSocialStore implements SocialStore {
  async list(limit = 12): Promise<SocialPost[]> {
    return getRecentPosts(limit);
  }
  async upsert(): Promise<number> {
    // No-op: the static feed is edited by hand in src/data/social-posts.ts.
    return 0;
  }
}

/** Supabase-REST-backed store. Table shape: supabase/migrations/0001_social_posts.sql */
class SupabaseSocialStore implements SocialStore {
  private endpoint = `${SUPABASE_URL}/rest/v1/${SOCIAL_TABLE}`;
  private headers = {
    apikey: SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    "Content-Type": "application/json",
  };

  async list(limit = 12): Promise<SocialPost[]> {
    const url = `${this.endpoint}?select=*&order=posted_at.desc&limit=${limit}`;
    const res = await fetch(url, { headers: this.headers, cache: "no-store" });
    if (!res.ok) throw new Error(`Supabase list failed: ${res.status}`);
    const rows = (await res.json()) as SocialRow[];
    return rows.map(rowToPost);
  }

  async upsert(posts: SocialPost[]): Promise<number> {
    if (posts.length === 0) return 0;
    const res = await fetch(this.endpoint, {
      method: "POST",
      headers: {
        ...this.headers,
        // Upsert on the primary key so re-syncing the same post updates it.
        Prefer: "resolution=merge-duplicates,return=minimal",
      },
      body: JSON.stringify(posts.map(postToRow)),
      cache: "no-store",
    });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Supabase upsert failed: ${res.status} ${body}`);
    }
    return posts.length;
  }
}

/** DB row <-> SocialPost mapping. */
type SocialRow = {
  id: string;
  platform: SocialPost["platform"];
  posted_at: string;
  caption: string;
  alt: string;
  url: string;
  image: string | null;
};

function rowToPost(r: SocialRow): SocialPost {
  return {
    id: r.id,
    platform: r.platform,
    postedAt: r.posted_at,
    caption: r.caption,
    alt: r.alt,
    url: r.url,
    image: r.image ?? undefined,
  };
}

function postToRow(p: SocialPost): SocialRow {
  return {
    id: p.id,
    platform: p.platform,
    posted_at: p.postedAt,
    caption: p.caption,
    alt: p.alt,
    url: p.url,
    image: p.image ?? null,
  };
}

const staticStore = new StaticSocialStore();

/** Pick the store: Supabase when the sync is fully wired, else static. */
export function getSocialStore(): SocialStore {
  return isSyncOperational() ? new SupabaseSocialStore() : staticStore;
}

/**
 * The one accessor the UI calls. Reads from the active store, and on ANY
 * error falls back to the curated static feed so the homepage always renders.
 */
export async function getSyncedPosts(limit = 12): Promise<SocialPost[]> {
  try {
    const posts = await getSocialStore().list(limit);
    // Defensive: if the synced store is somehow empty, use the static feed.
    return posts.length > 0 ? posts : getRecentPosts(limit);
  } catch (err) {
    console.error("[social-sync] falling back to static feed:", err);
    return getRecentPosts(limit);
  }
}

export { SOCIAL_POSTS };
