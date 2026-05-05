import { NextResponse } from "next/server";
import { ZIONCS_SYSTEM_PROMPT } from "@/lib/console-system-prompt";
import type { ConsoleAction, ConsoleResponse } from "@/types/console";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ANTHROPIC_API = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";
const DEFAULT_MODEL = "claude-sonnet-4-5";
const MAX_TOKENS = 1024;

/** Strips a trailing ```actions\n[...]\n``` block from Claude's response and parses it. */
function parseResponse(raw: string): ConsoleResponse {
  const fence = /```actions\s*([\s\S]*?)\s*```/i;
  const match = raw.match(fence);
  if (!match) {
    return { body: raw.trim(), actions: [] };
  }
  let actions: ConsoleAction[] = [];
  try {
    actions = JSON.parse(match[1]) as ConsoleAction[];
  } catch {
    actions = [];
  }
  const body = raw.replace(fence, "").trim();
  return { body, actions };
}

/** Used when ANTHROPIC_API_KEY isn't configured. Lets the UI work in dev/staging. */
function stubResponse(query: string): ConsoleResponse {
  const lower = query.toLowerCase();
  const isCommercial = /\b(commercial|rfp|parking|retail|industrial|developer)\b/.test(
    lower
  );
  const isBuilder = /\b(builder|spec home|townhome|multi.?family|sub)\b/.test(
    lower
  );
  const isEnterprise = /\b(multi.?site|enterprise|portfolio|property manage)\b/.test(
    lower
  );
  const isPricing = /\b(cost|price|how much|expensive|estimate)\b/.test(lower);
  const isServiceArea = /\b(area|where|cities|location|near)\b/.test(lower);

  const body =
    "Console is in stub mode — wire up ANTHROPIC_API_KEY in production to unlock the full Claude-backed response. Routing your request to the right team based on intent below.";

  if (isCommercial) {
    return {
      body,
      actions: [
        {
          type: "calendar",
          label: "Book a commercial discovery call",
          description: "45 minutes — scope, timeline, references.",
          bookingType: "discovery-call-commercial",
        },
      ],
    };
  }
  if (isBuilder) {
    return {
      body,
      actions: [
        {
          type: "calendar",
          label: "Book a builder discovery call",
          description: "30 minutes — scope, schedule, pricing structure.",
          bookingType: "discovery-call-builder",
        },
      ],
    };
  }
  if (isEnterprise) {
    return {
      body,
      actions: [
        {
          type: "calendar",
          label: "Schedule a multi-site conversation",
          description: "60 minutes — portfolio review, spec lock.",
          bookingType: "discovery-call-enterprise",
        },
      ],
    };
  }
  if (isServiceArea) {
    return {
      body,
      actions: [
        {
          type: "contact_info",
          label: "Got a quick question?",
          description: "Call the office during business hours.",
        },
      ],
    };
  }
  if (isPricing) {
    return {
      body:
        "We don't publish per-square-foot rates because honest answers vary too much. Tell us your project dimensions and we'll send a written quote within 7 days.",
      actions: [
        {
          type: "intake",
          label: "Request a written quote",
          description: "Project details + target window — quote within 7 days.",
        },
      ],
    };
  }
  return {
    body,
    actions: [
      {
        type: "intake",
        label: "Request a quote",
        description: "Tell us your project — written quote within 7 days.",
      },
    ],
  };
}

export async function POST(req: Request) {
  let body: { query?: unknown };
  try {
    body = (await req.json()) as { query?: unknown };
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const query = typeof body.query === "string" ? body.query.trim() : "";
  if (!query) {
    return NextResponse.json({ error: "Empty query" }, { status: 400 });
  }
  if (query.length > 2000) {
    return NextResponse.json({ error: "Query too long" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  const model = process.env.ANTHROPIC_MODEL ?? DEFAULT_MODEL;

  if (!apiKey) {
    const stub = stubResponse(query);
    return NextResponse.json({
      content: stub.body,
      actions: stub.actions,
      query,
      stubbed: true,
    });
  }

  try {
    const apiResp = await fetch(ANTHROPIC_API, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": ANTHROPIC_VERSION,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model,
        max_tokens: MAX_TOKENS,
        system: ZIONCS_SYSTEM_PROMPT,
        messages: [{ role: "user", content: query }],
      }),
    });

    if (!apiResp.ok) {
      const text = await apiResp.text();
      console.error("[zioncs:query] Anthropic API error:", apiResp.status, text);
      return NextResponse.json(
        {
          error: "Upstream error",
          content:
            "The console is having trouble reaching the model. Try again, or call us directly.",
          actions: [
            {
              type: "contact_info",
              label: "Call us",
              description: "We can answer faster by phone.",
            },
          ],
        },
        { status: 502 }
      );
    }

    const data = (await apiResp.json()) as {
      content?: { type: string; text: string }[];
    };
    const text = data.content?.find((c) => c.type === "text")?.text ?? "";
    const parsed = parseResponse(text);

    // Lightweight stdout log for observability
    console.log(
      JSON.stringify({
        event: "visitor_query",
        query,
        response_length: parsed.body.length,
        action_count: parsed.actions.length,
      })
    );

    return NextResponse.json({
      content: parsed.body,
      actions: parsed.actions,
      query,
    });
  } catch (err) {
    console.error("[zioncs:query] fetch failed:", err);
    return NextResponse.json(
      {
        error: "Network error",
        content:
          "Can't reach the model right now. Send us a message — we'll respond within 2 business hours.",
        actions: [
          {
            type: "intake",
            label: "Send a message",
            description: "We'll come back to you fast.",
          },
        ],
      },
      { status: 502 }
    );
  }
}
