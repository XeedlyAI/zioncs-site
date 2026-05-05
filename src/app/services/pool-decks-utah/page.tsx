import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";
import {
  breadcrumbListSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/services/pool-decks-utah";
const SLUG = "pool-decks-utah";

export const metadata: Metadata = {
  title: "Pool Deck Concrete Utah | Zion CS",
  description:
    "Pool decks built by pool-deck specialists. Stamped, textured, non-slip concrete pool decks across Utah. Our origin business — 9+ years of pool-deck builds.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Pool Decks in Utah — Built by Pool-Deck Specialists",
    description:
      "ZionCS started as a pool-deck crew. Stamped, textured, non-slip concrete decks across Utah — built right because pool decks built our reputation.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "Why is pool-deck concrete different from a regular patio?",
    answer:
      "Three reasons. One: it gets wet constantly, so non-slip texture and water-resistant sealer matter way more than on a dry patio. Two: it expands and contracts with sun and water cycles, so joint placement and flexible sealants matter. Three: chlorine and salt water (if you have a salt-system pool) attack concrete and most sealers — we use chlorine-rated sealer specifically for pool decks.",
  },
  {
    question: "What surface texture is best for a pool deck?",
    answer:
      "We default to a textured stamped finish (slate texture, seamless stone, or sandstone) plus a non-slip sealer additive. It's grippy underfoot when wet, looks good year-round, and holds up to chemicals. Smooth-trowel finishes look great dry but are slick wet — we avoid them on pool decks. Broom finish is a budget alternative; stamped textured is the standard recommendation.",
  },
  {
    question: "Can you tear out and replace an old pool deck?",
    answer:
      "Yes. Replacement work is most of what we do on pool decks now — homeowners with 20-year-old decks that have cracked, settled, or stained beyond repair. We coordinate around the pool, protect the coping and tile, demo carefully, prep the subgrade, and pour the replacement. Pool stays full unless the scope requires otherwise.",
  },
  {
    question: "Will the concrete crack?",
    answer:
      "All concrete cracks. The question is where, how visibly, and whether it threatens function. We use control joints — pre-planned cuts that decide where the slab cracks — at intervals sized for the deck shape and the local freeze-thaw cycle. Done right, the cracks land in the joints (invisible) instead of randomly across the surface.",
  },
  {
    question: "How long does the pool stay closed during a deck project?",
    answer:
      "For a replacement, the pool itself stays in use during demo and pour, but the surrounding deck area is roped off. Total project time is 5–10 days from demo to walkable. Adding sealer needs another 24–48 hours after cure. Net pool downtime: usually zero swimming days, just no walking on fresh concrete.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pool Decks" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Services", url: "https://zioncs.com/services" },
  { name: "Pool Decks", url: PAGE_URL },
]);

const serviceJsonLd = serviceSchema({
  name: "Pool Deck Concrete Installation",
  description:
    "Concrete pool deck installation and replacement across Utah. Stamped, textured, non-slip finishes built for pool environments.",
  provider: "Zion Concrete Specialists",
  areaServed: "Utah",
  url: PAGE_URL,
});

const faqJsonLd = faqPageSchema(FAQS);

