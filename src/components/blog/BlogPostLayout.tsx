import type { ReactNode } from "react";
import { PostHero } from "./PostHero";
import { RelatedPosts } from "./RelatedPosts";
import { FaqSection } from "@/components/pages/FaqSection";
import type { PostMeta } from "@/types/post";

interface BlogPostLayoutProps {
  meta: PostMeta;
  related: PostMeta[];
  children: ReactNode;
}

/**
 * Standard chrome for every blog post:
 *   PostHero (anthracite + topo + breadcrumbs + byline)
 *   article body (children — wrapped by Prose inside the post file)
 *   FaqSection (if the post has FAQs)
 *   RelatedPosts (sand-wash, 3-card grid)
 *   PageCTA
 */
export function BlogPostLayout({
  meta,
  related,
  children,
}: BlogPostLayoutProps) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: meta.title.length > 60 ? meta.title.slice(0, 57) + "…" : meta.title },
  ];

  return (
    <>
      <PostHero meta={meta} breadcrumbs={breadcrumbs} />

      <article className="bg-bone py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">{children}</div>
      </article>

      {meta.faqs.length > 0 && (
        <FaqSection
          eyebrow="ZIONCS://FAQ"
          title="Common questions"
          items={[...meta.faqs]}
        />
      )}

      <RelatedPosts posts={related} />
    </>
  );
}
