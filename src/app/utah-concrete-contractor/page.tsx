import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PillarPageTemplate } from "@/components/pages/PillarPageTemplate";
import { SERVICES } from "@/data/services";
import { CITIES } from "@/data/cities";
import {
  breadcrumbListSchema,
  faqPageSchema,
  localBusinessSchema,
} from "@/lib/structured-data";
import { CONTACT } from "@/lib/contact";

const PAGE_URL = "https://zioncs.com/utah-concrete-contractor";

export const metadata: Metadata = {
  title: "Concrete Contractor Utah | Zion CS",
  description:
    "Utah's trusted concrete flatwork contractor. Driveways, sport courts, foundations, commercial. Wasatch Front + St. George. Quote on request.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Contractor Utah — Driveways, Patios, Foundations, Commercial",
    description:
      "Utah's trusted concrete flatwork contractor across the Wasatch Front and St. George.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "What part of Utah does Zion Concrete Specialists serve?",
    answer:
      "We work the entire Wasatch Front — Salt Lake County, Utah County, Davis County, and Weber County — plus St. George in southern Utah. From Ogden in the north to St. George in the south, we cover roughly 300 miles of Utah's I-15 corridor. Our home base is Sandy, UT 84070.",
  },
  {
    question: "Are you licensed and insured to work in Utah?",
    answer:
      "Yes. We carry standard contractor liability insurance for residential and commercial work in Utah and we're happy to provide documentation directly when you request a quote. We don't publish license or bond numbers on the site — those go out with the proposal.",
  },
  {
    question: "Do you handle both residential and commercial concrete?",
    answer:
      "Yes — we run four service tracks. Residential (driveways, patios, pool decks, sport courts), Builder (subcontractor flatwork for spec homes and multi-family), Commercial (parking lots, ADA ramps, industrial slabs), and Enterprise (multi-site dumpster pads and ongoing maintenance programs). One Utah crew, one point of contact.",
  },
  {
    question: "How long does a typical Utah concrete project take?",
    answer:
      "A residential driveway runs 3–5 days from demo to walkable cure, plus another 4–7 days before it's safe to drive on. Commercial slabs scale with square footage. We send a written timeline with every quote so you know what to expect day-by-day.",
  },
  {
    question: "Why does Utah concrete crack more than concrete in milder climates?",
    answer:
      "The Wasatch Front sees roughly 70 freeze-thaw cycles per year. Water gets into hairline cracks, freezes overnight, and pries the concrete apart. Combined with Utah's clay-heavy soils and seasonal frost depth, residential and commercial slabs need proper subgrade prep, control joints, and the right concrete mix for the application. We size everything for the cycle.",
  },
  {
    question: "Do you publish pricing on the website?",
    answer:
      "No. Every project's different — square footage, prep work, finish, access, time of year, and the current ready-mix market all change the number. Request a quote and we'll come back with a written number, usually within 7 days. No high-pressure follow-up.",
  },
  {
    question: "How quickly can you start a new Utah project?",
    answer:
      "Lead time depends on the season and the scope. Spring through fall residential work is typically 2–6 weeks out from quote acceptance. Winter pours need warmer windows. Commercial and enterprise projects are scheduled around your construction timeline. Let us know your target date when you request a quote.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Utah Concrete Contractor" },
];

const TOP_SERVICES = SERVICES.slice(0, 6);

const SILOS = [
  {
    label: "01 / RESIDENTIAL",
    title: "Homeowners",
    body: "Driveways, patios, pool decks, sport courts, repair. Quote-driven, written timeline, two-year workmanship warranty.",
    href: "/services",
  },
  {
    label: "02 / BUILDER",
    title: "Spec & custom builders",
    body: "Reliable flatwork sub for residential builds and multi-family. We hit your schedule and you don't get callbacks.",
    href: "/builders",
  },
  {
    label: "03 / COMMERCIAL",
    title: "Commercial GCs & owners",
    body: "Parking lots, ADA-compliant sidewalks, industrial slabs, foundations. RFP-friendly proposals with references at scale.",
    href: "/commercial",
  },
  {
    label: "04 / ENTERPRISE",
    title: "Multi-site operators",
    body: "Dumpster pads, trash enclosures, and concrete maintenance programs across portfolios. Single PO, single point of contact.",
    href: "/multi-site",
  },
];

