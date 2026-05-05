import type { ConsoleQuery } from "@/types/console";

/**
 * Pre-canned query/response pairs surfaced as suggestion pills on the
 * Intelligence Console. Action routing tuned for ZionCS personas:
 *   - Residential repair / pricing-curious → intake (quote form)
 *   - Commercial / RFP / large project → calendar (discovery call)
 *   - Service-area / general info → contact_info (phone)
 *   - Builder partnership → calendar (builder discovery call)
 *   - Enterprise / multi-site → calendar (enterprise discovery call)
 */
export const CONSOLE_QUERIES: readonly ConsoleQuery[] = [
  {
    id: "lead-time",
    label: "How fast can you start?",
    response: {
      body: "Spring through fall residential work is typically 2–6 weeks out from quote acceptance. Commercial and builder schedules align with your construction timeline. If you've got a hard deadline (closing, permit window, event), tell us when you request the quote and we'll work backward from it. Average response on quote requests is 2 business hours.",
      actions: [
        {
          type: "intake",
          label: "Request a quote",
          description: "Tell us your project + target window — written quote within 7 days.",
        },
      ],
    },
  },
  {
    id: "residential-repair",
    label: "Driveway repair near me?",
    response: {
      body: "We work the entire Wasatch Front from Ogden through Provo plus St. George. Driveway repair is one of our most common residential calls — cracking, settling, spalling, and full-section replacement. The first step is a site walk; we tell you straight whether your driveway is repair-grade or replacement-grade, and quote the honest path.",
      actions: [
        {
          type: "intake",
          label: "Request a repair quote",
          description: "Send photos + your address — we'll come walk it within a week.",
        },
      ],
    },
  },
  {
    id: "commercial-rfp",
    label: "Commercial RFP — got bandwidth?",
    response: {
      body: "Yes, we run a commercial track separate from residential — parking lots, ADA-compliant sidewalks, foundation slabs, dumpster pads. We're set up to coordinate with GCs and property managers, work around retail traffic and construction critical paths, and submit RFP-ready proposals with references at scale. Best next step is a 45-minute discovery call to walk through scope and timeline.",
      actions: [
        {
          type: "calendar",
          label: "Book a commercial discovery call",
          description: "45 minutes — review scope, timeline, references, RFP requirements.",
          bookingType: "discovery-call-commercial",
        },
      ],
    },
  },
  {
    id: "service-area",
    label: "What cities do you serve?",
    response: {
      body: "Wasatch Front (Ogden through Provo, including Sandy, Salt Lake City, Draper, Lehi, Bountiful, Layton, Park City) plus St. George in southern Utah. Roughly 300 miles of I-15 corridor. Home base is Sandy, UT 84070. If your project is in Utah, we serve you.",
      actions: [
        {
          type: "contact_info",
          label: "Got a quick question?",
          description: "Call the office during business hours.",
        },
      ],
    },
  },
  {
    id: "stamped-pricing",
    label: "How much does stamped concrete cost?",
    response: {
      body: "We don't publish per-square-foot rates because honest answers vary too much — square footage, prep work, pattern complexity, color count, demo, access, and current ready-mix prices all change the number. Stamped concrete typically runs 30–60% more than a broom-finish pour at the same square footage. Tell us your project dimensions and what pattern you're considering — we'll send a written quote within 7 days.",
      actions: [
        {
          type: "intake",
          label: "Request a written quote",
          description: "Dimensions + finish preference — exact number within 7 days.",
        },
      ],
    },
  },
  {
    id: "pool-deck-replacement",
    label: "Pool deck replacement?",
    response: {
      body: "Pool decks are our origin business — we started in 2016 as a pool-deck crew before expanding into the rest of flatwork. Replacement work is the majority of what we do on pool decks now. Pool stays full and usable through most of the project; only the walking deck is roped off. Total project time is typically 5–10 days from demo to walkable, plus 24–48 hours for sealer.",
      actions: [
        {
          type: "intake",
          label: "Request a pool deck quote",
          description: "Deck dimensions + pool finish — written quote within 7 days.",
        },
      ],
    },
  },
  {
    id: "multi-site",
    label: "Multi-site dumpster pad program?",
    response: {
      body: "We run a multi-site enterprise track — single PO, single technical spec, one point of contact across your portfolio. Most of our enterprise work is dumpster pad and trash enclosure programs for property management portfolios. Standardized 6-inch commercial concrete with steel post anchoring. Best next step is a 60-minute discovery call to scope the portfolio.",
      actions: [
        {
          type: "calendar",
          label: "Schedule a multi-site conversation",
          description: "60 minutes — portfolio review, spec lock, scheduling cadence.",
          bookingType: "discovery-call-enterprise",
        },
      ],
    },
  },
  {
    id: "builder-partnership",
    label: "Builder partnership questions?",
    response: {
      body: "We work with Wasatch Front builders on residential developments and multi-family — driveway aprons, sidewalks, patios, ADA ramps. We hit your schedule, you don't get callbacks, and we fit into the rhythm of a multi-trade build. Builder pricing is usually different from one-off residential, so we run a 30-minute discovery call before we quote anything substantial.",
      actions: [
        {
          type: "calendar",
          label: "Book a builder discovery call",
          description: "30 minutes — scope, schedule, pricing structure for builder work.",
          bookingType: "discovery-call-builder",
        },
      ],
    },
  },
];

export function getConsoleQuery(id: string): ConsoleQuery | undefined {
  return CONSOLE_QUERIES.find((q) => q.id === id);
}
