import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import {
  getAllPostSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/data/posts";
import { getAuthor } from "@/lib/authors";
import {
  breadcrumbListSchema,
  faqPageSchema,
} from "@/lib/structured-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `https://zioncs.com/blog/${slug}`;
  return {
    title: post.meta.metaTitle,
    description: post.meta.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.meta.title,
      description: post.meta.metaDescription,
      url,
      type: "article",
      publishedTime: post.meta.publishedAt,
      modifiedTime: post.meta.lastReviewedAt,
      authors: [getAuthor(post.meta.authorSlug).name],
    },
  };
}

function articleSchema(slug: string, meta: ReturnType<typeof getPostBySlug> extends { meta: infer M } | null ? M : never) {
  const url = `https://zioncs.com/blog/${slug}`;
  const author = getAuthor(meta.authorSlug);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.metaDescription,
    datePublished: meta.publishedAt,
    dateModified: meta.lastReviewedAt,
    author: {
      "@type": "Person",
      name: author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Zion Concrete Specialists",
      logo: {
        "@type": "ImageObject",
        url: "https://zioncs.com/brand/zioncs-logo-horizontal.png",
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: [meta.targetKeyword, ...meta.secondaryKeywords].join(", "),
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { meta, default: Body } = post;
  const related = getRelatedPosts(slug, meta.relatedSlugs);

  const articleJsonLd = articleSchema(slug, meta);
  const breadcrumbsJsonLd = breadcrumbListSchema([
    { name: "Home", url: "https://zioncs.com/" },
    { name: "Journal", url: "https://zioncs.com/blog" },
    { name: meta.title, url: `https://zioncs.com/blog/${slug}` },
  ]);
  const faqJsonLd =
    meta.faqs.length > 0 ? faqPageSchema([...meta.faqs]) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <BlogPostLayout meta={meta} related={related}>
        <Body />
      </BlogPostLayout>
    </>
  );
}
