import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";
import {
  breadcrumbListSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/structured-data";

const PAGE_URL =
  "https://zioncs.com/services/dumpster-pad-trash-enclosure-concrete-utah";
const SLUG = "dumpster-pad-trash-enclosure-concrete-utah";

export const metadata: Metadata = {
  title: "Dumpster Pad Concrete Utah | Zion CS",
  description:
    "Dumpster pads and trash enclosures across Utah. Designed for waste-truck loads, retail/multi-family code, and multi-site rollouts. Single contractor.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Dumpster Pad & Trash Enclosure Concrete in Utah",
    description:
      "Concrete dumpster pads and trash enclosures for retail, multi-family, and industrial portfolios. Multi-site rollouts and one-off installs.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "What size should a dumpster pad be?",
    answer:
      "Depends on the dumpster. A standard 4-yard dumpster needs roughly a 10×10 ft pad with 4 ft of clear space around for the truck arm. 6-yard and 8-yard dumpsters scale up to 12×12 ft minimum. Trash enclosures with two side-by-side dumpsters typically run 12×24 ft. We size each pad to the equipment plus the access route.",
  },
  {
    question: "How thick should a dumpster pad be?",
    answer:
      "6 inches minimum for commercial dumpster pads. Some site conditions and heavier waste trucks call for 7 or 8 inches. Residential trash-collection points (which are rare — usually it's just a designated curb area) can run 4 inches. Pad thickness is non-negotiable on the heavy side; thinner pads crack within 2–3 years from waste-truck loading.",
  },
  {
    question: "Do you build the steel enclosure too?",
    answer:
      "We pour the concrete pad with anchor bolts placed for the enclosure posts and we coordinate with steel/fence subcontractors for the actual enclosure. Some enterprise clients have an in-house steel program; we work with their team. We can also recommend Wasatch Front steel subs we've worked with on multi-site programs.",
  },
  {
    question: "Can you do trash-pad replacements without disrupting service?",
    answer:
      "Yes — usually with a 5-day window. We replace the pad in a single day, but the concrete needs 24 hours walkable + 7 days drive-on safe before the dumpster comes back. For sites that can't go without service for 7 days, we coordinate a temporary pickup location with the waste hauler or pour the replacement in a phased section while service continues on the existing pad.",
  },
  {
    question: "What's the cost difference between one-off and multi-site pricing?",
    answer:
      "Multi-site programs run 15–30% lower per-site than one-off pricing on the same work. Savings come from mobilization (one trip, multiple sites), standardized specs (no per-site engineering), and rolling schedules (we slot sites into existing pour days vs. dedicated trips). Specific number depends on portfolio size and work mix — discovery call covers it.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Dumpster Pads & Enclosures" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Services", url: "https://zioncs.com/services" },
  { name: "Dumpster Pads & Trash Enclosures", url: PAGE_URL },
]);

const serviceJsonLd = serviceSchema({
  name: "Dumpster Pad and Trash Enclosure Concrete",
  description:
    "Commercial dumpster pads and trash enclosure concrete across Utah. Designed for waste-truck loads, multi-site rollouts, and standardized portfolio specs.",
  provider: "Zion Concrete Specialists",
  areaServed: "Utah",
  url: PAGE_URL,
});

const faqJsonLd = faqPageSchema(FAQS);

