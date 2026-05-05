import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "what-to-expect-when-you-request-a-concrete-quote",
  title: "What to Expect When You Request a Concrete Quote",
  metaTitle: "What to Expect From a Concrete Quote",
  metaDescription:
    "From your first call to a written quote in your inbox — exactly how the Zion CS quote process works, what we measure, and what determines the price.",
  excerpt:
    "From the first call to a written quote in your inbox: what we measure, what we ask, and what actually determines the price. No mystery.",
  authorSlug: "amy",
  publishedAt: "2026-04-19",
  lastReviewedAt: "2026-05-04",
  readingTimeMinutes: 6,
  targetKeyword: "what happens when you request a concrete quote",
  secondaryKeywords: [
    "concrete quote process",
    "how to get a concrete quote",
    "what to expect concrete contractor visit",
    "concrete project quote process",
    "concrete site visit",
  ],
  siloIntent: "RESIDENTIAL",
  articleRole: "process-guide",
  category: "guides",
  cityAnchor: null,
  relatedSlugs: [
    "how-to-choose-a-concrete-contractor-in-utah",
    "driveway-replacement-vs-repair",
    "10-common-residential-concrete-problems",
  ],
  faqs: [
    {
      question: "How long does it take to get a quote?",
      answer:
        "Most quotes go out within 7 business days of the site walk. Larger or more complex projects take longer — commercial bids and multi-site rollouts can run 2–3 weeks because we coordinate with multiple subs and check material lead times. We tell you the expected turnaround at the end of the site walk.",
    },
    {
      question: "Is the quote free?",
      answer:
        "Yes. Site walks and written quotes are no-charge for residential and most commercial work. We expect to win some, lose some — that's the cost of doing business. If a quote needs structural engineering or specialty consultation (rare for residential), we'd flag that upfront.",
    },
    {
      question: "Do I need to be home for the site walk?",
      answer:
        "We prefer it for residential — being there means you can answer questions about how you'll use the space, which affects the design. For commercial work where the property manager isn't on-site, photos plus a phone walkthrough often work. Tell us your preference when you book the walk.",
    },
    {
      question: "What if the actual project costs more than the quote?",
      answer:
        "Quotes are firm written numbers, not estimates. Once you sign, the price is the price — unless we encounter something genuinely unforeseen during work (buried utilities, unexpected soil conditions, scope changes you request). We document any change orders before doing the work, never after. Customers shouldn't be surprised by their final invoice.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        Most homeowners have only requested a concrete quote once or
        twice in their lives. There&rsquo;s no reason to know how it
        works — but knowing makes the experience less stressful and
        helps you spot when something&rsquo;s off. Here&rsquo;s the
        whole process from your first call to a written quote in your
        inbox.
      </p>

      <h2>Step 1: First contact</h2>
      <p>
        You&rsquo;ve filled out the form on the site, called the office,
        or sent an email. Within a business day or two, you&rsquo;ll
        get a response from someone on our office team — usually Amy
        (Marketing/Office Manager) for residential, sometimes Josh
        (Project Manager) for builder or commercial work.
      </p>
      <p>
        We&rsquo;ll ask the basics: what kind of project, where, rough
        size, target timeline, any specific finish or design ideas you
        have. The goal is to confirm it&rsquo;s a project we can do
        well, schedule a site walk, and answer initial questions.
      </p>
      <p>
        For straightforward residential repair (a single crack, a
        small patio extension), sometimes we can quote from photos
        without a site walk. For anything new-pour or larger, the site
        walk is the next step.
      </p>

      <h2>Step 2: The site walk</h2>
      <p>
        A project manager comes to your property, usually within a
        week. Walks the site with you. Takes measurements. Looks at
        access, drainage, what&rsquo;s underground, what&rsquo;s
        next to the work area, what needs to be protected.
      </p>
      <p>
        For residential, plan on 30–45 minutes. We&rsquo;ll ask:
      </p>
      <ul>
        <li>
          What are you trying to do with this space? (Use case drives
          design decisions — dimensions, drainage slope, finish.)
        </li>
        <li>
          What&rsquo;s your timeline? Hard deadline (closing date,
          event), soft target, or open?
        </li>
        <li>
          Any aesthetic preferences? (Stamped, plain, color, border
          treatment, integration with existing concrete.)
        </li>
        <li>
          Are there utilities we should know about? (Buried lines,
          irrigation, septic, gas — your locator service can mark
          before we pour, but knowing during the walk affects the
          quote.)
        </li>
        <li>
          What&rsquo;s the access situation? (Truck access for the
          mixer, swing space for the pump, where can we park, where
          can we stage materials?)
        </li>
      </ul>
      <p>
        For builder and commercial work, the walk is usually with the
        GC or property manager and includes plan review if drawings
        exist.
      </p>

      <h2>Step 3: What determines the price</h2>
      <p>
        After the walk, we go quiet for a few days while the quote
        gets put together. Here&rsquo;s what&rsquo;s actually going
        into that number:
      </p>
      <ol>
        <li>
          <strong>Square footage and thickness</strong> — the basic
          driver. More slab, more concrete, more rebar, more labor.
        </li>
        <li>
          <strong>Subgrade prep</strong> — virgin ground vs replacing
          old concrete. Demo work has a real cost. Existing site
          drainage problems we have to fix add to the prep.
        </li>
        <li>
          <strong>Concrete mix</strong> — 4,000 PSI air-entrained is
          our residential default. Higher-PSI mixes for specific
          applications cost more. Color and stamping additives on top
          of the base mix.
        </li>
        <li>
          <strong>Reinforcement</strong> — rebar grid sized to slab.
          Heavier-load applications need more steel.
        </li>
        <li>
          <strong>Finish</strong> — broom is base. Float, exposed
          aggregate, stamped, stained, decorative borders all add
          labor and material.
        </li>
        <li>
          <strong>Access and complexity</strong> — narrow lots,
          backyard pours requiring a pump truck, weather-sensitive
          schedules. Real costs that affect the bid.
        </li>
        <li>
          <strong>Current ready-mix prices</strong> — concrete
          pricing fluctuates seasonally and with fuel costs. Our
          quotes are valid for 30 days because the underlying
          ready-mix price moves.
        </li>
        <li>
          <strong>Permits and inspection fees</strong> — passed
          through at cost on the final invoice if your project needs
          them.
        </li>
        <li>
          <strong>Profit margin</strong> — yes, we make money on
          this. A reasonable margin (15–25% in this trade) keeps the
          business healthy enough to stand behind the warranty for
          two years.
        </li>
      </ol>

      <h2>Step 4: The written quote</h2>
      <p>
        Within 7 business days of the site walk (longer for commercial
        and complex projects), the written quote arrives in your
        inbox. It includes:
      </p>
      <ul>
        <li>Scope description with square footage and thickness</li>
        <li>Concrete spec (PSI, air entrainment, reinforcement)</li>
        <li>Finish and design details</li>
        <li>Estimated timeline (start window, expected duration)</li>
        <li>Total project cost — itemized where helpful</li>
        <li>Payment schedule (typically 10–25% deposit, balance on completion)</li>
        <li>Warranty terms (2-year workmanship standard)</li>
        <li>Quote validity period (typically 30 days)</li>
      </ul>
      <p>
        No high-pressure follow-up. We send the quote, you take the
        time you need to compare, and you reach back when you&rsquo;re
        ready. We&rsquo;ll follow up once at around 2 weeks if we
        haven&rsquo;t heard back; after that, we leave you alone.
      </p>

      <h2>Step 5: From signed quote to scheduled pour</h2>
      <p>
        When you accept the quote, three things happen quickly: a
        formal contract, the deposit invoice, and a target pour
        window. We don&rsquo;t lock a single calendar date —
        Utah weather is too variable. Instead, we set a week-long
        target and confirm the specific pour date 3–5 days out based
        on the forecast.
      </p>
      <p>
        Between signing and pour day, we&rsquo;ll:
      </p>
      <ul>
        <li>Pull permits if required</li>
        <li>Schedule the utility locator</li>
        <li>Order materials and confirm ready-mix delivery</li>
        <li>Walk you through what to expect day-by-day</li>
      </ul>
      <p>
        On the day of the pour, the project manager who walked the
        site is the one running the work. Same crew you&rsquo;ve
        already met.
      </p>

      <h2>Where to start</h2>
      <p>
        If you&rsquo;re still evaluating contractors before you
        request quotes, see{" "}
        <Link href="/blog/how-to-choose-a-concrete-contractor-in-utah">
          how to choose a concrete contractor in Utah
        </Link>
        . If you&rsquo;re ready to start, head to the{" "}
        <Link href="/quote">request-a-quote</Link> page. Or call us
        directly — number&rsquo;s in the header.
      </p>
    </Prose>
  );
}
