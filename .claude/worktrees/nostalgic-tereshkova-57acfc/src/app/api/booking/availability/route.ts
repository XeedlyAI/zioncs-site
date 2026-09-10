import { NextResponse } from "next/server";
import { getBookingConfig } from "@/lib/booking/config";
import { getAvailability } from "@/lib/booking/google-calendar";
import type { AvailabilityResponse } from "@/types/booking";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/booking/availability?bookingType=...
 *
 * Returns the slot grid for the configured window. Stubbed for v1 — slots are
 * generated from the business hours config rather than queried from a real
 * Google Calendar. The `stubbed: true` flag in the response lets the UI tell
 * apart real vs stub once Google Calendar is wired in a later wave.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const bookingType = url.searchParams.get("bookingType");
  if (!bookingType) {
    return NextResponse.json(
      { error: "bookingType query parameter is required" },
      { status: 400 }
    );
  }

  const config = getBookingConfig(bookingType);
  if (!config) {
    return NextResponse.json(
      { error: `Unknown booking type: ${bookingType}` },
      { status: 404 }
    );
  }

  const now = new Date();
  const startDate = new Date(now);
  startDate.setDate(startDate.getDate() + config.leadTimeDays);
  const endDate = new Date(now);
  endDate.setDate(endDate.getDate() + config.windowDays);

  const { slotsByDate, stubbed } = await getAvailability(
    config,
    startDate,
    endDate
  );

  const body: AvailabilityResponse = {
    bookingType: config.slug,
    slotsByDate,
    generatedAt: now.toISOString(),
    stubbed,
  };

  return NextResponse.json(body);
}