export default function DumpsterPadsPage() {
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
        eyebrow="ZIONCS://SERVICE · DUMPSTER PADS"
        heroImage="/images/services/img-12-dumpster-pads.png"
        title="Dumpster pads + trash enclosures — multi-site or one-off."
        lead="Commercial dumpster pads and trash enclosure concrete across Utah. Designed for waste-truck loads, retail and multi-family code requirements, and multi-site rollouts where consistency across sites matters more than any individual pour."
        spec={{
          title: "DUMPSTER PAD",
          rows: [
            { key: "CONCRETE", value: "4,500 PSI · air-entrained" },
            {
              key: "THICKNESS",
              value: "6″ standard · 7–8″ heavy-load sites",
            },
            {
              key: "REINFORCEMENT",
              value: "#4 rebar grid 12″ on center · doweled at edges",
            },
            {
              key: "BASE",
              value: "6″ compacted aggregate base",
            },
            {
              key: "ANCHORS",
              value: "Steel post anchors · pre-cast for enclosure",
            },
            {
              key: "FINISH",
              value: "Broom · scored for drainage",
            },
            {
              key: "DIMENSIONS",
              value: "10×10 typical · 12×24 dual-dumpster",
            },
            {
              key: "WARRANTY",
              value: "Workmanship — 2 year",
            },
          ],
          footnote: "POST-ANCHOR PATTERN MATCHES YOUR ENCLOSURE SPEC",
        }}
        faqs={FAQS}
        relatedSlugs={[
          "commercial-flatwork-parking-lots-sidewalks",
          "industrial-concrete-foundations-utah",
          "sidewalks-curbing-utah",
          "residential-concrete-repair-utah",
        ]}
        currentSlug={SLUG}
        ctaTitle="Multi-site dumpster pad project?"
        ctaBody="Tell us how many sites and the timeline. We'll send a written program proposal with per-site pricing and a rolling schedule."
        ctaSecondaryHref="/book/discovery-call-enterprise"
        ctaSecondaryLabel="Schedule a Multi-Site Conversation"
      >
        <div className="space-y-6 text-anthracite/85 text-lg leading-relaxed">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm not-italic">
            01 / OVERVIEW
          </p>
          <p>
            Dumpster pads are the highest-volume enterprise concrete
            work in Utah. Every retail center, multi-family
            development, and light-industrial site has at least one
            — most have two or three. They take heavy waste-truck
            loading every week, stand exposed to chemical leakage
            from waste, and have to meet code for enclosure
            screening in most municipalities.
          </p>
          <p>
            We pour them as one-off installs and — more often — as
            part of multi-site programs across portfolios. Our
            current biggest enterprise program covers 14 sites with
            standardized 6-inch pads on a rolling schedule. The
            economics shift dramatically once you&rsquo;re past 3–4
            sites; consolidating to one vendor pays off in
            mobilization, scheduling, and reporting.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            02 / WHAT&rsquo;S DIFFERENT ABOUT DUMPSTER PADS
          </p>
          <ul className="space-y-2 text-base">
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                <strong>Heavy point loads</strong> — waste trucks
                land their forks on the pad with 8,000+ lbs of
                concentrated weight. Pad thickness and reinforcement
                spec for impact, not just static load.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                <strong>Chemical exposure</strong> — leachate from
                waste, cleaning chemicals, oil and grease all
                attack concrete sealers and surface paste. Air-
                entrained mix is essential; resealing on a tighter
                cadence than other commercial concrete.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                <strong>Drainage and scoring</strong> — pads are
                scored to drain liquids away from the enclosure
                walls and toward existing site drainage. Standing
                water under a dumpster accelerates deterioration.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                <strong>Enclosure post anchors</strong> — most
                municipalities require dumpster screening, which
                means steel posts anchored into the pad. We pre-set
                anchors to match your steel/fence sub&rsquo;s spec.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                <strong>ADA pedestrian access</strong> — some
                multi-family and retail sites require an accessible
                walkway from the property to the enclosure for
                resident/tenant access. We integrate the walkway
                into the pad pour where required.
              </span>
            </li>
          </ul>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            03 / MULTI-SITE PROGRAMS
          </p>
          <p>
            Most of our dumpster-pad work runs as part of a
            multi-site program. Standardized spec across the portfolio
            so every site gets the same pad. Rolling schedule across
            the warm-weather pour window. Single point of contact for
            the whole program. Quarterly reporting on completed sites
            and items recommended for next quarter.
          </p>
          <p>
            Detail in our{" "}
            <Link href="/multi-site">
              multi-site silo page
            </Link>{" "}
            and the{" "}
            <Link href="/blog/multi-site-concrete-maintenance-programs">
              facility manager&rsquo;s guide to multi-site concrete
              programs
            </Link>
            .
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            04 / ONE-OFF INSTALLS
          </p>
          <p>
            We also pour single dumpster pads — replacement of a
            failing pad at a one-off site, new pad for a site
            expansion, or the dumpster portion of a larger commercial
            project. Same spec, just project-priced rather than
            program-priced.
          </p>
        </div>
      </ServicePageTemplate>
    </>
  );
}