const CITIES_LIST = [
  CITIES["sandy-utah"],
  CITIES["salt-lake-city"],
  CITIES["st-george"],
];

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists",
  url: PAGE_URL,
  phone: CONTACT.phone,
  address: {
    street: CONTACT.address.street,
    city: CONTACT.address.city,
    state: CONTACT.address.state,
    zip: CONTACT.address.zip,
  },
  geo: { lat: 40.5649, lng: -111.8389 },
  hours: ["Mo-Fr 08:00-17:00"],
  image: "https://zioncs.com/brand/zioncs-logo-horizontal.png",
});

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Utah Concrete Contractor", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function UtahConcreteContractorPage() {
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
      <PillarPageTemplate
        breadcrumbs={BREADCRUMBS}
        eyebrow="ZIONCS://STATE-PILLAR · UTAH"
        title="Utah's flatwork contractor — residential through enterprise."
        lead="Zion Concrete Specialists is a Utah-based concrete flatwork crew serving the Wasatch Front and St. George. Driveways, pool decks, sport courts, foundations, commercial parking lots, multi-site dumpster pads — across roughly 300 miles of I-15 from Ogden through St. George."
        faqs={FAQS}
        ctaTitle="Tell us about your Utah project."
        ctaBody="Request a quote and we'll send a written number within 7 days. No high-pressure sales call. No surprise upsells."
      >
        {/* Overview */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose-zion">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / OVERVIEW
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              One Utah crew. The full flatwork stack.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                Most concrete contractors in Utah specialize. They&rsquo;re a
                driveway crew, or a foundation crew, or a commercial outfit
                that doesn&rsquo;t take residential calls. We started in 2016
                as pool-deck specialists — the most visible, most
                detail-sensitive flatwork in any backyard — and grew outward
                from there. Driveways. Patios. Sidewalks. Sport courts. RV
                pads. Dumpster pads. Decorative finishes. Foundations and
                footings.
              </p>
              <p>
                Today,{" "}
                <span className="font-mono tabular-nums font-semibold">
                  9+ years
                </span>{" "}
                in,{" "}
                <span className="font-mono tabular-nums font-semibold">
                  200+
                </span>{" "}
                projects in, the bar is the same: show up on time, keep the
                worksite clean, get the job done right. We&rsquo;re Utah
                locals. The crew you talk to is the crew that pours your
                concrete. No offshore dispatch, no random subs you&rsquo;ve
                never met showing up at 7 a.m. with the wrong mix.
              </p>
              <p>
                If you&rsquo;re here looking for a concrete contractor in
                Utah, what you need to know is below: every service we offer,
                every region we cover, how we work with builders and
                commercial GCs differently than homeowners, and the answers to
                the questions that come up before you request a quote.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                02 / WHAT WE INSTALL
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                Eleven services across residential, commercial, and enterprise.
              </h2>
              <p className="text-stone leading-relaxed">
                Top six below. The full eleven, plus stamped/decorative
                variants and repair, are on the{" "}
                <Link
                  href="/services"
                  className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
                >
                  services index
                </Link>
                .
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

        {/* Service area */}
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
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel-light mb-4">
                03 / SERVICE AREA
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-3">
                Wasatch Front + St. George.
              </h2>
              <p className="text-bone/70 leading-relaxed">
                Roughly 300 miles of Utah from Ogden through Sandy and Provo
                down to St. George. We service the highest-density corridor in
                the state plus the southern bookend.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {CITIES_LIST.map((city) => (
                <Link
                  key={city.slug}
                  href={
                    city.slug === "st-george"
                      ? "/locations/st-george"
                      : `/locations/${city.slug}`
                  }
                  className="card-dark p-6 status-steel block group"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone mb-2">
                    {city.region}
                  </p>
                  <h3 className="text-xl font-bold text-bone mb-2 tracking-tight">
                    {city.name}
                  </h3>
                  <p className="text-sm text-bone/70 mb-4 leading-relaxed">
                    {city.county} ·{" "}
                    <span className="font-mono">{city.driveFromSandy}</span>
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-orange group-hover:text-paper transition-colors font-semibold">
                    Visit page
                    <ArrowRight size={12} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone mt-8">
              Also serving: Draper · Lehi · Provo · Orem · Ogden · Layton ·
              Bountiful · Park City. Full coverage breakdown on the{" "}
              <Link
                href="/wasatch-front-concrete-contractor"
                className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
              >
                Wasatch Front metro pillar
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Persona routing — silos */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                04 / WHO WE WORK WITH
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                Four buyer types. Four playbooks.
              </h2>
              <p className="text-stone leading-relaxed">
                The voice and the proposal change depending on who&rsquo;s
                buying. Pick the track that matches your project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SILOS.map((silo) => (
                <Link
                  key={silo.label}
                  href={silo.href}
                  className="card-light p-7 status-steel block group"
                >
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-3">
                    {silo.label}
                  </p>
                  <h3 className="text-xl font-bold tracking-tight text-anthracite mb-3">
                    {silo.title}
                  </h3>
                  <p className="text-stone leading-relaxed mb-4">
                    {silo.body}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-orange group-hover:text-brand-orange-hover transition-colors font-semibold">
                    Learn more
                    <ArrowRight size={12} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Climate context */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              05 / WHY UTAH CONCRETE IS DIFFERENT
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Freeze-thaw, clay-heavy soil, and the difference between concrete that lasts and concrete that doesn&rsquo;t.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                The Wasatch Front averages around{" "}
                <span className="font-mono tabular-nums font-semibold">
                  70 freeze-thaw cycles
                </span>{" "}
                per year. Water seeps into the smallest hairline cracks during
                a wet day, freezes overnight, expands roughly 9%, and pries
                the concrete apart from the inside. Multiply that by 70 cycles
                a year for ten years and a slab that wasn&rsquo;t reinforced
                or cured properly is a graveyard of cracks.
              </p>
              <p>
                The other half of the equation is Utah soil. The Salt Lake
                Valley and Utah Valley sit on alluvial deposits — clay-heavy
                in many neighborhoods, with rocky pockets and seasonal frost
                depth that can push 24–30 inches in colder winters. Pour
                concrete on poorly compacted clay subgrade and the slab
                settles unevenly within 18 months.
              </p>
              <p>
                Doing it right means: proper subgrade prep (compaction,
                leveling, gravel base where required), the right concrete mix
                for the application (4,000 PSI air-entrained for residential
                exteriors, higher PSI for commercial), reinforcement sized to
                the slab, control joints cut at the right intervals, and cure
                time respected. That&rsquo;s every project, every time. We
                walk you through the spec when you request the quote.
              </p>
              <p>
                <Link
                  href="/blog/why-utah-concrete-cracks"
                  className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
                >
                  Read the full breakdown →
                </Link>
              </p>
            </div>
          </div>
        </section>
      </PillarPageTemplate>
    </>
  );
}
