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

const PAGE_URL = "https://zioncs.com/locations/bountiful";

const CITY: City = {
  slug: "bountiful",
  name: "Bountiful",
  county: "Davis County",
  region: "Wasatch Front",
  geo: { lat: 40.8894, lng: -111.8808 },
  zipSamples: ["84010"],
  neighborhoods: [
    "Bountiful Bench",
    "Val Verda",
    "Mueller Park Area",
    "Maple Hills",
    "Downtown Bountiful",
    "West Bountiful Border",
  ],
  driveFromSandy: "30 minutes north",
};

export const metadata: Metadata = {
  title: "Concrete Contractor Bountiful | Zion CS",
  description:
    "Bountiful concrete contractor. Driveway replacement, patios, stamped concrete, repair. Davis County coverage from a Sandy-based crew.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Contractor Bountiful — South Davis Flatwork",
    description:
      "Concrete flatwork in Bountiful — driveway replacement, patios, stamped concrete, repair. South Davis County coverage from a Sandy-based crew.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "Do you cover Bountiful from Sandy?",
    answer:
      "Yes. Bountiful is about 30 minutes north — the closest stop on our Davis County rotation. We batch south-Davis work with Layton and Ogden trips, so scheduling is straightforward and there's no travel premium for a Bountiful project.",
  },
  {
    question: "What kind of concrete work is most common in Bountiful?",
    answer:
      "Driveway and walkway replacement on the bench. Bountiful's east-side neighborhoods largely built out between the 1950s and 1980s, and the original concrete is aging out street by street. Sloped bench driveways are the signature job here — tear-out, regrade, and replacement with drainage handled properly this time.",
  },
  {
    question: "What's different about pouring on the Bountiful bench?",
    answer:
      "Slope and water. The bench neighborhoods — Val Verda up through Maple Hills and the streets below Mueller Park — sit on grades that shed snowmelt across flatwork all winter. That daily wet-freeze cycle is the harshest duty a Davis County slab faces. Drainage layout, control joints, and where the water leaves the slab get decided at layout, not after the pour.",
  },
  {
    question: "Can you match older neighborhood character with new concrete?",
    answer:
      "Yes. On Bountiful's established streets, finish choice matters — exposed aggregate, tinted mixes, and border details keep a new driveway from looking like a bright-white patch on a 1960s streetscape. We walk the options and their honest costs at quote time.",
  },
  {
    question: "How fast can you start a Bountiful project?",
    answer:
      "Most residential projects are 2–6 weeks out from quote acceptance during the warm-weather pour window. Repair work moves faster. Tell us your target date when you request a quote and we'll be straight about whether we can hit it.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/utah-concrete-contractor" },
  { label: "Bountiful" },
];

const TOP_SERVICES = SERVICES.filter((s) =>
  [
    "concrete-driveways-utah",
    "residential-concrete-repair-utah",
    "concrete-patios-utah",
    "stamped-decorative-concrete-utah",
    "sidewalks-curbing-utah",
  ].includes(s.slug)
);

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists — Bountiful",
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
  { name: "Bountiful", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function BountifulPage() {
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
        eyebrow="ZIONCS://LOCATION · BOUNTIFUL, UT"
        title="Concrete contractor Bountiful — bench-driveway specialists."
        lead="Bountiful is the south gate of Davis County and the closest stop on our northern rotation — thirty minutes from the Sandy shop. The signature job here is the bench driveway: a sloped 1960s slab that&rsquo;s spent decades shedding snowmelt, cracking, and settling, replaced with the drainage and base prep it should have had the first time."
        faqs={FAQS}
        ctaTitle="Got a project in Bountiful?"
        ctaBody="Tell us the project type and timeline. We'll send a written quote within 7 business days."
      >
        {/* Overview */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / BOUNTIFUL OVERVIEW
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              A bench city with mid-century concrete.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                Bountiful climbs from the valley floor up the Wasatch
                bench in a series of increasingly steep neighborhoods —
                Val Verda, the Maple Hills streets, the lanes below
                Mueller Park. Most of it built out between the 1950s and
                1980s, which means the city&rsquo;s original driveways,
                walks, and patios have been through 40 to 70 Utah winters.
                A lot of them are visibly done: scaled surfaces, settled
                panels, cracks that reopen every spring.
              </p>
              <p>
                That&rsquo;s why replacement leads our Bountiful work. A
                slab that old predates modern air-entrained mixes and
                usually sits on little or no gravel base — repair money
                spent on it is money spent delaying the inevitable. We
                give that verdict honestly at the site visit, and when
                replacement is the answer, the new slab gets what the old
                one never had: compacted base, air-entrained mix, and
                drainage that routes bench runoff off the concrete
                instead of across it.
              </p>
              <p>
                The flats near downtown and the West Bountiful border run
                on gentler grades with older commercial frontage — steady
                sidewalk, curb, and patio work. And the established-street
                aesthetic matters here: finish and color choices that let
                new concrete sit quietly next to 60-year-old brick are
                part of the quote conversation, not an afterthought.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                02 / SERVICES IN BOUNTIFUL
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                What we work most in Bountiful.
              </h2>
              <p className="text-stone leading-relaxed">
                Top five categories. Bench driveway replacement leads the
                mix.{" "}
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
                  03 / BOUNTIFUL NEIGHBORHOODS
                </p>
                <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-5">
                  Where we work in south Davis County.
                </h2>
                <p className="text-bone/75 leading-relaxed mb-6">
                  Sample of Bountiful areas we cover. Project mix skews
                  toward sloped-lot driveway replacement on the bench and
                  patio work across the city.
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
              04 / WHY BENCH DRIVEWAYS FAIL
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Slope, water, and sixty winters.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                <strong>Sloped slabs live in water all winter.</strong>{" "}
                Bench-lot driveways sit in the path of snowmelt coming
                downhill — wet by day, frozen by night, dozens of times a
                season. Freeze-thaw cycling in a saturated slab is the
                most destructive load Utah puts on concrete, and
                it&rsquo;s the direct cause of the scaling and cracking
                on most of the old bench driveways we replace.
              </p>
              <p>
                <strong>The old slabs never had a defense.</strong>{" "}
                Concrete poured before air-entrained mixes were standard
                has no relief structure for freezing pore water, and
                mid-century driveways were routinely poured on native
                soil with no compacted base. Sixty winters later the
                verdict is written on the surface. The replacement fixes
                both: air-entrained mix rated for Wasatch Front
                freeze-thaw over a properly compacted gravel base.
              </p>
              <p>
                <strong>Drainage is the design decision that
                lasts.</strong> On a sloped lot, where the water crosses,
                collects, and leaves is decided by grading and joint
                layout before the truck arrives. Done right, the slab
                sheds water and dries fast; done wrong, the same slab
                ponds, saturates, and starts the failure clock again. We
                also seal every new surface before its first winter — the
                standard de-icer rule applies: none the first season,
                sparing use after.
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
                href="/locations/layton"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border bg-paper hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                Layton
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
