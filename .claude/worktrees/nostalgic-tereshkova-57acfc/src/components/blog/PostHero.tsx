import Image from "next/image";
import { Breadcrumbs, type Crumb } from "@/components/pages/Breadcrumbs";
import { PostByline } from "./PostByline";
import type { PostMeta } from "@/types/post";

interface PostHeroProps {
  meta: PostMeta;
  breadcrumbs: Crumb[];
}

export function PostHero({ meta, breadcrumbs }: PostHeroProps) {
  const hasImage = Boolean(meta.heroImage);

  return (
    <section className="relative bg-anthracite text-bone overflow-hidden">
      {/* Hero photo when present, falls back to gradient + topo */}
      {hasImage && meta.heroImage ? (
        <div aria-hidden="true" className="absolute inset-0 bg-anthracite">
          <Image
            src={meta.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      {/* Topo overlay — softer when an image is behind it */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/topo-bg-dark.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: hasImage ? 0.2 : 0.55,
        }}
      />

      {/* Anthracite tint — heavier on photo to keep title readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: hasImage
            ? "linear-gradient(180deg, rgba(26,24,20,0.55) 0%, rgba(26,24,20,0.55) 35%, rgba(26,24,20,0.92) 100%)"
            : "linear-gradient(180deg, rgba(38, 34, 28, 0.6) 0%, rgba(26, 24, 20, 0.95) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-14 lg:pb-16">
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <p className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-light mb-4">
          ZIONCS://JOURNAL · {meta.siloIntent}
        </p>
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.1] text-bone mb-6">
          {meta.title}
        </h1>
        {meta.excerpt && (
          <p className="text-lg text-bone/80 leading-relaxed mb-8">
            {meta.excerpt}
          </p>
        )}
        <PostByline
          authorSlug={meta.authorSlug}
          publishedAt={meta.publishedAt}
          lastReviewedAt={meta.lastReviewedAt}
          readingTimeMinutes={meta.readingTimeMinutes}
        />
      </div>
    </section>
  );
}
