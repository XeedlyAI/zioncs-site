import { NextResponse } from "next/server";
import { CONTACT } from "@/lib/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RESEND_API = "https://api.resend.com/emails";
const FROM = "ZionCS Site <site@zioncs.com>";

interface DirectMessagePayload {
  message?: unknown;
  senderName?: unknown;
  senderEmail?: unknown;
  senderPhone?: unknown;
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
  let body: DirectMessagePayload;
  try {
    body = (await req.json()) as DirectMessagePayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const message =
    typeof body.message === "string" ? body.message.trim() : "";
  const senderName =
    typeof body.senderName === "string" ? body.senderName.trim() : "";
  const senderEmail =
    typeof body.senderEmail === "string" ? body.senderEmail.trim() : "";
  const senderPhone =
    typeof body.senderPhone === "string" ? body.senderPhone.trim() : "";
  const context =
    typeof body.context === "string" ? body.context.trim() : "";

  if (!message) {
    return NextResponse.json({ error: "Message required" }, { status: 400 });
  }
  if (!senderName || !senderEmail) {
    return NextResponse.json(
      { error: "Name and email required" },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (message.length > 4000) {
    return NextResponse.json({ error: "Message too long" }, { status: 400 });
  }

  const subject = `[ZionCS] Direct chat from ${senderName}`;
  const text = [
    `Direct chat message from the Intelligence Console`,
    ``,
    `From:    ${senderName} <${senderEmail}>`,
    senderPhone ? `Phone:   ${senderPhone}` : null,
    context ? `Context: ${context}` : null,
    ``,
    `Message:`,
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>Direct chat from ZionCS Intelligence Console</h2>
    <p><strong>From:</strong> ${escape(senderName)} &lt;<a href="mailto:${escape(senderEmail)}">${escape(senderEmail)}</a>&gt;</p>
    ${senderPhone ? `<p><strong>Phone:</strong> <a href="tel:${escape(senderPhone)}">${escape(senderPhone)}</a></p>` : ""}
    ${context ? `<p><strong>Context:</strong> ${escape(context)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escape(message).replace(/\n/g, "<br>")}</p>
  `.trim();

  console.log(
    JSON.stringify({
      event: "direct_message",
      sender_name: senderName,
      sender_email: senderEmail,
      has_phone: Boolean(senderPhone),
      message_length: message.length,
      context: context || null,
    })
  );

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      success: true,
      message: "Delivered (stub mode — RESEND_API_KEY not configured).",
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
        reply_to: senderEmail,
        subject,
        text,
        html,
      }),
    });

    if (!resp.ok) {
      const t = await resp.text();
      console.error("[zioncs:direct] Resend error:", resp.status, t);
      return NextResponse.json(
        { error: "Delivery failed — please call us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Delivered — the team will respond within 2 business hours.",
    });
  } catch (err) {
    console.error("[zioncs:direct] fetch failed:", err);
    return NextResponse.json(
      { error: "Network error — please call us directly." },
      { status: 502 }
    );
  }
}
