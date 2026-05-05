import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";
import {
  breadcrumbListSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/structured-data";

const PAGE_URL =
  "https://zioncs.com/services/industrial-concrete-foundations-utah";
const SLUG = "industrial-concrete-foundations-utah";

export const metadata: Metadata = {
  title: "Industrial Concrete Utah | Zion CS",
  description:
    "Industrial concrete foundations, footings, and structural slabs across Utah. Soil prep matched to Utah conditions, code-compliant, on-schedule pours.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Industrial Concrete & Foundations in Utah — Footings, Slabs, Structural",
    description:
      "Foundations, footings, structural slabs across the Wasatch Front and St. George. Utah-specific soil prep.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question:
      "What's the typical foundation depth for Utah commercial work?",
    answer:
      "Foundation depth must exceed local frost depth — 30 inches is the Wasatch Front standard, 36 inches in northern regions like Logan/Ogden, and 42 inches in mountain areas like Park City. St. George allows shallower at 12 inches due to milder winters. We size every foundation to local code plus a safety margin.",
  },
  {
    question: "Do you handle structural concrete that requires engineered drawings?",
    answer:
      "Yes — we work from structural engineer drawings on every commercial foundation project. Stamped drawings cover rebar size + spacing, footing dimensions, foundation wall thickness, and any unusual loading. We pour to spec exactly; if drawings call for #5 rebar at 12 inches on center we don't substitute. Site changes get documented and routed back to the structural engineer.",
  },
  {
    question: "How do you handle expansive clay soils in Utah?",
    answer:
      "Utah's clay-heavy alluvial soils swell when wet and contract when dry — moves the foundation if subgrade isn't prepared. We over-excavate clay pockets, replace with clean compacted gravel base, and add moisture barriers under the slab where clay content is high. Clay-specific subgrade work adds prep time but prevents foundation movement that's expensive to fix.",
  },
  {
    question: "What's your turnaround on a foundation project?",
    answer:
      "Depends on size and complexity. A 1,500 sq ft commercial foundation typically runs 7–10 working days from excavation start to walkable cure. Larger industrial slabs scale up. Multi-phase projects (footings → walls → slab) sequence over 3–6 weeks depending on cure schedules. Hard deadlines workable within reason — tell us on the discovery call.",
  },
  {
    question: "Do you work with builders or directly with property owners?",
    answer:
      "Both. Most foundation work comes through GCs on commercial projects. Some comes direct from property owners on small commercial or addition projects. The proposal format and the relationship are different — discovery call covers which track fits your project.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Foundations" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Services", url: "https://zioncs.com/services" },
  { name: "Industrial Concrete & Foundations", url: PAGE_URL },
]);

const serviceJsonLd = serviceSchema({
  name: "Industrial Concrete Foundations and Footings",
  description:
    "Industrial and commercial concrete foundations, footings, and structural slabs across Utah. Soil-specific subgrade prep, code-compliant rebar and mix.",
  provider: "Zion Concrete Specialists",
  areaServed: "Utah",
  url: PAGE_URL,
});

const faqJsonLd = faqPageSchema(FAQS);

