import { NextResponse } from "next/server";
import { getBookingStore } from "@/lib/booking/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Booking reminder cron — runs hourly per vercel.json.
 *
 * STUBBED for v1: walks the booking store, flags bookings 24h or 1h out
 * that haven't had reminders sent, but DOES NOT actually send the emails
 * yet. Activates once Google Calendar wiring lands and we have a stable
 * identity story for outbound reminder mail.
 *
 * When we wire it up:
 *   1. Replace the in-memory store with Vercel KV / Postgres
 *   2. Add Resend reminder-email templates per booking type
 *   3. Mark reminder24hSentAt / reminder1hSentAt on each record after send
 */
export async function GET(req: Request) {
  // Vercel Cron requests authenticate via the CRON_SECRET env var
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const store = getBookingStore();
  const all = await store.list();
  const now = Date.now();

  const eligible24h: string[] = [];
  const eligible1h: string[] = [];

  for (const r of all) {
    if (r.status !== "booked") continue;
    const start = new Date(r.startISO).getTime();
    const hoursAway = (start - now) / 3_600_000;
    if (
      hoursAway >= 23 &&
      hoursAway <= 25 &&
      !r.reminder24hSentAt
    ) {
      eligible24h.push(r.id);
    }
    if (
      hoursAway >= 0.5 &&
      hoursAway <= 1.5 &&
      !r.reminder1hSentAt
    ) {
      eligible1h.push(r.id);
    }
  }

  console.log(
    JSON.stringify({
      event: "cron_booking_reminders",
      total_bookings: all.length,
      eligible_24h: eligible24h.length,
      eligible_1h: eligible1h.length,
      stubbed: true,
    })
  );

  return NextResponse.json({
    success: true,
    stubbed: true,
    eligible24h: eligible24h.length,
    eligible1h: eligible1h.length,
    note: "Stub mode — reminder emails not yet sent. Activates with Google Calendar wiring.",
  });
}
