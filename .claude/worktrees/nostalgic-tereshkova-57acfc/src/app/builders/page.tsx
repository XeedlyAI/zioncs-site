import type { Metadata } from "next";
import { SiloLandingTemplate } from "@/components/pages/SiloLandingTemplate";
import {
  breadcrumbListSchema,
  faqPageSchema,
} from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/builders";

export const metadata: Metadata = {
  title: "Concrete Subcontractor Utah | Zion CS",
  description:
    "Reliable flatwork sub for Utah builders. Spec homes, custom builds, multi-family. Hit your schedule, no callbacks, full residential flatwork scope.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Concrete Subcontractor for Utah Builders — Driveways to Foundations",
    description:
      "Flatwork subcontractor for Utah builders. Spec homes, custom builds, multi-family residential.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "Do you take on spec home builders, or just custom?",
    answer:
      "Both. We work spec home developments (typically 4–40 units), custom one-offs, and multi-family residential up to ~50 units. The crew sequencing is different for each — spec runs in repeating phases across many units; custom is unit-by-unit. Tell us the project type when you book the discovery call and we'll tell you whether we're set up for the schedule you need.",
  },
  {
    question: "How do you handle pricing for builder work vs one-off residential?",
    answer:
      "Builder pricing is volume-discounted from one-off residential. We don't publish the structure because it depends on project count, mobilization frequency, payment terms, and exclusivity. The discovery call covers all of it — we hand over a proposal that's built around your actual project shape, not a generic price sheet.",
  },
  {
    question: "What's your callback rate?",
    answer:
      "We don't have a published number — most subs that quote one are guessing. What we'll tell you: workmanship issues that come back to us during the warranty period are rare, and when they do, we come back and fix them on our schedule, not yours. Our business depends on builders inviting us back to the next project — callbacks burn that.",
  },
  {
    question: "Can you handle a hard close-of-escrow deadline?",
    answer:
      "Usually yes. The constraint is weather (winter pours need windows above freezing) and ready-mix availability (peak season is busier). We schedule pours in week-long target windows and confirm specific dates 3–5 days out from the forecast. If your deadline is hard and the weather doesn't cooperate, we'll tell you straight rather than promise a date we can't hit.",
  },
  {
    question: "Do you carry the insurance and bonding our GC requires?",
    answer:
      "Yes — standard Utah residential and commercial contractor liability + workers' comp. We provide certificates of insurance directly when requested. Bonding is project-specific; we evaluate per project. Send us your subcontractor packet and we'll mark off the requirements you've got — usually faster than the back-and-forth most subs make you do.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "For Builders" },
];

const PROOF = [
  {
    eyebrow: "01 / SCHEDULE DISCIPLINE",
    title: "We hit your dates.",
    body: "Builder schedules cascade — your concrete date drives framing, electrical, drywall, finish carpentry. We confirm pour windows 3–5 days out from the forecast and stay in motion through cure. No phone-tag.",
  },
  {
    eyebrow: "02 / NO CALLBACKS",
    title: "Workmanship that holds.",
    body: "Callbacks burn your reputation and your margin. Subgrade prep, air-entrainment, joint placement, cure schedule — we get them right the first time so the new homeowner isn't calling you about hairline cracks at the 6-month mark.",
  },
  {
    eyebrow: "03 / FULL RESIDENTIAL SCOPE",
    title: "One sub, every flatwork need.",
    body: "Driveway aprons, sidewalks, patios, walkways, ADA ramps, foundations, footings. One PO for the package, one mobilization, one point of contact — instead of three subs you have to coordinate.",
  },
  {
    eyebrow: "04 / BUILDER-RATE PROPOSALS",
    title: "Pricing built for volume.",
    body: "We treat builder relationships differently from one-off residential. Volume discounts, structured payment terms, exclusivity options. The proposal is built around your project shape — discovery call first, then the number.",
  },
];

const SERVICES = [
  {
    number: "01",
    href: "/services/concrete-driveways-utah",
    name: "Driveways & Aprons",
    description: "Spec home + custom driveways, residential standard + heavier-load",
  },
  {
    number: "02",
    href: "/services/sidewalks-curbing-utah",
    name: "Sidewalks & Walkways",
    description: "Front walks, side walks, back-of-house — ADA-compliant where required",
  },
  {
    number: "03",
    href: "/services/concrete-patios-utah",
    name: "Patios",
    description: "Standard residential patios, custom shapes, integrated with adjacent work",
  },
  {
    number: "04",
    href: "/services/industrial-concrete-foundations-utah",
    name: "Foundations & Footings",
    description: "Residential foundations, garage slabs, soil-prepped for Utah conditions",
  },
];

const RELATED = [
  {
    href: "/blog/how-to-vet-a-concrete-subcontractor",
    eyebrow: "FRONT-DOOR · 9 MIN",
    title: "How to vet a concrete subcontractor: a builder's 7-question test",
    description:
      "Seven questions to ask, three red flags to spot, the framework experienced GCs use before signing a sub.",
  },
  {
    href: "/blog/concrete-sub-reliability-vs-lowest-bid",
    eyebrow: "DECISION FRAMEWORK · 7 MIN",
    title: "Sub reliability vs the lowest bid: how builders should weigh it",
    description:
      "The lowest concrete bid usually costs more in the end. How to model the real cost across schedule, callbacks, and reputation risk.",
  },
  {
    href: "/blog/common-concrete-sub-failures",
    eyebrow: "DIAGNOSTIC · 8 MIN",
    title: "Common concrete sub failures (and how to spot them before closing)",
    description:
      "The five failure modes that show up at closing — and the warning signs experienced builders catch during the pour, not after.",
  },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "For Builders", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function BuildersPage() {
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
        eyebrow="ZIONCS://SILO · BUILDER"
        title="Concrete subcontractor for Utah builders."
        lead="Reliable flatwork sub for spec home developments, custom builds, and multi-family residential across the Wasatch Front. Hit your schedule, no callbacks, full residential flatwork scope under one PO."
        proofTitle="Why builders work with us."
        proofSubtitle="We're a sub. We know what builders need. The four things below are what every GC who works with us repeats back to us — and what gets us invited to the next project."
        proof={PROOF}
        servicesTitle="The flatwork stack we deliver to builders."
        servicesIntro="Driveway through foundation, one team, one PO."
        services={SERVICES}
        relatedTitle="Resources for builders evaluating subs."
        related={RELATED}
        ctaPrimaryLabel="Book a Discovery Call"
        ctaPrimaryHref="/book/discovery-call-builder"
        ctaTitle="Got a project pipeline coming up?"
        ctaBody="Book a 30-minute discovery call — we'll walk through your project type, timeline, and pricing structure. Or request a quote if you've already got specs."
        faqs={FAQS}
      />
    </>
  );
}
