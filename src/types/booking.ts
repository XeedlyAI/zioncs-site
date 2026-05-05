export type BookingTypeSlug =
  | "quote-request-residential"
  | "discovery-call-builder"
  | "discovery-call-commercial"
  | "discovery-call-enterprise";

export type BookingPersona =
  | "residential"
  | "builder"
  | "commercial"
  | "enterprise";

/** Per-booking-type config — duration, business hours, persona metadata. */
export type BookingTypeConfig = {
  slug: BookingTypeSlug;
  persona: BookingPersona;
  /** Display name on the booking page. */
  title: string;
  /** Short blurb explaining what to expect. */
  blurb: string;
  /** Minutes per slot. */
  durationMinutes: 15 | 30 | 45 | 60;
  /** Minutes between slots — buffer + cleanup. */
  bufferMinutes: 0 | 15;
  /** IANA timezone for display + scheduling. */
  timezone: "America/Denver";
  /** Business hours in 24-hour format (Mountain time). */
  businessHours: {
    start: string; // "08:00"
    end: string; // "17:00"
    daysOfWeek: number[]; // 1 = Monday, 5 = Friday
  };
  /** Lead-time minimum — won't show slots earlier than this many days out. */
  leadTimeDays: number;
  /** Furthest-out booking window in days. */
  windowDays: number;
};

/** Availability response from /api/booking/availability */
export type AvailabilityResponse = {
  bookingType: BookingTypeSlug;
  /** ISO date strings (YYYY-MM-DD) for the day each slot starts. */
  slotsByDate: Record<string, AvailableSlot[]>;
  generatedAt: string;
  /** Stub mode flag — true when responses are mock data, not real calendar. */
  stubbed: boolean;
};

export type AvailableSlot = {
  /** Full ISO timestamp with timezone offset */
  startISO: string;
  /** Display label in the configured timezone, e.g. "9:30 AM". */
  label: string;
};

/** Submission payload to /api/booking/create */
export type BookingSubmission = {
  bookingType: BookingTypeSlug;
  startISO: string;
  attendeeName: string;
  attendeeEmail: string;
  attendeePhone?: string;
  meetingContext?: string;
};
