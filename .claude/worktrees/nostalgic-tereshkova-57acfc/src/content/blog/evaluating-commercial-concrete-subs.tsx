import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "evaluating-commercial-concrete-subs",
  title: "Evaluating Commercial Concrete Subs: A Procurement Guide",
  metaTitle: "Evaluating Commercial Concrete Subs",
  metaDescription:
    "A procurement framework for evaluating commercial concrete subs. References, capacity, change-order history, Utah-specific competence.",
  excerpt:
    "A procurement framework for evaluating commercial concrete subs — references, capacity, change-order history, Utah-specific competence.",
  authorSlug: "kevin",
  publishedAt: "2026-03-25",
  lastReviewedAt: "2026-05-04",
  readingTimeMinutes: 10,
  targetKeyword: "how to evaluate commercial concrete contractor",
  secondaryKeywords: [
    "commercial concrete sub evaluation",
    "choosing commercial concrete contractor utah",
    "commercial concrete bid evaluation",
    "vetting commercial concrete sub",
    "procurement concrete contractor",
  ],
  siloIntent: "COMMERCIAL",
  articleRole: "decision-framework",
  category: "guides",
  cityAnchor: null,
  heroImage: "/images/blog/img-26-evaluating-commercial-subs.png",
  relatedSlugs: [
    "commercial-concrete-pour-scheduling",
    "utah-soil-conditions-commercial-foundations",
    "how-to-vet-a-concrete-subcontractor",
  ],
  faqs: [
    {
      question:
        "How does evaluating a commercial sub differ from evaluating a residential sub?",
      answer:
        "Commercial evaluation puts more weight on schedule discipline, change-order history, insurance/bonding capacity, and procurement-process fit. Residential evaluation weights workmanship references and warranty terms more heavily. Both care about technical competence, but the commercial decision involves a procurement team, structured RFP process, and integration with other trades that residential one-off work doesn't.",
    },
    {
      question: "Is bonding capacity a deal-breaker if a sub doesn't have it?",
      answer:
        "Project-dependent. For projects under $250K, performance and payment bonds are often optional and the sub's lack of bonding capacity isn't disqualifying. For projects over $500K or AHJ-required bonded work, yes — bonding capacity is a hard prerequisite. Always check whether the sub can scale up bonding for your project size, not just whether they currently carry a bond.",
    },
    {
      question: "What's a credible change-order rate for a commercial sub?",
      answer:
        "Industry typical is 3–8% of contract value across the project life. Below 3% is suspicious — either the sub absorbed scope creep silently (which sometimes turns into disputes later) or the project had unusually clean specs. Above 8% suggests under-bidding to win the contract and recovering margin through change orders. Ask subs about their typical range and how they document changes.",
    },
    {
      question:
        "How important is having Utah-specific experience vs general commercial concrete experience?",
      answer:
        "For ground-up foundation work or anything below-grade, very important. Utah's clay soils, frost depths, and freeze-thaw cycles drive subgrade prep decisions that subs from milder climates underestimate. For above-grade structural concrete or interior slab work, less important — the techniques are more universal. Match the experience profile to your project's exposure to Utah-specific conditions.",
    },
    {
      question: "Can I rely on lowest-bid awards for commercial concrete?",
      answer:
        "Sometimes — when the low bidder has the same vetting profile as the median. Most commercial concrete failures trace back to low-bid awards where the sub cut prep work or used cheaper mix. The total-cost calculation (bid + change-order risk + schedule risk + warranty exposure) almost always favors the median bid with credible references over the lowest bid. See our cross-silo article on bid math for the full framework.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        Evaluating a commercial concrete sub is fundamentally
        different from a residential evaluation. The procurement
        process has more steps, the risk profile is bigger, and the
        consequences of a bad pick cascade across more trades and
        more dollars. A residential homeowner might be out a few
        thousand dollars and three months of inconvenience for a
        bad sub. A commercial GC might be out six figures and a
        delayed Certificate of Occupancy.
      </p>
      <p>
        This is the framework experienced commercial procurement
        teams use. It overlaps with builder-side residential
        evaluation in places, but adds the layers that matter when
        you&rsquo;re working through an RFP, structured contract,
        and multi-trade integration.
      </p>

      <h2>Five evaluation dimensions</h2>

      <h3>1. Reference profile — and the right kind</h3>
      <p>
        For commercial work, the references that matter most are
        from other GCs and property owners, not from one-off
        residential customers. Ask for:
      </p>
      <ul>
        <li>
          Two GC references on projects of similar scope and dollar
          value to yours
        </li>
        <li>
          One reference from an AHJ inspector who&rsquo;s worked
          with the sub recently (most credible subs maintain
          working relationships with municipal inspectors and can
          name names)
        </li>
        <li>
          One reference on a project that went sideways — how the
          sub handled the disruption matters more than how they
          handled smooth projects
        </li>
      </ul>
      <p>
        Subs who can&rsquo;t produce these references in 48 hours
        haven&rsquo;t worked with credible commercial counterparties
        successfully — or have, but the counterparties won&rsquo;t
        vouch.
      </p>

      <h3>2. Capacity — for your specific project size</h3>
      <p>
        Commercial subs have project-size sweet spots. A sub who
        does great work on $50K projects often struggles on $500K
        projects, and vice versa. Capacity questions to surface
        in the evaluation:
      </p>
      <ul>
        <li>
          Largest project completed in the last 24 months by dollar
          value and square footage
        </li>
        <li>
          Crew size at peak — and whether that crew is
          owner-operated or sub-staffed (different accountability
          profile)
        </li>
        <li>
          Bonding capacity — current and how high they can scale
          for your project. Lack of bonding capacity isn&rsquo;t
          disqualifying for smaller projects but matters for
          larger.
        </li>
        <li>
          Equipment and ready-mix relationships — can they pour
          your size in the timeline you need, or will they be
          waiting on supply?
        </li>
      </ul>

      <h3>3. Change-order history — pattern matters more than rate</h3>
      <p>
        Industry-typical change-order rates run 3–8% of contract
        value. The number itself is less informative than the
        pattern:
      </p>
      <ul>
        <li>
          <strong>Low rate (under 3%)</strong> — either the sub
          documents changes diligently and absorbs minor ones, or
          the sub absorbs scope creep silently and surprises
          everyone at closing.
        </li>
        <li>
          <strong>Industry rate (3–8%)</strong> — healthy. The sub
          is documenting changes and managing them through proper
          change-order process.
        </li>
        <li>
          <strong>High rate (above 8%)</strong> — concerning. Often
          indicates under-bidding to win the contract with the
          intent to recover margin through change orders. Walk
          through their change-order process in detail before
          awarding.
        </li>
      </ul>

      <h3>4. Schedule discipline — the real differentiator</h3>
      <p>
        Schedule risk is the largest commercial concrete risk
        beyond outright workmanship failure. The questions that
        surface schedule discipline:
      </p>
      <ul>
        <li>
          On-time completion rate on the last 5 commercial
          projects (most credible subs can answer in some form)
        </li>
        <li>
          How they sequence pours around inspection schedules,
          weather, and tenant access (covered in detail in our{" "}
          <Link href="/blog/commercial-concrete-pour-scheduling">
            pour-scheduling article
          </Link>
          )
        </li>
        <li>
          Buffer days built into their typical project schedule —
          credible subs name a number (typically 2–5 business days
          across a project)
        </li>
        <li>
          What happens when an inspection delays past the buffer
          — credible subs re-sequence; less credible ones wait
          idle
        </li>
      </ul>

      <h3>5. Utah-specific competence</h3>
      <p>
        For ground-up foundation work and below-grade concrete, this
        matters a lot. Subs with deep Wasatch Front experience know
        the clay-pocket distribution by neighborhood, the frost-depth
        variation by elevation, the alkalinity profile of southern
        Utah soils. Subs from milder climates (or from subbing into
        Utah occasionally) miss the local context.
      </p>
      <p>
        Probe questions:
      </p>
      <ul>
        <li>
          Subgrade prep specifics for the neighborhood your project
          is in
        </li>
        <li>
          Frost-depth experience for the region (30+&rdquo; for
          most Wasatch Front projects, more for mountains)
        </li>
        <li>
          Moisture barrier and drainage considerations on
          clay-heavy sites
        </li>
        <li>
          Cold-weather and hot-weather pour techniques
          they&rsquo;ve used recently
        </li>
      </ul>
      <p>
        Detail in our{" "}
        <Link href="/blog/utah-soil-conditions-commercial-foundations">
          Utah soil conditions article
        </Link>
        .
      </p>

      <h2>How to weight the evaluation</h2>
      <p>
        Different procurement teams weight the dimensions
        differently. As a general framework:
      </p>
      <ul>
        <li>
          <strong>Reference profile + Utah competence</strong> —
          highest weight. These predict project outcomes more than
          anything else.
        </li>
        <li>
          <strong>Schedule discipline</strong> — heavy weight. The
          single biggest risk dimension on commercial concrete.
        </li>
        <li>
          <strong>Capacity match</strong> — go/no-go gate. If
          capacity doesn&rsquo;t match the project size, the rest
          of the evaluation is moot.
        </li>
        <li>
          <strong>Change-order history</strong> — moderate weight.
          Tells you about the working relationship more than about
          technical quality.
        </li>
        <li>
          <strong>Bid price</strong> — lower weight than most
          procurement teams initially assume. The lowest bid is
          almost never the right answer for commercial concrete.
        </li>
      </ul>

      <h2>What to do with the evaluation</h2>
      <p>
        After the evaluation, the decision usually falls out
        cleanly:
      </p>
      <ol>
        <li>
          <strong>Median bid + strongest references + capacity
          match</strong> = strong candidate
        </li>
        <li>
          <strong>Below-median bid + matching reference profile +
          capacity match</strong> = also strong, run one extra
          reference check on schedule discipline
        </li>
        <li>
          <strong>Above-median bid + premium references</strong> =
          consider for high-stakes projects where workmanship is
          worth premium
        </li>
        <li>
          <strong>Lowest bid + thin references</strong> = walk
          away. The math doesn&rsquo;t work.
        </li>
      </ol>
      <p>
        For the broader builder-side concrete sub vetting framework
        (much of which applies cross-silo), see{" "}
        <Link href="/blog/how-to-vet-a-concrete-subcontractor">
          how to vet a concrete subcontractor
        </Link>
        . For our commercial track specifically — including how we
        position on each of the five dimensions above — see{" "}
        <Link href="/commercial">
          our commercial silo page
        </Link>
        .
      </p>
    </Prose>
  );
}
