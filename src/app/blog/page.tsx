import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { PageCTA } from "@/components/pages/PageCTA";
import { PostCard } from "@/components/blog/PostCard";
import { getAllPosts } from "@/data/posts";
import { breadcrumbListSchema } from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/blog";

export const metadata: Metadata = {
  title: "Journal | Zion Concrete Specialists",
  description:
    "Articles for Utah homeowners, builders, and commercial buyers — diagnosis, decision frameworks, and process guides from a working concrete crew.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "ZionCS Journal — Articles for Utah Concrete Buyers",
    description:
      "Diagnosis, decision frameworks, and process guides for Utah concrete projects.",
    url: PAGE_URL,
    type: "website",
  },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Journal" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Journal", url: PAGE_URL },
]);

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="ZIONCS://JOURNAL"
        title="Articles from a working concrete crew."
        lead="Diagnosis, decision frameworks, process guides. Written for Utah homeowners, builders, and commercial buyers — by the people doing the work."
      />

      <section className="bg-bone py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-stone">No articles yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((p) => (
                <PostCard key={p.slug} meta={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      <PageCTA
        title="Don't see what you need?"
        body="Tell us about your project and we'll send a written quote within 7 days. Most articles come from real questions homeowners and builders asked us — yours might be next."
      />
    </>
  );
}
