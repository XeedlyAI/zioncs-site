import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";
import {
  breadcrumbListSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/services/concrete-driveways-utah";
const SLUG = "concrete-driveways-utah";

export const metadata: Metadata = {
  title: "Concrete Driveways Utah | Zion CS",
  description:
    "New driveways, replacements, and repairs across Utah. Wasatch Front + St. George. Built to last Utah's freeze-thaw — show up on time, clean job site.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Driveways in Utah — Installation, Replacement, Repair",
    description:
      "Utah residential driveways done right. New installs, full replacements, repair work — designed for the freeze-thaw cycle.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "How thick should a residential driveway be in Utah?",
    answer:
      "We pour 4 inches for standard residential driveways and 5–6 inches if you'll park heavier vehicles (trucks, RVs, trailers). Commercial and shared-access driveways are 6 inches minimum. Thicker is always an option if your spec calls for it; we adjust the rebar grid and base accordingly.",
  },
  {
    question: "Should I replace or repair my old driveway?",
    answer:
      "Depends on the failure mode. Surface cracks under ¼ inch wide, isolated spalling, or a single sunken section can be repaired or partially replaced. Widespread cracking, settled subgrade, or concrete that's lost its surface integrity is a full-replacement job. We walk the site before quoting and tell you straight which it is — no upselling a tear-out when a repair is honest.",
  },
  {
    question: "How long until I can drive on my new driveway?",
    answer:
      "Walkable in 24–48 hours. Drive-on safe at 7 days for a passenger car, 10–14 days for trucks or trailers. Fully cured strength at 28 days. We include the cure schedule in your written quote so there are no surprises about when your daily driver is back.",
  },
  {
    question: "What does a typical Utah driveway project cost?",
    answer:
      "Every project is different — square footage, prep work, finish (broom, stamped, decorative), demolition of old concrete, access, and current ready-mix prices all change the number. We don't publish a per-square-foot rate because honest answers vary too much. Request a quote and we'll come back with a written number, usually within 7 days.",
  },
  {
    question: "Will you take care of permits?",
    answer:
      "If your municipality requires one for a driveway pour or replacement (most don't, but some HOAs and historic districts do), we handle the permit application and inspection scheduling. Permit fees are passed through at cost on the final invoice.",
  },
  {
    question: "Can you stamp or color the concrete?",
    answer:
      "Yes. We do stamped patterns (slate, cobblestone, European fan, brick) and integral or topical color. Stamped driveways add 30–60% to the base square-foot cost depending on pattern complexity. See the stamped & decorative service page for the full menu.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Concrete Driveways" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Services", url: "https://zioncs.com/services" },
  { name: "Concrete Driveways", url: PAGE_URL },
]);

const serviceJsonLd = serviceSchema({
  name: "Concrete Driveway Installation, Replacement, and Repair",
  description:
    "Residential and commercial concrete driveway services across Utah — installation, full replacement, and repair work designed for freeze-thaw climate.",
  provider: "Zion Concrete Specialists",
  areaServed: "Utah",
  url: PAGE_URL,
});

const faqJsonLd = faqPageSchema(FAQS);

