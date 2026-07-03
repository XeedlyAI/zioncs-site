import { VideoLoop } from "./VideoLoop";

interface MediaEmbedProps {
  /** Video URL. When omitted, `poster` renders as a static figure image. */
  src?: string;
  /** Poster/still — required (also the reduced-motion + no-video fallback). */
  poster: string;
  alt: string;
  caption?: string;
  className?: string;
}

/**
 * Inline article media. Drop into a blog body:
 *   <MediaEmbed src="/videos/freeze-thaw-spall.mp4"
 *               poster="/images/blog/freeze-thaw-spall.jpg"
 *               alt="Surface spalling from a freeze-thaw cycle"
 *               caption="Freeze-thaw scaling on a north-facing slab." />
 * Video mode plays a silent in-view loop; image-only mode is a plain figure.
 * Rendered inside <Prose>, so it escapes the prose measure with -mx / rounded.
 */
export function MediaEmbed({
  src,
  poster,
  alt,
  caption,
  className = "",
}: MediaEmbedProps) {
  return (
    <figure className={`not-prose my-8 ${className}`}>
      <div className="relative aspect-video overflow-hidden rounded-lg border border-concrete/20 bg-anthracite">
        {src ? (
          <VideoLoop src={src} poster={poster} alt={alt} playMode="in-view" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt={alt} className="w-full h-full object-cover" />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-[11px] text-stone leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
