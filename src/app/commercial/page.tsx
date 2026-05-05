import type { Metadata } from "next";
import { SiloLandingTemplate } from "@/components/pages/SiloLandingTemplate";
import {
  breadcrumbListSchema,
  faqPageSchema,
} from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/commercial";

export const metadata: Metadata = {
  title: "Commercial Concrete Contractor Utah | Zion CS",
  description:
    "Commercial concrete across Utah. Retail centers, multi-family, industrial, parking lots, ADA. On-schedule pours, direct crew, single accountable team.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Commercial Concrete Contractor in Utah — Retail, Multi-Family, Industrial",
    description:
      "Utah commercial concrete. Parking lots, ADA sidewalks, foundations, industrial slabs. On-schedule, code-compliant.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question:
      "What's your typical commercial project size — small or large?",
    answer:
      "Small to mid-commercial is our sweet spot — retail centers, multi-family residential, light industrial, dumpster pads, ADA upgrades. Project values typically run $50K–$500K. Larger projects (multi-acre parking lots, big-box retail, heavy industrial) exceed our crew capacity for most timelines; we either decline or partner. Tell us your project size on the discovery call and we'll tell you straight whether we're the right fit.",
  },
  {
    question:
      "Do you carry the insurance and bonding required for commercial work?",
    answer:
      "Yes — standard commercial general liability + workers' comp + auto liability. We provide certificates of insurance directly when requested. Performance and payment bonds are project-specific and we evaluate per project. Send us your subcontractor packet and we'll mark off the requirements you've got — usually faster than the back-and-forth most subs make you do.",
  },
  {
    question: "How do you handle phased pours for retail sites that stay open?",
    answer:
      "Phased pours are routine for us. We've done retail center work where 3 of 5 storefronts stayed open during the project — pours scheduled overnight where access requires, customer routing coordinated with the property manager, signage staged for each phase. The constraint is usually scheduling around store hours and HVAC/utility shutoffs; the actual concrete work isn't the bottleneck.",
  },
  {
    question: "Can you handle ADA compliance and sign-off?",
    answer:
      "Yes. ADA-compliant slope (≤8.33% running, ≤2% cross), detectable warning surface installation, ramp landing dimensions, doorway transitions — all to current IBC + ADA standards. We verify slope with a digital level after forms are set and again after pour. Inspector sign-off is the team's responsibility, not yours.",
  },
  {
    question: "What's your typical commercial project lead time?",
    answer:
      "Spring through fall: 3–8 weeks from quote acceptance to pour start, depending on scope and our existing schedule. Winter projects need warmer windows and book around weather. Multi-phase projects schedule per phase as the project progresses. Hard deadlines are workable; tell us the constraint on the discovery call.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Commercial" },
];

const PROOF = [
  {
    eyebrow: "01 / SCHEDULE DISCIPLINE",
    title: "Critical-path-aware sequencing.",
    body: "Commercial schedules cascade across multiple trades. We pour around your weather windows, your inspection deadlines, and your tenant access constraints. Pour windows confirmed 3–5 days out from the forecast.",
  },
  {
    eyebrow: "02 / CODE-CORRECT",
    title: "ADA + IBC + Utah-specific.",
    body: "ADA-compliant slopes verified with a digital level. IBC-compliant rebar grids and PSI specs. Utah-specific subgrade prep for clay soils and frost depths that vary by region. Inspector sign-off is our responsibility.",
  },
  {
    eyebrow: "03 / DIRECT CREW",
    title: "No farmed-out subbing.",
    body: "The crew on your site is our crew. We don't farm out the actual pour to whoever's available. The project manager who quoted the job is the project manager who runs it. One point of contact for the duration.",
  },
  {
    eyebrow: "04 / RFP-FRIENDLY",
    title: "Procurement-ready proposals.",
    body: "Insurance certificates, references at scale, schedule discipline data, change-order history — all packaged in a format your procurement team can actually evaluate. We don't make you chase paperwork.",
  },
];

const SERVICES = [
  {
    number: "01",
    href: "/services/commercial-flatwork-parking-lots-sidewalks",
    name: "Commercial Flatwork",
    description:
      "Parking lots, sidewalks, ADA ramps — phased pours that maintain construction access",
  },
  {
    number: "02",
    href: "/services/industrial-concrete-foundations-utah",
    name: "Foundations & Footings",
    description:
      "Industrial slabs, structural foundations, soil-prepped for Utah conditions",
  },
  {
    number: "03",
    href: "/services/dumpster-pad-trash-enclosure-concrete-utah",
    name: "Dumpster Pads & Enclosures",
    description: "Standardized 6-inch commercial pads with steel post anchoring",
  },
  {
    number: "04",
    href: "/services/sidewalks-curbing-utah",
    name: "Sidewalks & Curbing",
    description: "ADA-compliant municipal and commercial sidewalk work",
  },
];

const RELATED = [
  {
    href: "/blog/utah-soil-conditions-commercial-foundations",
    eyebrow: "FOUNDATIONAL · 9 MIN",
    title: "Utah soil conditions and your commercial concrete foundation",
    description:
      "Clay-heavy Davis County. Expansive soils on the foothills. Why commercial foundations need Utah-specific subgrade prep.",
  },
  {
    href: "/blog/commercial-concrete-pour-scheduling",
    eyebrow: "PROCESS GUIDE · 8 MIN",
    title: "Commercial concrete scheduling: how we hit your critical path",
    description:
      "Sequencing pours around weather, inspections, and tenant access without becoming the schedule risk.",
  },
  {
    href: "/blog/evaluating-commercial-concrete-subs",
    eyebrow: "DECISION FRAMEWORK · 10 MIN",
    title: "Evaluating commercial concrete subs: a procurement guide",
    description:
      "References, capacity, change-order history, Utah-specific competence — what to actually verify.",
  },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Commercial", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function CommercialPage() {
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
        eyebrow="ZIONCS://SILO · COMMERCIAL"
        title="Commercial concrete contractor in Utah."
        lead="Retail centers, multi-family residential, light industrial, ADA work across the Wasatch Front and St. George. Phased pours that maintain access during construction. Code-compliant, on-schedule, single accountable crew."
        proofTitle="Why commercial GCs and property owners work with us."
        proofSubtitle="Commercial concrete is a different sport than residential. Schedule risk, code compliance, procurement requirements, and the cost of a single missed pour all carry more weight."
        proof={PROOF}
        servicesTitle="Commercial flatwork stack."
        servicesIntro="Parking lot to foundation to dumpster pad — full scope, single team."
        services={SERVICES}
        relatedTitle="Commercial-track journal articles."
        related={RELATED}
        ctaPrimaryLabel="Book a Commercial Discovery Call"
        ctaPrimaryHref="/book/discovery-call-commercial"
        ctaTitle="Commercial project on the horizon?"
        ctaBody="Book a 45-minute discovery call to walk through scope, timeline, and procurement requirements. Or request a written quote if you've got specs ready."
        faqs={FAQS}
      />
    </>
  );
}
