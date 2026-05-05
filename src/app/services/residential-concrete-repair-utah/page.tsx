import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";
import {
  breadcrumbListSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/structured-data";

const PAGE_URL =
  "https://zioncs.com/services/residential-concrete-repair-utah";
const SLUG = "residential-concrete-repair-utah";

export const metadata: Metadata = {
  title: "Concrete Repair Utah | Zion CS",
  description:
    "Concrete repair across Utah. Cracks, settling, spalling, surface failures, leveling. Honest assessment — repair when repair makes sense, replacement when it doesn't.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Repair in Utah — Honest Diagnosis, Real Fix",
    description:
      "Cracks, settling, spalling, surface failures across Utah. We diagnose honestly and fix what's worth fixing.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "What kinds of concrete repair do you handle?",
    answer:
      "Hairline crack sealing, joint resealing, surface spall repair, partial slab replacement, settled-section leveling (slabjacking-style fixes via partner where needed), step rebuilds, and saw-cut + patch work. The work breaks roughly into three camps: cosmetic repair (sealing, patching), functional repair (leveling, partial replacement), and full replacement when nothing less will hold.",
  },
  {
    question: "How do I know if my driveway needs repair or replacement?",
    answer:
      "Repair candidates: hairline cracks under ¼ inch, isolated spalling, a single sunken section, or surface scaling. Replacement candidates: widespread map-pattern cracking, multiple settled sections, lost surface integrity, or concrete that's lifting at the joints. We do site walks and tell you straight which it is.",
  },
  {
    question: "Will a repair last?",
    answer:
      "Honest answer: depends on what failed and why. A crack repair on a structurally-sound slab can last 5–15 years. A repair on a slab with bad subgrade is a band-aid that buys you 1–3 seasons before you're back to the same problem. We don't sell repairs we don't believe in — if your slab needs replacement, we say so and quote it.",
  },
  {
    question: "Can you repair stamped or decorative concrete?",
    answer:
      "Yes, but it's harder than repairing plain broom-finish concrete. Color and pattern matching is approximate at best — stamped concrete ages and weathers, and a fresh patch will read as a patch. For visible stamped surfaces (entryways, prominent patios), we usually recommend full replacement of the affected section bordered by a control joint, not patching.",
  },
  {
    question: "Do you do slabjacking or mudjacking?",
    answer:
      "We partner with specialists for slabjacking and mudjacking work — they have the rigs and the foam/grout systems to lift settled slabs without tearing them out. We coordinate the project, walk the site with you and them, and integrate the lift work with any concrete repair or replacement we're handling separately.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Concrete Repair" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Services", url: "https://zioncs.com/services" },
  { name: "Concrete Repair", url: PAGE_URL },
]);

const serviceJsonLd = serviceSchema({
  name: "Residential Concrete Repair",
  description:
    "Concrete repair across Utah — crack sealing, spall repair, settled section leveling, partial replacement, and full replacement when needed.",
  provider: "Zion Concrete Specialists",
  areaServed: "Utah",
  url: PAGE_URL,
});

const faqJsonLd = faqPageSchema(FAQS);

