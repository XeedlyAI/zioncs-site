/**
 * Normalizes raw Graph API nodes into the site's existing `SocialPost` shape,
 * so the renderer (`SocialFeedScroll`) never learns where a post came from.
 */
import type { SocialPost } from "@/data/social-posts";
import type { IgMediaNode, FbPostNode } from "./graph";

const FB_URL = "https://www.facebook.com/profile.php?id=61573114690934";
const IG_URL = "https://www.instagram.com/zionconcretespecialists/";

/** Trim a caption to a 1–2 line snippet for the card. */
function snippet(text: string | undefined, max = 160): string {
  if (!text) return "";
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > max ? `${clean.slice(0, max - 1).trimEnd()}…` : clean;
}

/** Derive a short alt string from a caption (a11y fallback). */
function altFromCaption(caption: string, platform: string): string {
  const first = caption.split(/[.!?\n]/)[0]?.trim();
  return first
    ? `${first} — Zion Concrete Specialists (${platform})`
    : `Zion Concrete Specialists ${platform} post`;
}

export function normalizeInstagram(node: IgMediaNode): SocialPost | null {
  // Skip anything without a usable still (pure video with no thumbnail).
  const image = node.media_url || node.thumbnail_url;
  if (node.media_type === "VIDEO" && !node.thumbnail_url && !node.media_url) {
    return null;
  }
  const caption = snippet(node.caption);
  return {
    id: `ig-${node.id}`,
    platform: "instagram",
    postedAt: node.timestamp
      ? new Date(node.timestamp).toISOString()
      : new Date(0).toISOString(),
    caption,
    alt: altFromCaption(caption, "Instagram"),
    url: node.permalink || IG_URL,
    image,
  };
}

export function normalizeFacebook(node: FbPostNode): SocialPost | null {
  // Only surface posts that carry an image — the feed is visual.
  if (!node.full_picture) return null;
  const caption = snippet(node.message);
  return {
    id: `fb-${node.id}`,
    platform: "facebook",
    postedAt: node.created_time
      ? new Date(node.created_time).toISOString()
      : new Date(0).toISOString(),
    caption,
    alt: altFromCaption(caption, "Facebook"),
    url: node.permalink_url || FB_URL,
    image: node.full_picture,
  };
}

/** Normalize + merge both platforms, newest first, dropping unusable nodes. */
export function normalizeAll(
  ig: IgMediaNode[],
  fb: FbPostNode[]
): SocialPost[] {
  const posts = [
    ...ig.map(normalizeInstagram),
    ...fb.map(normalizeFacebook),
  ].filter((p): p is SocialPost => p !== null);
  return posts.sort(
    (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
  );
}