export default function DrivewaysPage() {
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
        eyebrow="ZIONCS://SERVICE · 01 / DRIVEWAYS"
        heroImage="/images/services/img-04-driveways.png"
        title="Concrete driveways in Utah — installation, replacement, repair."
        lead="The biggest residential project we do, and the one Utah's freeze-thaw cycle is hardest on. We size every driveway for the climate — proper subgrade prep, the right reinforcement grid, and joints cut at intervals that absorb seasonal movement instead of cracking under it."
        spec={{
          title: "RESIDENTIAL DRIVEWAY",
          rows: [
            { key: "CONCRETE", value: "4,000 PSI · air-entrained" },
            {
              key: "THICKNESS",
              value: "4″ residential / 5–6″ heavy use",
            },
            {
              key: "REINFORCEMENT",
              value: "#3 rebar grid, 18″ on center",
            },
            {
              key: "SUBGRADE",
              value: "6″ compacted base, prepared",
            },
            {
              key: "FINISH",
              value: "Broom · float · stamped (optional)",
            },
            {
              key: "JOINTS",
              value: "Control joints, 8–10 ft intervals",
            },
            {
              key: "CURE TIME",
              value: "24h walkable · 7d driveable",
            },
            {
              key: "WARRANTY",
              value: "Workmanship — 2 year",
            },
          ],
          footnote: "SPECS ADJUST BASED ON SITE CONDITIONS + LOCAL CODE",
        }}
        faqs={FAQS}
        relatedSlugs={[
          "stamped-decorative-concrete-utah",
          "concrete-patios-utah",
          "residential-concrete-repair-utah",
          "sidewalks-curbing-utah",
        ]}
        currentSlug={SLUG}
        ctaTitle="Driveway project in Utah?"
        ctaBody="Tell us your driveway dimensions, finish preference, and target window. Quote-driven, written timeline, two-year workmanship warranty."
      >
        <div className="space-y-6 text-anthracite/85 text-lg leading-relaxed">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm not-italic">
            01 / OVERVIEW
          </p>
          <p>
            A concrete driveway is the highest-traffic surface a homeowner
            owns. It carries every car you back out, every delivery truck,
            every guest&rsquo;s wheels. In Utah it also lives through 70+
            freeze-thaw cycles a year. That combination — daily wear plus
            seasonal abuse — is why most failed driveways aren&rsquo;t failed
            from one big mistake. They&rsquo;re failed from skipping small
            things at the start.
          </p>
          <p>
            We pour residential driveways across the Wasatch Front and St.
            George — single-car, double-car, oversized RV-friendly, shared
            access, gated estates. The crew on your property is the same
            crew on the next one, with the same standards: subgrade compacted
            and leveled, rebar grid tied off, ready-mix tested for slump and
            air content, finished to the spec on the proposal, and joints cut
            at the right depth and interval so the slab decides where to
            crack instead of doing it randomly.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            02 / WHAT&rsquo;S INCLUDED
          </p>
          <ul className="space-y-2 text-base">
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Site walk and written quote (most quotes back within 7 days)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Demolition and haul-off of existing concrete (replacement
                jobs)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Subgrade prep — excavation, compaction, gravel base where
                required
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Forms, rebar grid, expansion joints</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                4,000 PSI air-entrained concrete (the right Utah mix)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Pour, finish (broom standard, stamped or decorative
                optional), control joints
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Cure schedule with day-by-day walkable / driveable timeline
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>End-of-job site cleanup. Two-year workmanship warranty.</span>
            </li>
          </ul>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            03 / WHEN TO REPAIR VS REPLACE
          </p>
          <p>
            We get this question on most driveway calls. Short answer: cracks
            narrower than a quarter inch, isolated spalling, or a single
            sunken section near a downspout — repair candidates. Widespread
            map cracking, multiple settled sections, or surface that&rsquo;s
            lost its top layer — replacement. We walk the site, tell you
            which it is honestly, and quote either path.
          </p>
          <p>
            More on the decision framework on{" "}
            <Link
              href="/blog/driveway-replacement-vs-repair"
              className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
            >
              repair vs replacement
            </Link>{" "}
            and on{" "}
            <Link
              href="/blog/why-utah-concrete-cracks"
              className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
            >
              why Utah concrete cracks
            </Link>
            .
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            04 / WHERE WE POUR
          </p>
          <p>
            Wasatch Front + St. George.{" "}
            <Link
              href="/locations/sandy-utah"
              className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
            >
              Sandy
            </Link>{" "}
            (home base),{" "}
            <Link
              href="/locations/salt-lake-city"
              className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
            >
              Salt Lake City
            </Link>
            , Draper, Lehi, Provo, Orem, Ogden, Layton, Bountiful, Park City,
            St. George, and the smaller cities between them. State pillar:{" "}
            <Link
              href="/utah-concrete-contractor"
              className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
            >
              Utah concrete contractor overview
            </Link>
            .
          </p>
        </div>
      </ServicePageTemplate>
    </>
  );
}
