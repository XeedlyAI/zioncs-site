import { NextResponse } from "next/server";
import { runSocialSync } from "@/lib/social/sync";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Meta social-sync cron — runs daily per vercel.json.
 *
 * DARK for v1: `runSocialSync` returns early with status "disabled"/"skipped"
 * until SOCIAL_SYNC_ENABLED=true AND the Meta Graph + Supabase env vars are
 * set. Until then this endpoint is a safe no-op that returns 200.
 *
 * When the client is ready (see ZIONCS_EXPANSION_PLAN.md § Track B):
 *   1. Connect the IG Business account to the FB Page; complete Meta App Review.
 *   2. Provision Supabase; apply supabase/migrations/0001_social_posts.sql.
 *   3. Set SOCIAL_SYNC_ENABLED, META_GRAPH_TOKEN, META_IG_USER_ID,
 *      META_FB_PAGE_ID, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY in Vercel.
 *   4. The homepage feed flips from static → synced automatically.
 */
export async function GET(req: Request) {
  // Vercel Cron requests authenticate via the CRON_SECRET env var.
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    const result = await runSocialSync();
    return NextResponse.json(result);
  } catch (err) {
    console.error("[social-sync] cron error:", err);
    return NextResponse.json(
      { ok: false, status: "error", reason: String(err) },
      { status: 500 }
    );
  }
}
