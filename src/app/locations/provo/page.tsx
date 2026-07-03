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

const PAGE_URL = "https://zioncs.com/locations/provo";

const CITY: City = {
  slug: "provo",
  name: "Provo",
  county: "Utah County",
  region: "Wasatch Front",
  geo: { lat: 40.2338, lng: -111.6585 },
  zipSamples: ["84601", "84604", "84606"],
  neighborhoods: [
    "East Bench",
    "Edgemont",
    "Grandview",
    "Riverbottoms",
    "Joaquin",
    "Provost",
  ],
  driveFromSandy: "35 minutes south",
};

export const metadata: Metadata = {
  title: "Concrete Contractor Provo, UT | Zion CS",
  description:
    "Provo concrete contractor. Driveways, patios, stamped concrete, foundations. Utah County coverage from a Sandy-based crew.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Contractor Provo, UT — Utah Valley Flatwork",
    description:
      "Concrete flatwork in Provo — driveways, patios, stamped concrete, repair, foundations. Utah County coverage from a Sandy-based crew.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "Do you regularly work in Provo?",
    answer:
      "Yes. Provo is a 35-minute run south from our Sandy shop on I-15, which puts it well inside our everyday service radius. We work Utah Valley on the same weekly rotation as the south Salt Lake Valley — driveways, patios, stamped work, and repair jobs across the city, from the east bench down to the Riverbottoms.",
  },
  {
    question: "How does Provo's east bench affect concrete work?",
    answer:
      "The bench neighborhoods — Edgemont, Grandview, the streets climbing toward the foothills — sit on sloped lots with faster freeze-thaw cycling than the valley floor. Cold air drains down the slope at night and sun hits hard during the day, so surfaces swing through more freeze-thaw cycles per winter. We spec air-entrained mixes as standard and pay extra attention to drainage on sloped driveways so meltwater doesn't sit and refreeze on the slab.",
  },
  {
    question: "Do you handle older-home driveway replacement in Provo?",
    answer:
      "All the time. The neighborhoods around downtown and the Joaquin area carry a lot of housing from the 1940s through 1970s, and the original driveways and walks are at or past end of life. Full tear-out and replacement is usually the honest recommendation once a slab has widespread cracking and settlement — we'll tell you straight if a repair would just be delaying the inevitable.",
  },
  {
    question: "Do you work with rental-property owners near BYU?",
    answer:
      "Yes. The blocks around BYU turn over hard every year, and landlords there care about durable, low-maintenance flatwork — parking pads, replacement walks, simple broom-finish work that survives student traffic and de-icer. We quote it the same way we quote everything: written scope, written number, no surprises.",
  },
  {
    question: "How fast can you start a Provo project?",
    answer:
      "Lead time depends on season and scope. Most residential projects in Utah County are 2–6 weeks out from quote acceptance during the warm-weather pour window. Repair work moves faster. Tell us your target date when you request a quote and we'll be straight about whether we can hit it.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/utah-concrete-contractor" },
  { label: "Provo, UT" },
];

const TOP_SERVICES = SERVICES.filter((s) =>
  [
    "concrete-driveways-utah",
    "concrete-patios-utah",
    "stamped-decorative-concrete-utah",
    "residential-concrete-repair-utah",
    "industrial-concrete-foundations-utah",
  ].includes(s.slug)
);

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists — Provo",
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
  { name: "Provo, UT", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function ProvoPage() {
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
        eyebrow="ZIONCS://LOCATION · PROVO, UT"
        title="Concrete contractor Provo — Utah Valley flatwork."
        lead="Provo anchors the south end of our weekly rotation. Thirty-five minutes down I-15 from the Sandy shop puts the whole city in range — bench-lot driveways in Edgemont, patio work in the Riverbottoms, tear-out-and-replace jobs in the older blocks around downtown. Same crew, same standards, no travel premium inside Utah County."
        faqs={FAQS}
        ctaTitle="Got a project in Provo?"
        ctaBody="Tell us the project type and timeline. We'll send a written quote within 7 business days."
      >
        {/* Overview */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / PROVO OVERVIEW
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Old-city blocks, bench lots, and a valley that keeps building.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                Provo is really three concrete markets in one city. The
                center — downtown, Joaquin, the streets around BYU — carries
                housing stock going back to the 1940s, where original
                driveways and walks have hit end of life and the work is
                tear-out and replacement. The east bench — Edgemont,
                Grandview, the foothill streets — is sloped-lot territory
                where drainage and freeze-thaw exposure drive the prep. And
                the Riverbottoms and the Riverwoods corridor to the north
                run toward larger lots and finish-grade patio and stamped
                work.
              </p>
              <p>
                We work all three. The mix matters because each one fails
                differently: valley-floor slabs settle where old fill was
                never compacted, bench slabs spall where meltwater refreezes
                on sloped surfaces, and decorative work anywhere in Utah
                Valley lives or dies on sealer maintenance against winter
                de-icer. Knowing which failure mode belongs to which street
                is most of what separates a quote that holds up from one
                that doesn&rsquo;t.
              </p>
              <p>
                Utah County is also still growing, and Provo takes a share
                of that in infill and accessory work — new garage pads,
                extended parking, backyard flatwork behind older homes.
                It&rsquo;s honest, unglamorous work and we do a lot of it.
                Residential leads the mix here, with foundations and
                footings work where remodels and additions call for it.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                02 / SERVICES IN PROVO
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                What we work most in Provo.
              </h2>
              <p className="text-stone leading-relaxed">
                Top five categories. Driveway replacement leads the mix in
                the older neighborhoods.{" "}
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
                  03 / PROVO NEIGHBORHOODS
                </p>
                <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-5">
                  Where we work in Provo.
                </h2>
                <p className="text-bone/75 leading-relaxed mb-6">
                  Sample of Provo areas we cover. If yours isn&rsquo;t
                  listed, we still serve it — the whole city sits inside
                  the same trip from Sandy, bench to Riverbottoms.
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
              04 / WHY PROVO PREP MATTERS
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Freeze-thaw does the damage. Prep decides who wins.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                <strong>Utah Valley winters cycle hard.</strong> Provo sits
                at roughly 4,550 feet, and a typical winter swings the
                surface of a slab through dozens of freeze-thaw cycles.
                Water gets into the concrete&rsquo;s pore structure, freezes,
                expands, and pries the surface apart — unless the mix is
                air-entrained. Air entrainment builds microscopic relief
                chambers into the concrete so freezing water has somewhere
                to go. It&rsquo;s standard on every exterior pour we do.
              </p>
              <p>
                <strong>The east bench multiplies the exposure.</strong>{" "}
                Sloped lots shed meltwater across driveways and walks during
                the day; it refreezes at night. That daily wet-freeze cycle
                is the harshest thing a slab faces in this valley, and
                it&rsquo;s why bench-lot work gets extra attention on
                drainage — grade, control-joint layout, and where the water
                actually goes when the snow melts.
              </p>
              <p>
                <strong>De-icer is the silent killer.</strong> Magnesium
                chloride and rock salt accelerate surface scaling, especially
                on concrete poured late in the season that never fully
                cured before its first winter. We seal every finished
                surface and hand clients a plain-English rule: no de-icer
                the first winter, sparing use after.
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
                href="/locations/orem"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border bg-paper hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                Orem
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
