/**
 * DOM event wiring for cross-console communication.
 * The mini console fires this when the user clicks "See full response in
 * console ↓" and the full console listens for it via useEffect.
 *
 * Pattern: custom DOM events, no React context, no URL state.
 */

export const CONSOLE_EVENT = "zioncs:console-query";

export type ConsoleEventDetail =
  | { kind: "pill"; id: string }
  | { kind: "freeform"; text: string };

export function dispatchConsoleQuery(detail: ConsoleEventDetail) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(CONSOLE_EVENT, { detail }));
}

export function scrollToConsole() {
  if (typeof document === "undefined") return;
  document
    .getElementById("console")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}
