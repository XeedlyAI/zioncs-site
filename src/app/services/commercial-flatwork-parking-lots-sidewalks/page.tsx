import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";
import {
  breadcrumbListSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/structured-data";

const PAGE_URL =
  "https://zioncs.com/services/commercial-flatwork-parking-lots-sidewalks";
const SLUG = "commercial-flatwork-parking-lots-sidewalks";

export const metadata: Metadata = {
  title: "Commercial Flatwork Utah | Zion CS",
  description:
    "Parking lots, sidewalks, and ADA ramps for Utah commercial sites. Phased pours that maintain construction access. ADA-compliant, code-correct.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Commercial Flatwork — Parking Lots, Sidewalks, ADA Ramps in Utah",
    description:
      "Commercial parking lot concrete, ADA sidewalks, and ramp work across Utah.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "What ADA slope tolerances do you build to?",
    answer:
      "Running slope ≤8.33% (1:12 max), cross slope ≤2%, landing slopes ≤2% in any direction. Detectable warning surface (truncated dome panels) installed within 1/8 inch of grade. We verify with a 4-foot digital level after forms are set and again after pour. Inspector sign-off is our responsibility.",
  },
  {
    question: "Can you pour parking lot sections while the site stays open?",
    answer:
      "Yes — phased pours are routine for us. We sequence sections so customer access is maintained, schedule overnight pours where the constraint requires, and coordinate with the property manager on signage and traffic routing. Most retail center work involves keeping at least some storefronts open during the project.",
  },
  {
    question: "What's the typical concrete spec for commercial parking?",
    answer:
      "5-inch slab on 4–6 inch compacted gravel base. 4,500 PSI air-entrained mix. #4 rebar grid at 16 inches on center, doweled at construction joints. Saw-cut control joints at appropriate intervals (typically 12–15 feet for 5-inch slabs). Heavier loads (truck routes, fire lanes) get 6-inch slabs.",
  },
  {
    question: "Do you handle striping after the pour?",
    answer:
      "We coordinate with line-striping subcontractors but don't do the painting in-house. Concrete needs a 28-day cure for full strength before striping; we hand the project over to your striping contractor at that point. We can recommend striping subs we've worked with in the Wasatch Front.",
  },
  {
    question: "How do you handle weather delays on commercial projects?",
    answer:
      "Pour windows confirmed 3–5 days out from the forecast. Marginal weather (forecast lows under 40°F or rain within 12 hours of pour) means cold-weather precautions or rescheduling. We carry insulated blankets and accelerator additives for marginal windows. Hard deadlines that don't accommodate weather get flagged on the discovery call.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Commercial Flatwork" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Services", url: "https://zioncs.com/services" },
  { name: "Commercial Flatwork", url: PAGE_URL },
]);

const serviceJsonLd = serviceSchema({
  name: "Commercial Flatwork — Parking Lots, Sidewalks, ADA Ramps",
  description:
    "Commercial concrete flatwork across Utah — parking lots, sidewalks, ADA-compliant ramps for retail, multi-family, and light industrial sites.",
  provider: "Zion Concrete Specialists",
  areaServed: "Utah",
  url: PAGE_URL,
});

const faqJsonLd = faqPageSchema(FAQS);

