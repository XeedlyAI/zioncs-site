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

const PAGE_URL = "https://zioncs.com/locations/layton";

const CITY: City = {
  slug: "layton",
  name: "Layton",
  county: "Davis County",
  region: "Wasatch Front",
  geo: { lat: 41.0602, lng: -111.9711 },
  zipSamples: ["84040", "84041"],
  neighborhoods: [
    "East Layton",
    "Layton Bench",
    "Kays Creek Area",
    "West Layton",
    "Layton Hills Area",
    "Hill AFB Corridor",
  ],
  driveFromSandy: "40 minutes north",
};

export const metadata: Metadata = {
  title: "Concrete Contractor Layton, UT | Zion CS",
  description:
    "Layton concrete contractor. Driveways, patios, RV pads, commercial flatwork. Davis County coverage from a Sandy-based crew.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Contractor Layton, UT — Davis County Flatwork",
    description:
      "Concrete flatwork in Layton — driveways, patios, RV pads, repair, commercial. Davis County coverage from a Sandy-based crew.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "Do you cover Layton from Sandy?",
    answer:
      "Yes. Layton is about 40 minutes north on I-15 and sits on the same Davis County rotation as our Bountiful and Ogden work. We batch northern jobs together so a Layton project doesn't carry a travel premium — and if a scope is too small to pencil on its own trip, we'll say so and look for a pairing.",
  },
  {
    question: "What kind of concrete work is most common in Layton?",
    answer:
      "A near-even split. Layton has mature mid-century neighborhoods where original driveways are aging out, and newer subdivisions on the west side where backyards still need their patios, RV pads, and walkways built. Replacement work leads slightly; RV pads are the fastest-growing request — Davis County is trailer-and-camper country.",
  },
  {
    question: "How does the Layton bench differ from west Layton for concrete?",
    answer:
      "East Layton climbs the Wasatch bench, where lots slope and meltwater drains across flatwork all winter — drainage layout and joint placement drive the prep there. West Layton flattens toward the Great Salt Lake, where soils run heavier and wetter and base compaction becomes the deciding factor. Same city, two different prep playbooks.",
  },
  {
    question: "Do you build RV pads in Layton?",
    answer:
      "Regularly. Layton lots — especially the newer western subdivisions — are laid out with side yards sized for a pad. An RV pad is a structural pour, not a big patio: a motorhome puts several tons on a few contact patches, so we spec thicker sections, reinforcement, and deeper base than standard flatwork. Built for the rig you actually own.",
  },
  {
    question: "How fast can you start a Layton project?",
    answer:
      "Most residential projects are 2–6 weeks out from quote acceptance during the warm-weather pour window, sequenced onto a northern trip. Repair work moves faster. Tell us your target date when you request a quote and we'll be straight about whether we can hit it.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/utah-concrete-contractor" },
  { label: "Layton, UT" },
];

const TOP_SERVICES = SERVICES.filter((s) =>
  [
    "concrete-driveways-utah",
    "concrete-patios-utah",
    "rv-pads-utah",
    "residential-concrete-repair-utah",
    "commercial-flatwork-parking-lots-sidewalks",
  ].includes(s.slug)
);

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists — Layton",
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
  { name: "Layton, UT", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function LaytonPage() {
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
        eyebrow="ZIONCS://LOCATION · LAYTON, UT"
        title="Concrete contractor Layton — Davis County&rsquo;s biggest city."
        lead="Layton anchors our Davis County rotation — forty minutes north of the Sandy shop, batched with Bountiful and Ogden trips. The city splits cleanly in two for concrete: mature bench neighborhoods on the east where original driveways are aging out, and newer western subdivisions where the backyard flatwork is still waiting to be built."
        faqs={FAQS}
        ctaTitle="Got a project in Layton?"
        ctaBody="Tell us the project type and timeline. We'll sequence it onto a northern trip and send a written quote within 7 business days."
      >
        {/* Overview */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / LAYTON OVERVIEW
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Two markets in one city.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                East of I-15, Layton climbs the Wasatch bench through
                neighborhoods that filled in across the 1960s through
                1990s — East Layton, the Kays Creek drainages, the
                streets with the lake views. The original concrete there
                is 30 to 60 years old, and a lot of it is reaching the
                point where repair stops making sense. Tear-out and
                replacement with modern base prep and air-entrained mix
                is the standard job on the bench.
              </p>
              <p>
                West of the freeway, the city runs flat toward the Great
                Salt Lake through newer subdivisions where the builder
                delivered a driveway and a front walk and left the rest as
                graded dirt. Patios, RV pads, walkways, and the
                occasional sport court — the second wave of concrete on a
                new home — dominate the request list out west. The soils
                are heavier and wetter on the flats, which moves the
                engineering into the base: compaction and drainage decide
                how those slabs perform, more than the mix does.
              </p>
              <p>
                The Hill AFB corridor adds a steady commercial layer —
                replacement sidewalks, ADA ramps, and exterior flatwork
                around the retail and office properties that serve the
                base. We take Davis County commercial scopes where the
                size fits a traveling crew, and we&rsquo;re straight about
                where it doesn&rsquo;t.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                02 / SERVICES IN LAYTON
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                What we install most in Layton.
              </h2>
              <p className="text-stone leading-relaxed">
                Top five categories. Replacement driveways and RV pads
                lead the mix.{" "}
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
                  03 / LAYTON NEIGHBORHOODS
                </p>
                <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-5">
                  Where we work in Davis County.
                </h2>
                <p className="text-bone/75 leading-relaxed mb-6">
                  Sample of Layton areas we cover. If yours isn&rsquo;t
                  listed, we still serve it — the whole city sits on one
                  northern trip from Sandy.
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
              04 / WHY LAYTON PREP SPLITS EAST-WEST
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Bench drainage east, base compaction west.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                <strong>The bench is a drainage problem.</strong> East
                Layton&rsquo;s sloped lots shed snowmelt across driveways
                and walks all winter, and the daily wet-freeze cycle that
                creates is the hardest thing a Davis County slab faces.
                Grading, control-joint layout, and routing water off the
                flatwork are decided before the pour — that&rsquo;s where
                bench slabs are won or lost.
              </p>
              <p>
                <strong>The flats are a subgrade problem.</strong> As the
                grade drops toward the lake, soils run finer, heavier,
                and seasonally wetter. A slab over soft, wet subgrade
                heaves and settles no matter what the concrete itself
                cost. On the west side we put the unseen half of the
                budget below the slab: base depth, compaction passes, and
                grading that keeps water from parking under the concrete.
              </p>
              <p>
                <strong>Freeze-thaw and de-icer apply everywhere.</strong>{" "}
                Layton winters cycle slab surfaces through freezing
                dozens of times a season, and magnesium chloride tracked
                off the roads accelerates scaling. Every exterior pour
                gets air-entrained mix; every finished surface gets
                sealed before its first winter, with the standard rule —
                no de-icer the first season, sparing use after.
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
                href="/locations/bountiful"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border bg-paper hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                Bountiful
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
