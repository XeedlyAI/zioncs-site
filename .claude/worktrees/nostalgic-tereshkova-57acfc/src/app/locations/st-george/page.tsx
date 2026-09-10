import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LocationPageTemplate } from "@/components/pages/LocationPageTemplate";
import { SERVICES } from "@/data/services";
import { CITIES } from "@/data/cities";
import {
  breadcrumbListSchema,
  faqPageSchema,
  localBusinessSchema,
} from "@/lib/structured-data";
import { CONTACT } from "@/lib/contact";

const PAGE_URL = "https://zioncs.com/locations/st-george";
const CITY = CITIES["st-george"];

export const metadata: Metadata = {
  title: "Concrete Contractor St. George | Zion CS",
  description:
    "St. George concrete contractor. Driveways, patios, pool decks, foundations. Serving Washington County and the southern Utah service area.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Contractor St. George — Southern Utah Flatwork",
    description:
      "Concrete flatwork in St. George — driveways, patios, pool decks, foundations. Serving Washington County and southern Utah.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question:
      "Do you actually work in St. George or just claim coverage?",
    answer:
      "We work it. The crew travels south for projects in Washington County multiple times per year — pool decks, residential driveways, light commercial. The work is concentrated enough that we can plan dedicated trips around weather windows. If your project is small enough that the travel doesn't pencil, we'll tell you straight rather than overcommit.",
  },
  {
    question: "How is St. George concrete different from the Wasatch Front?",
    answer:
      "Three big differences. (1) Frost depth — code minimum is 12 inches in St. George vs 30 inches on the Wasatch Front. (2) Soil — sandy desert soils with high alkalinity, no clay-expansion concern. (3) Heat — pour planning emphasizes hot-weather precautions (water-down, accelerator-free mixes, immediate curing-blanket application) where the Wasatch Front emphasizes cold-weather precautions. Different prep playbook entirely.",
  },
  {
    question:
      "Will sealers and finishes hold up to St. George sun?",
    answer:
      "With the right products, yes. UV intensity is the single biggest sealant-aging factor here — typical 3-year reseal cadence on stamped concrete in the Wasatch Front becomes 2 years in St. George. We use UV-rated sealers and recommend the tighter reseal schedule on every St. George project. Skipping reseals is the #1 cause of premature finish failure in southern Utah.",
  },
  {
    question:
      "What's the busy pour season in St. George?",
    answer:
      "Winter and shoulder seasons. October–April is the most workable window. Summer pours are possible but expensive — pre-dawn starts, water-down on the subgrade, immediate curing-blanket application, sometimes ice in the mix. Most southern Utah commercial work targets the cooler windows. Residential pool deck work peaks in late winter / early spring before pool-use season.",
  },
  {
    question: "Do you handle commercial work in St. George?",
    answer:
      "Yes — limited scale. Multi-tenant retail, smaller commercial sites, multi-family residential. Larger commercial work (big-box retail, full-acre parking lots) typically goes to St. George-local crews because the travel cost from Sandy doesn't pencil for large pours. We're a good fit for small-to-mid commercial projects where Wasatch-Front-grade execution matters.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/utah-concrete-contractor" },
  { label: "St. George" },
];

