import { SERVICES } from "./services";
import { FIRM_FACTS } from "@/lib/firm-facts";

/** Dropdown options for the quote form. */

export type Option = { value: string; label: string };

/** Service-type options pulled from the canonical SERVICES list + Other. */
export const SERVICE_OPTIONS: Option[] = [
  ...SERVICES.map((s) => ({ value: s.slug, label: s.name })),
  { value: "other", label: "Other / Not sure" },
];

export const CITY_OPTIONS: Option[] = [
  ...FIRM_FACTS.serviceArea.cities.map((c) => ({ value: c, label: c })),
  { value: "other-utah", label: "Other Utah city" },
  { value: "out-of-state", label: "Outside Utah" },
];

export const TIMELINE_OPTIONS: Option[] = [
  { value: "asap", label: "ASAP — already on a deadline" },
  { value: "30-days", label: "Within 30 days" },
  { value: "60-days", label: "Within 60 days" },
  { value: "90-days", label: "Within 90 days" },
  { value: "exploring", label: "Just exploring options" },
];

export const BUYER_TYPE_OPTIONS: Option[] = [
  { value: "residential", label: "Residential — homeowner" },
  { value: "builder", label: "Builder — spec / multi-family" },
  { value: "commercial", label: "Commercial — GC or property owner" },
  { value: "enterprise", label: "Enterprise — multi-site / portfolio" },
];
