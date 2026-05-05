import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LocationPageTemplate } from "@/components/pages/LocationPageTemplate";
import { SERVICES } from "@/data/services";
import { CITIES } from "@/data/cities";
import {
  breadcrumbListSchema,
  faqPageSchema,
  localBusinessSchema,
} from "@/lib/structured-data";
import { CONTACT } from "@/lib/contact";

const PAGE_URL = "https://zioncs.com/locations/salt-lake-city";
const CITY = CITIES["salt-lake-city"];

export const metadata: Metadata = {
  title: "Concrete Contractor Salt Lake City | Zion CS",
  description:
    "Salt Lake City concrete contractor. Driveways, patios, sport courts, foundations, commercial flatwork. 200+ projects across Salt Lake County.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Contractor Salt Lake City — Driveways, Patios, Foundations",
    description:
      "Concrete flatwork across Salt Lake City. Sugar House to The Avenues to 9th and 9th — residential, commercial, and builder work.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "What parts of Salt Lake City do you serve?",
    answer:
      "All of it. We work Sugar House, The Avenues, Federal Heights, 9th and 9th, Liberty Wells, Rose Park, Glendale, the East Bench, and downtown — plus the surrounding municipalities (South Salt Lake, Holladay, Murray, Millcreek). If you're inside Salt Lake County, we serve you.",
  },
  {
    question: "Do you handle older homes in The Avenues and Sugar House?",
    answer:
      "Yes. Many of our SLC residential projects are in older neighborhoods where the original concrete is 60–100 years old, has settled or cracked, and needs replacement or careful repair. Older homes also have access constraints — narrow driveways, mature trees, restricted truck access — and we plan around that.",
  },
  {
    question: "Can you pour concrete in Salt Lake City's winter?",
    answer:
      "Sometimes, with the right precautions: insulated blankets, hot water mix, accelerator additives. But the safer answer is we schedule pours for the spring-through-fall window when the daily low is reliably above freezing. For winter projects, we lock the schedule for the next pour window and prep the rest of the work in the meantime.",
  },
  {
    question: "Do you do commercial concrete in Salt Lake City?",
    answer:
      "Yes. SLC commercial work for us is typically retail and small-to-mid commercial sites — parking lot sections, ADA sidewalks, foundation slabs, dumpster pads. We're set up to coordinate with GCs and property managers and to work around the retail traffic patterns that downtown SLC sites require.",
  },
  {
    question: "What's the lead time for a Salt Lake City project?",
    answer:
      "Spring through fall residential projects typically book 2–6 weeks out from quote acceptance. Commercial projects schedule around your construction timeline; let us know your target window. Repair and small jobs usually fit in faster than full installs.",
  },
  {
    question: "Are you the right fit for a Salt Lake City builder?",
    answer:
      "If you're building spec homes or custom residential in SLC and the surrounding metro, yes. We have a builder track separate from residential — different proposal format, schedule discipline, and we understand the rhythm of a multi-trade build. See the builders page for how we work with GCs.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/utah-concrete-contractor" },
  { label: "Salt Lake City" },
];

