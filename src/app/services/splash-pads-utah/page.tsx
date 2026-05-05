import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";
import {
  breadcrumbListSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/services/splash-pads-utah";
const SLUG = "splash-pads-utah";

export const metadata: Metadata = {
  title: "Splash Pads Utah | Zion CS",
  description:
    "Backyard concrete splash pads in Utah. Engineered for water, sloped to drain, textured for grip. Coordinated with your splash-pad fixture vendor.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Splash Pads in Utah — Backyard Water Features",
    description:
      "Residential concrete splash pads engineered for Utah summers. Properly drained, textured, fixture-ready.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "How is a splash pad different from a regular patio?",
    answer:
      "Three things. First — drainage. The slab slopes to a center drain or off-pad french drain, never standing water. Second — texture. Non-slip surface for wet feet, especially kids. Third — fixture coordination. The plumbing, manifold, and water-feature nozzles get pre-set in the slab. We work with your splash-pad-feature vendor on the layout before pouring.",
  },
  {
    question: "What size splash pads do you build?",
    answer:
      "Residential splash pads typically run 12×12 to 20×20 ft. Smaller pads (under 12×12) limit the water-feature placements and don't give kids enough room to spread out. Larger pads (over 20×20) become commercial-scale and need bigger drainage infrastructure. The vendor's feature plan drives the dimensions.",
  },
  {
    question: "Do you handle the water-feature plumbing?",
    answer:
      "We pour the slab and pre-set conduits and the manifold cavity. The actual splash-pad fixture system (pumps, manifold, nozzles, control box) comes from a specialty vendor — most of our clients use one of two regional vendors and we coordinate with them directly on the cavity dimensions and supply-line placement.",
  },
  {
    question: "Will the surface be safe for bare feet in summer?",
    answer:
      "Yes — we use a stamped texture or broom finish (never smooth trowel) and the surface stays cool enough in shade. Direct Utah summer sun on dark-stained concrete can hit 130°F+; we recommend a lighter color for splash pads specifically. The constant water also keeps the surface temperature manageable during use.",
  },
  {
    question: "What's the typical timeline?",
    answer:
      "Roughly 7–10 days from demo to walkable cure for the concrete portion. Splash-pad fixture install (pumps, plumbing, control system) is a separate phase scheduled after the concrete cures — typically 7 days post-pour. Total project from start to first water: 2–3 weeks depending on the vendor's fixture lead time.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Splash Pads" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Services", url: "https://zioncs.com/services" },
  { name: "Splash Pads", url: PAGE_URL },
]);

const serviceJsonLd = serviceSchema({
  name: "Splash Pad Concrete Installation",
  description:
    "Residential concrete splash pads in Utah — drainage-engineered, fixture-ready slab work.",
  provider: "Zion Concrete Specialists",
  areaServed: "Utah",
  url: PAGE_URL,
});

const faqJsonLd = faqPageSchema(FAQS);

export default function SplashPadsPage() {
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
        eyebrow="ZIONCS://SERVICE · 09 / SPLASH PADS"
        heroImage="/images/services/img-36-splash-pads.png"
        title="Splash pads — backyard water features for Utah summers."
        lead="Splash pads are concrete with a job: get water on it, drain it fast, keep it grippy. The slab work is straightforward; the fixture coordination is what separates a splash pad that runs for a decade from one that pools water in the wrong spot. We pour the concrete, pre-set the manifold and conduit, and hand off to your fixture vendor."
        spec={{
          title: "SPLASH PAD"
          ,
          rows: [
            { key: "CONCRETE", value: "4,000 PSI · air-entrained" },
            { key: "THICKNESS", value: "4″ standard" },
            { key: "REINFORCEMENT", value: "#3 rebar grid 18″ on center" },
            { key: "DRAINAGE", value: "Center drain or off-pad french drain" },
            { key: "SLOPE", value: "1/4″ per ft toward drain" },
            { key: "FINISH", value: "Stamped texture or broom · non-slip" },
            { key: "FIXTURE EMBEDS", value: "Manifold cavity + supply conduit" },
            { key: "WARRANTY", value: "Workmanship — 2 year" },
          ],
          footnote: "SPLASH-PAD FIXTURES + PLUMBING COORDINATED VIA PARTNER VENDOR",
        }}
        faqs={FAQS}
        relatedSlugs={[
          "pool-decks-utah",
          "concrete-patios-utah",
          "sport-courts-utah",
          "stamped-decorative-concrete-utah",
        ]}
        currentSlug={SLUG}
      >
        <div className="space-y-6 text-anthracite/85 text-lg leading-relaxed">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm not-italic">
            01 / OVERVIEW
          </p>
          <p>
            Backyard splash pads are an alternative to a pool — lower
            cost, faster install, no fence requirement, no lifeguard
            anxiety. The concrete portion runs us 7 to 10 days; the
            fixture install (pumps, manifold, nozzles, control box) is
            a separate phase your specialty vendor handles after our
            slab cures. Our job is to make sure the slab is ready for
            their work.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            02 / WHAT&rsquo;S INCLUDED
          </p>
          <ul className="space-y-2 text-base">
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Site walk + coordination with your splash-pad fixture vendor</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Excavation, drainage planning (center drain or french drain to existing site grade)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Forms, rebar, embeds for the manifold cavity and water-supply conduit</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>4,000 PSI air-entrained pour at 1/4 inch per foot slope toward drain</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Stamped or broom texture for non-slip surface</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Cure schedule + handoff to fixture vendor at day 7</span>
            </li>
          </ul>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            03 / FIXTURE COORDINATION
          </p>
          <p>
            Splash pads only work if the slab is laid out for the
            fixture system. We work with your specialty vendor before
            we pour — manifold cavity dimensions, supply-line conduit
            placement, drain location relative to the spray pattern.
            Most clients work with one of two regional Utah vendors;
            we&rsquo;ve done enough projects with each that the
            handoff is routine.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            04 / RELATED RESIDENTIAL WORK
          </p>
          <p>
            Splash pads pair naturally with{" "}
            <Link
              href="/services/pool-decks-utah"
              className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
            >
              pool decks
            </Link>{" "}
            (often the same backyard project),{" "}
            <Link
              href="/services/concrete-patios-utah"
              className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
            >
              patios
            </Link>{" "}
            extending the surrounding hardscape, and{" "}
            <Link
              href="/services/stamped-decorative-concrete-utah"
              className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
            >
              stamped concrete
            </Link>{" "}
            borders to soften the look.
          </p>
        </div>
      </ServicePageTemplate>
    </>
  );
}
