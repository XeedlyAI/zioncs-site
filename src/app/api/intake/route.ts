import { NextResponse } from "next/server";
import { CONTACT } from "@/lib/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RESEND_API = "https://api.resend.com/emails";
const FROM = "ZionCS Site <site@zioncs.com>";

interface IntakePayload {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  context?: unknown;
}

function escape(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let body: IntakePayload;
  try {
    body = (await req.json()) as IntakePayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message =
    typeof body.message === "string" ? body.message.trim() : "";
  const context =
    typeof body.context === "string" ? body.context.trim() : "";

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const subject = `[ZionCS] Intake from ${name}`;
  const text = [
    `New intake form submission`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    phone ? `Phone:   ${phone}` : null,
    ``,
    context ? `Context: ${context}` : null,
    message ? `Message:\n${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>New ZionCS intake</h2>
    <p><strong>Name:</strong> ${escape(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escape(email)}">${escape(email)}</a></p>
    ${phone ? `<p><strong>Phone:</strong> <a href="tel:${escape(phone)}">${escape(phone)}</a></p>` : ""}
    ${context ? `<p><strong>Context:</strong> ${escape(context)}</p>` : ""}
    ${message ? `<p><strong>Message:</strong></p><p>${escape(message).replace(/\n/g, "<br>")}</p>` : ""}
  `.trim();

  // Always log for observability
  console.log(
    JSON.stringify({
      event: "intake_submission",
      name,
      email,
      has_phone: Boolean(phone),
      has_message: Boolean(message),
      context: context || null,
    })
  );

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Stub mode — accepted but not delivered. Lets dev/staging exercise the form.
    return NextResponse.json({
      success: true,
      message: "Received (stub mode — RESEND_API_KEY not configured).",
      stubbed: true,
    });
  }

  try {
    const resp = await fetch(RESEND_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [CONTACT.email],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!resp.ok) {
      const t = await resp.text();
      console.error("[zioncs:intake] Resend error:", resp.status, t);
      return NextResponse.json(
        { error: "Delivery failed — please call us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Received — we'll be in touch within 2 business hours.",
    });
  } catch (err) {
    console.error("[zioncs:intake] fetch failed:", err);
    return NextResponse.json(
      { error: "Network error — please call us directly." },
      { status: 502 }
    );
  }
}
