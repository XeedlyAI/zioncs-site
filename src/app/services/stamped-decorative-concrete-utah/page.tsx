import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";
import {
  breadcrumbListSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/structured-data";

const PAGE_URL =
  "https://zioncs.com/services/stamped-decorative-concrete-utah";
const SLUG = "stamped-decorative-concrete-utah";

export const metadata: Metadata = {
  title: "Stamped Concrete Utah | Zion CS",
  description:
    "Stamped, dyed, and decorative concrete across Utah. Patios, driveways, pool decks. Patterns and finishes that look great and stand up to Utah weather.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Stamped & Decorative Concrete in Utah — Patios, Driveways, Pool Decks",
    description:
      "Stamped patterns, integral and topical color, decorative finishes. Built for Utah's freeze-thaw — and built to look great.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "What stamped patterns do you offer?",
    answer:
      "Slate, cobblestone, European fan, ashlar, brick, wood plank, and seamless texture. We carry the most-requested mats in-house and source specialty patterns when a project calls for one. Pattern choice changes how a driveway, patio, or pool deck reads — we walk through samples before quoting.",
  },
  {
    question: "Will stamped concrete fade or wear out in Utah?",
    answer:
      "Done right, no — not within the first decade. The keys are: integral color (mixed into the slab) plus a release agent on the pattern, sealed with a high-quality acrylic sealer, and resealed every 2–3 years. UV in Utah is intense, especially in St. George, so resealing matters more here than in cloudier climates. We hand the maintenance schedule over with the project.",
  },
  {
    question: "How much more does stamped concrete cost than plain?",
    answer:
      "Typically 30–60% more per square foot than a broom-finish pour, depending on pattern complexity, color count, and whether it's a borders-only stamp or a full-surface pattern. Color and sealer are included in the quote. Every project is different — request a quote for an exact number.",
  },
  {
    question: "Can stamped concrete go over an existing slab?",
    answer:
      "Sometimes. If your existing slab is structurally sound (no major cracks, no settling, surface in good shape), we can do an overlay — a 1/4 to 3/8 inch decorative overlay stamped and colored on top. Failed slabs need full removal and a new pour. We assess on-site before quoting.",
  },
  {
    question: "Does stamped concrete get slippery when wet?",
    answer:
      "It can — patterns with smooth peaks (slate, brick) are slicker than textured ones (slate texture, seamless stone). For pool decks and walkways we use a non-slip additive in the sealer. For driveways we typically don't add it because winter sand traction beats anti-slip texture for those surfaces.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Stamped & Decorative" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Services", url: "https://zioncs.com/services" },
  { name: "Stamped & Decorative Concrete", url: PAGE_URL },
]);

const serviceJsonLd = serviceSchema({
  name: "Stamped and Decorative Concrete",
  description:
    "Stamped, integrally-colored, and decoratively-finished concrete across Utah for patios, driveways, and pool decks.",
  provider: "Zion Concrete Specialists",
  areaServed: "Utah",
  url: PAGE_URL,
});

const faqJsonLd = faqPageSchema(FAQS);

export default function StampedPage() {
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
        eyebrow="ZIONCS://SERVICE · 02 / STAMPED & DECORATIVE"
        title="Stamped and decorative concrete across Utah."
        lead="Stamped patterns, integral and topical color, decorative borders, exposed aggregate. The high-margin residential category that turns a flatwork project into the centerpiece of a yard. We do it on driveways, patios, pool decks, and entryways — built for Utah weather, built to look right."
        spec={{
          title: "STAMPED CONCRETE",
          rows: [
            { key: "CONCRETE", value: "4,000 PSI · air-entrained" },
            { key: "BASE THICKNESS", value: "Same as underlying spec" },
            { key: "COLOR", value: "Integral + release · 1–3 colors" },
            { key: "PATTERN", value: "Slate · cobblestone · brick · ashlar +" },
            { key: "SEALER", value: "Acrylic, UV-rated, reseal 2–3yr" },
            { key: "BORDER OPTIONS", value: "Standard · custom · contrasting" },
            { key: "CURE / SEAL", value: "7d cure before sealer applied" },
            { key: "WARRANTY", value: "Workmanship — 2 year" },
          ],
          footnote: "OVERLAY OPTION AVAILABLE FOR SOUND EXISTING SLABS",
        }}
        faqs={FAQS}
        relatedSlugs={[
          "concrete-driveways-utah",
          "concrete-patios-utah",
          "pool-decks-utah",
          "sport-courts-utah",
        ]}
        currentSlug={SLUG}
        ctaTitle="Want a stamped or decorative finish?"
        ctaBody="Tell us the surface, dimensions, and the pattern direction you're considering. We'll walk you through samples and come back with a written number."
      >
        <div className="space-y-6 text-anthracite/85 text-lg leading-relaxed">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm not-italic">
            01 / OVERVIEW
          </p>
          <p>
            Stamped concrete is the difference between a slab that does its
            job and a slab people stop and notice. We&rsquo;ve been doing
            stamped finishes since the early days of the company —
            originally as part of pool-deck builds, where the deck visually
            ties the entire backyard together. Now we do stamped driveways,
            patios, entryways, and decorative borders across Utah.
          </p>
          <p>
            The technical layer is the same as a standard pour: 4,000 PSI
            air-entrained concrete, proper subgrade and reinforcement,
            joints cut for movement. The decorative layer adds: integral
            color (pigment mixed into the wet mix), a contrasting release
            agent (powder or liquid that adds depth and antiquing), the
            pattern stamped while the concrete is plastic, and a UV-rated
            sealer applied after a 7-day cure.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            02 / WHERE STAMPED WORKS BEST
          </p>
          <ul className="space-y-2 text-base">
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                <strong>Pool decks</strong> — slate or seamless texture,
                non-slip sealer additive (origin business — see{" "}
                <Link
                  href="/services/pool-decks-utah"
                  className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
                >
                  pool decks
                </Link>
                )
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                <strong>Patios</strong> — full-pattern or stamped border with
                broom-finish field for cost balance
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                <strong>Driveways</strong> — high-impact upgrade, often a
                stamped border around a broom-finish field
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                <strong>Entryways and walkways</strong> — small-area projects
                with the biggest visual return
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                <strong>Commercial entries</strong> — stamped borders or
                medallions on retail entries; ADA-compliant texture matters
                here
              </span>
            </li>
          </ul>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            03 / OVERLAYS VS NEW POURS
          </p>
          <p>
            If your existing slab is sound, a 1/4 to 3/8 inch decorative
            overlay can stamp over the top without removing the original
            concrete. It saves the demo cost and the disposal fee. We assess
            the slab during the site walk — surface integrity, cracks,
            settling, drainage — and recommend overlay or full pour
            honestly. Overlays don&rsquo;t fix structural problems; if the
            slab below is failing, an overlay just buys you a season.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            04 / MAINTENANCE
          </p>
          <p>
            Stamped concrete needs a reseal every 2–3 years for long-term
            color and weather protection. UV in Utah is harsh, especially in
            St. George — sun fade is the main wear factor. Power-wash
            annually, reseal on the schedule, and stamped surfaces hold up
            for decades. We hand over the maintenance schedule and product
            recommendations with the final walkthrough.
          </p>
        </div>
      </ServicePageTemplate>
    </>
  );
}
