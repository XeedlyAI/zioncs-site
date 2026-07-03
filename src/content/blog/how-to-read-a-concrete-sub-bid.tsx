import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "how-to-read-a-concrete-sub-bid",
  title: "How to Read a Concrete Sub Bid (Line by Line)",
  metaTitle: "How to Read a Concrete Sub Bid",
  metaDescription:
    "What each line on a concrete sub's bid actually means, where the cheap bids hide exclusions, and the line items builders should never see missing.",
  excerpt:
    "Three bids, three numbers, three different scopes. How to normalize concrete bids line by line and find where the cheap one cut.",
  authorSlug: "kevin",
  publishedAt: "2026-06-05",
  lastReviewedAt: "2026-07-03",
  readingTimeMinutes: 9,
  targetKeyword: "how to read a concrete bid",
  secondaryKeywords: [
    "concrete subcontractor bid comparison",
    "concrete bid line items",
    "comparing concrete bids builder",
    "concrete bid exclusions",
    "flatwork bid scope",
  ],
  siloIntent: "BUILDER",
  articleRole: "decision-framework",
  category: "guides",
  cityAnchor: null,
  relatedSlugs: [
    "concrete-sub-reliability-vs-lowest-bid",
    "how-to-vet-a-concrete-subcontractor",
    "common-concrete-sub-failures",
  ],
  faqs: [
    {
      question: "What's the single most important line to check on a concrete bid?",
      answer:
        "Subgrade prep. It's where the largest share of hidden cost and future failure lives. A complete bid states excavation depth, base material and thickness, and compaction method. A bid that says 'prep included' without numbers has left the sub free to pour over whatever's there — and settling cracks at month eight become your callback, not theirs.",
    },
    {
      question: "Is a lump-sum or unit-price concrete bid better for a builder?",
      answer:
        "Lump-sum for defined scope on a single build; unit-price only when quantities genuinely can't be known yet. The trap is a low lump-sum paired with aggressive unit prices for 'additional work' — the sub bids the minimum interpretable scope and makes margin on the extras. If a bid carries unit prices, check them against market before signing, because that's the rate you'll actually pay.",
    },
    {
      question: "Should the concrete mix spec appear on the bid itself?",
      answer:
        "Yes, in numbers: PSI, air entrainment percentage, and slump at minimum. For Utah exterior flatwork, air entrainment matters as much as strength — it's what survives freeze-thaw. A bid that just says 'concrete per code' lets the sub order whatever the plant runs cheapest that day, and you can't verify the truck ticket against a spec that was never written down.",
    },
    {
      question: "How many exclusions are normal on a concrete bid?",
      answer:
        "A handful of reasonable ones — rock excavation, unsuitable-soils remediation, winter protection, engineering, permits. What matters is that exclusions are specific and priced somewhere. An exclusions list longer than the scope list, or vague entries like 'unforeseen conditions,' means the number on page one is a starting bid, not a price.",
    },
    {
      question: "A bid came in well below the other two. Is it automatically wrong?",
      answer:
        "Not automatically — but it's automatically a question. Line the three bids up and find where the low one differs: thinner base, no rebar (or mesh instead), no jointing plan, fewer mobilizations, missing haul-off, or an exclusions list doing heavy lifting. If you genuinely can't find the difference in scope, ask the sub to walk you through their number. A real price survives the walkthrough.",
    },
    {
      question: "What payment structure should a builder expect on flatwork?",
      answer:
        "Progress billing aligned with your draw schedule — typically billed at mobilization milestones or completed phases, with retention if your contract carries it. A sub asking for a large percentage upfront on standard flatwork, or for payment terms outside your draw structure, is signaling cash-flow strain. That strain shows up later as crews pulled to whoever pays fastest.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        Put three concrete bids side by side and you&rsquo;ll usually have
        three different numbers describing three different jobs. The
        numbers get compared; the scopes rarely do. That&rsquo;s how a
        builder ends up awarding the &ldquo;cheapest&rdquo; bid and paying
        the most — the missing scope comes back as change orders, or
        worse, as failures at the eleven-month walkthrough.
      </p>
      <p>
        This is a line-by-line read of a flatwork bid: what each section
        should actually say, where thin bids hide their exclusions, and
        how to normalize three bids so you&rsquo;re comparing prices
        instead of guesses.
      </p>

      <h2>The lines a complete flatwork bid has</h2>

      <h3>Demo and haul-off</h3>
      <p>
        If existing concrete or debris has to come out, the bid should say
        who breaks it, who hauls it, and where disposal cost sits. The
        classic gap: &ldquo;demo by others&rdquo; buried in the
        exclusions, discovered when the crew arrives and the old slab is
        still there. On new construction, the equivalent line is spoils —
        who hauls excavated material off site, and whether the price
        assumes it can be spread on the lot.
      </p>

      <h3>Subgrade prep and base</h3>
      <p>
        The most important line on the page, and the one thin bids
        compress into a single word. A real prep line reads in numbers:
        excavation depth below finish grade, base material (clean gravel,
        not &ldquo;fill&rdquo;), base thickness, and compaction method.
        For typical Utah residential flatwork that&rsquo;s a 4-inch slab
        over 2–4 inches of compacted gravel base, excavated deep enough to
        hold both. A bid that says &ldquo;grade and prep included&rdquo;
        with no numbers has priced the minimum and left the definition of
        &ldquo;prepped&rdquo; to whoever runs the skid steer that day.
        Most flatwork failures are subgrade failures — this line is where
        they&rsquo;re either prevented or purchased.
      </p>

      <h3>Reinforcement</h3>
      <p>
        Rebar size and spacing, or fiber, or mesh — stated, not implied.
        &ldquo;#3 at 18 inches on center, tied, on chairs&rdquo; is a
        spec. &ldquo;Reinforced&rdquo; is not. The chair detail matters
        more than it looks: rebar lying on the subgrade does nothing, and
        a bid that&rsquo;s silent on placement has left the cheapest
        interpretation open. If two bids differ on reinforcement type,
        that alone can explain most of a price gap.
      </p>

      <h3>Concrete mix</h3>
      <p>
        PSI, air entrainment, slump. For exterior work along the Wasatch
        Front, 4,000 PSI with 4–7% air entrainment is the standard that
        survives freeze-thaw; air is the line to check, because
        it&rsquo;s invisible in the finished product and cheap to skip.
        &ldquo;Concrete per code&rdquo; is not a mix spec — it&rsquo;s a
        blank the ready-mix plant fills in later, and you can&rsquo;t
        verify truck tickets against a spec that doesn&rsquo;t exist.
      </p>

      <h3>Finish, joints, and slope</h3>
      <p>
        The finish type per surface (broom for drives and walks, the
        specific pattern and color system if anything is stamped), the
        jointing plan (spacing and depth — control joints cut to a quarter
        of slab depth, spaced roughly 24–36 times slab thickness in
        inches), and drainage slope away from the structure. Bids that
        skip the jointing line are leaving crack control to habit.
        Concrete cracks; joints decide where.
      </p>

      <h3>Mobilizations</h3>
      <p>
        How many site visits the price includes. Most builds need the
        garage slab and porches early and exterior flatwork late —
        that&rsquo;s two mobilizations, and a bid priced for one will
        surface the second as a change order in October. The scheduling
        side of this is its own subject — covered in{" "}
        <Link href="/blog/concrete-flatwork-scheduling-for-builders">
          flatwork scheduling for builders
        </Link>{" "}
        — but the count belongs on the bid.
      </p>

      <h3>Cure, sealing, and warranty</h3>
      <p>
        Curing method stated (compound, blankets, or wet cure), sealer
        included or excluded, and warranty terms in plain language — what
        counts as a defect, for how long, and who pays for the comeback.
        A sub confident in their subgrade work writes a real warranty. A
        sub who knows what&rsquo;s under their slabs writes a vague one.
      </p>

      <h2>Where cheap bids hide the difference</h2>
      <p>
        Almost every too-good number is built the same four ways. The
        exclusions list carries the real scope — rock, unsuitable soils,
        haul-off, winter protection, pump truck, each one a change order
        waiting for its trigger. Vague lines replace specs — &ldquo;prep
        included,&rdquo; &ldquo;reinforced,&rdquo; &ldquo;per
        code&rdquo; — so the sub can deliver the cheapest legal
        interpretation. Quantities run light — square footage measured
        optimistically, thickness assumed at the minimum — with unit
        prices standing by for the &ldquo;extra&rdquo; work that was
        always going to be needed. Or the schedule is the discount — the
        number assumes your job fills gaps in their calendar, which means
        your pour dates are whatever&rsquo;s left after their better
        customers are served.
      </p>
      <p>
        None of these are visible in the total. All of them are visible in
        the lines. The deeper economics of why the low bid usually costs
        more is covered in{" "}
        <Link href="/blog/concrete-sub-reliability-vs-lowest-bid">
          sub reliability vs the lowest bid
        </Link>
        .
      </p>

      <h2>How to normalize three bids</h2>
      <p>
        Build a one-page grid: rows for each line above, one column per
        sub. Fill it from the bid documents only — no phone-call
        clarifications yet. Every cell you can&rsquo;t fill from the
        paper is a finding in itself: it means that sub&rsquo;s number
        doesn&rsquo;t include a commitment on that line.
      </p>
      <p>
        Then make one call per sub and ask them to fill their blanks in
        writing. Watch what happens. Complete bidders answer in minutes
        because the answers already exist. Thin bidders hedge, or the
        number moves. Either response tells you what the original bid was
        worth. Only after the grid is full do you compare totals — and at
        that point, the spread between bids usually shrinks to something
        that reflects real differences in crew quality and schedule
        reliability, which is the comparison you actually wanted to make.
      </p>
      <p>
        One caution from the sub&rsquo;s side of the table: a bid
        isn&rsquo;t a vetting process. A complete, well-written bid from a
        crew you&rsquo;ve never checked references on is still a gamble —
        paper is cheap, and the failure modes that hurt builders show up
        on site, not in documents.
      </p>

      <h2>Where to go from here</h2>
      <p>
        The bid grid pairs with the reference-and-site-visit framework in{" "}
        <Link href="/blog/how-to-vet-a-concrete-subcontractor">
          how to vet a concrete subcontractor
        </Link>
        , and the failure modes a thin bid predicts are cataloged in{" "}
        <Link href="/blog/common-concrete-sub-failures">
          common concrete sub failures
        </Link>
        . For putting scope language around quality itself, see{" "}
        <Link href="/blog/concrete-tolerances-and-callbacks">
          concrete tolerances and callbacks
        </Link>
        . If you want to see how our own numbers hold up under this kind
        of read, start at{" "}
        <Link href="/builders">the builders page</Link> or{" "}
        <Link href="/quote">request a quote</Link> — we&rsquo;ll walk you
        through every line.
      </p>
    </Prose>
  );
}
