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

const PAGE_URL = "https://zioncs.com/locations/park-city";

const CITY: City = {
  slug: "park-city",
  name: "Park City",
  county: "Summit County",
  region: "Mountain",
  geo: { lat: 40.6461, lng: -111.498 },
  zipSamples: ["84060", "84098"],
  neighborhoods: [
    "Old Town",
    "Park Meadows",
    "Prospector",
    "Pinebrook",
    "Jeremy Ranch",
    "Kimball Junction Area",
  ],
  driveFromSandy: "40 minutes east",
};

export const metadata: Metadata = {
  title: "Concrete Contractor Park City | Zion CS",
  description:
    "Park City concrete contractor. Patios, driveways, stamped concrete built for 7,000-ft freeze-thaw. Summit County coverage from a Sandy-based crew.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Contractor Park City — High-Elevation Flatwork",
    description:
      "Concrete flatwork in Park City — patios, driveways, stamped concrete engineered for mountain freeze-thaw at 7,000 feet. Summit County coverage.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "Is Park City concrete really that different from the valley?",
    answer:
      "Yes, materially. Park City sits near 7,000 feet — roughly 2,500 feet above the Salt Lake Valley. That means a longer snow season, more freeze-thaw cycles per year, deeper frost penetration (mountain-region frost depth runs to 42 inches vs 30 on the Wasatch Front), and a shorter pour calendar. Concrete that performs fine in Sandy can fail early in Park City if the spec doesn't change with the elevation.",
  },
  {
    question: "What does high-elevation freeze-thaw do to a slab?",
    answer:
      "The same thing valley freeze-thaw does, but more of it. Water in the concrete's pore structure freezes, expands about 9 percent, and pries the surface apart — and at 7,000 feet that cycle repeats far more times per year, over a longer season, with slabs staying wet under snowpack for months. Air-entrained mix is the defense: microscopic voids that give freezing water room to expand. In Park City we treat it as non-negotiable on every exterior pour.",
  },
  {
    question: "When can you pour in Park City?",
    answer:
      "The honest window is shorter than the valley's — roughly late spring through early fall, depending on the year. Concrete needs sustained temperatures above freezing during cure, and mountain nights turn cold early in the season. We schedule Park City pours conservatively inside that window; a slab that freezes during cure carries the damage for its whole life, and no schedule is worth that.",
  },
  {
    question: "Do you handle mountain-home patio and driveway work?",
    answer:
      "That's the core of our Park City book — patios, stamped work, and driveway replacement for mountain homes in Park Meadows, Pinebrook, Jeremy Ranch, and the Snyderville Basin. Slope drainage, snow-storage planning (where the plowed snow sits all winter matters to the slab under it), and finish selection for wet-freeze conditions all get decided at quote time.",
  },
  {
    question: "Do you use de-icer-safe finishes in Park City?",
    answer:
      "We build for the reality that de-icer will land on the slab eventually. That means air-entrained mix, a proper cure, and a penetrating sealer before the first winter, plus a plain-English maintenance rule: no de-icer at all in the first season and sparing use after. Magnesium chloride tracked in off mountain roads is aggressive; the sealer and reseal cadence are what keep the surface intact.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/utah-concrete-contractor" },
  { label: "Park City" },
];

