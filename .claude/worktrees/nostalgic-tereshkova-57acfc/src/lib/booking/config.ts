import type { BookingTypeConfig, BookingTypeSlug } from "@/types/booking";

/**
 * ZionCS booking config — single-calendar architecture per the brief.
 * All bookings route to admin@zioncs.com (via Resend in /api/booking/create).
 * The booking_type field is captured as metadata for downstream sales routing.
 *
 * When Google Workspace emails are provisioned for Kevin/Amy/Josh, swap to
 * per-founder routing by adding ownerEmail per type. The stub Google Calendar
 * helper at @/lib/booking/google-calendar.ts has the wire-up note.
 */
export const BOOKING_CONFIGS: Record<BookingTypeSlug, BookingTypeConfig> = {
  "quote-request-residential": {
    slug: "quote-request-residential",
    persona: "residential",
    title: "Residential quote walkthrough",
    blurb:
      "15-minute call to walk through your project before we schedule the on-site walk. Use this if you're a homeowner with a quote request that needs context first.",
    durationMinutes: 15,
    bufferMinutes: 0,
    timezone: "America/Denver",
    businessHours: {
      start: "08:00",
      end: "17:00",
      daysOfWeek: [1, 2, 3, 4, 5],
    },
    leadTimeDays: 1,
    windowDays: 21,
  },
  "discovery-call-builder": {
    slug: "discovery-call-builder",
    persona: "builder",
    title: "Builder discovery call",
    blurb:
      "30-minute call to walk through scope, schedule, and pricing structure. For spec home builders and multi-family residential GCs evaluating ZionCS as a flatwork sub.",
    durationMinutes: 30,
    bufferMinutes: 15,
    timezone: "America/Denver",
    businessHours: {
      start: "08:00",
      end: "17:00",
      daysOfWeek: [1, 2, 3, 4, 5],
    },
    leadTimeDays: 1,
    windowDays: 30,
  },
  "discovery-call-commercial": {
    slug: "discovery-call-commercial",
    persona: "commercial",
    title: "Commercial discovery call",
    blurb:
      "45-minute call to walk through commercial project scope, timeline, references, and RFP requirements. For commercial GCs and property owners.",
    durationMinutes: 45,
    bufferMinutes: 15,
    timezone: "America/Denver",
    businessHours: {
      start: "08:00",
      end: "17:00",
      daysOfWeek: [1, 2, 3, 4, 5],
    },
    leadTimeDays: 1,
    windowDays: 30,
  },
  "discovery-call-enterprise": {
    slug: "discovery-call-enterprise",
    persona: "enterprise",
    title: "Multi-site conversation",
    blurb:
      "60-minute call to walk through your portfolio, current vendor mix, and pain points. For facility managers and procurement teams evaluating multi-site concrete vendors.",
    durationMinutes: 60,
    bufferMinutes: 15,
    timezone: "America/Denver",
    businessHours: {
      start: "08:00",
      end: "17:00",
      daysOfWeek: [1, 2, 3, 4, 5],
    },
    leadTimeDays: 2,
    windowDays: 45,
  },
};

export function getBookingConfig(
  slug: string
): BookingTypeConfig | null {
  if (slug in BOOKING_CONFIGS) {
    return BOOKING_CONFIGS[slug as BookingTypeSlug];
  }
  return null;
}

export function getAllBookingSlugs(): BookingTypeSlug[] {
  return Object.keys(BOOKING_CONFIGS) as BookingTypeSlug[];
}
