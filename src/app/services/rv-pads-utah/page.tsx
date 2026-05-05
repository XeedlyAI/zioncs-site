import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";
import {
  breadcrumbListSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/services/rv-pads-utah";
const SLUG = "rv-pads-utah";

export const metadata: Metadata = {
  title: "RV Pads Utah | Zion CS",
  description:
    "Concrete RV pads across Utah — sized for the rig you actually own. Heavier slab, denser rebar, longer warranty. Wasatch Front + St. George.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "RV Pads in Utah — Built for the Rig You Actually Own",
    description:
      "Residential concrete RV pads across Utah. Heavy-load slab, denser reinforcement, dialed for the rig you have.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "How thick should an RV pad be?",
    answer:
      "6 inches minimum for a Class C or smaller. 7–8 inches for Class A motorhomes, fifth-wheels, or anything over 30,000 lbs gross. The wrong thickness shows up as cracking under the jack stands within 18 months. We size to the heaviest rig you'll park on it, not the average.",
  },
  {
    question: "What dimensions do you typically pour?",
    answer:
      "12×40 ft is the common starting point — fits most fifth-wheels and Class C motorhomes with room to set up. 14×45 fits Class A. We size to the rig's footprint plus 4 ft of work space along one side for jacks and step-down. Some clients want a wider apron for a tow vehicle alongside.",
  },
  {
    question: "Do you handle utility hookups in the pad?",
    answer:
      "We coordinate with electricians and plumbers for any in-pad conduit before pouring. Common requests: 30/50-amp electrical pedestal, water spigot, and sewer cleanout. Those go in during the same project but are subbed to the appropriate trades — we sequence the schedule so they're done before pour day.",
  },
  {
    question: "Will the pad handle frost-heave in Utah winters?",
    answer:
      "Yes — we follow the same frost-depth standards as residential foundations. The base aggregate prevents seasonal moisture from saturating the subgrade, and the slab is over-engineered for static load. Park City and mountain communities require deeper base prep than valley locations; we adjust per region.",
  },
  {
    question: "Can the RV pad double as guest parking?",
    answer:
      "If you spec it that way, yes. Heavier slab handles passenger vehicles fine. Some clients add a stamped or colored border to soften the look when the RV isn't there. We design with that flexibility in mind when you mention it on the discovery walk.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "RV Pads" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Services", url: "https://zioncs.com/services" },
  { name: "RV Pads", url: PAGE_URL },
]);

const serviceJsonLd = serviceSchema({
  name: "RV Pad Concrete Installation",
  description:
    "Residential concrete RV pads across Utah, sized and reinforced for the specific rig.",
  provider: "Zion Concrete Specialists",
  areaServed: "Utah",
  url: PAGE_URL,
});

const faqJsonLd = faqPageSchema(FAQS);

export default function RvPadsPage() {
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
        eyebrow="ZIONCS://SERVICE · 08 / RV PADS"
        heroImage="/images/services/img-35-rv-pads.png"
        title="RV pads — built for the rig you actually own."
        lead="Most RV pads fail because they were sized for the wrong rig. We pour 6 to 8 inches of concrete with denser rebar than a standard driveway, sized to the heaviest motorhome or fifth-wheel that&rsquo;ll park on it. Class A through Class C, fifth-wheels, travel trailers — the spec changes per rig."
        spec={{
          title: "RV PAD",
          rows: [
            { key: "CONCRETE", value: "4,500 PSI · air-entrained" },
            { key: "THICKNESS", value: "6″ Class C · 7–8″ Class A / fifth-wheel" },
            { key: "REINFORCEMENT", value: "#4 rebar grid 16″ on center" },
            { key: "BASE", value: "6″ compacted gravel base" },
            { key: "DIMENSIONS", value: "12×40 typical · 14×45 Class A" },
            { key: "FINISH", value: "Broom · sloped 1/8″ per ft for drainage" },
            { key: "UTILITY EMBEDS", value: "30/50A · water · sewer cleanout" },
            { key: "WARRANTY", value: "Workmanship — 2 year" },
          ],
          footnote: "SIZED TO THE RIG ON YOUR SITE WALK · NOT A GENERIC SPEC",
        }}
        faqs={FAQS}
        relatedSlugs={[
          "concrete-driveways-utah",
          "sidewalks-curbing-utah",
          "concrete-patios-utah",
          "industrial-concrete-foundations-utah",
        ]}
        currentSlug={SLUG}
      >
        <div className="space-y-6 text-anthracite/85 text-lg leading-relaxed">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm not-italic">
            01 / OVERVIEW
          </p>
          <p>
            RV pads carry concentrated point loads. A Class A motorhome
            on jack stands lands 8,000+ lbs on each pad foot. Multiply
            by Utah&rsquo;s freeze-thaw cycles and a too-thin slab cracks
            within 18 months. We pour 6 to 8 inches with #4 rebar at
            16-inch centers on a properly compacted gravel base — built
            to handle the rig you&rsquo;ll actually park on it for the
            next decade.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            02 / WHAT&rsquo;S INCLUDED
          </p>
          <ul className="space-y-2 text-base">
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Site walk including the rig&rsquo;s actual specs (gross weight, axle layout, jack placement)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Excavation, compacted gravel base, frost-depth-appropriate prep</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Forms, dense rebar grid, embeds for utility pedestals</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>4,500 PSI air-entrained pour at the spec&rsquo;d thickness for your rig</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Drainage slope (1/8 inch per foot) so water moves off the pad and away from utility hookups</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>Cure schedule + 28-day full-strength target before parking</span>
            </li>
          </ul>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            03 / UTILITY HOOKUPS
          </p>
          <p>
            Most RV pads include a 30 or 50-amp electrical pedestal,
            water spigot, and sewer cleanout. We coordinate with
            electricians and plumbers to get conduit and pipe placed
            before pour day. The pedestal itself is a standard product
            we install or hand off to your preferred sub.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            04 / WHERE WE POUR
          </p>
          <p>
            Wasatch Front + St. George. Sandy, SLC, Draper, Lehi, Park
            City, Layton, Bountiful — all the standard service-area
            cities. Park City and mountain communities have deeper
            frost-depth requirements; we adjust the base prep
            accordingly. State pillar:{" "}
            <Link
              href="/utah-concrete-contractor"
              className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
            >
              Utah concrete contractor
            </Link>
            .
          </p>
        </div>
      </ServicePageTemplate>
    </>
  );
}