export default function RepairPage() {
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
        eyebrow="ZIONCS://SERVICE · 05 / REPAIR"
        heroImage="/images/services/img-08-repair.png"
        title="Concrete repair — honest diagnosis, real fix."
        lead="Most concrete-repair calls are misdiagnosed before we get there. The slab's been failing for years; the homeowner sees the crack and calls one contractor for a patch and another for a tear-out. We walk the site, identify the actual failure mode, and quote repair if repair will hold — replacement if it won't. No upsell."
        spec={{
          title: "REPAIR & RESTORATION",
          rows: [
            { key: "DIAGNOSIS", value: "Site walk · failure-mode review" },
            {
              key: "CRACK SEAL",
              value: "Polyurethane / silicone for active joints",
            },
            { key: "SPALL REPAIR", value: "Polymer-modified patch · feathered" },
            {
              key: "SECTION REPLACE",
              value: "Saw-cut · doweled · matched mix",
            },
            {
              key: "LEVELING",
              value: "Partner slabjack/mudjack for sunken slabs",
            },
            {
              key: "RESEAL",
              value: "Sealer-only refresh on aging stamped finishes",
            },
            { key: "WARRANTY", value: "1yr repair · 2yr replacement" },
          ],
          footnote: "REPAIR WARRANTIES SCALE WITH WHAT&rsquo;S ACTUALLY FIXED",
        }}
        faqs={FAQS}
        relatedSlugs={[
          "concrete-driveways-utah",
          "concrete-patios-utah",
          "stamped-decorative-concrete-utah",
          "sidewalks-curbing-utah",
        ]}
        currentSlug={SLUG}
        ctaTitle="Cracked, settled, or failing concrete?"
        ctaBody="Send us photos and rough dimensions. We'll come walk the site, tell you straight what's wrong, and quote repair or replacement honestly."
      >
        <div className="space-y-6 text-anthracite/85 text-lg leading-relaxed">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm not-italic">
            01 / OVERVIEW
          </p>
          <p>
            Concrete fails in predictable ways. Hairline shrinkage cracks
            from improper cure. Wider working cracks from inadequate joint
            spacing. Map cracking from a bad mix. Spalling from
            freeze-thaw on under-air-entrained surfaces. Settling from poor
            subgrade prep. Lift and curl from temperature gradients. Each
            failure has a fix — or sometimes a replacement, when the fix
            wouldn&rsquo;t outlast a season.
          </p>
          <p>
            Repair is honest work when it&rsquo;s the right call.
            We&rsquo;ll walk a property, look at the cracks and joints,
            assess the subgrade indirectly through the slab&rsquo;s
            behavior, and give you a real diagnosis. Sometimes the answer
            is a $400 crack-seal job. Sometimes the answer is "this whole
            section needs to come out." We tell you which.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            02 / REPAIR TYPES
          </p>
          <ul className="space-y-3 text-base">
            <li>
              <strong>Crack sealing</strong> — flexible polyurethane or
              silicone sealants for active cracks (cracks that move with
              temperature). Stays elastic for years; doesn&rsquo;t bond
              rigidly.
            </li>
            <li>
              <strong>Spall and surface patching</strong> — polymer-modified
              patch material feathered into the surface. Works for shallow
              spalls (under ½ inch). Deeper spalls usually mean the slab
              has lost air entrainment and replacement is the better call.
            </li>
            <li>
              <strong>Joint resealing</strong> — old joint sealant fails,
              water gets in, freeze-thaw widens the crack. Resealing on
              schedule (every 5–7 years) prevents that downstream damage.
            </li>
            <li>
              <strong>Section replacement</strong> — saw-cut a damaged
              section out cleanly, dowel rebar to the surrounding sound
              concrete, pour and finish to match. The seam is visible but
              structurally sound.
            </li>
            <li>
              <strong>Leveling (slabjacking / mudjacking)</strong> — for
              settled but otherwise sound slabs. Pumped foam or grout
              raises the slab back to grade. We coordinate with specialty
              partners for this work.
            </li>
            <li>
              <strong>Resealing aging stamped or decorative concrete</strong>{" "}
              — color refresh + UV protection without replacement.
            </li>
          </ul>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            03 / WHEN REPAIR ISN&rsquo;T THE ANSWER
          </p>
          <p>
            We&rsquo;ll tell you to skip the repair when:
          </p>
          <ul className="space-y-2 text-base mt-2">
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Cracking is widespread (map cracking, multiple
                cross-cracks) — the slab has fundamental problems
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Subgrade has settled noticeably — patches won&rsquo;t hold,
                slab will keep moving
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Surface scaling is widespread — the top inch has lost air
                entrainment and will keep deteriorating
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                Drainage is the underlying cause — fix the drainage first,
                or replacement will fail too
              </span>
            </li>
          </ul>
          <p>
            More on diagnosis at{" "}
            <Link
              href="/blog/why-utah-concrete-cracks"
              className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
            >
              why Utah concrete cracks
            </Link>{" "}
            and{" "}
            <Link
              href="/blog/10-common-residential-concrete-problems"
              className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
            >
              10 common residential concrete problems
            </Link>
            .
          </p>
        </div>
      </ServicePageTemplate>
    </>
  );
}
