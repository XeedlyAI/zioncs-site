import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import { FreezeThawCycleChart } from "@/components/data/FreezeThawCycleChart";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "why-utah-concrete-cracks",
  title: "Why Utah Concrete Cracks: A Climate-Driven Guide for Homeowners",
  metaTitle: "Why Utah Concrete Cracks | Climate Guide",
  metaDescription:
    "Utah's freeze-thaw cycle is brutal on concrete. Why your driveway is cracking, what's recoverable, and what isn't — based on Wasatch Front conditions.",
  excerpt:
    "70 freeze-thaw cycles a year, clay-heavy soils, and a brutal sun above it all. Why Utah concrete cracks — and how to spot the difference between cosmetic and structural.",
  authorSlug: "kevin",
  publishedAt: "2026-04-28",
  lastReviewedAt: "2026-05-04",
  readingTimeMinutes: 8,
  targetKeyword: "why does concrete crack utah",
  secondaryKeywords: [
    "utah concrete cracks freeze thaw",
    "concrete cracking salt lake city",
    "why my driveway is cracking utah",
    "freeze thaw concrete damage utah",
    "utah climate concrete",
  ],
  siloIntent: "RESIDENTIAL",
  articleRole: "diagnostic",
  category: "insights",
  cityAnchor: null,
  relatedSlugs: [
    "residential-concrete-repair-utah",
    "driveway-replacement-vs-repair",
    "10-common-residential-concrete-problems",
  ],
  faqs: [
    {
      question: "Are all concrete cracks bad?",
      answer:
        "No. Hairline shrinkage cracks under 1/8 inch wide are normal and almost always cosmetic — concrete shrinks slightly as it cures, and small cracks are how it relieves that stress. Working cracks (those that move with temperature, opening in winter and closing in summer) and structural cracks (wider than 1/4 inch, growing, or with vertical displacement) are the ones to address.",
    },
    {
      question: "Can I seal a crack myself?",
      answer:
        "For surface hairline cracks under 1/8 inch wide, yes — a polyurethane crack sealant from the hardware store works fine. For wider cracks, working cracks, or cracks with displacement, DIY sealing buys you cosmetic cover for a season but doesn't fix the underlying problem. Get a professional assessment before sealing anything wider than a credit card.",
    },
    {
      question: "Why are some sections of my driveway cracking but not others?",
      answer:
        "Almost always a subgrade problem. The cracking section sits on softer or more uneven base than the rest, so it settles or moves more under freeze-thaw stress. Could be original construction (a pocket of clay that wasn't properly compacted), drainage issue (water saturating one area), or a tree root effect. Diagnosis matters because the fix is different for each cause.",
    },
    {
      question: "Does Utah's altitude affect concrete?",
      answer:
        "Indirectly, yes. Higher elevation means colder winters at the same latitude, which means more freeze-thaw cycles. UV exposure is also more intense at altitude, which accelerates sealer breakdown on stamped or decorative finishes. Both factors make Utah concrete maintenance more demanding than concrete in lower-elevation western states.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        Every concrete contractor in Utah has had this conversation. A
        homeowner walks out one morning and the driveway has a crack that
        wasn&rsquo;t there last week. Or the patio has a corner that
        sunk an inch. Or the sidewalk is spalling — surface flaking off
        in plates. The questions are always the same: <em>Did the
        contractor do something wrong? Is this dangerous? Is this
        normal?</em>
      </p>
      <p>
        Sometimes the answer is yes, the contractor cut corners. More
        often, the answer is: <em>this is what concrete does in Utah
        when conditions push it to fail</em>. Understanding why is the
        difference between panic-replacing perfectly fixable concrete and
        ignoring problems that&rsquo;ll get worse.
      </p>
      <p>
        Three things drive Utah concrete failure: freeze-thaw cycling,
        clay-heavy soil, and high-altitude UV. Here&rsquo;s how each one
        works.
      </p>

      <h2>Freeze-thaw cycling — the big one</h2>
      <p>
        The Wasatch Front averages around{" "}
        <strong>70 freeze-thaw cycles per year</strong>. That number
        deserves to sit by itself. 70 separate occasions when your
        driveway gets wet, then drops below 32 degrees overnight, then
        warms back above freezing the next day. Every one of those
        cycles is a chance for water that seeped into a hairline crack
        to freeze, expand by roughly 9%, and pry the surrounding
        concrete apart from the inside.
      </p>
      <p>
        Multiply 70 cycles by 10 years and a slab that wasn&rsquo;t
        properly air-entrained or that didn&rsquo;t have its cracks
        sealed on schedule has been pried at 700 times. The cracks
        widen. Surface particles spall off. Joints crumble. None of it
        happens in one dramatic moment — it happens slowly, every
        winter, until one spring you walk out and notice the driveway
        has aged five years overnight.
      </p>
      <p>
        The single biggest mitigation: <strong>air-entrained concrete</strong>.
        The mix has microscopic air bubbles distributed through the
        slab that act as expansion relief — when water in the concrete
        freezes, the bubbles compress instead of the surrounding
        concrete cracking. We pour 4,000 PSI air-entrained on every
        Utah residential project for exactly this reason.
      </p>
      <p>
        Second mitigation: <strong>control joints at the right
        intervals</strong>. Concrete is going to crack from internal
        stress eventually; control joints are pre-planned cuts that
        decide where. With proper joints, the cracks land in the joints
        (invisible). Without joints, the slab cracks randomly across
        the surface.
      </p>

      <FreezeThawCycleChart />

      <h2>Clay-heavy soils and subgrade settling</h2>
      <p>
        The Salt Lake Valley and Utah Valley sit on alluvial deposits
        — sediment dumped over millennia by streams coming out of the
        Wasatch Range. Some areas (Sandy, Draper foothills, eastern
        SLC) have rocky base near the surface. Others (the valley
        floor, parts of West Valley, much of Davis County) are
        clay-heavy.
      </p>
      <p>
        Clay does two things concrete doesn&rsquo;t like:
      </p>
      <ol>
        <li>
          It expands when wet and contracts when dry. A clay-heavy
          subgrade swells in spring snowmelt, then shrinks in summer
          drought. The slab rides that motion every year.
        </li>
        <li>
          It compacts unevenly. Pockets of clay that weren&rsquo;t
          properly compacted before the pour will settle differently
          than the surrounding base over the first 18–36 months.
        </li>
      </ol>
      <p>
        The result is settled sections, sometimes with a noticeable lip
        between the settled slab and an adjacent surface. This is
        almost always a subgrade-prep failure, not a concrete failure.
        The slab itself might be fine — it&rsquo;s just sitting on a
        base that moved.
      </p>

      <h2>High-altitude UV and surface degradation</h2>
      <p>
        Utah&rsquo;s sun is harder on concrete than the same date and
        time in lower-elevation states. UV intensity at 4,300 ft (Salt
        Lake) is roughly 25% higher than at sea level; in St. George at
        2,800 ft the temperature swing is bigger but the UV is still
        strong. Sealers degrade faster. Stamped finish color fades.
        Surface paste oxidizes and turns chalky if it doesn&rsquo;t get
        resealed.
      </p>
      <p>
        Mitigation is maintenance: reseal stamped or decorative
        concrete every 2–3 years, plain concrete every 4–5. Power-wash
        annually. Skipping reseals doesn&rsquo;t cause failure
        immediately but it accelerates everything else.
      </p>

      <h2>Diagnosing your specific concrete</h2>
      <p>
        When we walk a property to diagnose cracking, we&rsquo;re
        asking three questions:
      </p>
      <ul>
        <li>
          <strong>Where is the crack?</strong> Centered crack on a slab
          with no joints — failure of the original install. Crack at a
          joint or near a corner — normal stress relief. Crack along an
          area where water collects — drainage problem.
        </li>
        <li>
          <strong>How wide is it, and is it widening?</strong> Under 1/8
          inch and stable — cosmetic. 1/8 to 1/4 inch and stable —
          monitor. Wider than 1/4 inch or actively growing — structural,
          needs attention.
        </li>
        <li>
          <strong>Is there displacement?</strong> A crack with vertical
          movement (one side higher than the other) means the slab is
          settling or heaving. That&rsquo;s a subgrade or moisture
          problem, not a surface concern.
        </li>
      </ul>
      <p>
        Most cracks fall in the &ldquo;monitor&rdquo; or
        &ldquo;cosmetic&rdquo; category. Most patio settling is
        recoverable. Most spalling is local rather than slab-wide. The
        right call is rarely &ldquo;tear the whole thing out&rdquo; — but
        it&rsquo;s also rarely &ldquo;ignore it forever.&rdquo;
      </p>

      <h2>What to do next</h2>
      <p>
        If you&rsquo;re looking at concerning concrete on your property:
      </p>
      <ul>
        <li>
          For diagnosis specific to driveways, see{" "}
          <Link href="/blog/driveway-replacement-vs-repair">
            driveway replacement vs repair
          </Link>
          .
        </li>
        <li>
          For a broader look at common failure modes, see{" "}
          <Link href="/blog/10-common-residential-concrete-problems">
            10 common residential concrete problems
          </Link>
          .
        </li>
        <li>
          For repair work itself, see our{" "}
          <Link href="/services/residential-concrete-repair-utah">
            concrete repair service
          </Link>
          .
        </li>
        <li>
          For new pours done right, see our{" "}
          <Link href="/services/concrete-driveways-utah">
            concrete driveway service
          </Link>{" "}
          — including the technical specs we use for Utah conditions.
        </li>
      </ul>
    </Prose>
  );
}
