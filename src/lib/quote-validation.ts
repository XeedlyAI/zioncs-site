/**
 * Hand-rolled validation for the quote form.
 * Matches the validation patterns used in /api/intake + /api/direct-message
 * — keeps the bundle dep-free.
 */

import {
  SERVICE_OPTIONS,
  CITY_OPTIONS,
  TIMELINE_OPTIONS,
  BUYER_TYPE_OPTIONS,
} from "@/data/quote-options";

export type QuoteSubmission = {
  buyerType: string;
  serviceType: string;
  city: string;
  size: string;
  timeline: string;
  name: string;
  email: string;
  phone?: string;
  details: string;
  /** Honeypot field — must be empty. Bots will fill it. */
  website?: string;
};

export type ValidationResult =
  | { ok: true; data: QuoteSubmission }
  | { ok: false; errors: Partial<Record<keyof QuoteSubmission | "_root", string>> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_VALUES = new Set(SERVICE_OPTIONS.map((o) => o.value));
const CITY_VALUES = new Set(CITY_OPTIONS.map((o) => o.value));
const TIMELINE_VALUES = new Set(TIMELINE_OPTIONS.map((o) => o.value));
const BUYER_VALUES = new Set(BUYER_TYPE_OPTIONS.map((o) => o.value));

function asString(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

export function validateQuoteSubmission(input: unknown): ValidationResult {
  if (!input || typeof input !== "object") {
    return { ok: false, errors: { _root: "Invalid submission." } };
  }
  const raw = input as Record<string, unknown>;

  const data: QuoteSubmission = {
    buyerType: asString(raw.buyerType),
    serviceType: asString(raw.serviceType),
    city: asString(raw.city),
    size: asString(raw.size),
    timeline: asString(raw.timeline),
    name: asString(raw.name),
    email: asString(raw.email),
    phone: asString(raw.phone),
    details: asString(raw.details),
    website: asString(raw.website),
  };

  const errors: Partial<Record<keyof QuoteSubmission, string>> = {};

  // Honeypot — bots will fill this; humans never see it
  if (data.website && data.website.length > 0) {
    return { ok: false, errors: { _root: "Submission failed validation." } };
  }

  if (!BUYER_VALUES.has(data.buyerType)) {
    errors.buyerType = "Pick a buyer type.";
  }
  if (!SERVICE_VALUES.has(data.serviceType)) {
    errors.serviceType = "Pick a service type.";
  }
  if (!CITY_VALUES.has(data.city)) {
    errors.city = "Pick a city.";
  }
  if (!TIMELINE_VALUES.has(data.timeline)) {
    errors.timeline = "Pick a timeline.";
  }
  if (!data.name) {
    errors.name = "Name required.";
  } else if (data.name.length > 200) {
    errors.name = "Name too long.";
  }
  if (!data.email) {
    errors.email = "Email required.";
  } else if (!EMAIL_RE.test(data.email)) {
    errors.email = "Invalid email format.";
  } else if (data.email.length > 200) {
    errors.email = "Email too long.";
  }
  if (data.phone && data.phone.length > 50) {
    errors.phone = "Phone too long.";
  }
  if (data.details.length > 4000) {
    errors.details = "Details too long.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }
  return { ok: true, data };
}

/** Convert the option value to its human-readable label for the email body. */
export function labelFor(
  value: string,
  options: { value: string; label: string }[]
): string {
  return options.find((o) => o.value === value)?.label ?? value;
}
