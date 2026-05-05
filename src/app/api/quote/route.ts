import { NextResponse } from "next/server";
import { CONTACT } from "@/lib/contact";
import { FIRM_FACTS } from "@/lib/firm-facts";
import {
  validateQuoteSubmission,
  labelFor,
  type QuoteSubmission,
} from "@/lib/quote-validation";
import {
  SERVICE_OPTIONS,
  CITY_OPTIONS,
  TIMELINE_OPTIONS,
  BUYER_TYPE_OPTIONS,
} from "@/data/quote-options";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RESEND_API = "https://api.resend.com/emails";
const FROM = "ZionCS Quotes <quotes@zioncs.com>";

function escape(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildAdminEmail(d: QuoteSubmission) {
  const buyerLabel = labelFor(d.buyerType, BUYER_TYPE_OPTIONS);
  const serviceLabel = labelFor(d.serviceType, SERVICE_OPTIONS);
  const cityLabel = labelFor(d.city, CITY_OPTIONS);
  const timelineLabel = labelFor(d.timeline, TIMELINE_OPTIONS);

  const text = [
    `New quote request — ${d.name}`,
    ``,
    `Buyer type:    ${buyerLabel}`,
    `Service:       ${serviceLabel}`,
    `City:          ${cityLabel}`,
    `Project size:  ${d.size || "(not specified)"}`,
    `Timeline:      ${timelineLabel}`,
    ``,
    `Name:          ${d.name}`,
    `Email:         ${d.email}`,
    d.phone ? `Phone:         ${d.phone}` : null,
    ``,
    d.details ? `Project details:\n${d.details}` : "No additional details provided.",
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>New ZionCS quote request</h2>
    <p><strong>Buyer type:</strong> ${escape(buyerLabel)}<br>
       <strong>Service:</strong> ${escape(serviceLabel)}<br>
       <strong>City:</strong> ${escape(cityLabel)}<br>
       <strong>Project size:</strong> ${escape(d.size || "(not specified)")}<br>
       <strong>Timeline:</strong> ${escape(timelineLabel)}</p>
    <hr>
    <p><strong>Name:</strong> ${escape(d.name)}<br>
       <strong>Email:</strong> <a href="mailto:${escape(d.email)}">${escape(d.email)}</a>${
         d.phone
           ? `<br><strong>Phone:</strong> <a href="tel:${escape(d.phone)}">${escape(d.phone)}</a>`
           : ""
       }</p>
    ${
      d.details
        ? `<p><strong>Project details:</strong></p><p>${escape(d.details).replace(/\n/g, "<br>")}</p>`
        : ""
    }
  `.trim();

  return {
    subject: `[ZionCS] Quote — ${buyerLabel.split(" ")[0]} · ${serviceLabel} · ${d.name}`,
    text,
    html,
  };
}

function buildAutoReply(d: QuoteSubmission) {
  const text = `Hi ${d.name.split(" ")[0]},

Thanks for the quote request — we received it and the team will review the details today.

What happens next:
  1. A project manager will reach out within 2 business hours to confirm the request and ask any clarifying questions.
  2. We'll schedule a no-charge site walk (most quotes back within 7 business days).
  3. You'll get a written quote in your inbox with a clear scope, timeline, and price.

If your project has a hard deadline or you want to send photos before we walk the site, just reply to this email and the photos go directly to the team.

Talk soon,
${FIRM_FACTS.founders.amy.name}
${FIRM_FACTS.founders.amy.role}
Zion Concrete Specialists
${CONTACT.phone}
`;

  const html = `
    <p>Hi ${escape(d.name.split(" ")[0])},</p>
    <p>Thanks for the quote request — we received it and the team will review the details today.</p>
    <p><strong>What happens next:</strong></p>
    <ol>
      <li>A project manager will reach out within 2 business hours to confirm the request and ask any clarifying questions.</li>
      <li>We'll schedule a no-charge site walk (most quotes back within 7 business days).</li>
      <li>You'll get a written quote in your inbox with a clear scope, timeline, and price.</li>
    </ol>
    <p>If your project has a hard deadline or you want to send photos before we walk the site, just reply to this email and the photos go directly to the team.</p>
    <p>Talk soon,<br>
    <strong>${escape(FIRM_FACTS.founders.amy.name)}</strong><br>
    ${escape(FIRM_FACTS.founders.amy.role)}<br>
    Zion Concrete Specialists<br>
    <a href="tel:${escape(CONTACT.phone)}">${escape(CONTACT.phone)}</a></p>
  `.trim();

  return {
    subject: "We got your quote request — Zion Concrete Specialists",
    text,
    html,
  };
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
  const rl = checkRateLimit(`quote:${ip}`);
  if (!rl.ok) {
    return NextResponse.json(
      {
        error: `Too many requests — try again in ${Math.ceil(rl.retryAfterSeconds / 60)} minutes, or call us directly at ${CONTACT.phone}.`,
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
  const validation = validateQuoteSubmission(raw);
  if (!validation.ok) {
    return NextResponse.json(
      { error: "Validation failed", fieldErrors: validation.errors },
      { status: 400 }
    );
  }

  const data = validation.data;
  const apiKey = process.env.RESEND_API_KEY;

  // Always log
  console.log(
    JSON.stringify({
      event: "quote_submission",
      buyer_type: data.buyerType,
      service: data.serviceType,
      city: data.city,
      timeline: data.timeline,
      has_phone: Boolean(data.phone),
      has_details: Boolean(data.details),
    })
  );

  if (!apiKey) {
    return NextResponse.json({
      success: true,
      message:
        "Got it — we'll be in touch within 2 business hours. (Stub mode — RESEND_API_KEY not configured.)",
      stubbed: true,
    });
  }

  // Send admin notification + customer auto-reply in parallel
  const adminEmail = buildAdminEmail(data);
  const autoReply = buildAutoReply(data);

  try {
    await Promise.all([
      sendResend(apiKey, {
        from: FROM,
        to: [CONTACT.email],
        reply_to: data.email,
        subject: adminEmail.subject,
        text: adminEmail.text,
        html: adminEmail.html,
      }),
      sendResend(apiKey, {
        from: FROM,
        to: [data.email],
        reply_to: CONTACT.email,
        subject: autoReply.subject,
        text: autoReply.text,
        html: autoReply.html,
      }),
    ]);
  } catch (err) {
    console.error("[zioncs:quote] delivery failed:", err);
    return NextResponse.json(
      {
        error: `Delivery failed — please call us directly at ${CONTACT.phone}.`,
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    message:
      "Got it — we'll be in touch within 2 business hours. Check your inbox for a confirmation email.",
  });
}