const TOP_SERVICES = SERVICES.filter((s) =>
  [
    "concrete-patios-utah",
    "stamped-decorative-concrete-utah",
    "concrete-driveways-utah",
    "residential-concrete-repair-utah",
    "industrial-concrete-foundations-utah",
  ].includes(s.slug)
);

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists — Park City",
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
  { name: "Park City", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function ParkCityPage() {
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
        eyebrow="ZIONCS://LOCATION · PARK CITY"
        title="Concrete contractor Park City — built for 7,000 feet."
        lead="Park City is forty minutes up Parley&rsquo;s Canyon from our Sandy shop and a full climate zone away. At roughly 7,000 feet, the freeze-thaw math changes: more cycles, deeper frost, a shorter pour season, and slabs that sit under snowpack for months. We spec Park City work to mountain rules, not valley rules."
        faqs={FAQS}
        ctaTitle="Got a project in Park City?"
        ctaBody="Tell us the project type and timeline. We'll plan it inside the honest mountain pour window and send a written quote within 7 business days."
      >
        {/* Overview */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / PARK CITY OVERVIEW
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              A different climate zone, forty minutes away.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                Where St. George flips our playbook toward heat, Park City
                flips it toward cold. At roughly{" "}
                <span className="font-mono tabular-nums font-semibold">
                  7,000 feet
                </span>
                , winter arrives earlier, leaves later, and hits harder
                than anywhere on the Wasatch Front. Slabs spend months
                under snowpack, staying wet through repeated freeze
                cycles — the single hardest duty cycle exterior concrete
                faces in Utah. Everything about how we spec Park City work
                follows from that.
              </p>
              <p>
                The project mix is mountain-home outdoor living: patios
                and stamped work in Park Meadows and Pinebrook, driveway
                replacement on the sloped lots of Jeremy Ranch and the
                Snyderville Basin, and repair verdicts on older flatwork
                in Old Town and Prospector, where some of the housing
                stock dates to the mining era and the concrete has been
                fighting the mountain for decades.
              </p>
              <p>
                We&rsquo;re honest about the calendar. The Park City pour
                window is real and we won&rsquo;t pour outside it — a
                slab that freezes during cure is permanently weakened, and
                no fall deadline is worth building that defect into your
                property. Projects quoted late in the season get scheduled
                for the next window, and we say so up front.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                02 / SERVICES IN PARK CITY
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                What we work most in Park City.
              </h2>
              <p className="text-stone leading-relaxed">
                Top five categories. Mountain-home patios and stamped
                finishes lead the mix.{" "}
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
                  03 / PARK CITY NEIGHBORHOODS
                </p>
                <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-5">
                  Where we work in Summit County.
                </h2>
                <p className="text-bone/75 leading-relaxed mb-6">
                  Sample of Park City areas we cover, from Old Town to the
                  Snyderville Basin. Project mix skews toward mountain-home
                  patios, stamped finishes, and sloped-lot driveway
                  replacement.
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
              04 / WHY MOUNTAIN PREP IS DIFFERENT
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Three things elevation changes.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                <strong>Frost depth goes to 42 inches.</strong>{" "}
                That&rsquo;s vs 30 inches on the Wasatch Front and 12 in
                St. George. Footings and frost-protected elements go
                deeper in the mountains, and anything bearing on grade has
                to account for soil that freezes and heaves well below
                valley depths. Under-digging a mountain footing is the
                kind of shortcut that shows up as a cracked wall three
                winters later.
              </p>
              <p>
                <strong>The freeze-thaw cycle count multiplies.</strong>{" "}
                High-elevation sun is strong enough to thaw a slab surface
                on a clear January day; the night refreezes it. Under and
                around snowpack, concrete stays saturated for months while
                cycling. Air-entrained mix — microscopic relief chambers
                for freezing water — is the difference between a surface
                that survives this and one that scales away. We also lean
                on snow-storage planning: the slab under the plow pile
                takes the worst duty of all, and it helps to decide where
                that pile lives before the flatwork is laid out.
              </p>
              <p>
                <strong>The cure window rules the schedule.</strong>{" "}
                Concrete gains its design strength during cure, and cure
                chemistry stalls near freezing. Mountain nights fall below
                that threshold weeks earlier than the valley&rsquo;s. Our
                Park City calendar is built around sustained cure
                temperatures — blankets and cold-weather practice extend
                the shoulder seasons, but they don&rsquo;t repeal the
                mountain winter, and we don&rsquo;t pretend otherwise.
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
                href="/services/stamped-decorative-concrete-utah"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border bg-paper hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                Stamped &amp; decorative
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