const TOP_SERVICES = SERVICES.filter((s) =>
  [
    "concrete-driveways-utah",
    "stamped-decorative-concrete-utah",
    "pool-decks-utah",
    "concrete-patios-utah",
    "industrial-concrete-foundations-utah",
  ].includes(s.slug)
);

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists — St. George",
  url: PAGE_URL,
  phone: CONTACT.phone,
  address: {
    street: "Sandy, UT 84070 (home base)",
    city: CITY.name,
    state: "UT",
    zip: CITY.zipSamples[0],
  },
  geo: CITY.geo,
  hours: ["Mo-Fr 08:00-17:00"],
  image: "https://zioncs.com/brand/zioncs-logo-horizontal.png",
});

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  {
    name: "Utah Concrete Contractor",
    url: "https://zioncs.com/utah-concrete-contractor",
  },
  { name: "St. George", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function StGeorgePage() {
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
      <LocationPageTemplate
        breadcrumbs={BREADCRUMBS}
        eyebrow="ZIONCS://LOCATION · ST. GEORGE"
        title="Concrete contractor St. George — southern Utah flatwork."
        lead="St. George is the southern bookend of our service area. We travel south from Sandy multiple times per year for pool decks, residential driveways, patios, and small commercial work in Washington County. Different climate, different soil, different prep playbook than the Wasatch Front — same standards."
        faqs={FAQS}
        ctaTitle="Got a project in St. George?"
        ctaBody="Tell us the project type and timeline. We'll schedule the trip south around the right weather window and send a written quote within 7 business days."
      >
        {/* Overview */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / SOUTHERN UTAH OVERVIEW
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Different climate. Different soil. Different prep.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                St. George sits roughly{" "}
                <span className="font-mono tabular-nums font-semibold">
                  4.5 hours south
                </span>{" "}
                of Sandy on I-15. It&rsquo;s a different climate zone
                — desert sandstone country, mild winters, brutal
                summers, intense UV exposure year-round. The concrete
                playbook flips: cold-weather precautions become rare,
                hot-weather precautions become the rule, sealer
                selection becomes the most-critical material decision.
              </p>
              <p>
                We work St. George regularly enough to know what
                holds up here. The pool deck rebuild in Bloomington
                from 2025 needed UV-rated sealer + non-slip additive
                that the Wasatch Front version of the same project
                would use lighter products on. Residential driveways
                in Tonaquint sit on sandy alluvial bases that
                drain well but require different reinforcement
                spacing than clay-heavy Salt Lake Valley work.
              </p>
              <p>
                We&rsquo;re honest about scale: large commercial work
                (acre-plus parking lots, big-box retail) usually
                goes to St. George-local crews because the travel
                from Sandy doesn&rsquo;t pencil. We&rsquo;re the
                right fit for residential work, pool decks, smaller
                commercial, and projects where the design or finish
                quality justifies bringing a Wasatch-Front-grade
                crew south.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                02 / SERVICES IN ST. GEORGE
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                What we work most in southern Utah.
              </h2>
              <p className="text-stone leading-relaxed">
                Top five categories. Pool decks lead the mix —
                residential and resort/multi-family.{" "}
                <Link
                  href="/services"
                  className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
                >
                  See all 11 services →
                </Link>
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
                    className="group flex items-center justify-between gap-6 py-5 -mx-4 px-4 rounded-md hover:bg-paper transition-colors"
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

        {/* Neighborhoods */}
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
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel-light mb-4">
                  03 / ST. GEORGE NEIGHBORHOODS
                </p>
                <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-5">
                  Where we&rsquo;ve worked in Washington County.
                </h2>
                <p className="text-bone/75 leading-relaxed mb-6">
                  Sample of southern Utah neighborhoods we&rsquo;ve
                  completed projects in. Project mix skews heavily
                  toward residential pool decks and stamped patio
                  work — the upscale residential market here
                  prioritizes design finish.
                </p>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone space-y-1">
                  <p>
                    ZIP CODES /{" "}
                    <span className="text-bone/85">
                      {CITY.zipSamples.join(" · ")}
                    </span>
                  </p>
                  <p>
                    COUNTY /{" "}
                    <span className="text-bone/85">{CITY.county}</span>
                  </p>
                  <p>
                    DRIVE FROM SANDY /{" "}
                    <span className="text-bone/85">
                      {CITY.driveFromSandy}
                    </span>
                  </p>
                  <p>
                    GEO /{" "}
                    <span className="text-bone/85">
                      {CITY.geo.lat.toFixed(4)}° N ·{" "}
                      {Math.abs(CITY.geo.lng).toFixed(4)}° W
                    </span>
                  </p>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 self-start">
                {CITY.neighborhoods.map((n) => (
                  <li
                    key={n}
                    className="font-bold text-bone tracking-tight border-l-2 border-steel pl-4 py-1"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Climate differentiator */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              04 / WHY ST. GEORGE PREP IS DIFFERENT
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Three things that flip the playbook.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                <strong>Frost depth code minimum is 12 inches.</strong>{" "}
                That&rsquo;s vs 30 inches on the Wasatch Front and 42
                inches in mountain regions. Foundations and footings
                go shallower in St. George — saves real cost on
                excavation. We don&rsquo;t over-pour beyond what
                code requires; that&rsquo;s the savings passed
                through to the client.
              </p>
              <p>
                <strong>Soil is sandy desert alluvium</strong> with
                high alkalinity. No clay-expansion concern, no
                seasonal swell-and-shrink cycle that drives
                Wasatch Front subgrade prep. The alkalinity attacks
                concrete sealers and surface paste over time —
                requiring more frequent resealing and alkali-resistant
                sealer products. Different problem; different fix.
              </p>
              <p>
                <strong>Hot-weather pour planning is the default.</strong>{" "}
                Forecast highs over 95°F mean pre-dawn starts, water-
                down on the subgrade, immediate curing-blanket
                application after finish, sometimes cooled mix or
                ice in the truck. October–April is the comfortable
                pour window; summer pours work but cost more in
                precautions.
              </p>
              <p>
                For broader climate context, see{" "}
                <Link
                  href="/blog/why-utah-concrete-cracks"
                  className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
                >
                  why Utah concrete cracks
                </Link>
                . For commercial-foundation soil specifics across
                the state, see{" "}
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

        {/* Linked-up */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              05 / KEEP READING
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-6">
              Related Utah pages.
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/utah-concrete-contractor"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border bg-paper hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                Utah service overview
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/wasatch-front-concrete-contractor"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border bg-paper hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                Wasatch Front pillar
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/services/pool-decks-utah"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border bg-paper hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                Pool decks (origin business)
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </LocationPageTemplate>
    </>
  );
}
