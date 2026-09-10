import type { BookingPersona, BookingTypeSlug } from "@/types/booking";

/**
 * Booking record — the canonical persistence shape.
 *
 * Modeled after the standards CALENDAR-BOOKING.md SQL schema. v1 stores
 * records in memory (see @/lib/booking/store.ts); production-grade
 * persistence (Vercel KV or Postgres) is a post-launch swap behind the
 * BookingStore interface.
 */
export type BookingStatus = "booked" | "held" | "no-show" | "cancelled" | "completed";

export type BookingRecord = {
  id: string;
  bookingType: BookingTypeSlug;
  persona: BookingPersona;
  attendeeName: string;
  attendeeEmail: string;
  attendeePhone: string | null;
  meetingContext: string | null;
  /** ISO timestamp — start of the meeting */
  startISO: string;
  /** ISO timestamp — end of the meeting */
  endISO: string;
  /** Calendar event ID — null in stub mode */
  googleEventId: string | null;
  /** Meet link — null in stub mode */
  googleMeetLink: string | null;
  status: BookingStatus;
  /** Internal notes (post-call) */
  notes: string | null;
  reminder24hSentAt: string | null;
  reminder1hSentAt: string | null;
  followupSentAt: string | null;
  /** Where the booking originated — console / silo-landing / direct-link */
  source: string;
  createdAt: string;
};

/** Filter options for the admin view */
export type BookingFilter = {
  status?: BookingStatus | "all";
  bookingType?: BookingTypeSlug | "all";
  persona?: BookingPersona | "all";
  /** Filter to bookings starting after this ISO timestamp */
  startAfter?: string;
  /** Filter to bookings starting before this ISO timestamp */
  startBefore?: string;
};
