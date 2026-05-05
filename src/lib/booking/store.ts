import { randomUUID } from "node:crypto";
import type {
  BookingFilter,
  BookingRecord,
  BookingStatus,
} from "@/data/bookings-schema";
import type { BookingPersona, BookingTypeSlug } from "@/types/booking";
import { getBookingConfig } from "./config";

/**
 * Booking persistence — v1 in-memory store.
 *
 * IMPORTANT: this resets on every Vercel deploy and on every cold start of
 * the serverless function. The admin email pipeline captures the canonical
 * record (admin@zioncs.com receives every booking notification with full
 * details), so the in-memory store is a UI convenience for the admin view
 * rather than the source of truth.
 *
 * Production-grade swap path: replace this module with Vercel KV or a Postgres
 * table behind the same `BookingStore` interface. The Wave 12.2 admin view
 * and cron routes consume this interface only.
 */

export type CreateBookingInput = {
  bookingType: BookingTypeSlug;
  attendeeName: string;
  attendeeEmail: string;
  attendeePhone?: string;
  meetingContext?: string;
  startISO: string;
  source?: string;
  googleEventId?: string | null;
  googleMeetLink?: string | null;
};

export interface BookingStore {
  create(input: CreateBookingInput): Promise<BookingRecord>;
  list(filter?: BookingFilter): Promise<BookingRecord[]>;
  getById(id: string): Promise<BookingRecord | null>;
  updateStatus(
    id: string,
    status: BookingStatus
  ): Promise<BookingRecord | null>;
  markReminder(
    id: string,
    kind: "24h" | "1h"
  ): Promise<BookingRecord | null>;
  markFollowup(id: string): Promise<BookingRecord | null>;
}

const records: BookingRecord[] = [];

class InMemoryBookingStore implements BookingStore {
  async create(input: CreateBookingInput): Promise<BookingRecord> {
    const config = getBookingConfig(input.bookingType);
    if (!config) {
      throw new Error(`Unknown booking type: ${input.bookingType}`);
    }
    const persona: BookingPersona = config.persona;
    const start = new Date(input.startISO);
    const end = new Date(start.getTime() + config.durationMinutes * 60_000);

    const record: BookingRecord = {
      id: randomUUID(),
      bookingType: input.bookingType,
      persona,
      attendeeName: input.attendeeName,
      attendeeEmail: input.attendeeEmail,
      attendeePhone: input.attendeePhone || null,
      meetingContext: input.meetingContext || null,
      startISO: start.toISOString(),
      endISO: end.toISOString(),
      googleEventId: input.googleEventId ?? null,
      googleMeetLink: input.googleMeetLink ?? null,
      status: "booked",
      notes: null,
      reminder24hSentAt: null,
      reminder1hSentAt: null,
      followupSentAt: null,
      source: input.source ?? "direct-link",
      createdAt: new Date().toISOString(),
    };
    records.push(record);
    return record;
  }

  async list(filter: BookingFilter = {}): Promise<BookingRecord[]> {
    return records
      .filter((r) => {
        if (filter.status && filter.status !== "all" && r.status !== filter.status) return false;
        if (filter.bookingType && filter.bookingType !== "all" && r.bookingType !== filter.bookingType) return false;
        if (filter.persona && filter.persona !== "all" && r.persona !== filter.persona) return false;
        if (filter.startAfter && new Date(r.startISO) <= new Date(filter.startAfter)) return false;
        if (filter.startBefore && new Date(r.startISO) >= new Date(filter.startBefore)) return false;
        return true;
      })
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }

  async getById(id: string): Promise<BookingRecord | null> {
    return records.find((r) => r.id === id) ?? null;
  }

  async updateStatus(
    id: string,
    status: BookingStatus
  ): Promise<BookingRecord | null> {
    const r = records.find((r) => r.id === id);
    if (!r) return null;
    r.status = status;
    return r;
  }

  async markReminder(
    id: string,
    kind: "24h" | "1h"
  ): Promise<BookingRecord | null> {
    const r = records.find((r) => r.id === id);
    if (!r) return null;
    const ts = new Date().toISOString();
    if (kind === "24h") r.reminder24hSentAt = ts;
    else r.reminder1hSentAt = ts;
    return r;
  }

  async markFollowup(id: string): Promise<BookingRecord | null> {
    const r = records.find((r) => r.id === id);
    if (!r) return null;
    r.followupSentAt = new Date().toISOString();
    return r;
  }
}

const store: BookingStore = new InMemoryBookingStore();

export function getBookingStore(): BookingStore {
  return store;
}
