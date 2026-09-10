import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PillarPageTemplate } from "@/components/pages/PillarPageTemplate";
import { ServiceAreaMap } from "@/components/data/ServiceAreaMap";
import { SERVICES } from "@/data/services";
import {
  breadcrumbListSchema,
  faqPageSchema,
  localBusinessSchema,
} from "@/lib/structured-data";
import { CONTACT } from "@/lib/contact";

const PAGE_URL = "https://zioncs.com/wasatch-front-concrete-contractor";

export const metadata: Metadata = {
  title: "Wasatch Front Concrete Contractor | Zion CS",
  description:
    "Concrete flatwork up and down the Wasatch Front. Salt Lake, Utah, Davis, Weber counties. Driveways, sport courts, foundations, commercial.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Wasatch Front Concrete Contractor — Salt Lake to Ogden to Provo",
    description:
      "Concrete contractor across the Wasatch Front. Salt Lake County, Utah County, Davis County, Weber County.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "What counts as 'the Wasatch Front'?",
    answer:
      "The urban corridor running along the western base of the Wasatch Range. Officially: Salt Lake County, Utah County, Davis County, Weber County, plus parts of Box Elder and Tooele counties. Practically: Ogden in the north, Salt Lake metro in the middle, Utah Valley (Provo/Orem/Lehi) in the south, plus Park City in the mountains. Roughly 80% of Utah's population lives in this corridor.",
  },
  {
    question:
      "How long does it take you to get from Sandy to Ogden or Provo?",
    answer:
      "Sandy to Ogden is about 50 minutes north on I-15. Sandy to Provo is about 35 minutes south. Park City is 25 minutes east. We routinely work all three corridors and travel time isn't a meaningful constraint for residential or commercial work — it just shapes the daily logistics.",
  },
  {
    question: "Do you have crews stationed in different Wasatch Front cities?",
    answer:
      "No — we run from Sandy. Single home base means consistent crew, consistent quality, no inter-office handoffs. The Wasatch Front is small enough geographically that one Sandy-based crew can serve the entire corridor without efficiency penalties most regional contractors run into.",
  },
  {
    question: "Do you serve mountain communities along the Wasatch Front?",
    answer:
      "Yes — Park City, Heber, Midway, Kamas. Mountain projects need different cold-weather planning (deeper frost depths, shorter pour windows, snow logistics) but we work them regularly. Utah's mountain code minimums for footing depth go to 42 inches in Park City vs 30 inches on the valley floor — we know the regional differences.",
  },
  {
    question: "How does residential vs commercial vary across the Wasatch Front?",
    answer:
      "Residential demand concentrates in the suburban belt — Sandy, Draper, Lehi, Highland, Bountiful, Layton, parts of West Valley. Commercial demand concentrates along the major corridors (State Street, 700 East, Bangerter, I-15 frontage) and in newer mixed-use developments. Both run year-round; we sequence crews across both tracks based on project mix and weather.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Utah", href: "/utah-concrete-contractor" },
  { label: "Wasatch Front" },
];

const TOP_SERVICES = SERVICES.filter((s) =>
  [
    "concrete-driveways-utah",
    "stamped-decorative-concrete-utah",
    "pool-decks-utah",
    "concrete-patios-utah",
    "industrial-concrete-foundations-utah",
    "commercial-flatwork-parking-lots-sidewalks",
  ].includes(s.slug)
);

const CITIES_TIER = [
  {
    href: "/locations/sandy-utah",
    name: "Sandy",
    label: "Salt Lake County · home base",
  },
  {
    href: "/locations/salt-lake-city",
    name: "Salt Lake City",
    label: "Salt Lake County · highest volume",
  },
  {
    href: "/locations/st-george",
    name: "St. George",
    label: "Washington County · southern bookend",
  },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  {
    name: "Utah",
    url: "https://zioncs.com/utah-concrete-contractor",
  },
  { name: "Wasatch Front", url: PAGE_URL },
]);

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists — Wasatch Front",
  url: PAGE_URL,
  phone: CONTACT.phone,
  address: {
    street: CONTACT.address.street,
    city: CONTACT.address.city,
    state: CONTACT.address.state,
    zip: CONTACT.address.zip,
  },
  geo: { lat: 40.7608, lng: -111.891 },
  hours: ["Mo-Fr 08:00-17:00"],
  image: "https://zioncs.com/brand/zioncs-logo-horizontal.png",
});

const faqJsonLd = faqPageSchema(FAQS);