const TOP_SERVICES = SERVICES.filter((s) =>
  [
    "concrete-driveways-utah",
    "concrete-patios-utah",
    "residential-concrete-repair-utah",
    "stamped-decorative-concrete-utah",
    "industrial-concrete-foundations-utah",
    "commercial-flatwork-parking-lots-sidewalks",
  ].includes(s.slug)
);

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists — Salt Lake City",
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
  { name: "Salt Lake City", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function SaltLakeCityPage() {
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
        eyebrow="ZIONCS://LOCATION · SALT LAKE CITY"
        title="Concrete contractor Salt Lake City — driveways, patios, foundations."
        lead="Salt Lake City is the population center of the Wasatch Front and the highest-volume city we serve. Sugar House, The Avenues, Federal Heights, 9th and 9th, Liberty Wells, Rose Park — residential, commercial, and builder flatwork across the metro."
        faqs={FAQS}
        ctaTitle="Got a project in Salt Lake City?"
        ctaBody="Quote-driven proposals. Written timelines. Two-year workmanship warranty. Tell us about the project — we'll come back with a written number."
        ctaSecondaryHref="/builders"
        ctaSecondaryLabel="Builder partnership"
      >
        {/* Overview */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / SALT LAKE CITY OVERVIEW
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              The biggest concrete market in Utah. We&rsquo;ve worked most of it.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                Salt Lake City has the most diverse concrete demand in Utah —
                century-old residential streets in The Avenues that need
                careful repair work, mid-century neighborhoods in Sugar House
                getting full-driveway replacements, new builds on the East
                Bench requiring full residential flatwork, plus commercial,
                retail, and small-to-mid foundation work across downtown,
                Glendale, Rose Park, and the industrial corridors.
              </p>
              <p>
                We&rsquo;re a{" "}
                <span className="font-mono tabular-nums font-semibold">
                  20-minute drive
                </span>{" "}
                from Sandy. The trucks roll up I-15 most weekday mornings.
                We&rsquo;ve done driveways behind Liberty Park, pool decks in
                Federal Heights, sport courts on the East Bench, and
                commercial parking lot sections through Glendale. Salt Lake
                County is half of our 200+ project base.
              </p>
              <p>
                What makes SLC different from a contractor&rsquo;s standpoint:
                older infrastructure, narrower access in many residential
                streets, more permitting overhead in the historic districts,
                and a wider mix of soil conditions across the valley floor.
                We plan around all of it.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                02 / SERVICES IN SALT LAKE CITY
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                Residential, commercial, and everything in between.
              </h2>
              <p className="text-stone leading-relaxed">
                Six top categories below.{" "}
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
                  className="border-b border-warm-border last:border-b-0"
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
                  03 / SLC NEIGHBORHOODS
                </p>
                <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-5">
                  Where we&rsquo;ve poured.
                </h2>
                <p className="text-bone/75 leading-relaxed mb-6">
                  Sample of SLC neighborhoods we&rsquo;ve worked. Older streets,
                  newer infill, foothill custom builds, and downtown commercial.
                  We treat each one&rsquo;s constraints differently — but
                  there&rsquo;s no SLC ZIP code we don&rsquo;t cover.
                </p>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone space-y-1">
                  <p>
                    ZIP CODES /{" "}
                    <span className="text-bone/85">
                      {CITY.zipSamples.join(" · ")} +
                    </span>
                  </p>
                  <p>
                    COUNTY / <span className="text-bone/85">{CITY.county}</span>
                  </p>
                  <p>
                    DRIVE FROM SANDY /{" "}
                    <span className="text-bone/85">{CITY.driveFromSandy}</span>
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

        {/* Older home / SLC-specific differentiator */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              04 / WHAT&rsquo;S DIFFERENT IN SLC
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Older streets, narrower access, more permits.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                Salt Lake City pre-dates the suburban template. Many
                Avenues, Sugar House, and 9th-and-9th lots have driveways
                from the 1920s through the 1950s — sometimes the original
                pour, sometimes a 1970s replacement that&rsquo;s now in
                rough shape. Replacement work in these neighborhoods means
                careful demo around mature trees, narrow access for
                ready-mix trucks, and coordination with HOA or historic
                district rules.
              </p>
              <p>
                We send a project manager to walk the site before quoting
                anything in these neighborhoods. The walk surfaces access
                constraints, permit requirements, and the realistic cost
                envelope. It also lets us flag underlying issues (failing
                drainage, settled subgrade) that&rsquo;ll cause the new
                concrete to fail if you skip them.
              </p>
              <p>
                Newer neighborhoods on the East Bench and around the
                university are a different rhythm — straightforward access,
                fewer permits, full-flat residential flatwork that runs
                close to the standard residential timeline.
              </p>
              <p>
                <Link
                  href="/blog/why-utah-concrete-cracks"
                  className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
                >
                  Why Utah concrete cracks — full breakdown →
                </Link>
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
                href="/locations/sandy-utah"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border bg-paper hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                Sandy, UT (home base)
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/builders"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border bg-paper hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                For SLC builders
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </LocationPageTemplate>
    </>
  );
}
