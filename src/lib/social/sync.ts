/**
 * Orchestrates one sync pass: pull Graph → normalize → upsert to the store.
 * Pure function of config; safe to call from the cron or a manual admin action.
 */
import { fetchInstagramMedia, fetchFacebookPosts } from "./graph";
import { normalizeAll } from "./normalize";
import { getSocialStore } from "./store";
import { isSyncOperational, hasGraphCreds, hasSupabaseCreds } from "./config";

export type SyncResult = {
  ok: boolean;
  status: "synced" | "disabled" | "skipped";
  reason?: string;
  fetched?: { instagram: number; facebook: number };
  upserted?: number;
};

export async function runSocialSync(): Promise<SyncResult> {
  if (!isSyncOperational()) {
    // Explain *why* it's inert so the cron logs are diagnosable.
    const missing: string[] = [];
    if (!hasGraphCreds()) missing.push("Meta Graph creds");
    if (!hasSupabaseCreds()) missing.push("Supabase creds");
    return {
      ok: true,
      status: missing.length ? "skipped" : "disabled",
      reason: missing.length
        ? `missing: ${missing.join(", ")}`
        : "SOCIAL_SYNC_ENABLED is not true",
    };
  }

  const [ig, fb] = await Promise.all([
    fetchInstagramMedia(),
    fetchFacebookPosts(),
  ]);
  const posts = normalizeAll(ig, fb);
  const upserted = await getSocialStore().upsert(posts);

  return {
    ok: true,
    status: "synced",
    fetched: { instagram: ig.length, facebook: fb.length },
    upserted,
  };
}
