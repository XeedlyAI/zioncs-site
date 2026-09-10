import type { ComponentType } from "react";

export type SiloIntent =
  | "RESIDENTIAL"
  | "BUILDER"
  | "COMMERCIAL"
  | "ENTERPRISE";

export type ArticleRole =
  | "front-door"
  | "diagnostic"
  | "decision-framework"
  | "magnetizer"
  | "process-guide"
  | "insight";

export type FaqItem = { question: string; answer: string };

/** Frontmatter metadata for a blog post. Mirrors the Core 30 article spec. */
export type PostMeta = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  /** Author slug from src/lib/authors.ts */
  authorSlug: string;
  /** ISO date — when the article was first published */
  publishedAt: string;
  /** ISO date — last reviewed / last updated */
  lastReviewedAt: string;
  /** Estimated reading time in minutes */
  readingTimeMinutes: number;
  targetKeyword: string;
  secondaryKeywords: readonly string[];
  siloIntent: SiloIntent;
  articleRole: ArticleRole;
  category: string;
  /** City focus, if any. null for state-level or geo-agnostic content. */
  cityAnchor: string | null;
  /** Path to a hero image. Optional — when absent the layout uses a gradient placeholder. */
  heroImage?: string;
  /** Slugs of related articles to surface in the related-posts block. */
  relatedSlugs: readonly string[];
  /** FAQs to render at the end of the article and emit as FAQPage JSON-LD. */
  faqs: readonly FaqItem[];
};

/** A blog post module — the shape every TSX file in src/content/blog/ must export. */
export type PostModule = {
  meta: PostMeta;
  default: ComponentType;
};
