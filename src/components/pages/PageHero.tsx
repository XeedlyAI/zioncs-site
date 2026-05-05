import Image from "next/image";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead?: string;
  breadcrumbs: Crumb[];
  /** Optional hero photo behind the section. Path under /public. */
  heroImage?: string;
  /** Alt text for the hero photo. Decorative by default. */
  heroAlt?: string;
}

export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  heroImage,
  heroAlt = "",
}: PageHeroProps) {
  const hasImage = Boolean(heroImage);

  return (
    <section className="relative bg-anthracite text-bone overflow-hidden">
      {/* Hero photo when present, falls back to gradient + topo */}
      {hasImage && heroImage ? (
        <div aria-hidden={!heroAlt} className="absolute inset-0 bg-anthracite">
          <Image
            src={heroImage}
            alt={heroAlt}
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
          opacity: hasImage ? 0.2 : 0.6,
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <p className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-light mb-4">
          {eyebrow}
        </p>
        <h1 className="text-[clamp(2.25rem,4.6vw,3.5rem)] font-extrabold tracking-tight leading-[1.05] text-bone max-w-4xl mb-5">
          {title}
        </h1>
        {lead && (
          <p className="text-lg text-bone/80 max-w-2xl leading-relaxed">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