export default function PoolDecksPage() {
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
        eyebrow="ZIONCS://SERVICE · 03 / POOL DECKS"
        title="Pool decks — built by pool-deck specialists."
        lead="Pool decks are the origin business. ZionCS started in 2016 as a pool-deck crew and grew outward from there. Driveways, sport courts, foundations — they all came later. Pool decks are still where we apply the most precision: non-slip texture, chlorine-resistant sealer, joints planned around pool geometry, and finishes that hold up to wet feet for the next 20 years."
        spec={{
          title: "POOL DECK",
          rows: [
            { key: "CONCRETE", value: "4,000 PSI · air-entrained" },
            { key: "THICKNESS", value: "4″ standard" },
            { key: "REINFORCEMENT", value: "#3 rebar grid 18″ on center" },
            { key: "TEXTURE", value: "Stamped texture · seamless · sandstone" },
            { key: "FINISH", value: "Non-slip sealer additive standard" },
            { key: "SEALER", value: "Chlorine-rated · UV-rated · resealable" },
            { key: "JOINTS", value: "Sized to deck geometry · flexible sealant" },
            { key: "CURE / SEAL", value: "7d cure · 24–48h post-sealer" },
            { key: "WARRANTY", value: "Workmanship — 2 year" },
          ],
          footnote: "ORIGIN BUSINESS · 9+ YEARS OF POOL-DECK BUILDS",
        }}
        faqs={FAQS}
        relatedSlugs={[
          "stamped-decorative-concrete-utah",
          "concrete-patios-utah",
          "concrete-driveways-utah",
          "splash-pads-utah",
        ]}
        currentSlug={SLUG}
        ctaTitle="Pool deck project?"
        ctaBody="New build, replacement, or repair — we cover all three. Tell us the deck dimensions, your pool finish, and your timeline. Quote-driven, written timeline."
      >
        <div className="space-y-6 text-anthracite/85 text-lg leading-relaxed">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm not-italic">
            01 / WHY POOL DECKS ARE THE TEST
          </p>
          <p>
            A pool deck is the most-visible flatwork in a backyard, the
            most-walked-on, the most-affected by water and chemicals, and
            the most-photographed when guests come over. Every detail
            matters: the texture has to grip wet feet, the slope has to
            move water away from the pool coping, the color has to look
            good against the home and the water, and the joints have to
            hide where the slab will inevitably crack.
          </p>
          <p>
            We started here. The first dozen ZionCS projects were pool
            decks for residential clients in Sandy and the south Salt Lake
            Valley. Word spread, the work expanded into driveways and
            patios, and now we run four service tracks — but pool decks
            still set the bar for what &ldquo;done right&rdquo; means
            internally. Every other surface borrows from what we learned
            here.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            02 / NEW BUILD VS REPLACEMENT
          </p>
          <p>
            <strong>New builds</strong>: typically part of a larger pool
            project. We coordinate with the pool builder on coping
            integration, deck slope, and equipment access. Pour timing is
            scheduled around the pool shell completion.
          </p>
          <p>
            <strong>Replacements</strong>: most of what we do now. A
            20-year-old deck cracked, settled, stained, or just dated —
            tear out, prep the subgrade, pour the new deck, blend with
            existing coping. Pool stays full and usable through most of the
            project; only the walking deck is roped off.
          </p>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            03 / FINISHES WE RECOMMEND
          </p>
          <ul className="space-y-2 text-base">
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                <strong>Stamped texture</strong> (slate, seamless stone, or
                sandstone) — default recommendation. Looks great dry,
                non-slip wet.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                <strong>Exposed aggregate</strong> — old-school pool-deck
                finish, naturally textured, durable. Less common now but
                still a solid choice.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                <strong>Broom finish</strong> — budget option. Plenty grippy
                wet, simpler look. Holds up well; easier to repair if
                damaged.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-steel text-sm pt-1.5">—</span>
              <span>
                <strong>Smooth trowel</strong> — we don&rsquo;t recommend
                for pool decks. Looks great dry, slick wet. We&rsquo;ve
                replaced too many of these.
              </span>
            </li>
          </ul>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm pt-4">
            04 / RELATED RESIDENTIAL WORK
          </p>
          <p>
            Pool deck projects often include adjacent flatwork —{" "}
            <Link
              href="/services/concrete-patios-utah"
              className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
            >
              patios
            </Link>{" "}
            extending off the deck, walkways from the house, sometimes a{" "}
            <Link
              href="/services/splash-pads-utah"
              className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
            >
              splash pad
            </Link>{" "}
            for younger kids. We bid the whole package together when it
            makes sense — one mobilization, one finish system, one set of
            joints planned across all the surfaces.
          </p>
        </div>
      </ServicePageTemplate>
    </>
  );
}
