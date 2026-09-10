import { PostCard } from "./PostCard";
import type { PostMeta } from "@/types/post";

interface RelatedPostsProps {
  posts: PostMeta[];
  title?: string;
  eyebrow?: string;
}

export function RelatedPosts({
  posts,
  title = "Keep reading",
  eyebrow = "ZIONCS://RELATED-ARTICLES",
}: RelatedPostsProps) {
  if (posts.length === 0) return null;
  return (
    <section className="bg-bg-sand-wash py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
            {eyebrow}
          </p>
          <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] font-extrabold tracking-tight text-anthracite leading-[1.15]">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p) => (
            <PostCard key={p.slug} meta={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