export default function IndustrialFoundationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ServicePageTemplate
        breadcrumbs={BREADCRUMBS}
        eyebrow="ZIONCS://SERVICE · 06 / FOUNDATIONS"
        title="Foundations and footings — built for Utah soil and frost depth."
        lead="Commercial and industrial foundations across the Wasatch Front and St. George. Soil-specific subgrade prep, frost-depth-compliant footings, structural-engineer-stamped drawings poured to spec exactly. The most ground-up foundation work we do."
        spec={{
          title: "INDUSTRIAL FOUNDATIONS",
          rows: [
            { key: "CONCRETE", value: "4,500 PSI · air-entrained" },
            {
              key: "FOOTING DEPTH",
              value: "30″ Wasatch · 36″ N · 42″ Park City · 12″ St. George",
            },
            {
              key: "REINFORCEMENT",
              value: "Per stamped engineering drawings",
            },
            {
              key: "SUBGRADE",
              value: "Compacted base · clay-pocket replacement",
            },
            {
              key: "MOISTURE BARRIER",
              value: "Under slab on high-clay sites",
            },
            {
              key: "FINISH",
              value: "Broom · trowel · per spec",
            },
            {
              key: "INSPECTIONS",
              value: "Coordinated · we manage sign-off",
            },
            {
              key: "WARRANTY",
              value: "Workmanship — 2 year",
            },
          ],
          footnote: "FOOTING DEPTHS COMPLY WITH IRC + LOCAL UTAH CODE",
        }}
        faqs={FAQS}
        relatedSlugs={[
          "commercial-flatwork-parking-lots-sidewalks",
          "residential-concrete-repair-utah",
          "concrete-driveways-utah",
          "sidewalks-curbing-utah",
        ]}
        currentSlug={SLUG}
        ctaTitle="Foundation project on the calendar?"
        ctaBody="We work from structural drawings and we know Utah soil. Tell us the project size and target timeline — written quote within 7 business days."
        ctaSecondaryHref="/book/discovery-call-commercial"
        ctaSecondaryLabel="Book a Discovery Call"
      >
        <div className="space-y-6 text-anthracite/85 text-lg leading-relaxed">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm not-italic">
            01 / OVERVIEW
          </p>
          <p>
            Foundations are where Utah&rsquo;s climate and soil
            conditions matter most. Get the prep wrong and the
            structure above moves — cracks in drywall, doors out of
            square, slab heaves at the joints. Get it right and the
            building lives quietly for 50+ years.
          </p>
          <p>
            We pour foundations and footings for small-to-mid
            commercial work across Utah — light industrial sites,
            commercial buildings, mixed-use projects, and residential
            additions. Every project gets soil-specific subgrade prep,
            footings sized to local frost depth plus margin, and
            reinforcement poured exactly to the structural
            engineer&rsquo;s drawings.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            02 / WHY UTAH SOIL MATTERS
          </p>
          <p>
            Utah&rsquo;s alluvial soils vary dramatically across small
            distances. The Salt Lake Valley has clay-heavy pockets near
            the lake bed and rocky ground along the foothills. Davis
            County is heavily clay. The Wasatch foothills carry
            expansive soils that swell with moisture. St. George has
            sandy soils with high alkalinity that attacks concrete
            sealers. We adjust the subgrade prep based on what
            we&rsquo;re standing on.
          </p>
          <p>
            Full breakdown in{" "}
            <Link href="/blog/utah-soil-conditions-commercial-foundations">
              Utah soil conditions and your commercial foundation
            </Link>
            .
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            03 / WHAT&rsquo;S INCLUDED
          </p>
          <ul className="space-y-2 text-base">
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Site walk + structural-drawing review with the
                engineering team
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Soil assessment + subgrade prep specific to local
                conditions
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Excavation to footing depth (frost-depth-compliant for
                region)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Forms, rebar per stamped drawings, embeds + anchor
                bolts
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Footing pour, then foundation walls (multi-phase as
                spec requires)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Slab-on-grade pour with moisture barrier where required
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Inspection coordination + sign-off (we manage with the
                AHJ)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Cure schedule documented, two-year workmanship warranty
              </span>
            </li>
          </ul>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            04 / WHO WE WORK WITH
          </p>
          <p>
            Most foundation projects come through commercial GCs and
            structural engineers we&rsquo;ve built relationships with
            across the Wasatch Front. Some come direct from property
            owners on smaller projects or additions. Either path, the
            proposal includes the soil prep, frost-depth verification,
            and the schedule. See our{" "}
            <Link href="/commercial">
              commercial track page
            </Link>{" "}
            for the full procurement-ready package.
          </p>
        </div>
      </ServicePageTemplate>
    </>
  );
}
