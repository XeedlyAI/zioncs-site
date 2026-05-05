import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "multi-site-concrete-maintenance-programs",
  title:
    "Multi-Site Concrete Maintenance Programs in Utah: A Facility Manager's Guide",
  metaTitle: "Multi-Site Concrete Maintenance Guide",
  metaDescription:
    "How a multi-site Utah operator should structure a concrete maintenance program. Vendor selection, pricing, reporting cadence, and red flags.",
  excerpt:
    "How a Utah operator should structure a multi-site concrete maintenance program. Vendor selection, pricing, reporting cadence, red flags.",
  authorSlug: "kevin",
  publishedAt: "2026-03-21",
  lastReviewedAt: "2026-05-04",
  readingTimeMinutes: 10,
  targetKeyword: "multi site concrete maintenance program",
  secondaryKeywords: [
    "facility concrete maintenance program",
    "multi location concrete contractor program",
    "enterprise concrete maintenance",
    "facility manager concrete vendor",
    "multi site concrete vendor utah",
  ],
  siloIntent: "ENTERPRISE",
  articleRole: "front-door",
  category: "guides",
  cityAnchor: null,
  relatedSlugs: [
    "vendor-consolidation-concrete-contractor",
    "evaluating-commercial-concrete-subs",
    "commercial-concrete-pour-scheduling",
  ],
  faqs: [
    {
      question: "How many sites is the threshold for a formal maintenance program?",
      answer:
        "Three sites is the practical floor — below that, ad-hoc project pricing usually beats the consolidation overhead. The economics work better at 5–25 sites where standardized specs and rolling schedules generate real savings without crew-capacity constraints. Larger portfolios (50+) sometimes need a partner with specifically larger scale.",
    },
    {
      question:
        "What's the typical contract structure for a multi-site concrete program?",
      answer:
        "12-month base contract with annual renewal. Per-site pricing locked at the start covers planned work (sealing, inspection, recurring repair). Unplanned work (new failures, scope additions) follows a documented escalation framework — typically a per-incident estimate with the property manager's approval before work begins. Quarterly invoicing matches most facility operators' accrual cycles.",
    },
    {
      question: "How do you handle sites that fall outside our portfolio's geography?",
      answer:
        "If your portfolio crosses state lines, we cover the Utah footprint and you'd need a separate partner for out-of-state sites. Within Utah, we travel to single sites in central or eastern Utah (Vernal, Moab, Tooele) for project work but most of our ongoing program work clusters in the Wasatch Front + St. George.",
    },
    {
      question: "What kind of reporting should I expect from a credible vendor?",
      answer:
        "Quarterly per-site status reports with: work completed in the period, current condition assessment, items recommended for next quarter (with cost estimates), and budget burn against the annual program. Format matters — reports should be readable by your exec leadership review, not just by you. Vendors who can't produce digestible reporting are signaling either operational immaturity or unwillingness to be transparent.",
    },
    {
      question: "Can in-house facility teams do concrete maintenance instead?",
      answer:
        "For small repairs (crack sealing, joint resealing, surface patching), sometimes — depends on whether your facilities team has the time and the equipment. For anything structural (replacement, new pours, sub-grade work), almost always a contractor is the right call. Hybrid models work too — facility team handles routine touch-ups, contractor handles seasonal program and project work.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        Most multi-site Utah operators discover their concrete
        problem the same way: a property manager flags a failing
        dumpster pad at site 7, then site 11, then site 4. The
        in-house facilities team has been patching as time allows.
        The vendor mix is whatever sub each property manager
        called when the problem became visible. There&rsquo;s no
        program — there&rsquo;s a backlog of projects that keeps
        growing.
      </p>
      <p>
        The shift from project-based concrete spend to a structured
        multi-site program changes the economics of the work, the
        consistency of outcomes across sites, and the procurement
        overhead facility leaders carry. Done right, a 14-site
        portfolio with one concrete vendor is dramatically cheaper
        and easier to manage than the same portfolio with five
        rotating local subs.
      </p>
      <p>
        This is the framework for structuring a multi-site Utah
        concrete maintenance program — when consolidation pays off,
        what the vendor relationship should look like, and how to
        spot programs that are about to go sideways.
      </p>

      <h2>When does multi-site consolidation pay off?</h2>
      <p>
        Three thresholds drive the math:
      </p>
      <ul>
        <li>
          <strong>Site count of 3 or more</strong> — below 3, the
          consolidation overhead doesn&rsquo;t pay off vs. one-off
          project pricing. Above 3, the savings start showing up.
        </li>
        <li>
          <strong>Geographic concentration</strong> — sites
          clustered along the Wasatch Front or in the St. George
          area benefit most from consolidation. Sites scattered
          across rural Utah or out of state break the economics.
        </li>
        <li>
          <strong>Recurring work mix</strong> — programs with
          ongoing sealing/inspection cycles (every 1–3 years per
          site) plus periodic project work get the most leverage.
          Pure project work (new pads only when sites expand) gets
          less program benefit but still benefits from
          standardized specs and a single relationship.
        </li>
      </ul>

      <h2>How program work differs from project work</h2>
      <p>
        Project work is one-off: site fails, you bid the project,
        sub pours the pad, you pay an invoice, project closes.
        Program work runs differently:
      </p>
      <ul>
        <li>
          <strong>Annual cadence</strong> — the program covers a
          12-month period with planned visits to each site. Some
          sites get sealing this year; some get inspection-only;
          some get repair work.
        </li>
        <li>
          <strong>Standardized spec</strong> — pad thickness, mix,
          rebar grid, finish — locked across the portfolio in the
          first 60 days. Every new pour matches the spec; every
          repair matches the original spec where possible.
        </li>
        <li>
          <strong>Rolling schedule</strong> — sites get queued for
          the appropriate season (spring for inspection, summer for
          new pours, fall for repair, winter for indoor work
          where applicable). The vendor isn&rsquo;t mobilizing
          separately for each site.
        </li>
        <li>
          <strong>Per-site pricing locked</strong> — annual contract
          fixes per-site costs at the start. Unplanned work follows
          a documented escalation framework — typically per-incident
          estimate with property manager approval before work.
        </li>
        <li>
          <strong>Quarterly reporting</strong> — formal report each
          quarter with site-by-site status, work completed,
          recommendations, budget burn.
        </li>
      </ul>

      <h2>What a credible multi-site vendor looks like</h2>
      <p>
        Vendor evaluation for multi-site programs is different from
        evaluating a one-off commercial sub. The dimensions that
        matter:
      </p>

      <h3>1. Capacity for your portfolio size</h3>
      <p>
        A vendor whose typical project size matches yours is a
        better fit than a vendor whose typical work is much larger
        or much smaller. Ask: largest portfolio currently under
        program contract, average per-site work value, crew capacity
        when peak season hits multiple sites simultaneously.
      </p>

      <h3>2. Standardization discipline</h3>
      <p>
        Can the vendor lock a spec across your portfolio in the
        first 60 days? Have they done it before for other multi-site
        clients? Standardization is what produces the consistent
        outcomes that make program work better than scattered
        project work; vendors without that discipline produce
        portfolio-wide variability that becomes your problem 5 years
        out.
      </p>

      <h3>3. Reporting and communication cadence</h3>
      <p>
        Ask to see a sample quarterly report. Format matters — it
        should be readable by your exec leadership review, not buried
        in spreadsheets. Vendors who hand-wave on reporting (&ldquo;we
        just send invoices&rdquo;) are not set up to support a
        program-level relationship.
      </p>

      <h3>4. Pricing transparency</h3>
      <p>
        Per-site pricing should be locked at the start of the
        contract with a documented escalation framework for
        unplanned work. Vendors who quote &ldquo;cost-plus&rdquo; or
        won&rsquo;t commit to per-site numbers are signaling either
        operational immaturity or intent to milk the contract.
      </p>

      <h3>5. Geographic fit</h3>
      <p>
        For Utah portfolios, a Utah-headquartered vendor with deep
        Wasatch Front presence is the right fit. Out-of-state
        regional vendors come with travel costs and gaps in
        Utah-specific competence (soil, freeze-thaw,
        municipality-by-municipality code variations).
      </p>

      <h2>Red flags to watch for</h2>
      <p>
        Programs go sideways for predictable reasons. Three patterns
        to spot:
      </p>
      <ol>
        <li>
          <strong>Scope creep through &ldquo;recommended work.&rdquo;</strong>{" "}
          Vendor recommends increasing amounts of additional work
          each quarter. Some genuine condition deterioration drives
          this; mostly it&rsquo;s the vendor extracting margin
          beyond the program contract. Compare this quarter&rsquo;s
          recommendations against last quarter&rsquo;s — pattern
          should match observable site condition.
        </li>
        <li>
          <strong>Inconsistent spec across sites.</strong> If site
          7&rsquo;s new pad is built differently than site 3&rsquo;s
          even though both came under the same program, the vendor
          either doesn&rsquo;t have standardization discipline or
          is cutting corners situationally. Either way, the
          consistency promise is broken.
        </li>
        <li>
          <strong>Reporting gaps.</strong> Quarterly reports start
          getting late, then thin, then formulaic. Common pattern
          before a vendor is about to ask for a contract change or
          before a quality problem surfaces.
        </li>
      </ol>

      <h2>Bottom line</h2>
      <p>
        Multi-site programs work when (a) the portfolio is large
        enough to consolidate, (b) the vendor has standardization
        discipline and reporting capacity, and (c) the contract
        structure protects both sides through documented escalation
        and transparent per-site pricing. When all three conditions
        hold, the cost savings, consistency, and procurement overhead
        reduction are real.
      </p>
      <p>
        For the math behind vendor consolidation specifically, see{" "}
        <Link href="/blog/vendor-consolidation-concrete-contractor">
          vendor consolidation: why one concrete contractor across
          your Utah portfolio wins
        </Link>
        . For our enterprise track specifically, see{" "}
        <Link href="/multi-site">our multi-site silo page</Link>.
        For the broader sub-evaluation framework that applies to any
        commercial concrete vendor, see{" "}
        <Link href="/blog/evaluating-commercial-concrete-subs">
          evaluating commercial concrete subs
        </Link>
        .
      </p>
    </Prose>
  );
}
