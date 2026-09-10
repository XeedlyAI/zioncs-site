import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";
import {
  breadcrumbListSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/services/sidewalks-curbing-utah";
const SLUG = "sidewalks-curbing-utah";

export const metadata: Metadata = {
  title: "Sidewalks & Curbing Utah | Zion CS",
  description:
    "Concrete sidewalks and curbing across Utah — residential walkways, ADA-compliant municipal sidewalks, gutter-and-curb installs. Wasatch Front + St. George.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Sidewalks & Curbing in Utah",
    description:
      "Residential walkways, ADA-compliant sidewalks, curb-and-gutter installs across the Wasatch Front and St. George.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "Do you do residential walkways or only municipal sidewalks?",
    answer:
      "Both. Most of our sidewalk work is residential — front walks, side walks, back-of-house pathways, walkways connecting a driveway to a patio or pool deck. We also handle municipal sidewalk replacement (sections in front of a property) and ADA-compliant commercial sidewalks for retail and multi-family sites.",
  },
  {
    question: "What's the typical sidewalk thickness?",
    answer:
      "4 inches for residential foot-traffic. 5–6 inches if vehicles will cross (driveway aprons across a sidewalk). Public sidewalks per municipality usually require 4 inches with #3 rebar at 18-inch centers, but check your city — Salt Lake City and Provo have slightly different specs.",
  },
  {
    question: "Do you handle ADA-compliant ramps and detectable warnings?",
    answer:
      "Yes. ADA running slope ≤8.33%, cross slope ≤2%, detectable warning surface (truncated dome panels) installed within 1/8 inch of grade. We verify slope with a digital level after forms and again after pour. Inspector sign-off is our responsibility.",
  },
  {
    question: "Can you replace just one section of failing sidewalk?",
    answer:
      "Yes — section replacement is common. We saw-cut the failing section out cleanly along an existing joint, dowel rebar to the surrounding sound concrete, and pour the replacement to match. Color and finish texture won't match exactly with surrounding aged concrete, but the joints make the seam visually intentional.",
  },
  {
    question: "Do you do extruded curbing or formed curb-and-gutter?",
    answer:
      "Both. Extruded curbing (machine-poured continuous) is faster and cheaper for landscape edging and parking-lot perimeters. Formed curb-and-gutter (built-up forms with separate gutter pan) is the spec for municipal street work and most commercial site drainage. Tell us the application and we'll match the right method.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Sidewalks & Curbing" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Services", url: "https://zioncs.com/services" },
  { name: "Sidewalks & Curbing", url: PAGE_URL },
]);

const serviceJsonLd = serviceSchema({
  name: "Concrete Sidewalks and Curbing",
  description:
    "Residential walkways, ADA-compliant municipal sidewalks, and curb-and-gutter installs across Utah.",
  provider: "Zion Concrete Specialists",
  areaServed: "Utah",
  url: PAGE_URL,
});

const faqJsonLd = faqPageSchema(FAQS);

export default function SidewalksCurbingPage() {
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
        eyebrow="ZIONCS://SERVICE · 10 / SIDEWALKS & CURBING"
        heroImage="/images/services/img-37-sidewalks-curbing.png"
        title="Sidewalks and curbing — residential, ADA, municipal."
        lead="Front walks, side walks, walkway connections between driveway and patio, ADA-compliant commercial sidewalks, and curb-and-gutter for retail and multi-family sites. The everyday flatwork that has to look right and meet code."
        spec={{
          title: "SIDEWALK + CURBING",
          rows: [
            { key: "CONCRETE", value: "4,000 PSI · air-entrained" },
            { key: "THICKNESS", value: "4″ residential · 5–6″ vehicular crossing" },
            { key: "REINFORCEMENT", value: "#3 rebar grid 18″ on center" },
            { key: "BASE", value: "4″ compacted gravel base" },
            { key: "FINISH", value: "Broom standard · stamped border optional" },
            { key: "JOINTS", value: "Control joints 5–6 ft for residential" },
            { key: "ADA SLOPE", value: "≤8.33% running · ≤2% cross (where applicable)" },
            { key: "WARRANTY", value: "Workmanship — 2 year" },
          ],
          footnote: "MUNICIPAL SPECS VERIFIED PER CITY — SLC + PROVO + LAYTON COMMON",
        }}
        faqs={FAQS}
        relatedSlugs={[
          "concrete-driveways-utah",
          "concrete-patios-utah",
          "commercial-flatwork-parking-lots-sidewalks",
          "residential-concrete-repair-utah",
        ]}
        currentSlug={SLUG}
      >
        <div className="space-y-6 text-anthracite/85 text-lg leading-relaxed">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm not-italic">
            01 / OVERVIEW
          </p>
          <p>
            Sidewalks and curbing are the bread-and-butter flatwork
            most projects need at some point — residential walkways
            connecting a driveway to a patio, ADA-compliant entries
            to a commercial site, full curb-and-gutter installs for
            retail parking, or a single failing section that needs
            replacement before the city flags it. We handle all of
            it.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            02 / WHAT&rsquo;S INCLUDED
          </p>
          <ul className="space-y-2 text-base">
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Site walk, layout, permit pull where required</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Excavation, gravel base prep, compaction</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Forms, rebar grid where required, control joint planning</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>4,000 PSI air-entrained pour, broom finish standard</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>ADA-compliant ramps and detectable warning surface (commercial / municipal)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Inspector coordination + sign-off where required</span>
            </li>
          </ul>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            03 / SECTION REPLACEMENT
          </p>
          <p>
            Section replacement is one of our most common requests —
            the city flags a failing sidewalk in front of a property
            and the homeowner has 30–60 days to fix it. We saw-cut
            the failed section, dowel rebar to the surrounding good
            concrete, and pour to match the existing depth and slope.
            Inspector sign-off included.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            04 / RELATED FLATWORK
          </p>
          <p>
            Sidewalks often pair with{" "}
            <Link
              href="/services/concrete-driveways-utah"
              className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
            >
              driveways
            </Link>{" "}
            (driveway apron crossing the sidewalk),{" "}
            <Link
              href="/services/concrete-patios-utah"
              className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
            >
              patios
            </Link>{" "}
            (walkway from patio to lawn or pool), and{" "}
            <Link
              href="/services/commercial-flatwork-parking-lots-sidewalks"
              className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
            >
              commercial flatwork
            </Link>{" "}
            on the B2B side. Bidding the package together saves a
            mobilization fee.
          </p>
        </div>
      </ServicePageTemplate>
    </>
  );
}
