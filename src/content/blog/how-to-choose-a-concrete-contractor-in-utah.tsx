import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "how-to-choose-a-concrete-contractor-in-utah",
  title: "How to Choose a Concrete Contractor in Utah: A Homeowner's Guide",
  metaTitle: "How to Choose a Concrete Contractor Utah",
  metaDescription:
    "A homeowner's framework for evaluating concrete contractors in Utah. Five questions to ask, three red flags to spot, and what 'fair' actually means.",
  excerpt:
    "Five questions to ask, three red flags to spot, and what 'fair' actually means. The framework Utah homeowners need before signing a contract.",
  authorSlug: "amy",
  publishedAt: "2026-05-01",
  lastReviewedAt: "2026-05-04",
  readingTimeMinutes: 9,
  targetKeyword: "how to choose a concrete contractor",
  secondaryKeywords: [
    "choosing a concrete contractor utah",
    "best concrete contractor utah",
    "how to find a good concrete contractor",
    "concrete contractor questions to ask",
    "evaluating concrete contractors",
  ],
  siloIntent: "RESIDENTIAL",
  articleRole: "front-door",
  category: "guides",
  cityAnchor: null,
  relatedSlugs: [
    "why-utah-concrete-cracks",
    "10-common-residential-concrete-problems",
    "what-to-expect-when-you-request-a-concrete-quote",
  ],
  faqs: [
    {
      question: "What's the single most important question to ask a concrete contractor?",
      answer:
        "'How long is your typical lead time, and what's your no-show rate?' Reliable scheduling is the difference between contractors who deliver and contractors who don't. The honest answer is usually 2–6 weeks of lead time and a no-show rate near zero. If a contractor can start tomorrow with no schedule pressure, they're either between jobs (fine) or unbookable (red flag).",
    },
    {
      question: "Should I always go with the lowest bid?",
      answer:
        "No. Concrete pricing has a real floor — materials, equipment, labor, insurance, profit. A bid 30% below comparable quotes usually means corners are getting cut: thinner pour, less rebar, skipped subgrade prep, no warranty. Pick the median bid from a credible contractor over the lowest bid from anyone.",
    },
    {
      question: "Do I need to verify license and insurance separately?",
      answer:
        "Yes, before signing. Utah's DOPL (Division of Occupational and Professional Licensing) has a free online lookup. Ask for a current Certificate of Insurance (COI) and verify it directly with the insurer if the project is large. Reputable contractors expect this and don't push back.",
    },
    {
      question: "How many quotes should I get?",
      answer:
        "Three is the sweet spot. One isn't enough context to know if a price is fair; five wastes everyone's time and signals you're shopping rather than buying. Get three written quotes from contractors with different review profiles and compare line-by-line — including warranty terms, included prep work, and timeline commitments.",
    },
    {
      question: "What's the difference between 'fully insured' and 'bonded'?",
      answer:
        "Insurance covers damage they cause to your property and injuries on your job site. Bonding covers you financially if the contractor takes deposit money and disappears. Both matter for big projects. For small residential work (under $10K), insurance is the critical one — bonding becomes more relevant on larger commercial work.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        Hiring a concrete contractor is one of those decisions that&rsquo;s
        easy to get wrong and expensive to fix. A bad pour cracks within
        two winters. A bad relationship leaves you with a half-finished
        driveway and a contractor who stops returning calls. A bad price
        — too low or too high — costs you money you can&rsquo;t get back.
      </p>
      <p>
        This is the framework we&rsquo;d use ourselves. Not the version
        designed to flatter the trade — the version that actually filters
        good contractors from bad. Five questions to ask, three red flags
        to spot, and a quick guide to what &ldquo;fair&rdquo; actually
        means in Utah.
      </p>

      <h2>Five questions to ask every contractor</h2>

      <h3>1. How long is your typical lead time?</h3>
      <p>
        Reliable contractors are 2–6 weeks out from quote acceptance during
        the warm-weather pour window. If someone tells you they can start
        tomorrow with no schedule pressure, they&rsquo;re either between
        projects (fine, ask why) or no one books them (a problem). If
        someone tells you they&rsquo;re booked four months out, they&rsquo;re
        either great and you should wait, or they&rsquo;re overcommitted
        and the project will keep getting bumped.
      </p>

      <h3>2. Who&rsquo;s actually pouring my concrete?</h3>
      <p>
        Some contractors run a sales operation and sub out the actual work
        to whichever crew is available. Some are an owner-operator with the
        same five-person team on every job. Both can produce good work, but
        the pricing, accountability, and consistency are very different.
        Ask directly: &ldquo;Will the people quoting this be on the site
        the day of the pour?&rdquo;
      </p>

      <h3>3. What&rsquo;s your warranty, and what does it cover?</h3>
      <p>
        Two-year workmanship is a reasonable Utah baseline. Some contractors
        offer one year, some offer five. The bigger question is what the
        warranty actually covers. Look for: workmanship defects, settling
        within reasonable tolerance, cracking beyond the structural-concrete
        norm. What it usually doesn&rsquo;t cover: minor surface cracking
        (all concrete cracks somewhere), damage from owner additions, or
        third-party damage. Get the warranty in writing.
      </p>

      <h3>4. Can I see three projects you completed in the last year?</h3>
      <p>
        Photos are easy to fake. Drive-by-able addresses are real evidence.
        Reputable contractors should be able to give you three nearby
        projects you can drive past — not on a homeowner&rsquo;s property
        unannounced, but enough that you can see the finished work from the
        street. If they hesitate, that&rsquo;s data.
      </p>

      <h3>5. Walk me through your subgrade prep.</h3>
      <p>
        This question separates contractors who know what they&rsquo;re
        doing from contractors who pour pretty concrete on top of bad
        prep. The right answer involves: excavation depth, compaction (with
        a plate compactor, not just driving the truck over it), gravel
        base where required, leveling, and moisture control. If their
        answer is &ldquo;we just pour over the dirt,&rdquo; you&rsquo;re
        looking at concrete that will settle and crack within five years.
      </p>

      <h2>Three red flags to walk away from</h2>

      <h3>The cash discount</h3>
      <p>
        &ldquo;If you pay cash, I&rsquo;ll knock 20% off.&rdquo; Translation:
        I want to avoid taxes, paper trail, and accountability. A cash deal
        on a residential concrete project usually means no warranty, no
        permit, and no recourse if the work fails. Pay by check or card,
        even if it costs more. The paper trail is part of what you&rsquo;re
        buying.
      </p>

      <h3>The 50% upfront deposit</h3>
      <p>
        Standard residential concrete deposits in Utah run 10–25% to lock
        the schedule and cover initial materials. A 50% deposit is unusual
        for a residential job and a 100% upfront request is a scam. The
        contractor can&rsquo;t front the materials? They have a cash-flow
        problem you don&rsquo;t want to inherit.
      </p>

      <h3>No written contract</h3>
      <p>
        &ldquo;A handshake is good enough.&rdquo; No, it isn&rsquo;t. Every
        residential concrete project should have a written contract that
        spells out: scope, square footage, thickness, finish, timeline,
        payment schedule, warranty terms, and what happens if the project
        runs long or weather delays the pour. If the contractor pushes
        back on a written contract, walk away.
      </p>

      <h2>What &ldquo;fair&rdquo; actually means in Utah</h2>
      <p>
        Concrete pricing in Utah varies more than most homeowners realize
        — driven by ready-mix prices (which fluctuate seasonally), labor
        market conditions, fuel costs, and the specific complexity of your
        project. We don&rsquo;t publish per-square-foot rates because
        honest answers vary too much. But the variance among <em>credible</em>{" "}
        contractors for the same job is usually 15–25%, not 60%. If
        you&rsquo;re seeing dramatic spreads in your three quotes, the
        outliers are telling you something.
      </p>
      <p>
        The lowest bid is often a contractor who hasn&rsquo;t fully
        understood your scope or who plans to skip prep work. The highest
        bid is often someone who&rsquo;s overbooked and pricing to push
        you to a competitor. The honest middle is usually a contractor
        who walked your site, understood the constraints, and priced the
        actual work.
      </p>

      <h2>What to expect once you sign</h2>
      <p>
        Once you accept a quote, you should get: a written contract within
        a few business days, a confirmed pour window (usually a week-long
        target rather than a single day, because weather), a deposit
        invoice, and a project manager assigned to your job. We cover the
        full quote-to-pour process in{" "}
        <Link href="/blog/what-to-expect-when-you-request-a-concrete-quote">
          what to expect from a concrete quote
        </Link>
        .
      </p>
      <p>
        For follow-up reading on diagnosis, see{" "}
        <Link href="/blog/why-utah-concrete-cracks">
          why Utah concrete cracks
        </Link>{" "}
        and{" "}
        <Link href="/blog/10-common-residential-concrete-problems">
          10 common residential concrete problems
        </Link>
        . Or jump straight to{" "}
        <Link href="/services/concrete-driveways-utah">
          concrete driveways in Utah
        </Link>{" "}
        for the technical specs we work to.
      </p>
    </Prose>
  );
}
