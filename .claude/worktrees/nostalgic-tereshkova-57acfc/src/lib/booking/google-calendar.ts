/**
 * Google Calendar integration — STUBBED for v1.
 *
 * Per the brief: ZionCS team doesn't have Google Workspace emails yet, so the
 * booking flow accepts submissions but doesn't create real calendar events.
 * Submissions go to admin@zioncs.com via Resend (handled in
 * /api/booking/create) until Workspace is provisioned.
 *
 * To activate real Google Calendar integration:
 *
 * 1. Provision Google Workspace for kevin@zioncs.com / amy@zioncs.com /
 *    josh@zioncs.com.
 * 2. Create a service account in Google Cloud + enable the Calendar API.
 * 3. Set up domain-wide delegation (DWD) so the service account can act on
 *    behalf of any zioncs.com email.
 * 4. Drop the service account JSON into a secret (Vercel env
 *    GOOGLE_SERVICE_ACCOUNT_KEY).
 * 5. Replace this file with a real implementation per
 *    `C:\Users\shadd\Documents\standards\skills\CALENDAR-BOOKING.md` §
 *    Google Calendar integration.
 * 6. Switch BOOKING_CONFIGS in @/lib/booking/config.ts to per-founder routing
 *    (each booking type maps to a specific zioncs.com email).
 *
 * For now, the exported functions all return stubbed responses so the rest of
 * the booking surface compiles and exercises end-to-end.
 */

import type { AvailableSlot, BookingTypeConfig } from "@/types/booking";

/**
 * Returns mock availability slots for the given date range.
 * Real implementation will query the founder's Google Calendar free-busy.
 */
export async function getAvailability(
  config: BookingTypeConfig,
  startDate: Date,
  endDate: Date
): Promise<{ slotsByDate: Record<string, AvailableSlot[]>; stubbed: boolean }> {
  const slotsByDate: Record<string, AvailableSlot[]> = {};

  // Walk every day in the window
  const cursor = new Date(startDate);
  cursor.setHours(0, 0, 0, 0);
  const end = new Date(endDate);
  end.setHours(0, 0, 0, 0);

  while (cursor <= end) {
    const day = cursor.getDay();
    const isBusinessDay = config.businessHours.daysOfWeek.includes(day);
    if (!isBusinessDay) {
      cursor.setDate(cursor.getDate() + 1);
      continue;
    }

    const isoDate = cursor.toISOString().slice(0, 10);
    slotsByDate[isoDate] = generateDailySlots(cursor, config);
    cursor.setDate(cursor.getDate() + 1);
  }

  return { slotsByDate, stubbed: true };
}

/**
 * Mock daily slot generator. Generates the configured business-hour grid
 * minus a few "already booked" slots so the UI shows realistic gaps.
 */
function generateDailySlots(
  date: Date,
  config: BookingTypeConfig
): AvailableSlot[] {
  const [startH, startM] = config.businessHours.start.split(":").map(Number);
  const [endH, endM] = config.businessHours.end.split(":").map(Number);
  const stepMinutes = config.durationMinutes + config.bufferMinutes;

  const slots: AvailableSlot[] = [];
  const slotStart = new Date(date);
  slotStart.setHours(startH, startM, 0, 0);
  const dayEnd = new Date(date);
  dayEnd.setHours(endH, endM, 0, 0);

  while (slotStart.getTime() + config.durationMinutes * 60_000 <= dayEnd.getTime()) {
    // Mock "already booked" pattern — pseudo-random skip to keep the UI honest
    const hourMinuteSeed = slotStart.getHours() * 60 + slotStart.getMinutes();
    const dateSeed = slotStart.getDate();
    const skip = (hourMinuteSeed * 7 + dateSeed * 13) % 11 < 3;

    if (!skip) {
      slots.push({
        startISO: slotStart.toISOString(),
        label: slotStart.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: config.timezone,
        }),
      });
    }
    slotStart.setMinutes(slotStart.getMinutes() + stepMinutes);
  }
  return slots;
}

/**
 * Stub for creating a booking — real implementation creates a Google Calendar
 * event with a Meet link, sends invites, and returns event/meet IDs. The
 * /api/booking/create route emails admin@zioncs.com via Resend in stub mode.
 */
export async function createBookingEvent(): Promise<{
  eventId: string | null;
  meetLink: string | null;
  stubbed: boolean;
}> {
  return {
    eventId: null,
    meetLink: null,
    stubbed: true,
  };
}
