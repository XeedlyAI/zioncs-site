import { getAuthor } from "@/lib/authors";

interface PostBylineProps {
  authorSlug: string;
  publishedAt: string;
  lastReviewedAt: string;
  readingTimeMinutes: number;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostByline({
  authorSlug,
  publishedAt,
  lastReviewedAt,
  readingTimeMinutes,
}: PostBylineProps) {
  const author = getAuthor(authorSlug);
  const reviewedRecently =
    new Date(lastReviewedAt).getTime() > new Date(publishedAt).getTime();

  return (
    <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-[0.15em] text-stone">
      <span>
        BY <span className="text-bone/85">{author.name}</span>
      </span>
      <span aria-hidden="true">·</span>
      <span>
        <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
      </span>
      {reviewedRecently && (
        <>
          <span aria-hidden="true">·</span>
          <span className="text-rebar">
            REVIEWED{" "}
            <time dateTime={lastReviewedAt}>{formatDate(lastReviewedAt)}</time>
          </span>
        </>
      )}
      <span aria-hidden="true">·</span>
      <span>
        <span className="text-bone/85 font-mono tabular-nums">
          {readingTimeMinutes}
        </span>{" "}
        min read
      </span>
    </div>
  );
}
