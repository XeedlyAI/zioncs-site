import type { SocialPost } from "@/data/social-posts";

interface SocialFeedScrollProps {
  posts: SocialPost[];
}

function PlatformIcon({ platform }: { platform: SocialPost["platform"] }) {
  if (platform === "instagram") {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function formatPostedAt(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function SocialFeedScroll({ posts }: SocialFeedScrollProps) {
  return (
    <div
      className="-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-dark snap-x snap-mandatory"
      style={{ scrollPaddingInline: "1.5rem" }}
    >
      <ul className="flex gap-4 pb-3" role="list">
        {posts.map((post) => (
          <li
            key={post.id}
            className="snap-start shrink-0 w-[280px] sm:w-[320px]"
          >
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-light overflow-hidden block group h-full flex flex-col"
              aria-label={`${post.platform === "instagram" ? "Instagram" : "Facebook"} post: ${post.caption}`}
            >
              {/* 1:1 placeholder — Track A swap-in lands real imagery */}
              <div
                className="relative aspect-square border-b border-warm-border overflow-hidden"
                aria-hidden="true"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #EDE8DC 0%, #F4F0E8 50%, #FFFFFF 100%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url(/topo-bg-light.svg)",
                    backgroundSize: "cover",
                    opacity: 0.4,
                  }}
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-paper/95 border border-warm-border rounded font-mono text-[10px] uppercase tracking-[0.12em] text-anthracite">
                  <PlatformIcon platform={post.platform} />
                  <span>{post.platform === "instagram" ? "IG" : "FB"}</span>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1">
                <p className="text-sm text-anthracite leading-relaxed line-clamp-3 mb-3">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-warm-border font-mono text-[10px] uppercase tracking-[0.12em] text-stone">
                  <time dateTime={post.postedAt}>
                    {formatPostedAt(post.postedAt)}
                  </time>
                  <span className="text-brand-orange group-hover:text-brand-orange-hover font-semibold transition-colors">
                    View →
                  </span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
