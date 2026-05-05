import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "driveway-replacement-vs-repair",
  title: "Driveway Replacement vs Repair: A Decision Framework",
  metaTitle: "Driveway Replacement vs Repair Framework",
  metaDescription:
    "When to repair, when to replace, when to wait. A homeowner's framework for evaluating cracked, sinking, or aging concrete driveways.",
  excerpt:
    "Repair candidates look one way. Replacement candidates look another. The framework Utah homeowners use to choose without overspending or under-spending.",
  authorSlug: "josh",
  publishedAt: "2026-04-25",
  lastReviewedAt: "2026-05-04",
  readingTimeMinutes: 7,
  targetKeyword: "driveway replacement vs repair",
  secondaryKeywords: [
    "should i replace or repair my driveway",
    "when to replace concrete driveway",
    "driveway repair or replace utah",
    "signs you need a new driveway",
    "replacing vs repairing driveway",
  ],
  siloIntent: "RESIDENTIAL",
  articleRole: "decision-framework",
  category: "guides",
  cityAnchor: null,
  relatedSlugs: [
    "why-utah-concrete-cracks",
    "10-common-residential-concrete-problems",
    "residential-concrete-repair-utah",
  ],
  faqs: [
    {
      question: "What's the cheapest way to fix a cracked driveway?",
      answer:
        "For hairline cracks under 1/8 inch wide on otherwise sound concrete, a polyurethane crack sealant from any home center fixes the cosmetic issue for $30 in materials and an hour of work. That's it. Anything wider or with displacement isn't a DIY job — patching widens cracks usually buys you one season before the underlying problem reasserts itself.",
    },
    {
      question: "How long do concrete driveways last in Utah?",
      answer:
        "Properly poured residential driveways with reasonable maintenance last 25–40 years in Utah. Poorly poured driveways fail in 8–12. The biggest variables are subgrade prep (compaction, base) and air entrainment (the freeze-thaw mitigation). A 20-year-old driveway showing widespread cracking has earned its retirement; a 5-year-old driveway with the same damage was poured wrong.",
    },
    {
      question: "Will tearing out the driveway damage my landscaping?",
      answer:
        "Some, usually. Demo crews work with backhoes or skid-steers and need access lanes. Mature trees within ~6 feet of the driveway are at risk for root damage. Lawn edges typically need 1–2 feet of buffer. We walk the project with you before signing and flag what's at risk; you decide if any landscaping needs preemptive protection (fencing, mulch barrier, root pruning).",
    },
    {
      question: "Can I have part of the driveway replaced and part repaired?",
      answer:
        "Yes — partial replacement is common. We saw-cut the failed section out cleanly along an existing joint, dowel rebar to the surrounding sound concrete, and pour the new section. The seam will be visible (different concrete ages differently and the colors won't match exactly) but the structure is solid. This is often the right answer when one half of a driveway is fine and the other half is failing.",
    },
    {
      question: "Should I wait until next year to decide?",
      answer:
        "Sometimes — depends on what's failing. Hairline cracks: yes, monitor for a season, see if they widen. Settling sections: yes, monitor and check drainage. Active spalling or surface scaling: probably no, the surface is losing material every freeze-thaw cycle and waiting just means more is gone. Vertical displacement at a joint: definitely no — that's a trip hazard and often a structural concern.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        The decision frame most homeowners run through is a binary:{" "}
        <em>do I patch this thing or do I tear it out?</em> The honest
        answer is usually neither — it&rsquo;s a four-way decision. Wait
        and watch. Surface-repair. Partial-replace. Full-replace. Each
        has a use case and each is the right call for a specific failure
        pattern.
      </p>
      <p>
        This is the framework we use when we walk a driveway. It&rsquo;ll
        help you self-diagnose before you call a contractor, and
        more importantly, it&rsquo;ll help you spot a contractor
        who&rsquo;s pushing you toward the wrong path.
      </p>

      <h2>Step 1: Identify the failure pattern</h2>
      <p>
        Walk the driveway. Look at it. Note specifically what you see.
        Most homeowners look at &ldquo;the driveway&rdquo; as one thing
        — but the failure pattern matters more than the overall
        condition.
      </p>
      <h3>Cosmetic — usually wait or surface-repair</h3>
      <ul>
        <li>
          <strong>Hairline shrinkage cracks</strong> under 1/8 inch,
          stable, surface-only. Normal. Seal them when you reseal the
          driveway. Don&rsquo;t panic.
        </li>
        <li>
          <strong>Light surface scaling</strong> in a small area. Could
          be a localized air-entrainment failure or salt damage. Patch
          works if the surface is otherwise sound.
        </li>
        <li>
          <strong>Joint deterioration</strong> where joint sealant has
          dried out. Reseal the joint. Cheap fix.
        </li>
      </ul>

      <h3>Functional — partial replace or surface-repair</h3>
      <ul>
        <li>
          <strong>One sunken section</strong> with vertical displacement
          at a joint. Subgrade settling under that section. Either
          slabjack/mudjack the section back up, or saw-cut and replace
          that section. Don&rsquo;t replace the whole driveway for one
          settled corner.
        </li>
        <li>
          <strong>Cracks 1/8 to 1/4 inch wide</strong>, stable, no
          displacement. Working cracks that move with temperature.
          Polyurethane fill keeps water out — buys you years.
        </li>
        <li>
          <strong>Localized spalling</strong> larger than a hand. Patch
          if the surface is otherwise sound. Replace the section if
          spalling extends through the slab.
        </li>
      </ul>

      <h3>Structural — full or major-section replace</h3>
      <ul>
        <li>
          <strong>Map cracking</strong> across the full slab — a network
          of cracks dividing the surface into roughly equal sections.
          Indicates the slab has fundamental problems (bad mix, bad
          subgrade, both). Patches won&rsquo;t hold.
        </li>
        <li>
          <strong>Multiple settled sections</strong>, especially with
          sections moving differently. The base under the slab is
          unstable; replacement with proper subgrade prep is the only
          durable answer.
        </li>
        <li>
          <strong>Wide cracks (1/4 inch+) that are growing</strong>.
          Active structural failure. Replace before it gets worse.
        </li>
        <li>
          <strong>Surface scaling across the driveway</strong> — the
          slab has lost air entrainment and the top inch is failing
          everywhere. Patches won&rsquo;t hold; replacement is the
          honest answer.
        </li>
      </ul>

      <h2>Step 2: Check the subgrade</h2>
      <p>
        Most driveway failures are subgrade failures, not concrete
        failures. The slab itself might be perfectly sound — it&rsquo;s
        just sitting on a base that moved. You can&rsquo;t see the
        subgrade directly, but the slab&rsquo;s behavior tells you what
        it&rsquo;s sitting on.
      </p>
      <p>
        Tells of a bad subgrade:
      </p>
      <ul>
        <li>
          Sections settling differently — the slab itself isn&rsquo;t
          breaking; the ground under it is.
        </li>
        <li>
          Cracks that aren&rsquo;t at joints — the slab is finding new
          places to relieve stress because the joints aren&rsquo;t
          where the actual movement is.
        </li>
        <li>
          Standing water in unexpected places after rain — drainage
          failure that&rsquo;s also softening the subgrade.
        </li>
      </ul>
      <p>
        If the subgrade is the problem, surface repairs are throwing
        good money after bad. The new surface will fail the same way
        the old one did.
      </p>

      <h2>Step 3: Apply the rough decision matrix</h2>
      <p>
        With the failure pattern and subgrade assessment in hand, the
        decision usually falls out cleanly:
      </p>
      <ol>
        <li>
          <strong>Cosmetic + sound subgrade →</strong> wait, monitor,
          maybe seal. $0–$300.
        </li>
        <li>
          <strong>Functional + sound subgrade →</strong> targeted
          repair. $400–$2,500 depending on scope.
        </li>
        <li>
          <strong>Functional + sketchy subgrade →</strong> partial
          replacement of affected section, with proper subgrade prep
          for that section. $1,500–$6,000.
        </li>
        <li>
          <strong>Structural + sound subgrade →</strong> partial or full
          replacement. Subgrade prep matters; if the original prep was
          bad, redo it. $5,000–$15,000+.
        </li>
        <li>
          <strong>Structural + bad subgrade →</strong> full replacement,
          full subgrade rework. The whole driveway. $7,500–$25,000+
          depending on size and access.
        </li>
      </ol>
      <p>
        These ranges are illustrative — every project varies with site
        conditions, access, finish, current ready-mix prices, and demo
        scope. We don&rsquo;t publish per-square-foot rates because
        honest answers vary too much.
      </p>

      <h2>Step 4: Get a second opinion before tearing anything out</h2>
      <p>
        Driveway replacement is one of the highest-margin residential
        concrete projects, which means it&rsquo;s also the most-pushed.
        Some contractors will look at any concrete with cracks and
        recommend a tear-out. Get a second quote — preferably from a
        contractor known for repair work specifically, not just
        installation.
      </p>
      <p>
        The credible recommendation pattern: if two contractors
        independently recommend replacement, the slab probably is
        replacement-grade. If one recommends replacement and the other
        recommends repair, the truth is usually closer to repair — or
        partial replacement.
      </p>

      <h2>Where to go from here</h2>
      <p>
        Climate context for why Utah concrete fails the way it does:{" "}
        <Link href="/blog/why-utah-concrete-cracks">
          why Utah concrete cracks
        </Link>
        . Broader diagnosis:{" "}
        <Link href="/blog/10-common-residential-concrete-problems">
          10 common residential concrete problems
        </Link>
        . If repair is the answer:{" "}
        <Link href="/services/residential-concrete-repair-utah">
          our concrete repair service
        </Link>
        . If replacement is the answer:{" "}
        <Link href="/services/concrete-driveways-utah">
          concrete driveways in Utah
        </Link>
        .
      </p>
    </Prose>
  );
}
