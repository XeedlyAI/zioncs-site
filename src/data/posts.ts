import type { PostMeta, PostModule } from "@/types/post";
import * as howToChoose from "@/content/blog/how-to-choose-a-concrete-contractor-in-utah";
import * as whyUtah from "@/content/blog/why-utah-concrete-cracks";

const POST_MODULES: Record<string, PostModule> = {
  [howToChoose.meta.slug]: howToChoose,
  [whyUtah.meta.slug]: whyUtah,
};

export function getAllPostSlugs(): string[] {
  return Object.keys(POST_MODULES);
}

export function getAllPosts(): PostMeta[] {
  return Object.values(POST_MODULES)
    .map((m) => m.meta)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPostBySlug(slug: string): PostModule | null {
  return POST_MODULES[slug] ?? null;
}

export function getRelatedPosts(currentSlug: string, slugs: readonly string[]): PostMeta[] {
  const explicit = slugs
    .map((s) => POST_MODULES[s]?.meta)
    .filter((m): m is PostMeta => Boolean(m));
  if (explicit.length >= 3) return explicit.slice(0, 3);
  // Pad with most-recent siblings if explicit list is short
  const fillers = getAllPosts()
    .filter(
      (m) =>
        m.slug !== currentSlug && !explicit.some((e) => e.slug === m.slug)
    )
    .slice(0, 3 - explicit.length);
  return [...explicit, ...fillers].slice(0, 3);
}
