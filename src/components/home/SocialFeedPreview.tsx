import { getSyncedPosts } from "@/lib/social/store";
import { isSyncOperational } from "@/lib/social/config";
import { SocialFeedPreviewClient } from "./SocialFeedPreviewClient";

/**
 * Server wrapper: fetches the feed through the social pipeline. When the Meta
 * sync is dark (default), getSyncedPosts returns the hand-curated static feed,
 * so this renders identically to before. Flipping SOCIAL_SYNC_ENABLED (+ creds)
 * switches the source to live Meta posts with no code change here.
 */
export async function SocialFeedPreview() {
  const posts = await getSyncedPosts(12);
  return <SocialFeedPreviewClient posts={posts} synced={isSyncOperational()} />;
}
