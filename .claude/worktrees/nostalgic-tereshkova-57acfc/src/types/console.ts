/**
 * Intelligence Console types — shared across the mini + full consoles
 * and the API routes that feed them.
 *
 * Pattern follows COMPONENT_PATTERNS.md §3-4 with a ZionCS-keyed action
 * routing matrix tuned to contractor personas.
 */

export type CalendarAction = {
  type: "calendar";
  label: string;
  description?: string;
  /** booking-type slug — maps to /book/[bookingType] when wired in Wave 12 */
  bookingType:
    | "quote-request-residential"
    | "discovery-call-builder"
    | "discovery-call-commercial"
    | "discovery-call-enterprise";
};

export type ContactInfoAction = {
  type: "contact_info";
  label: string;
  description?: string;
};

export type IntakeAction = {
  type: "intake";
  label: string;
  description?: string;
};

export type DirectChatAction = {
  type: "direct_chat";
  label: string;
  description?: string;
};

export type ConsoleAction =
  | CalendarAction
  | ContactInfoAction
  | IntakeAction
  | DirectChatAction;

export type ConsoleResponse = {
  /** Body content rendered as paragraphs in the response area. */
  body: string;
  /** Action cards rendered below the body. */
  actions: ConsoleAction[];
};

export type ConsoleQuery = {
  id: string;
  /** Short label for the suggestion pill */
  label: string;
  response: ConsoleResponse;
};
