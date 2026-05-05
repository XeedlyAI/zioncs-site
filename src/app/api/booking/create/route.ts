import { NextResponse } from "next/server";
import { CONTACT } from "@/lib/contact";
import { FIRM_FACTS } from "@/lib/firm-facts";
import { getBookingConfig } from "@/lib/booking/config";
import { createBookingEvent } from "@/lib/booking/google-calendar";
import { getBookingStore } from "@/lib/booking/store";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import type { BookingSubmission } from "@/types/booking";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RESEND_API = "https://api.resend.com/emails";
const FROM = "ZionCS Bookings <bookings@zioncs.com>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatDateTime(iso: string, timezone: string): string {
  return new Date(iso).toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: timezone,
    timeZoneName: "short",
  });
}

async function sendResend(
  apiKey: string,
  payload: {
    from: string;
    to: string[];
    reply_to?: string;
    subject: string;
    text: string;
    html: string;
  }
) {
  const resp = await fetch(RESEND_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Resend ${resp.status}: ${text}`);
  }
}

export async function POST(req: Request) {
  // Rate limit
  const ip = getClientIp(req);
  const rl = checkRateLimit(`booking:${ip}`);
  if (!rl.ok) {
    return NextResponse.json(
      {
        error: `Too many booking attempts — try again in ${Math.ceil(rl.retryAfterSeconds / 60)} minutes, or call ${CONTACT.phone}.`,
      },
      { status: 429 }
    );
  }

  // Parse + validate
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!raw || typeof raw !== "object") {
    return NextResponse.json(
      { error: "Invalid submission" },
      { status: 400 }
    );
  }

  const r = raw as Record<string, unknown>;
  const submission: BookingSubmission = {
    bookingType: asString(r.bookingType) as BookingSubmission["bookingType"],
    startISO: asString(r.startISO),
    attendeeName: asString(r.attendeeName),
    attendeeEmail: asString(r.attendeeEmail),
    attendeePhone: asString(r.attendeePhone),
    meetingContext: asString(r.meetingContext),
  };

  const config = getBookingConfig(submission.bookingType);
  if (!config) {
    return NextResponse.json(
      { error: "Unknown booking type" },
      { status: 400 }
    );
  }
  if (!submission.startISO) {
    return NextResponse.json(
      { error: "Missing time slot" },
      { status: 400 }
    );
  }
  if (!submission.attendeeName || !submission.attendeeEmail) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(submission.attendeeEmail)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // Stub-mode "create" — real Google Calendar event creation lives behind this
  const calendarResult = await createBookingEvent();

  // Persist to the booking store (in-memory v1; Vercel KV / Postgres post-launch)
  const store = getBookingStore();
  await store.create({
    bookingType: config.slug,
    attendeeName: submission.attendeeName,
    attendeeEmail: submission.attendeeEmail,
    attendeePhone: submission.attendeePhone,
    meetingContext: submission.meetingContext,
    startISO: submission.startISO,
    source: "direct-link",
    googleEventId: calendarResult.eventId,
    googleMeetLink: calendarResult.meetLink,
  });

  // Always log
  console.log(
    JSON.stringify({
      event: "booking_created",
      booking_type: config.slug,
      persona: config.persona,
      duration_minutes: config.durationMinutes,
      start: submission.startISO,
      stubbed: calendarResult.stubbed,
    })
  );

  const apiKey = process.env.RESEND_API_KEY;
  const formattedTime = formatDateTime(submission.startISO, config.timezone);

  // Build admin notification + customer confirmation
  const adminText = [
    `New booking — ${config.title}`,
    ``,
    `Type:        ${config.title} (${config.slug})`,
    `Persona:     ${config.persona}`,
    `Duration:    ${config.durationMinutes} minutes`,
    `When:        ${formattedTime}`,
    ``,
    `Name:        ${submission.attendeeName}`,
    `Email:       ${submission.attendeeEmail}`,
    submission.attendeePhone ? `Phone:       ${submission.attendeePhone}` : null,
    ``,
    submission.meetingContext
      ? `Meeting context:\n${submission.meetingContext}`
      : "No meeting context provided.",
    ``,
    calendarResult.stubbed
      ? "(Stub mode — Google Calendar integration not yet active.)"
      : "",
  ]
    .filter(Boolean)
    .join("\n");

  const adminHtml = `
    <h2>New ZionCS booking — ${escape(config.title)}</h2>
    <p><strong>Type:</strong> ${escape(config.title)} (${escape(config.slug)})<br>
       <strong>Persona:</strong> ${escape(config.persona)}<br>
       <strong>Duration:</strong> ${config.durationMinutes} min<br>
       <strong>When:</strong> ${escape(formattedTime)}</p>
    <hr>
    <p><strong>Name:</strong> ${escape(submission.attendeeName)}<br>
       <strong>Email:</strong> <a href="mailto:${escape(submission.attendeeEmail)}">${escape(submission.attendeeEmail)}</a>${
         submission.attendeePhone
           ? `<br><strong>Phone:</strong> <a href="tel:${escape(submission.attendeePhone)}">${escape(submission.attendeePhone)}</a>`
           : ""
       }</p>
    ${submission.meetingContext ? `<p><strong>Meeting context:</strong></p><p>${escape(submission.meetingContext).replace(/\n/g, "<br>")}</p>` : ""}
    ${calendarResult.stubbed ? `<p><em>Stub mode — Google Calendar integration not yet active.</em></p>` : ""}
  `.trim();

  const customerText = `Hi ${submission.attendeeName.split(" ")[0]},

Thanks for booking a ${config.title.toLowerCase()} with Zion Concrete Specialists.

When:        ${formattedTime}
Duration:    ${config.durationMinutes} minutes

The ZionCS team will reach out the day before to confirm. If you need to reschedule, reply to this email or call ${CONTACT.phone}.

Talk soon,
${FIRM_FACTS.founders.amy.name}
${FIRM_FACTS.founders.amy.role}
Zion Concrete Specialists
`;

  const customerHtml = `
    <p>Hi ${escape(submission.attendeeName.split(" ")[0])},</p>
    <p>Thanks for booking a <strong>${escape(config.title.toLowerCase())}</strong> with Zion Concrete Specialists.</p>
    <p><strong>When:</strong> ${escape(formattedTime)}<br>
       <strong>Duration:</strong> ${config.durationMinutes} minutes</p>
    <p>The ZionCS team will reach out the day before to confirm. If you need to reschedule, reply to this email or call <a href="tel:${escape(CONTACT.phone)}">${escape(CONTACT.phone)}</a>.</p>
    <p>Talk soon,<br>
    <strong>${escape(FIRM_FACTS.founders.amy.name)}</strong><br>
    ${escape(FIRM_FACTS.founders.amy.role)}<br>
    Zion Concrete Specialists</p>
  `.trim();

  if (!apiKey) {
    return NextResponse.json({
      success: true,
      stubbed: true,
      message:
        "Booking received (stub mode — RESEND_API_KEY not configured).",
      formattedTime,
    });
  }

  try {
    await Promise.all([
      sendResend(apiKey, {
        from: FROM,
        to: [CONTACT.email],
        reply_to: submission.attendeeEmail,
        subject: `[ZionCS] Booking — ${config.title} — ${submission.attendeeName}`,
        text: adminText,
        html: adminHtml,
      }),
      sendResend(apiKey, {
        from: FROM,
        to: [submission.attendeeEmail],
        reply_to: CONTACT.email,
        subject: `Confirmed — ${config.title} with Zion Concrete Specialists`,
        text: customerText,
        html: customerHtml,
      }),
    ]);
  } catch (err) {
    console.error("[zioncs:booking-create] delivery failed:", err);
    return NextResponse.json(
      {
        error: `Booking delivery failed — please call ${CONTACT.phone}.`,
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    stubbed: calendarResult.stubbed,
    message: "Booking confirmed.",
    formattedTime,
  });
}
