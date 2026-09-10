import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";
import {
  breadcrumbListSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/services/sport-courts-utah";
const SLUG = "sport-courts-utah";

export const metadata: Metadata = {
  title: "Sport Courts Utah | Zion CS",
  description:
    "Backyard concrete sport courts across Utah — pickleball, basketball, multi-sport overlays. Crisp lines, freshly finished surface, professional striping.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Sport Courts in Utah — Pickleball, Basketball, Multi-Sport",
    description:
      "Custom backyard concrete sport courts in Utah. Pickleball, basketball half-court, multi-sport overlays.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "What sport-court sizes do you typically pour?",
    answer:
      "Pickleball alone needs a 30×60 ft slab (1,800 sq ft) for a regulation single court. Basketball half-court needs 30×40 (1,200 sq ft). Multi-sport overlays (pickleball + basketball) usually run 30×60 with the basketball hoop on one end. We've also done full-size pickleball doubles courts and tennis-court conversions when the lot allows.",
  },
  {
    question: "What concrete spec works for a sport court?",
    answer:
      "4 inches thick on a compacted gravel base, 4,000 PSI air-entrained mix, #3 rebar grid at 18 inches on center. Smooth-trowel finish in the playing area for clean line striping; broom-finish at the perimeter and approach so it's not slick when wet.",
  },
  {
    question: "Do you handle the painted line work?",
    answer:
      "We coordinate with sport-court line-striping subcontractors and time the schedule so the slab cures a full 28 days before the striping crew shows up. That cure time is non-negotiable for paint adhesion. We can recommend striping subs we've worked with on Wasatch Front projects.",
  },
  {
    question: "Will the surface be safe for kids?",
    answer:
      "Concrete is harder than asphalt or sport-court tile, so we recommend a textured finish at the perimeter and a smooth-trowel only in the painted-court area. Some clients add an acrylic sport-court coating over the cured concrete for extra grip and bounce — that's a separate sub but we coordinate.",
  },
  {
    question: "Can you build a sport court with a hoop and lights?",
    answer:
      "Yes — we pour the slab with the hoop's permanent post anchor pre-set, and we coordinate with electricians for any in-ground lighting conduit before pouring. Light poles around the perimeter need their own footings; those go in during the same project.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Sport Courts" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Services", url: "https://zioncs.com/services" },
  { name: "Sport Courts", url: PAGE_URL },
]);

const serviceJsonLd = serviceSchema({
  name: "Sport Court Concrete Installation",
  description:
    "Backyard concrete sport courts across Utah — pickleball, basketball, multi-sport overlays.",
  provider: "Zion Concrete Specialists",
  areaServed: "Utah",
  url: PAGE_URL,
});

const faqJsonLd = faqPageSchema(FAQS);

export default function SportCourtsPage() {
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
        eyebrow="ZIONCS://SERVICE · 07 / SPORT COURTS"
        heroImage="/images/services/img-09-sport-courts.png"
        title="Sport courts — pickleball, basketball, multi-sport."
        lead="Backyard concrete sport courts across the Wasatch Front. Pickleball-only, basketball half-court, or both overlaid. We pour the slab, coordinate the line striping, and time the cure so the paint sticks for the next decade."
        spec={{
          title: "SPORT COURT",
          rows: [
            { key: "CONCRETE", value: "4,000 PSI · air-entrained" },
            { key: "THICKNESS", value: "4″ standard" },
            { key: "REINFORCEMENT", value: "#3 rebar grid 18″ on center" },
            { key: "BASE", value: "4–6″ compacted gravel base" },
            { key: "FINISH", value: "Smooth trowel field · broom perimeter" },
            { key: "POST ANCHOR", value: "Permanent · hoop or net post" },
            { key: "STRIPING", value: "Pre-set 28-day cure window for paint" },
            { key: "WARRANTY", value: "Workmanship — 2 year" },
          ],
          footnote: "LINE-STRIPING + ACRYLIC COATING COORDINATED VIA PARTNER SUBS",
        }}
        faqs={FAQS}
        relatedSlugs={[
          "concrete-driveways-utah",
          "concrete-patios-utah",
          "splash-pads-utah",
          "rv-pads-utah",
        ]}
        currentSlug={SLUG}
      >
        <div className="space-y-6 text-anthracite/85 text-lg leading-relaxed">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm not-italic">
            01 / OVERVIEW
          </p>
          <p>
            Backyard sport courts have become one of the more requested
            residential projects on the Wasatch Front — pickleball is the
            biggest driver, basketball half-courts are the long-time
            standard, and most clients want both lined on the same slab.
            We pour the concrete, set the hoop or net-post anchors, and
            coordinate line striping with a partner sub once the slab
            has cured the full 28 days.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            02 / WHAT&rsquo;S INCLUDED
          </p>
          <ul className="space-y-2 text-base">
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Site walk + dimensional layout for your sport mix (pickleball
                only, basketball only, or overlay)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Excavation, subgrade prep, gravel base</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Forms, rebar grid, control joints, embeds for posts</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>4,000 PSI air-entrained pour with smooth-trowel center + broom-finish perimeter</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Permanent hoop / net-post anchor pre-set in the slab</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Cure schedule + striping handoff at day 28</span>
            </li>
          </ul>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            03 / WHY THE 28-DAY CURE MATTERS
          </p>
          <p>
            Concrete reaches design strength at 28 days. Painting line
            stripes earlier is the #1 cause of premature failure on
            sport courts — paint that won&rsquo;t adhere, lines that
            ghost-flake within a season. We hard-stop the striping
            sub at 28 days exactly. That window also lets us flag
            any cure-related surface issues before they get painted
            over.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            04 / RELATED RESIDENTIAL WORK
          </p>
          <p>
            Sport courts often pair with adjacent flatwork —{" "}
            <Link
              href="/services/concrete-patios-utah"
              className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
            >
              patio extensions
            </Link>
            ,{" "}
            <Link
              href="/services/sidewalks-curbing-utah"
              className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
            >
              walkways
            </Link>{" "}
            from the house, sometimes a{" "}
            <Link
              href="/services/splash-pads-utah"
              className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
            >
              splash pad
            </Link>{" "}
            for younger kids. We bid the package together when it makes
            sense — saves a mobilization fee and keeps the joints and
            finish coordinated across surfaces.
          </p>
        </div>
      </ServicePageTemplate>
    </>
  );
}
