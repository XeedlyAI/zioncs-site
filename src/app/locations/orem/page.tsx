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

const PAGE_URL = "https://zioncs.com/locations/orem";

const CITY: City = {
  slug: "orem",
  name: "Orem",
  county: "Utah County",
  region: "Wasatch Front",
  geo: { lat: 40.2969, lng: -111.6946 },
  zipSamples: ["84057", "84058", "84097"],
  neighborhoods: [
    "Cascade",
    "Northridge",
    "Sharon Park",
    "Lakeview",
    "Cherry Hill",
    "Suncrest Area",
  ],
  driveFromSandy: "30 minutes south",
};

export const metadata: Metadata = {
  title: "Concrete Contractor Orem, UT | Zion CS",
  description:
    "Orem concrete contractor. Driveways, patios, sport courts, concrete repair. Utah County coverage from a Sandy-based crew.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Contractor Orem, UT — Utah Valley Flatwork",
    description:
      "Concrete flatwork in Orem — driveways, patios, sport courts, repair, stamped concrete. Utah County coverage from a Sandy-based crew.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "Do you cover all of Orem?",
    answer:
      "Yes. Orem is a compact grid — from the bench neighborhoods on the east side down to Lakeview near Utah Lake, the whole city fits inside one service trip from Sandy. We typically pair Orem work with Provo and Lindon jobs on the same Utah Valley rotation.",
  },
  {
    question: "What kind of concrete work is most common in Orem?",
    answer:
      "Driveway replacement and backyard flatwork. Orem built out heavily in the 1970s through 1990s, so a large share of the city's original driveways, walks, and patios are 30 to 50 years old. That age of slab is usually past the point where repair pencils — full replacement with modern air-entrained mix and proper base prep is the honest recommendation.",
  },
  {
    question: "Do you build sport courts in Orem?",
    answer:
      "Yes, and Orem's lot sizes make it a good sport-court market. The established neighborhoods carry quarter-acre-plus lots with room for a backyard pickleball or basketball pad. A sport court is a flatness-critical pour — tighter tolerance than a patio — and we treat it that way from base compaction through finishing.",
  },
  {
    question: "How does Orem's soil behave under concrete?",
    answer:
      "Most of Orem sits on benches and alluvial fans coming off the Wasatch, with soil that gets heavier and wetter as you drop toward Utah Lake. The east side drains well; the low west side near Lakeview can hold water seasonally, which raises the stakes on base prep and drainage. We adjust subgrade and base depth to the lot, not to a one-size template.",
  },
  {
    question: "How fast can you start an Orem project?",
    answer:
      "Most residential projects in Utah County are 2–6 weeks out from quote acceptance during the warm-weather pour window. Repair work moves faster. Tell us your target date when you request a quote and we'll be straight about whether we can hit it.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/utah-concrete-contractor" },
  { label: "Orem, UT" },
];

const TOP_SERVICES = SERVICES.filter((s) =>
  [
    "concrete-driveways-utah",
    "concrete-patios-utah",
    "sport-courts-utah",
    "residential-concrete-repair-utah",
    "stamped-decorative-concrete-utah",
  ].includes(s.slug)
);

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists — Orem",
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
  { name: "Orem, UT", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function OremPage() {
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
        eyebrow="ZIONCS://LOCATION · OREM, UT"
        title="Concrete contractor Orem — driveways and backyard flatwork."
        lead="Orem is the workhorse of our Utah Valley rotation. Thirty minutes south of the Sandy shop, it&rsquo;s a city of established neighborhoods where original 1970s–90s driveways are aging out and backyards have room for real flatwork — patios, sport courts, RV parking. We replace what&rsquo;s failing and build what the lot can carry."
        faqs={FAQS}
        ctaTitle="Got a project in Orem?"
        ctaBody="Tell us the project type and timeline. We'll send a written quote within 7 business days."
      >
        {/* Overview */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / OREM OVERVIEW
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              A city of driveways coming due.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                Orem built out fast in the 1970s, 80s, and 90s, which means
                a big share of the city&rsquo;s concrete went in during the
                same few decades — and it&rsquo;s aging out on the same
                schedule now. A well-built exterior slab in Utah&rsquo;s
                climate has a working life measured in decades, not
                forever. When the original driveway shows widespread
                cracking, settled panels, and surface scaling all at once,
                that&rsquo;s the end of the useful-repair window. Most of
                our Orem work starts exactly there.
              </p>
              <p>
                The geography runs from the east bench under Mount
                Timpanogos down to Lakeview near Utah Lake, and the soil
                changes with the elevation. Bench lots — Cascade,
                Northridge, the streets above 800 East — drain well and
                freeze hard. The low west side holds more moisture, which
                makes base prep and drainage the deciding factors in how a
                slab performs through its first winters. We walk the lot
                before we quote it.
              </p>
              <p>
                The other half of the Orem mix is backyard work. Lot sizes
                in the established neighborhoods leave room for patios,
                sport courts, and RV parking — and the UVU corridor keeps a
                steady demand for durable, low-maintenance parking and
                walkway flatwork on rental and multi-family properties.
                Residential leads, but we take the commercial work along
                State Street when the scope fits.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                02 / SERVICES IN OREM
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                What we install most in Orem.
              </h2>
              <p className="text-stone leading-relaxed">
                Top five categories. Driveway replacement leads; sport
                courts are the fastest-growing request.{" "}
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
                  03 / OREM NEIGHBORHOODS
                </p>
                <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-5">
                  Where we work in Orem.
                </h2>
                <p className="text-bone/75 leading-relaxed mb-6">
                  Sample of Orem areas we cover. If yours isn&rsquo;t
                  listed, we still serve it — the city grid is compact
                  enough that every address is in range.
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
              04 / WHY OREM PREP MATTERS
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              What 40-year-old slabs teach us about new ones.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                <strong>The old slabs failed for knowable reasons.</strong>{" "}
                When we tear out a 1980s Orem driveway, the autopsy is
                usually the same: thin or absent gravel base, no air
                entrainment in the mix, and control joints cut too far
                apart. The replacement fixes all three — compacted base,
                air-entrained mix rated for Utah Valley freeze-thaw, and a
                joint layout that gives cracking somewhere invisible to go.
              </p>
              <p>
                <strong>Freeze-thaw plus de-icer is the local stress
                test.</strong> Orem winters cycle a slab surface through
                freezing dozens of times, and magnesium chloride tracked in
                off the roads accelerates surface scaling. Air entrainment
                handles the freezing; sealer handles the chemistry. We seal
                every finished surface and recommend a plain maintenance
                cadence — no de-icer the first winter, reseal on schedule.
              </p>
              <p>
                <strong>The lake side needs drainage respect.</strong> As
                the grade drops toward Utah Lake, seasonal groundwater gets
                closer to the surface. A slab over wet subgrade heaves in
                winter no matter how good the concrete is. On the low west
                side we spend more of the budget below the slab — base
                depth, compaction, and grading — because that&rsquo;s where
                the performance is decided.
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
                href="/locations/provo"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border bg-paper hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                Provo
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
