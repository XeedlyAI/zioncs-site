/**
 * Meta social-sync configuration. Everything here reads from env and defaults
 * to OFF, so the pipeline ships dark: no creds → static feed, no behavior
 * change. Flipping it on is purely an env-var operation (see
 * ZIONCS_EXPANSION_PLAN.md § Track B "The flip").
 */

/** Master switch. When false, the cron is inert and the homepage serves the
 *  hand-curated static feed. */
export const SOCIAL_SYNC_ENABLED = process.env.SOCIAL_SYNC_ENABLED === "true";

/** Graph API version — pinned; bump deliberately when Meta deprecates. */
export const META_GRAPH_VERSION = process.env.META_GRAPH_VERSION || "v21.0";

/** Long-lived Page access token (used for both IG media + FB Page feed). */
export const META_GRAPH_TOKEN = process.env.META_GRAPH_TOKEN || "";

/** Instagram Business/Creator user id linked to the FB Page. */
export const META_IG_USER_ID = process.env.META_IG_USER_ID || "";

/** Facebook Page id (ZionCS = 61573114690934). */
export const META_FB_PAGE_ID = process.env.META_FB_PAGE_ID || "";

/** Max posts to pull per platform per sync. */
export const SOCIAL_SYNC_LIMIT = Number(process.env.SOCIAL_SYNC_LIMIT || 25);

/** Supabase (storage). Service-role key is server-only — never exposed. */
export const SUPABASE_URL = process.env.SUPABASE_URL || "";
export const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY || "";
export const SOCIAL_TABLE = process.env.SOCIAL_TABLE || "social_posts";

export function hasGraphCreds(): boolean {
  return Boolean(META_GRAPH_TOKEN && (META_IG_USER_ID || META_FB_PAGE_ID));
}

export function hasSupabaseCreds(): boolean {
  return Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);
}

/** The pipeline can actually run end-to-end only when all three are true. */
export function isSyncOperational(): boolean {
  return SOCIAL_SYNC_ENABLED && hasGraphCreds() && hasSupabaseCreds();
}
