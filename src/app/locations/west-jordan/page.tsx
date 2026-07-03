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

const PAGE_URL = "https://zioncs.com/locations/west-jordan";

const CITY: City = {
  slug: "west-jordan",
  name: "West Jordan",
  county: "Salt Lake County",
  region: "Wasatch Front",
  geo: { lat: 40.6097, lng: -111.9391 },
  zipSamples: ["84081", "84084", "84088"],
  neighborhoods: [
    "Copper Hills",
    "Jordan Landing Area",
    "Oquirrh Shadows",
    "Welby",
    "Ron Wood Park Area",
    "Jordan River Corridor",
  ],
  driveFromSandy: "20 minutes west",
};

export const metadata: Metadata = {
  title: "Concrete Contractor West Jordan | Zion CS",
  description:
    "West Jordan concrete contractor. Driveways, RV pads, sport courts, patios. Salt Lake County coverage from a Sandy-based crew.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Contractor West Jordan — West Valley Flatwork",
    description:
      "Concrete flatwork in West Jordan — driveways, RV pads, sport courts, patios, repair. West Salt Lake Valley coverage from a Sandy-based crew.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "Do you regularly work in West Jordan?",
    answer:
      "Yes. West Jordan is a straight 20-minute shot across the valley from our Sandy shop — same-day site visits are normal. It's one of the biggest cities in Salt Lake County and a steady part of our weekly rotation, from the Jordan River corridor on the east side out to Copper Hills near the Oquirrh foothills.",
  },
  {
    question: "What kind of concrete work is most common in West Jordan?",
    answer:
      "Backyard build-out. Most of West Jordan's housing went in from the 1980s through the 2010s, and the newer western subdivisions especially were delivered with a driveway and little else. RV pads, patios, sport courts, and extended parking dominate the request list. On the older east side, original 1980s driveways are starting to age out and replacement work is picking up.",
  },
  {
    question: "Do you build RV pads in West Jordan?",
    answer:
      "Constantly — West Jordan is one of our strongest RV pad markets. Lots here are laid out with side yards that fit a pad, and the city's trailer, boat, and motorhome ownership keeps demand steady. An RV pad is a structural pour: several tons on a few contact patches. We spec thicker sections, reinforcement, and deeper base than a patio would ever need.",
  },
  {
    question: "How does West Jordan's soil affect concrete?",
    answer:
      "The valley floor here carries clay-heavy pockets, especially toward the Jordan River. Clay swells when wet and shrinks when dry, and a slab riding that movement cracks early. Subgrade prep — excavating soft spots, compacting in lifts, building a proper gravel base — is where West Jordan slabs are won or lost. We walk the lot before we quote it.",
  },
  {
    question: "How fast can you start a West Jordan project?",
    answer:
      "Most residential projects are 2–6 weeks out from quote acceptance during the warm-weather pour window. Repair work moves faster. West Jordan's proximity means quotes and site visits happen quickly — tell us your target date when you request one.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/utah-concrete-contractor" },
  { label: "West Jordan" },
];

const TOP_SERVICES = SERVICES.filter((s) =>
  [
    "concrete-driveways-utah",
    "rv-pads-utah",
    "sport-courts-utah",
    "concrete-patios-utah",
    "residential-concrete-repair-utah",
  ].includes(s.slug)
);

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists — West Jordan",
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
  { name: "West Jordan", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function WestJordanPage() {
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
        eyebrow="ZIONCS://LOCATION · WEST JORDAN, UT"
        title="Concrete contractor West Jordan — west valley workhorse."
        lead="West Jordan is twenty minutes straight across the valley from our Sandy shop and one of the biggest residential markets in Salt Lake County. The work here is backyard build-out at scale — RV pads, sport courts, patios, and extended parking on lots that were delivered with a driveway and a promise."
        faqs={FAQS}
        ctaTitle="Got a project in West Jordan?"
        ctaBody="Tell us the project type and timeline. We'll send a written quote within 7 business days."
      >
        {/* Overview */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / WEST JORDAN OVERVIEW
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Big lots, big rigs, and backyards still waiting.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                West Jordan grew west in waves — from the older
                neighborhoods near the Jordan River, through the
                1990s-2000s core around Jordan Landing, out to Copper
                Hills and the newer subdivisions running toward the
                Oquirrh foothills. Each wave left the same gap: builders
                delivered driveways and front walks, and the backyard
                concrete became the homeowner&rsquo;s project. Years
                later, those projects are our project list — RV pads,
                patios, sport courts, extended side-yard parking.
              </p>
              <p>
                The RV pad deserves its own mention because West Jordan
                is one of the strongest pad markets in the valley.
                Trailers, boats, and motorhomes are part of how this city
                lives, and city code pushes them off the street and onto
                a proper pad. A pad is a structural pour — several tons
                concentrated on jack points and axles — and the ones we
                replace failed because they were poured like patios. Ours
                aren&rsquo;t.
              </p>
              <p>
                On the older east side, the replacement cycle is
                arriving: 1980s driveways with scaled surfaces and
                settled panels coming due after 40 winters. And the
                sport-court request keeps climbing citywide — backyard
                pickleball has found the west valley, and the flat, wide
                lots here suit it.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                02 / SERVICES IN WEST JORDAN
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                What we install most in West Jordan.
              </h2>
              <p className="text-stone leading-relaxed">
                Top five categories. RV pads and backyard build-out lead
                the mix.{" "}
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
                  03 / WEST JORDAN NEIGHBORHOODS
                </p>
                <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-5">
                  Where we work in West Jordan.
                </h2>
                <p className="text-bone/75 leading-relaxed mb-6">
                  Sample of West Jordan areas we cover. If yours
                  isn&rsquo;t listed, we still serve it — the whole city
                  is inside a 20-minute run from the shop.
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
              04 / WHY WEST VALLEY PREP MATTERS
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Clay soil, heavy loads, and the same hard winter.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                <strong>The valley floor holds clay.</strong> West
                Jordan&rsquo;s soils get heavier toward the Jordan River,
                with clay pockets that swell in spring and shrink by fall.
                A slab riding seasonal soil movement cracks early no
                matter what the concrete cost. Our answer is in the
                subgrade: excavate the soft spots, compact in lifts, and
                build a gravel base thick enough to bridge the movement.
              </p>
              <p>
                <strong>Structural pours need structural specs.</strong>{" "}
                An RV pad or sport court fails differently than a patio —
                point loads and flatness tolerances change the spec.
                Pads get thicker sections, reinforcement, and base depth
                sized to the rig. Courts get tighter flatness control
                than any patio needs, because a bad bounce is a defect
                you play on every day.
              </p>
              <p>
                <strong>Freeze-thaw and de-icer don&rsquo;t skip the west
                side.</strong> Dozens of surface freeze cycles a winter,
                magnesium chloride tracked off the arterials — the
                standard Wasatch Front duty cycle. Every exterior pour
                gets air-entrained mix, every finished surface gets
                sealed before its first winter, and every client gets the
                same plain rule: no de-icer the first season, sparing use
                after.
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
                href="/locations/herriman"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border bg-paper hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                Herriman
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