export default function WasatchFrontPillarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PillarPageTemplate
        breadcrumbs={BREADCRUMBS}
        eyebrow="ZIONCS://METRO-PILLAR · WASATCH FRONT"
        title="Concrete contractor across the Wasatch Front."
        lead="Salt Lake to Ogden to Provo — roughly 80 miles of Utah's I-15 corridor where most of the state's residential and commercial concrete demand lives. Sandy is home base; we cover Salt Lake County, Utah County, Davis County, and Weber County from one crew."
        faqs={FAQS}
        ctaTitle="Wasatch Front project on the calendar?"
        ctaBody="Quote-driven, written timeline, two-year workmanship warranty. Tell us where the project is and what you're working on — written quote within 7 days."
      >
        {/* Service area map */}
        <section className="bg-anthracite py-20 md:py-24 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url(/topo-bg-dark.svg)",
              backgroundSize: "cover",
              opacity: 0.45,
            }}
          />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <ServiceAreaMap />
          </div>
        </section>

        {/* Overview */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / OVERVIEW
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Eighty miles of Utah&rsquo;s busiest concrete market.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                The Wasatch Front is the urban corridor running along
                the western base of the Wasatch Range —{" "}
                <span className="font-mono tabular-nums font-semibold">
                  80%
                </span>{" "}
                of Utah&rsquo;s population lives in roughly{" "}
                <span className="font-mono tabular-nums font-semibold">
                  80 miles
                </span>{" "}
                of I-15 between Ogden and Provo, with Park City and the
                mountain communities a short drive east. Most of our
                project work clusters here.
              </p>
              <p>
                The Wasatch Front concrete market is denser, more varied,
                and more demanding than the rest of Utah. Older streets
                in central Salt Lake City need careful repair work
                around 100-year-old infrastructure. New custom builds
                in Draper and Lehi need full residential flatwork
                packages on tight builder schedules. Commercial corridors
                along State Street and 700 East need ADA-compliant
                replacements while storefronts stay open. Multi-site
                portfolios across the metro need standardized specs
                rolled out site by site.
              </p>
              <p>
                One Sandy-based crew covers it all. No regional offices,
                no farmed-out subbing, no inter-team handoffs. The
                project manager who walks your site is the project
                manager who runs the pour.
              </p>
            </div>
          </div>
        </section>

        {/* Cities */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                02 / CITY PAGES
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                Three Tier-2 city pages anchor the metro.
              </h2>
              <p className="text-stone leading-relaxed">
                Plus St. George covering southern Utah. More cities
                added as traffic justifies (Provo, Ogden, Park City,
                Lehi, Layton, Bountiful, Orem are post-launch
                expansions).
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {CITIES_TIER.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="card-light p-7 status-steel block group"
                >
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-3">
                    {c.label}
                  </p>
                  <h3 className="text-xl font-bold text-anthracite tracking-tight mb-3">
                    {c.name}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-orange group-hover:text-brand-orange-hover transition-colors font-semibold">
                    Visit page
                    <ArrowRight size={12} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Top services */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                03 / TOP SERVICES IN THE METRO
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                Six categories cover most Wasatch Front demand.
              </h2>
              <p className="text-stone leading-relaxed">
                Three residential plus three commercial. The full 11-
                service list is on the{" "}
                <Link
                  href="/services"
                  className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
                >
                  services index
                </Link>
                .
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {TOP_SERVICES.map((s) => (
                <li
                  key={s.slug}
                  className="border-b border-warm-border last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
                >
                  <Link
                    href={s.href}
                    className="group flex items-center justify-between gap-6 py-5 -mx-4 px-4 rounded-md hover:bg-bg-orange-tinted-light transition-colors"
                  >
                    <div className="flex items-baseline gap-5 min-w-0">
                      <span className="font-mono text-base font-semibold text-steel tabular-nums shrink-0">
                        {s.number}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg text-anthracite tracking-tight uppercase">
                          {s.name}
                        </h3>
                        <p className="text-sm text-stone mt-1">
                          {s.description}
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

        {/* Geo specifics */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              04 / WHAT&rsquo;S DIFFERENT ABOUT WASATCH FRONT CONCRETE
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Climate + soil + density define the work here.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                The Wasatch Front sees roughly{" "}
                <span className="font-mono tabular-nums font-semibold">
                  70 freeze-thaw cycles
                </span>{" "}
                per year — among the highest counts in the western
                United States. Soils are alluvial, ranging from clay-
                heavy in Davis County and the western Salt Lake Valley
                to rocky on the foothills in Sandy and Draper.
                Frost-depth code requirements run 30 inches in the
                valley to 42 inches in Park City and the mountain
                communities. The concrete spec we pour and the
                subgrade prep we do are calibrated to those conditions.
              </p>
              <p>
                For more on the climate impact, see{" "}
                <Link
                  href="/blog/why-utah-concrete-cracks"
                  className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
                >
                  why Utah concrete cracks
                </Link>
                . For commercial-foundation soil context, see{" "}
                <Link
                  href="/blog/utah-soil-conditions-commercial-foundations"
                  className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
                >
                  Utah soil conditions and commercial foundations
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </PillarPageTemplate>
    </>
  );
}
