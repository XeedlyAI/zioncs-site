/**
 * Meta Graph API adapter. Thin, typed, fetch-only (no SDK dependency).
 * Pulls recent Instagram media and Facebook Page posts. All calls are
 * best-effort: on any HTTP or network error they log and return [] so a
 * partial Meta outage never breaks the sync (the store keeps its last data).
 */
import {
  META_GRAPH_VERSION,
  META_GRAPH_TOKEN,
  META_IG_USER_ID,
  META_FB_PAGE_ID,
  SOCIAL_SYNC_LIMIT,
} from "./config";

const BASE = `https://graph.facebook.com/${META_GRAPH_VERSION}`;

/** Raw Instagram media node (subset of fields we request). */
export type IgMediaNode = {
  id: string;
  caption?: string;
  media_type?: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  timestamp?: string; // ISO 8601
};

/** Raw Facebook Page post node (subset of fields we request). */
export type FbPostNode = {
  id: string;
  message?: string;
  full_picture?: string;
  permalink_url?: string;
  created_time?: string; // ISO 8601
};

type GraphList<T> = { data?: T[]; error?: { message: string; code: number } };

async function graphGet<T>(path: string, params: Record<string, string>) {
  const url = new URL(`${BASE}/${path}`);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  url.searchParams.set("access_token", META_GRAPH_TOKEN);
  const res = await fetch(url.toString(), {
    // Graph responses shouldn't be cached by the fetch layer.
    cache: "no-store",
  });
  const json = (await res.json()) as GraphList<T>;
  if (!res.ok || json.error) {
    throw new Error(
      `Graph ${path} failed: ${json.error?.message || res.statusText}`
    );
  }
  return json.data ?? [];
}

/** Recent Instagram media for the connected IG Business account. */
export async function fetchInstagramMedia(): Promise<IgMediaNode[]> {
  if (!META_IG_USER_ID) return [];
  try {
    return await graphGet<IgMediaNode>(`${META_IG_USER_ID}/media`, {
      fields:
        "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
      limit: String(SOCIAL_SYNC_LIMIT),
    });
  } catch (err) {
    console.error("[social-sync] Instagram fetch error:", err);
    return [];
  }
}

/** Recent Facebook Page posts. */
export async function fetchFacebookPosts(): Promise<FbPostNode[]> {
  if (!META_FB_PAGE_ID) return [];
  try {
    return await graphGet<FbPostNode>(`${META_FB_PAGE_ID}/posts`, {
      fields: "id,message,full_picture,permalink_url,created_time",
      limit: String(SOCIAL_SYNC_LIMIT),
    });
  } catch (err) {
    console.error("[social-sync] Facebook fetch error:", err);
    return [];
  }
}

/**
 * Exchange a soon-to-expire long-lived token for a fresh one (~60-day TTL).
 * Requires the app id + secret. Not called by the cron automatically — wire
 * it into a monthly maintenance job once the app is live. Documented here so
 * the refresh story lives with the fetch code.
 *
 * GET /oauth/access_token?grant_type=fb_exchange_token
 *   &client_id={app-id}&client_secret={app-secret}
 *   &fb_exchange_token={current-long-lived-token}
 */
export async function refreshLongLivedToken(
  appId: string,
  appSecret: string,
  currentToken: string
): Promise<string | null> {
  try {
    const url = new URL(`${BASE}/oauth/access_token`);
    url.searchParams.set("grant_type", "fb_exchange_token");
    url.searchParams.set("client_id", appId);
    url.searchParams.set("client_secret", appSecret);
    url.searchParams.set("fb_exchange_token", currentToken);
    const res = await fetch(url.toString(), { cache: "no-store" });
    const json = (await res.json()) as { access_token?: string };
    return json.access_token ?? null;
  } catch (err) {
    console.error("[social-sync] token refresh error:", err);
    return null;
  }
}
