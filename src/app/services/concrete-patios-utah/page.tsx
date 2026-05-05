import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";
import {
  breadcrumbListSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/services/concrete-patios-utah";
const SLUG = "concrete-patios-utah";

export const metadata: Metadata = {
  title: "Concrete Patios Utah | Zion CS",
  description:
    "Concrete patios across Utah — broom finish, stamped, decorative borders. Built to handle Wasatch Front winters. Quote-driven, two-year workmanship warranty.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Patios in Utah — Outdoor Living Built to Last",
    description:
      "Outdoor concrete patios in Utah — broom, stamped, or decorative. Built for Utah weather and the way you actually use the space.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "What size patio should I plan for?",
    answer:
      "Depends on use. A small conversation patio (4 chairs + a small table) is around 12×12 ft (144 sq ft). A dining patio that fits a 6-person table plus chairs needs 16×16 ft minimum. A patio with a grill, lounge seating, and a table can easily run 20×24 ft (480 sq ft) without feeling oversized. We talk through the use case during the site walk and lay out dimensions before quoting.",
  },
  {
    question: "Should the patio be flush with the house or stepped down?",
    answer:
      "Stepped down by 1–2 inches at the door is the standard — it prevents water from running back toward the foundation and matches code expectations. Flush patios look cleaner but require very careful drainage planning. We default to stepped unless there's a specific reason to do flush (covered patio, in-line slider threshold).",
  },
  {
    question: "How thick should a residential patio be?",
    answer:
      "4 inches is standard for residential foot-traffic patios. We bump to 5 inches if the patio will hold a hot tub, a heavy outdoor kitchen, or a fire pit with stone surround. Reinforcement is the same #3 rebar grid as a driveway, on tighter centers if the patio is irregular shape.",
  },
  {
    question: "Can I add a patio to an existing slab?",
    answer:
      "Yes — extending an existing patio with new concrete is common. We saw-cut the existing edge clean, dowel rebar between the old and new sections so they move together, and pour with a control joint at the seam. The seam will be visible (different concrete colors and textures age differently) but the structure is solid.",
  },
  {
    question: "Will a stamped patio look dated in 10 years?",
    answer:
      "Pattern fashions shift, but classic patterns (slate, ashlar, large flagstone) age gracefully. Trendier patterns (printed wood plank, very specific brick patterns) date faster. We talk you through pattern choices that hold up visually as well as physically. Color-wise, neutral earth tones outlast bright stains.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Concrete Patios" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Services", url: "https://zioncs.com/services" },
  { name: "Concrete Patios", url: PAGE_URL },
]);

const serviceJsonLd = serviceSchema({
  name: "Concrete Patio Installation",
  description:
    "Residential concrete patios across Utah — broom, stamped, and decorative finishes for outdoor living spaces.",
  provider: "Zion Concrete Specialists",
  areaServed: "Utah",
  url: PAGE_URL,
});

const faqJsonLd = faqPageSchema(FAQS);

export default function PatiosPage() {
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
        eyebrow="ZIONCS://SERVICE · 04 / PATIOS"
        title="Concrete patios — outdoor living built for Utah weather."
        lead="A patio is the most-used outdoor surface a Utah home has — dinners in summer, fire-pit evenings in fall, snow-shoveled walkway in winter, table-and-chairs setup in spring. We size, finish, and detail patios so they hold up to all four seasons and look right against your house."
        spec={{
          title: "RESIDENTIAL PATIO",
          rows: [
            { key: "CONCRETE", value: "4,000 PSI · air-entrained" },
            { key: "THICKNESS", value: "4″ standard / 5″ heavy load" },
            { key: "REINFORCEMENT", value: "#3 rebar grid 18″ on center" },
            { key: "BASE", value: "4–6″ compacted base" },
            { key: "SLOPE", value: "1/8″ per ft away from house" },
            { key: "FINISH", value: "Broom · stamped · exposed aggregate" },
            { key: "JOINTS", value: "Control joints · 8–10 ft" },
            { key: "CURE TIME", value: "24h walkable · 7d furniture" },
            { key: "WARRANTY", value: "Workmanship — 2 year" },
          ],
        }}
        faqs={FAQS}
        relatedSlugs={[
          "stamped-decorative-concrete-utah",
          "pool-decks-utah",
          "concrete-driveways-utah",
          "sport-courts-utah",
        ]}
        currentSlug={SLUG}
        ctaTitle="Patio project?"
        ctaBody="Tell us roughly what you want the space for and how big you're thinking. We'll send a written quote with options for finish and budget."
      >
        <div className="space-y-6 text-anthracite/85 text-lg leading-relaxed">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm not-italic">
            01 / OVERVIEW
          </p>
          <p>
            Patios are most homeowners&rsquo; first big outdoor concrete
            project. Whether the goal is a covered dining area, a fire-pit
            patio, a pool-adjacent lounge zone, or an extension of an
            existing slab — the technical work is similar, but the layout
            and finish decisions are very project-specific. We design every
            patio around how you&rsquo;ll actually use it instead of
            defaulting to a stock rectangle.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            02 / WHAT&rsquo;S INCLUDED
          </p>
          <ul className="space-y-2 text-base">
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Site walk with you — measure, talk through use cases, layout
                options
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Excavation, subgrade compaction, gravel base</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Forms, rebar grid, expansion and control joints planned
                around shape
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>4,000 PSI air-entrained pour</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Finish to spec: broom · float · stamped · exposed aggregate ·
                stained
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>1/8″ per foot slope away from the house for drainage</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Cleanup, walkthrough, two-year workmanship warranty</span>
            </li>
          </ul>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            03 / PATIO + ADJACENT WORK
          </p>
          <p>
            Most patio quotes also include adjacent flatwork —{" "}
            <Link
              href="/services/sidewalks-curbing-utah"
              className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
            >
              walkways
            </Link>{" "}
            from a side door,{" "}
            <Link
              href="/services/pool-decks-utah"
              className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
            >
              pool deck integration
            </Link>{" "}
            if there&rsquo;s a pool nearby, or a stamped border tying the
            patio into a{" "}
            <Link
              href="/services/concrete-driveways-utah"
              className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
            >
              driveway
            </Link>{" "}
            project. Bidding the package together saves a mobilization fee
            and lets us plan joints and finish across all the surfaces.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            04 / FINISHES
          </p>
          <p>
            <strong>Broom finish</strong> — the workhorse. Best grip, easiest
            to repair, most affordable. Looks honest. Most of our patios
            run broom finish in the field with optional stamped or stained
            borders.
          </p>
          <p>
            <strong>Stamped</strong> — full-pattern or border-only. See the{" "}
            <Link
              href="/services/stamped-decorative-concrete-utah"
              className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
            >
              stamped & decorative
            </Link>{" "}
            page for pattern options and pricing context.
          </p>
          <p>
            <strong>Exposed aggregate</strong> — pebbled finish, classic
            look, naturally textured. Great for high-traffic patios, a
            little harder to keep clean than smoother finishes.
          </p>
          <p>
            <strong>Stained or dyed</strong> — broom or trowel finish with
            integral or topical color. Lower-impact than full stamping;
            adds color without the texture work.
          </p>
        </div>
      </ServicePageTemplate>
    </>
  );
}
