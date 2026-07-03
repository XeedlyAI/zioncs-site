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

const PAGE_URL = "https://zioncs.com/locations/herriman";

const CITY: City = {
  slug: "herriman",
  name: "Herriman",
  county: "Salt Lake County",
  region: "Wasatch Front",
  geo: { lat: 40.5141, lng: -112.0329 },
  zipSamples: ["84096"],
  neighborhoods: [
    "Rosecrest",
    "Anthem",
    "Herriman Towne Center",
    "Blackridge",
    "Juniper Crest",
    "Butterfield Canyon Area",
  ],
  driveFromSandy: "25 minutes southwest",
};

export const metadata: Metadata = {
  title: "Concrete Contractor Herriman | Zion CS",
  description:
    "Herriman concrete contractor. RV pads, sport courts, patios, driveways. Southwest Salt Lake Valley coverage from a Sandy-based crew.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Contractor Herriman — New-Build Backyard Flatwork",
    description:
      "Concrete flatwork in Herriman — RV pads, sport courts, splash pads, patios, driveways. Southwest Salt Lake Valley coverage from Sandy.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "Do you regularly work in Herriman?",
    answer:
      "Yes. Herriman is about 25 minutes southwest of our Sandy shop and one of the fastest-growing parts of our rotation. Nearly every home here is new enough that the backyard concrete is still being built out — patios, RV pads, sport courts, splash pads — and that build-out wave is most of our Herriman book.",
  },
  {
    question: "My Herriman house is only a few years old. Why do I need a concrete contractor?",
    answer:
      "Because the builder finished the front and left the back. Production builds in Rosecrest, Anthem, and the newer phases deliver a driveway and front walk; the patio, the pad for the trailer, and the court the lot was sized for are all second projects. That's normal — and it's exactly the work we do most in Herriman.",
  },
  {
    question: "Is builder fill a problem in Herriman backyards?",
    answer:
      "It can be. Herriman's subdivisions were mass-graded fast, and backyard fill doesn't get the compaction attention the building pad gets. Concrete poured over loose fill settles unevenly within a couple of winters. We verify subgrade compaction on every backyard pour rather than assuming the grading report covers the yard. It usually doesn't.",
  },
  {
    question: "What's different about the benched lots on Herriman's south side?",
    answer:
      "The neighborhoods climbing toward Blackridge and Butterfield Canyon sit higher than the valley floor on cut-and-fill terraces. They catch more wind, freeze harder at night, and shed meltwater across sloped flatwork. Drainage layout and air-entrained mix carry more of the performance load up there — standard practice for us, but worth naming at quote time.",
  },
  {
    question: "Do you build splash pads and sport courts in Herriman?",
    answer:
      "Yes — Herriman's family demographics make it our strongest market for both. A backyard splash pad is a plumbing-and-slope precision pour, and a sport court is a flatness-critical one. Both are specs, not upsells: we build them to the tolerance the use demands and quote them in writing like everything else.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/utah-concrete-contractor" },
  { label: "Herriman" },
];

const TOP_SERVICES = SERVICES.filter((s) =>
  [
    "rv-pads-utah",
    "sport-courts-utah",
    "splash-pads-utah",
    "concrete-patios-utah",
    "concrete-driveways-utah",
  ].includes(s.slug)
);

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists — Herriman",
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
  { name: "Herriman", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function HerrimanPage() {
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
        eyebrow="ZIONCS://LOCATION · HERRIMAN, UT"
        title="Concrete contractor Herriman — building the backyards."
        lead="Herriman barely existed twenty-five years ago; now it fills the southwest corner of the Salt Lake Valley with some of the newest housing in the county. New housing means bare backyards, and bare backyards are our Herriman business — RV pads, sport courts, splash pads, and patios, twenty-five minutes from the Sandy shop."
        faqs={FAQS}
        ctaTitle="Got a project in Herriman?"
        ctaBody="Tell us the project type and timeline. We'll send a written quote within 7 business days."
      >
        {/* Overview */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / HERRIMAN OVERVIEW
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              The newest city in our rotation.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                Herriman&rsquo;s growth curve is steep even by Utah
                standards — from a rural crossroads to one of the
                valley&rsquo;s biggest family cities within two decades.
                Rosecrest, Anthem, the Towne Center phases, the streets
                climbing toward Blackridge: nearly all of it was built in
                the same generational wave, and nearly all of it was
                delivered with the same gap. The builder poured the
                driveway and the front walk. The backyard is a dirt
                canvas.
              </p>
              <p>
                That gap defines the work. Herriman families want the RV
                pad beside the garage, the pickleball court the lot was
                sized for, the splash pad that makes July survivable, and
                the patio that turns a west-facing yard into an evening
                room. These are second-wave projects — poured years after
                the builder left — and they succeed or fail on subgrade
                honesty: mass-graded backyard fill has to be verified and
                re-compacted before it can carry concrete.
              </p>
              <p>
                The terrain adds its own variable. Herriman runs from
                valley-floor flats up onto benched terraces against the
                Oquirrh foothills, and the higher streets freeze harder,
                catch more wind, and shed meltwater across sloped lots.
                We prep for the lot in front of us, not for a citywide
                template.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                02 / SERVICES IN HERRIMAN
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                What we install most in Herriman.
              </h2>
              <p className="text-stone leading-relaxed">
                Top five categories. Backyard build-out leads — pads,
                courts, and splash pads ahead of everything else.{" "}
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
                  03 / HERRIMAN NEIGHBORHOODS
                </p>
                <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-5">
                  Where we work in Herriman.
                </h2>
                <p className="text-bone/75 leading-relaxed mb-6">
                  Sample of Herriman areas we cover. Project mix skews
                  hard toward new-home backyard build-out — pads, courts,
                  splash pads, and patios.
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
              04 / WHY NEW-CITY PREP IS DIFFERENT
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Fresh fill, foothill freeze, and pours with a purpose.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                <strong>Mass-graded fill is the first check.</strong>{" "}
                Herriman&rsquo;s subdivisions moved enormous volumes of
                soil in short timeframes, and the backyard portions of
                those lots rarely got engineering-grade compaction. A slab
                over loose fill settles unevenly by its second winter. We
                verify and re-compact subgrade on every backyard pour —
                the least visible step in the job and the one that
                decides its lifespan.
              </p>
              <p>
                <strong>The foothill edge freezes harder.</strong> The
                benched streets toward Blackridge and Butterfield Canyon
                sit above the valley floor, where nights run colder and
                wind strips warmth off curing slabs. Air-entrained mix is
                standard on every exterior pour we do; on the upper
                streets we also watch the pour calendar more
                conservatively, because a slab that freezes during cure
                is permanently weakened.
              </p>
              <p>
                <strong>Purpose-built pours have purpose-built
                specs.</strong> The Herriman request list runs structural
                and precise: RV pads carrying several tons on jack
                points, sport courts with flatness tolerances a patio
                never needs, splash pads where slope and drainage are the
                whole game. Each gets its own spec — section thickness,
                reinforcement, base depth, and finish matched to the use,
                with sealer and the standard first-winter de-icer rule
                on top.
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
                href="/locations/west-jordan"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border bg-paper hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                West Jordan
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
