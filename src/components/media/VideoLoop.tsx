"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface VideoLoopProps {
  src: string;
  poster: string;
  alt: string;
  className?: string;
  /** Play only while hovered/focused (cards) vs. whenever in view (backgrounds). */
  playMode?: "in-view" | "hover";
  /** External hover/focus signal for hover mode (parent owns the hover state). */
  active?: boolean;
  /** object-fit. Defaults to cover. */
  fit?: "cover" | "contain";
}

/**
 * A muted, inline, looping video primitive with a poster-first, low-cost
 * autoplay policy:
 *  - reduced-motion → never plays; shows the poster as a plain image.
 *  - in-view mode   → plays while intersecting the viewport, pauses when not.
 *  - hover mode     → plays only while `active` (hover/focus owned by parent).
 * preload="none" + lazy intersection keep it off the critical path.
 */
export function VideoLoop({
  src,
  poster,
  alt,
  className = "",
  playMode = "in-view",
  active = false,
  fit = "cover",
}: VideoLoopProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const reduced = useReducedMotion();

  // Track viewport intersection (used by in-view mode, and to gate loading).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "100px", threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Drive play/pause from the resolved "should play" condition.
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    const shouldPlay = playMode === "hover" ? active && inView : inView;
    if (shouldPlay) {
      el.play().catch(() => {
        /* autoplay can be rejected; poster remains — acceptable */
      });
    } else {
      el.pause();
    }
  }, [active, inView, playMode, reduced]);

  const objectFit = fit === "contain" ? "object-contain" : "object-cover";

  // Reduced motion: render the poster as a static image, no <video> at all.
  if (reduced) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={poster}
        alt={alt}
        className={`${objectFit} w-full h-full ${className}`}
      />
    );
  }

  return (
    <video
      ref={ref}
      className={`${objectFit} w-full h-full ${className}`}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={alt}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
