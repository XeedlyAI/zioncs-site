import type { Metadata } from "next";
import { SiloLandingTemplate } from "@/components/pages/SiloLandingTemplate";
import {
  breadcrumbListSchema,
  faqPageSchema,
} from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/multi-site";

export const metadata: Metadata = {
  title: "Multi-Site Concrete Maintenance Utah | Zion CS",
  description:
    "One concrete partner across your Utah portfolio. New builds, repairs, sealing, inspection. Predictable pricing, single point of contact.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Multi-Site Concrete Maintenance for Utah Operators",
    description:
      "One Utah concrete vendor across your retail / multi-family / industrial portfolio. Predictable pricing, single PO, single point of contact.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "How many sites is the minimum for a multi-site program?",
    answer:
      "Three is the practical minimum. Below that, the consolidation overhead doesn't pay off compared to one-off project pricing. The sweet spot is 5–25 sites — enough volume that standardized specs and rolling schedules generate real savings, not so many that we can't be the right fit. Larger portfolios (50+ sites) sometimes need a partner with specifically larger crew capacity.",
  },
  {
    question: "Do you handle both new builds and ongoing maintenance?",
    answer:
      "Both — typically separated into two contract structures. New build (concrete pads at new sites, expansions, replacements of failing pads) is project-based with written quotes. Ongoing maintenance (sealing, repair, inspection) is run on an annual or quarterly cadence with predictable per-site pricing. Most enterprise relationships have both.",
  },
  {
    question:
      "What kind of reporting do you provide for multi-site programs?",
    answer:
      "Quarterly site-by-site status reports — work completed, condition assessments, items recommended for the next quarter, and budget burn against the annual program. Reporting cadence is configurable. Property managers get the report formatted for the exec leadership review they're submitting to.",
  },
  {
    question: "Can you handle sites outside the Wasatch Front + St. George?",
    answer:
      "Within Utah, mostly yes — we travel to single sites in central or eastern Utah (Vernal, Moab, Tooele) for project work. Outside Utah, no — we don't operate beyond the state border for v1 of our enterprise program. WY/MT expansion is on our roadmap but not active. If your portfolio crosses state lines, we cover the Utah footprint and you'd need a partner for the rest.",
  },
  {
    question:
      "How does pricing work compared to one-off commercial bids?",
    answer:
      "Volume-discounted from one-off commercial. Specifics depend on portfolio size, work mix, payment terms, and exclusivity. We don't publish multi-site rates because the structure is genuinely portfolio-specific. The discovery call covers it — typical conversation produces a 12-month program proposal with predictable per-site costs and a written escalation framework for unplanned work.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Multi-Site" },
];

const PROOF = [
  {
    eyebrow: "01 / SINGLE PO",
    title: "One vendor across your Utah portfolio.",
    body: "Instead of three subs across 14 sites with three invoices, three insurance certificates, and three escalation paths — one PO, one COI, one project manager who knows every site by name. Procurement overhead drops to a fraction of what scattered vendors require.",
  },
  {
    eyebrow: "02 / STANDARDIZED SPEC",
    title: "Same concrete, every site.",
    body: "We lock the technical spec across your portfolio in the first 60 days — pad thickness, mix, rebar grid, finish, joint placement. Result: every site looks consistent and ages predictably. No more variability between vendors that turns into uneven repair cycles 5 years out.",
  },
  {
    eyebrow: "03 / PREDICTABLE PRICING",
    title: "Annual program, written numbers.",
    body: "Multi-site work runs as a 12-month program with per-site pricing locked at the start. Quarterly invoicing matches your accrual cycle. Unplanned work follows a documented escalation framework — no surprise charges, no nickel-and-diming on small repairs.",
  },
  {
    eyebrow: "04 / QUARTERLY REPORTING",
    title: "Status reports your exec team can read.",
    body: "Quarterly per-site status reports formatted for property-management review. Work completed, condition assessments, recommendations for next quarter, budget burn against the annual program. Your facility leadership gets a clean signal across the portfolio.",
  },
];

const SERVICES = [
  {
    number: "01",
    href: "/services/dumpster-pad-trash-enclosure-concrete-utah",
    name: "Dumpster Pads & Trash Enclosures",
    description:
      "Standardized 6-inch commercial pads with steel post anchoring — the volume work for most multi-site programs",
  },
  {
    number: "02",
    href: "/services/commercial-flatwork-parking-lots-sidewalks",
    name: "Parking Lot + Sidewalk Maintenance",
    description:
      "Section replacements, ADA upgrades, joint resealing across portfolio sites",
  },
  {
    number: "03",
    href: "/services/residential-concrete-repair-utah",
    name: "Repair + Resealing Programs",
    description:
      "Quarterly inspection + repair cycles to extend life of existing concrete across sites",
  },
  {
    number: "04",
    href: "/services/industrial-concrete-foundations-utah",
    name: "New Site Builds + Expansions",
    description:
      "Foundations and slabs for new portfolio additions or site expansions",
  },
];

const RELATED = [
  {
    href: "/blog/multi-site-concrete-maintenance-programs",
    eyebrow: "FRONT-DOOR · 10 MIN",
    title:
      "Multi-site concrete maintenance programs in Utah: a facility manager's guide",
    description:
      "How to structure a multi-site concrete program — vendor selection, pricing, reporting cadence, red flags.",
  },
  {
    href: "/blog/vendor-consolidation-concrete-contractor",
    eyebrow: "DECISION FRAMEWORK · 8 MIN",
    title:
      "Vendor consolidation: why one concrete contractor across your Utah portfolio wins",
    description:
      "The math behind consolidating concrete vendors across a portfolio. Cost savings, consistency, where consolidation breaks down.",
  },
  {
    href: "/blog/evaluating-commercial-concrete-subs",
    eyebrow: "DECISION FRAMEWORK · 10 MIN",
    title: "Evaluating commercial concrete subs: a procurement guide",
    description:
      "Cross-silo procurement framework — references, capacity, change-order history, Utah competence.",
  },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Multi-Site", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function MultiSitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiloLandingTemplate
        breadcrumbs={BREADCRUMBS}
        eyebrow="ZIONCS://SILO · ENTERPRISE"
        title="Multi-site concrete maintenance for Utah operators."
        lead="One concrete partner across your retail, multi-family, or industrial portfolio. New builds, repairs, sealing, inspection — single PO, predictable pricing, quarterly reporting your exec team can read."
        proofTitle="Why facility managers and procurement teams consolidate to one concrete vendor."
        proofSubtitle="Vendor proliferation across sites is expensive. Three subs across 14 sites means three of everything — invoices, insurance, escalation paths, scheduling calls. Consolidation pays off four ways."
        proof={PROOF}
        servicesTitle="Multi-site concrete services we run."
        servicesIntro="Most enterprise programs are dumpster-pad-anchored with parking lot, repair, and resealing layered in. New builds happen as the portfolio expands."
        services={SERVICES}
        relatedTitle="Resources for facility and procurement teams."
        related={RELATED}
        ctaPrimaryLabel="Schedule a Multi-Site Conversation"
        ctaPrimaryHref="/book/discovery-call-enterprise"
        ctaTitle="Got a Utah portfolio that needs a single concrete vendor?"
        ctaBody="60-minute discovery call to walk through your portfolio, current vendor mix, and pain points. We'll tell you straight whether we're the right fit and what a 12-month program looks like."
        faqs={FAQS}
      />
    </>
  );
}
