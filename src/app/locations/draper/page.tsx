import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LocationPageTemplate } from "@/components/pages/LocationPageTemplate";
import { SERVICES } from "@/data/services";
import type { City } from "@/data/cities";
import {
  breadcrumbListSchema,
  faqPageSchema,
  localBusinessSchema,
} from "@/lib/structured-data";
import { CONTACT } from "@/lib/contact";

const PAGE_URL = "https://zioncs.com/locations/draper";

const CITY: City = {
  slug: "draper",
  name: "Draper",
  county: "Salt Lake County",
  region: "Wasatch Front",
  geo: { lat: 40.5247, lng: -111.8638 },
  zipSamples: ["84020"],
  neighborhoods: [
    "SunCrest",
    "Corner Canyon Area",
    "South Mountain",
    "Draper Historic District",
    "Steep Mountain Area",
    "Hidden Canyon",
  ],
  driveFromSandy: "10 minutes south",
};

export const metadata: Metadata = {
  title: "Concrete Contractor Draper, UT | Zion CS",
  description:
    "Draper concrete contractor. Driveways, patios, sport courts, pool decks. Salt Lake County coverage from a crew based ten minutes away in Sandy.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Contractor Draper, UT — Next-Door Flatwork Crew",
    description:
      "Concrete flatwork in Draper — driveways, patios, sport courts, pool decks, stamped concrete. Ten minutes from our Sandy shop.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "How close are you to Draper, really?",
    answer:
      "Ten minutes. Our shop and yard are in Sandy, directly north of the Draper line — several of the crew drive through Draper on their commute. It's the closest city in our rotation after Sandy itself, which means site visits, quotes, and punch-list follow-ups happen fast.",
  },
  {
    question: "What kind of concrete work is most common in Draper?",
    answer:
      "Outdoor-living work. Draper's lot sizes and bench views drive demand for patios, pool decks, sport courts, and stamped finishes — the projects where design quality matters as much as durability. We also replace plenty of driveways, especially on the sloped bench lots where drainage was never handled right the first time.",
  },
  {
    question: "Does SunCrest need different concrete prep?",
    answer:
      "Yes. SunCrest sits at roughly 6,000 feet on top of Traverse Ridge — closer to mountain conditions than valley conditions. More snow, harder freeze cycles, more wind exposure. Air-entrained mix is non-negotiable up there, drainage design gets more attention, and the pour calendar is shorter than on the valley floor. We plan SunCrest work around those constraints from the first site visit.",
  },
  {
    question: "Can you handle sloped-lot projects near Corner Canyon?",
    answer:
      "That's home-turf work for us. The east-bench streets below Corner Canyon are steep, and sloped lots concentrate meltwater across driveways and walks. The prep answer is grading, control-joint layout, and routing water off the slab — decided at layout, not after the pour.",
  },
  {
    question: "How fast can you start a Draper project?",
    answer:
      "Draper is the easiest city on our calendar because there's no travel to batch. Most residential projects are 2–6 weeks out from quote acceptance during the warm-weather pour window; repair work moves faster. Tell us your target date when you request a quote.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/utah-concrete-contractor" },
  { label: "Draper, UT" },
];

const TOP_SERVICES = SERVICES.filter((s) =>
  [
    "concrete-driveways-utah",
    "concrete-patios-utah",
    "sport-courts-utah",
    "pool-decks-utah",
    "stamped-decorative-concrete-utah",
  ].includes(s.slug)
);

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists — Draper",
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
  { name: "Draper, UT", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function DraperPage() {
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
        eyebrow="ZIONCS://LOCATION · DRAPER, UT"
        title="Concrete contractor Draper — the crew from next door."
        lead="Draper shares a border with our Sandy home base. Ten minutes from shop to site means fast quotes, easy scheduling, and follow-up that actually happens. The work here skews toward outdoor living — patios, pool decks, sport courts, and stamped finishes on lots that run from the valley floor to 6,000 feet up at SunCrest."
        faqs={FAQS}
        ctaTitle="Got a project in Draper?"
        ctaBody="We're ten minutes away. Tell us what you're working on and we'll send a written quote within 7 business days."
      >
        {/* Overview */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / DRAPER OVERVIEW
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              From the valley floor to the top of Traverse Ridge.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                Draper covers more vertical range than almost any city in
                the Salt Lake Valley — from the flats near the old town
                center up the east bench toward Corner Canyon, and all the
                way to SunCrest at roughly 6,000 feet on Traverse Ridge.
                That range matters for concrete. A patio poured at the
                bottom of the city and one poured at the top live in
                measurably different climates, and the prep has to
                respect that.
              </p>
              <p>
                The project mix here leans toward outdoor living. Draper
                lots were platted generously, the bench views reward a
                well-built patio, and the sport-court and pool-deck
                requests come steadily — this is one of the strongest
                design-finish markets in our rotation. Stamped and
                decorative work needs the same freeze-thaw fundamentals as
                a plain broom-finish driveway, plus a sealer program that
                keeps the finish alive through Utah winters.
              </p>
              <p>
                Being next door changes how the work feels. Site visits
                happen the same week you call. If something needs a
                second look after the pour, we&rsquo;re passing through
                Draper anyway. That proximity is a real part of what
                you&rsquo;re hiring — not just a crew, but a crew whose
                shop is ten minutes from your driveway.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                02 / SERVICES IN DRAPER
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                What we install most in Draper.
              </h2>
              <p className="text-stone leading-relaxed">
                Top five categories. Outdoor-living work leads the mix.{" "}
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
                  03 / DRAPER NEIGHBORHOODS
                </p>
                <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-5">
                  Where we work in Draper.
                </h2>
                <p className="text-bone/75 leading-relaxed mb-6">
                  Sample of Draper areas we cover. If yours isn&rsquo;t
                  listed, we still serve it — the whole city is closer to
                  our shop than most of Sandy is.
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
              04 / WHY DRAPER PREP VARIES BY ELEVATION
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              One city, two climates.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                <strong>The valley floor is standard Wasatch Front
                freeze-thaw.</strong> Dozens of surface freeze cycles per
                winter, de-icer exposure from the roads, clay pockets in
                the older soils. Air-entrained mix, compacted gravel base,
                tight control-joint layout, and a sealed finish handle it
                — the same fundamentals we run everywhere in the Salt
                Lake Valley.
              </p>
              <p>
                <strong>SunCrest is closer to mountain rules.</strong> At
                roughly 6,000 feet, Traverse Ridge holds snow longer,
                freezes harder, and cycles more often than the flats a
                thousand-plus feet below. Slabs spend more of the year
                wet and freezing, which is exactly the condition
                air-entrainment exists for. The pour season is shorter up
                there, and we schedule SunCrest work inside the honest
                weather window rather than gambling on a late-fall pour
                that never cures right.
              </p>
              <p>
                <strong>Bench slopes make drainage the first design
                decision.</strong> Between the extremes, the east-bench
                streets below Corner Canyon deal with meltwater crossing
                sloped flatwork daily all winter. Where the water goes —
                and where it refreezes — is decided by grading and joint
                layout before the truck ever arrives. Getting that wrong
                is the most common defect we see in the tear-outs we
                replace.
              </p>
              <p>
                For the deeper mechanics, see{" "}
                <Link
                  href="/blog/why-utah-concrete-cracks"
                  className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
                >
                  why Utah concrete cracks
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
                href="/locations/sandy-utah"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border bg-paper hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                Sandy (home base)
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border bg-paper hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                Request a quote
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </LocationPageTemplate>
    </>
  );
}
