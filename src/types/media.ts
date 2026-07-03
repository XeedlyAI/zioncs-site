/**
 * Project media model — the single shape that powers every media surface:
 * project-detail reel, homepage field strip, service-page loops, gallery
 * hover cards, and inline blog embeds.
 *
 * Host-agnostic by design. `src` is just a URL — today it points at short
 * silent mocks in /public/videos and stills in /public/images; swapping to
 * Mux / Cloudflare Stream later means changing `src` (+ optionally `host`),
 * with zero component changes.
 */

/** Where a media asset is served from. Drives nothing today; documents the
 *  swap target so the real-footage migration is a data change, not a code one. */
export type MediaHost = "local" | "mux" | "cloudflare" | "external";

/** Semantic role — lets each surface pick the right asset without hard indexes. */
export type MediaRole =
  | "hero" // primary establishing shot for the project
  | "process" // crew / mid-pour / build-in-progress
  | "detail" // close-up of finish, stamp, edge, joint
  | "drone" // aerial / wide establishing (commercial + enterprise)
  | "timelapse" // full-pour timelapse, scrubbable against the timeline
  | "before-after"; // paired before/after comparison

export type MediaImage = {
  kind: "image";
  role: MediaRole;
  src: string;
  alt: string;
  /** Short mono-caption overlaid in the reel / lightbox. */
  caption?: string;
  host?: MediaHost;
};

/** A marker maps a point in a timelapse to a jobsite phase, so the
 *  TimelapseScrubber can sync to the project's Day 1 / Day 2 timeline. */
export type TimelapseMarker = {
  /** Seconds into the clip. */
  t: number;
  /** Short label — usually the matching timeline day/action. */
  label: string;
};

export type MediaVideo = {
  kind: "video";
  role: MediaRole;
  /** Video URL (mp4/webm today; HLS/DASH manifest when hosted). */
  src: string;
  /** Poster still shown before play + as the reduced-motion fallback. Required. */
  poster: string;
  alt: string;
  caption?: string;
  /** Approximate duration, for the scrubber + a11y. */
  durationSec?: number;
  /** Short silent loop (hover-play cards, background) vs. a full clip with sound. */
  loop?: boolean;
  /** Only for role: "timelapse" — phase markers synced to the timeline. */
  markers?: readonly TimelapseMarker[];
  host?: MediaHost;
};

/** A before/after pair rendered as a draggable slider. */
export type MediaBeforeAfter = {
  kind: "before-after";
  role: "before-after";
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
  host?: MediaHost;
};

export type ProjectMedia = MediaImage | MediaVideo | MediaBeforeAfter;

/** Type guards — cleaner than checking `.kind` inline in components. */
export const isImage = (m: ProjectMedia): m is MediaImage => m.kind === "image";
export const isVideo = (m: ProjectMedia): m is MediaVideo => m.kind === "video";
export const isBeforeAfter = (m: ProjectMedia): m is MediaBeforeAfter =>
  m.kind === "before-after";
