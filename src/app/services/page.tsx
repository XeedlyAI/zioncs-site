import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/pages/PageHero";
import { SERVICES } from "@/data/services";
import { breadcrumbListSchema } from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/services";

export const metadata: Metadata = {
  title: "Services | Zion Concrete Specialists",
  description:
    "All 11 concrete services from Zion Concrete Specialists — driveways, pool decks, sport courts, patios, foundations, commercial flatwork, and more. Across Utah.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Services — Zion Concrete Specialists",
    description:
      "Driveways, pool decks, sport courts, patios, foundations, commercial flatwork. Across the Wasatch Front and St. George.",
    url: PAGE_URL,
    type: "website",
  },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Services", url: PAGE_URL },
]);

const SILO_TILES = [
  {
    label: "RESIDENTIAL",
    title: "Homeowners",
    body: "Driveways, patios, pool decks, sport courts, repair work.",
    href: "/services#residential",
  },
  {
    label: "BUILDER",
    title: "Spec & custom builders",
    body: "Reliable flatwork sub for residential builds and multi-family.",
    href: "/builders",
  },
  {
    label: "COMMERCIAL",
    title: "Commercial GCs & owners",
    body: "Parking lots, ADA sidewalks, foundations, industrial slabs.",
    href: "/commercial",
  },
  {
    label: "ENTERPRISE",
    title: "Multi-site operators",
    body: "Dumpster pads, trash enclosures, multi-site maintenance programs.",
    href: "/multi-site",
  },
];

export default function ServicesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="ZIONCS://SERVICES · 11 OFFERINGS"
        title="Eleven flatwork services. One Utah crew."
        lead="From a backyard patio to a multi-site dumpster pad rollout, we handle residential, builder, commercial, and enterprise concrete across the Wasatch Front and St. George. Pick the service that fits your project — or pick the buyer track if you'd rather start there."
      />

      {/* All services */}
      <section id="residential" className="bg-bone py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / ALL SERVICES
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
              Every service we offer.
            </h2>
            <p className="text-stone leading-relaxed">
              Numbered for navigation. Click into any one for technical
              specs, FAQ, and project context.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {SERVICES.map((service) => (
              <li
                key={service.slug}
                className="border-b border-warm-border last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
              >
                <Link
                  href={service.href}
                  className="group flex items-center justify-between gap-6 py-5 md:py-6 -mx-4 px-4 rounded-md hover:bg-brand-orange-muted transition-colors"
                >
                  <div className="flex items-baseline gap-5 min-w-0">
                    <span className="font-mono text-base font-semibold text-steel tabular-nums shrink-0">
                      {service.number}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-bold text-lg sm:text-xl text-anthracite tracking-tight uppercase">
                        {service.name}
                      </h3>
                      <p className="text-sm text-stone mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-stone group-hover:text-brand-orange group-hover:translate-x-1 transition-all shrink-0"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Buyer-type tracks */}
      <section className="bg-bg-sand-wash py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              02 / BY BUYER TYPE
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
              Or start by who you are.
            </h2>
            <p className="text-stone leading-relaxed">
              The voice and the proposal change depending on the buyer.
              Pick the track that fits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SILO_TILES.map((silo) => (
              <Link
                key={silo.label}
                href={silo.href}
                className="card-light p-7 status-steel block group"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-3">
                  {silo.label}
                </p>
                <h3 className="text-xl font-bold tracking-tight text-anthracite mb-3">
                  {silo.title}
                </h3>
                <p className="text-stone leading-relaxed mb-4">{silo.body}</p>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-orange group-hover:text-brand-orange-hover transition-colors font-semibold">
                  Learn more
                  <ArrowRight size={12} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Geo context */}
      <section className="bg-anthracite text-bone py-20 md:py-24 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/topo-bg-dark.svg)",
            backgroundSize: "cover",
            opacity: 0.55,
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel-light mb-4">
            03 / WHERE WE WORK
          </p>
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-5">
            Wasatch Front + St. George.
          </h2>
          <p className="text-bone/75 leading-relaxed mb-6">
            Sandy is home base. We routinely work the entire Wasatch Front
            (Ogden through Provo) plus St. George in southern Utah. State
            pillar links to all 11 services and to the highest-priority
            location pages.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/utah-concrete-contractor"
              className="inline-flex items-center gap-2 px-5 py-3 border border-bone/25 hover:border-bone/50 text-bone font-medium text-sm rounded-lg transition-colors"
            >
              Utah service overview
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/locations/sandy-utah"
              className="inline-flex items-center gap-2 px-5 py-3 border border-bone/25 hover:border-bone/50 text-bone font-medium text-sm rounded-lg transition-colors"
            >
              Sandy
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/locations/salt-lake-city"
              className="inline-flex items-center gap-2 px-5 py-3 border border-bone/25 hover:border-bone/50 text-bone font-medium text-sm rounded-lg transition-colors"
            >
              Salt Lake City
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
