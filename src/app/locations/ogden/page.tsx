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

const PAGE_URL = "https://zioncs.com/locations/ogden";

const CITY: City = {
  slug: "ogden",
  name: "Ogden",
  county: "Weber County",
  region: "Wasatch Front",
  geo: { lat: 41.223, lng: -111.9738 },
  zipSamples: ["84401", "84403", "84404"],
  neighborhoods: [
    "East Bench",
    "East Central",
    "Trolley District",
    "Shadow Valley",
    "Mount Ogden Park Area",
    "West Ogden",
  ],
  driveFromSandy: "50 minutes north",
};

export const metadata: Metadata = {
  title: "Concrete Contractor Ogden, UT | Zion CS",
  description:
    "Ogden concrete contractor. Driveway replacement, patios, sidewalks, commercial flatwork. Weber County coverage from a Sandy-based crew.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Contractor Ogden, UT — Weber County Flatwork",
    description:
      "Concrete flatwork in Ogden — driveway replacement, patios, sidewalks, repair, commercial. Weber County coverage from a Sandy-based crew.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "Do you really cover Ogden from Sandy?",
    answer:
      "Yes. Ogden is the northern bookend of our Wasatch Front service area — about 50 minutes up I-15 from the shop. We batch Weber and Davis County work onto the same northern trips, so an Ogden project doesn't carry a travel premium. If a scope is too small to pencil on its own, we'll say so and try to pair it with nearby work.",
  },
  {
    question: "What kind of concrete work is most common in Ogden?",
    answer:
      "Driveway and walkway replacement, by a wide margin. Ogden carries some of the oldest housing stock on the Wasatch Front — much of the city center predates World War II — and a lot of original or mid-century concrete is simply done. Full tear-out and replacement with modern base prep and air-entrained mix is the standard job here.",
  },
  {
    question: "Can you match the character of a historic Ogden home?",
    answer:
      "Within reason, yes. On homes in the older districts, a bright-white modern broom finish can look out of place against a 1910 brick facade. Exposed aggregate, tinted mixes, and border details can keep new flatwork visually consistent with an older streetscape. We'll walk through the options at quote time — honestly, including what they add to cost.",
  },
  {
    question: "How does Ogden's bench geography affect concrete?",
    answer:
      "The east bench neighborhoods climb steeply toward the Wasatch, and sloped lots concentrate two stresses: meltwater running across slabs that refreezes overnight, and soil movement on cut-and-fill building pads. Drainage design and subgrade compaction carry more of the performance load on the bench than the concrete itself does.",
  },
  {
    question: "Do you handle commercial flatwork in Ogden?",
    answer:
      "Yes — sidewalks, ADA ramps, dumpster pads, and small-to-mid parking areas. Ogden's ongoing downtown reinvestment keeps steady demand for replacement sidewalk and curb work around commercial properties. Larger full-site packages depend on schedule; tell us the scope and we'll be straight about fit.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/utah-concrete-contractor" },
  { label: "Ogden, UT" },
];

const TOP_SERVICES = SERVICES.filter((s) =>
  [
    "concrete-driveways-utah",
    "residential-concrete-repair-utah",
    "concrete-patios-utah",
    "sidewalks-curbing-utah",
    "commercial-flatwork-parking-lots-sidewalks",
  ].includes(s.slug)
);

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists — Ogden",
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
  { name: "Ogden, UT", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function OgdenPage() {
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
        eyebrow="ZIONCS://LOCATION · OGDEN, UT"
        title="Concrete contractor Ogden — replacement work for an older city."
        lead="Ogden is the northern bookend of our service area, and it&rsquo;s a replacement market. The city carries some of the oldest housing stock on the Wasatch Front — pre-war blocks in the center, mid-century streets climbing the east bench — and the original concrete is aging out block by block. We tear out what&rsquo;s done and rebuild it to modern spec."
        faqs={FAQS}
        ctaTitle="Got a project in Ogden?"
        ctaBody="Tell us the project type and timeline. We'll batch it onto a northern trip and send a written quote within 7 business days."
      >
        {/* Overview */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / OGDEN OVERVIEW
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Old concrete, honest verdicts.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                Most Wasatch Front cities have pockets of old housing.
                Ogden has whole districts of it — East Central, the
                Trolley District, the blocks around the historic 25th
                Street corridor. Concrete on these streets often predates
                air-entrained mixes entirely, which means it&rsquo;s been
                fighting Utah freeze-thaw for 60-plus years without the
                one admixture designed to survive it. When it finally
                scales, cracks, and settles, repair isn&rsquo;t a real
                option anymore. The honest verdict is replacement, and
                we&rsquo;d rather give you that verdict up front than sell
                a patch that fails in two winters.
              </p>
              <p>
                The east bench is the other half of the Ogden story.
                Neighborhoods like Shadow Valley and the streets around
                Mount Ogden Park climb steep grades where sloped driveways
                shed meltwater all winter. Drainage layout — where the
                water goes, and where it refreezes — matters as much as
                the mix design. Flat-city templates don&rsquo;t transfer;
                bench work gets its own prep plan.
              </p>
              <p>
                Downtown reinvestment keeps a steady commercial side to
                the market too: replacement sidewalks, ADA ramps, curb and
                gutter around renovated storefronts. We handle
                small-to-mid commercial scopes in Weber County on the same
                northern rotation as our residential work.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                02 / SERVICES IN OGDEN
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                What we work most in Ogden.
              </h2>
              <p className="text-stone leading-relaxed">
                Top five categories. Replacement driveways lead the mix.{" "}
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
                  03 / OGDEN NEIGHBORHOODS
                </p>
                <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-5">
                  Where we work in Weber County.
                </h2>
                <p className="text-bone/75 leading-relaxed mb-6">
                  Sample of Ogden areas we cover. Project mix skews toward
                  tear-out-and-replace driveways and walks, with sidewalk
                  and curb work around the commercial core.
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
              04 / WHY OGDEN REPLACEMENT IS DIFFERENT
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              What 60-year-old concrete tells us.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                <strong>Pre-modern concrete lacks air entrainment.</strong>{" "}
                Much of Ogden&rsquo;s original flatwork went in before
                air-entrained mixes were standard practice. Without those
                microscopic air voids, freezing pore water has nowhere to
                expand, and the surface scales away year after year. Every
                replacement slab we pour gets an air-entrained mix rated
                for Wasatch Front freeze-thaw — it&rsquo;s the single
                biggest durability upgrade over what came out.
              </p>
              <p>
                <strong>Old slabs usually sit on no base at all.</strong>{" "}
                Tear out a 1950s Ogden driveway and you often find concrete
                poured straight on native soil. Weber County&rsquo;s clay
                pockets swell and shrink with seasonal moisture, and a slab
                without a compacted gravel base rides that movement until
                it cracks. Base prep is where we spend the unseen half of
                the job.
              </p>
              <p>
                <strong>De-icer discipline matters more on old
                streetscapes.</strong> Snow-route salt spray and tracked-in
                magnesium chloride accelerate scaling on any slab that
                borders a busy street — common in Ogden&rsquo;s grid. New
                work gets sealed before winter, and we hand every client
                the same rule: no de-icer the first season, sparing use
                after, reseal on schedule.
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