export default function CommercialFlatworkPage() {
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
        eyebrow="ZIONCS://SERVICE · 11 / COMMERCIAL FLATWORK"
        heroImage="/images/services/img-10-commercial-flatwork.png"
        title="Commercial flatwork — parking lots, sidewalks, ADA ramps."
        lead="Retail centers, multi-family residential, light industrial, ADA upgrades. Phased pours that maintain access during construction, ADA-compliant slopes verified with a digital level, code-correct rebar and mix specs."
        spec={{
          title: "COMMERCIAL FLATWORK",
          rows: [
            { key: "CONCRETE", value: "4,500 PSI · air-entrained" },
            {
              key: "THICKNESS",
              value: "5″ parking standard · 6″ truck routes",
            },
            {
              key: "REINFORCEMENT",
              value: "#4 rebar grid · 16″ on center",
            },
            {
              key: "BASE",
              value: "4–6″ compacted aggregate base",
            },
            {
              key: "JOINTS",
              value: "Saw-cut control joints · 12–15 ft intervals",
            },
            {
              key: "ADA SLOPE",
              value: "≤8.33% running · ≤2% cross",
            },
            {
              key: "FINISH",
              value: "Broom · ADA-textured ramps",
            },
            {
              key: "WARRANTY",
              value: "Workmanship — 2 year",
            },
          ],
          footnote:
            "ALL POURS COMPLY WITH CURRENT IBC + ADA · UTAH MUNICIPAL CODES",
        }}
        faqs={FAQS}
        relatedSlugs={[
          "industrial-concrete-foundations-utah",
          "sidewalks-curbing-utah",
          "concrete-driveways-utah",
          "residential-concrete-repair-utah",
        ]}
        currentSlug={SLUG}
        ctaTitle="Commercial flatwork project?"
        ctaBody="Tell us the scope and timeline — we'll send a written quote and a phased pour plan that keeps your site running."
        ctaSecondaryHref="/book/discovery-call-commercial"
        ctaSecondaryLabel="Book a Discovery Call"
      >
        <div className="space-y-6 text-anthracite/85 text-lg leading-relaxed">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm not-italic">
            01 / OVERVIEW
          </p>
          <p>
            Commercial flatwork is the highest-traffic, highest-scrutiny
            concrete a property carries. Parking lots, sidewalks, ADA
            ramps, drive aisles. Every surface is walked on or driven on
            daily; every joint and crack is visible to customers and
            tenants. Code compliance, schedule discipline, and finish
            consistency all matter more than they do in residential work.
          </p>
          <p>
            We work small-to-mid commercial across the Wasatch Front and
            St. George — retail centers, multi-family residential
            developments, light industrial sites, mixed-use projects.
            Project scopes typically run 2,000–25,000 sq ft of
            replacement or new pour. The crew sequencing, the spec, and
            the phasing are all calibrated to keep construction or
            operations moving.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            02 / WHAT&rsquo;S INCLUDED
          </p>
          <ul className="space-y-2 text-base">
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Site walk + RFP-ready proposal with insurance and
                references documented
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Phased pour plan that maintains storefront/tenant access
                during construction
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Demo + haul-off of existing concrete (replacement
                projects)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Subgrade prep — excavation, compaction, base aggregate
                to spec
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Forms, rebar grid (#4 at 16&rdquo; o.c. typical), doweled
                joints
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                4,500 PSI air-entrained pour with mix-ticket verification
                per truck
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                ADA-compliant ramps with detectable warning surface,
                slope verified with digital level
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Saw-cut control joints + finishing (broom standard,
                textured for ramps)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Cure plan with phased return-to-service schedule
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Inspector coordination and sign-off, two-year workmanship
                warranty
              </span>
            </li>
          </ul>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            03 / SCHEDULING + CRITICAL PATH
          </p>
          <p>
            Commercial pours sequence around weather windows, inspection
            schedules, tenant access requirements, and the GC&rsquo;s
            critical path. We don&rsquo;t become the schedule
            bottleneck. Pour dates confirm 3–5 days out from the
            forecast; we carry cold-weather and hot-weather precautions
            for marginal windows.
          </p>
          <p>
            Full breakdown in our{" "}
            <Link href="/blog/commercial-concrete-pour-scheduling">
              commercial concrete scheduling guide
            </Link>
            .
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            04 / WHERE WE WORK COMMERCIALLY
          </p>
          <p>
            Wasatch Front + St. George. Retail along State Street,
            700 East, and the major Wasatch corridors. Multi-family
            developments in Lehi, Draper, South Jordan, and the
            University corridor. Light industrial in West Valley and
            the Salt Lake industrial belt. Tell us the project location
            on the discovery call.
          </p>
        </div>
      </ServicePageTemplate>
    </>
  );
}
