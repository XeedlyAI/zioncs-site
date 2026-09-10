import { NextResponse } from "next/server";
import { getBookingStore } from "@/lib/booking/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Booking follow-up cron — runs daily per vercel.json.
 *
 * STUBBED for v1: walks the booking store, identifies bookings that
 * completed 24+ hours ago without a follow-up email sent. Doesn't
 * actually send. Activates with Google Calendar wiring + Resend
 * follow-up templates.
 */
export async function GET(req: Request) {
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

  const eligible: string[] = [];

  for (const r of all) {
    if (r.followupSentAt) continue;
    const end = new Date(r.endISO).getTime();
    const hoursSince = (now - end) / 3_600_000;
    if (
      hoursSince >= 24 &&
      hoursSince <= 72 &&
      (r.status === "booked" || r.status === "completed")
    ) {
      eligible.push(r.id);
    }
  }

  console.log(
    JSON.stringify({
      event: "cron_booking_followups",
      total_bookings: all.length,
      eligible_followups: eligible.length,
      stubbed: true,
    })
  );

  return NextResponse.json({
    success: true,
    stubbed: true,
    eligible: eligible.length,
    note: "Stub mode — follow-up emails not yet sent. Activates with Google Calendar wiring.",
  });
}
