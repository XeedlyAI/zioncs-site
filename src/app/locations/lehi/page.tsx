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

const PAGE_URL = "https://zioncs.com/locations/lehi";

const CITY: City = {
  slug: "lehi",
  name: "Lehi",
  county: "Utah County",
  region: "Wasatch Front",
  geo: { lat: 40.3916, lng: -111.8508 },
  zipSamples: ["84043"],
  neighborhoods: [
    "Traverse Mountain",
    "Thanksgiving Point Area",
    "Holbrook Farms",
    "Ivory Ridge",
    "Old Lehi",
    "Silicon Slopes Corridor",
  ],
  driveFromSandy: "20 minutes south",
};

export const metadata: Metadata = {
  title: "Concrete Contractor Lehi, UT | Zion CS",
  description:
    "Lehi concrete contractor. Driveways, patios, RV pads, sport courts, commercial flatwork. Utah County coverage from a Sandy-based crew.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Contractor Lehi, UT — Growth-Corridor Flatwork",
    description:
      "Concrete flatwork in Lehi — driveways, patios, RV pads, sport courts, commercial. Utah County's growth corridor, covered from Sandy.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "Do you work with builders in Lehi?",
    answer:
      "Yes. Lehi sits in the middle of Utah County's fastest building corridor, and a share of our work here comes through builder relationships — driveways, walks, and garage pads on new construction, plus the backyard flatwork that follows a year or two after closing. We quote builder packages the same way we quote homeowner work: written scope, written number.",
  },
  {
    question: "My Lehi house is new. Why does the backyard still need a contractor?",
    answer:
      "Most production builds in Lehi deliver the driveway and front walk and leave the backyard as graded dirt. That's why patios, RV pads, and sport courts dominate our Lehi request list — the second wave of concrete on a new home. The advantage of newer subdivisions is documented soils work; the risk is builder fill that was placed fast. We verify compaction rather than assume it.",
  },
  {
    question: "What's different about Traverse Mountain work?",
    answer:
      "Elevation and slope. Traverse Mountain sits several hundred feet above the valley floor on benched cut-and-fill lots. Slabs there see harder freeze cycling than the flats and more lot-drainage complexity — water coming off the mountain has to be routed around flatwork, not under it. We treat bench lots as their own prep category.",
  },
  {
    question: "Do you handle commercial work in the Silicon Slopes corridor?",
    answer:
      "Small-to-mid scopes, yes — sidewalks, ADA ramps, dumpster pads, and exterior flatwork around office and retail properties along the I-15 corridor. Full-site packages for large campuses are usually bid to bigger commercial outfits; we're honest about where that line sits when you send us a scope.",
  },
  {
    question: "How fast can you start a Lehi project?",
    answer:
      "Lehi is one of the closest cities in our rotation — about 20 minutes from the Sandy shop. Most residential projects are 2–6 weeks out from quote acceptance during the warm-weather pour window. Tell us your target date when you request a quote.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/utah-concrete-contractor" },
  { label: "Lehi, UT" },
];

const TOP_SERVICES = SERVICES.filter((s) =>
  [
    "concrete-driveways-utah",
    "concrete-patios-utah",
    "rv-pads-utah",
    "sport-courts-utah",
    "commercial-flatwork-parking-lots-sidewalks",
  ].includes(s.slug)
);

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists — Lehi",
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
  { name: "Lehi, UT", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function LehiPage() {
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
        eyebrow="ZIONCS://LOCATION · LEHI, UT"
        title="Concrete contractor Lehi — flatwork for the growth corridor."
        lead="Lehi is twenty minutes from our Sandy shop and squarely in the middle of Utah County&rsquo;s building boom. New subdivisions from Holbrook Farms to Traverse Mountain deliver homes with bare backyards — and a year later, those yards need patios, RV pads, and sport courts. That second wave of concrete is most of what we do here."
        faqs={FAQS}
        ctaTitle="Got a project in Lehi?"
        ctaBody="Tell us the project type and timeline. We'll send a written quote within 7 business days."
      >
        {/* Overview */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / LEHI OVERVIEW
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              The second wave of concrete on a new home.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                Lehi has been one of the fastest-growing cities in Utah
                for over a decade — the stretch between Thanksgiving Point
                and Traverse Mountain filled in almost entirely within
                that window. Production builders deliver these homes with
                a driveway and a front walk, and that&rsquo;s it. The
                backyard patio, the RV pad beside the garage, the
                pickleball court the lot was sized for — all of that is a
                second project, and it&rsquo;s the core of our Lehi work.
              </p>
              <p>
                New-subdivision work has a specific risk profile. The
                soils reports exist and the grading is documented, but
                builder fill gets placed fast, and a slab poured over
                under-compacted fill settles no matter how good the
                concrete is. We verify compaction on every Lehi backyard
                pour instead of assuming the builder&rsquo;s pad prep
                extends to the yard. It usually doesn&rsquo;t.
              </p>
              <p>
                The corridor also carries a commercial layer — office and
                retail development along I-15 in the Silicon Slopes
                stretch generates steady sidewalk, ramp, and exterior
                flatwork demand. And Old Lehi, the original town grid west
                of the freeway, runs on the same replacement economics as
                any older Utah neighborhood: mid-century driveways and
                walks reaching end of life.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                02 / SERVICES IN LEHI
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                What we install most in Lehi.
              </h2>
              <p className="text-stone leading-relaxed">
                Top five categories. Backyard build-out work leads —
                patios, RV pads, sport courts.{" "}
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
                  03 / LEHI NEIGHBORHOODS
                </p>
                <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-5">
                  Where we work in Lehi.
                </h2>
                <p className="text-bone/75 leading-relaxed mb-6">
                  Sample of Lehi areas we cover. Project mix skews toward
                  new-home backyard build-out — patios, RV pads, sport
                  courts — plus corridor commercial flatwork.
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
              04 / WHY NEW-SUBDIVISION PREP IS DIFFERENT
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Fill, freeze-thaw, and the bench above the valley.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                <strong>Builder fill is the hidden variable.</strong> Mass
                grading moves a lot of soil fast, and backyard fill
                doesn&rsquo;t get the same compaction attention as the
                building pad. A patio or RV pad poured over loose fill
                settles unevenly within its first two winters. On every
                Lehi backyard pour we check the subgrade ourselves —
                compact, re-compact where needed, and build the gravel
                base to match the load the slab will actually carry.
              </p>
              <p>
                <strong>RV pads carry real weight.</strong> A motorhome
                concentrates several tons onto a few contact patches,
                which is a different structural problem than foot traffic
                on a patio. Lehi&rsquo;s RV-friendly lot layouts make pads
                a constant request, and we spec them accordingly —
                thicker sections, reinforcement, and base depth sized to
                the rig, not to a patio template.
              </p>
              <p>
                <strong>Traverse Mountain freezes harder than the
                flats.</strong> The bench sits several hundred feet above
                the valley floor. Colder nights, more freeze-thaw cycles,
                more snow sitting on flatwork. Air-entrained mix is
                standard on every exterior pour we do; on the bench we
                also pay closer attention to slope drainage so meltwater
                crosses slabs instead of pooling and refreezing on them.
              </p>
              <p>
                For the deeper mechanics, see{" "}
                <Link
                  href="/blog/why-utah-concrete-cracks"
                  className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
                >
                  why Utah concrete cracks
                </Link>
                . For how soils drive commercial work, see{" "}
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
                href="/locations/draper"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border bg-paper hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                Draper
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
