-- Social feed cache for the Meta Graph sync pipeline (Track B).
-- Apply this only when the client provisions a Supabase project. Until then
-- the site serves the hand-curated static feed and this file is inert.
--
--   supabase db push          (CLI, against the linked project)
--   -- or paste into the Supabase SQL editor.

create table if not exists public.social_posts (
  id          text primary key,            -- "ig-<mediaId>" / "fb-<postId>"
  platform    text not null check (platform in ('instagram', 'facebook')),
  posted_at   timestamptz not null,
  caption     text not null default '',
  alt         text not null default '',
  url         text not null,
  image       text,                         -- null when a post has no still
  synced_at   timestamptz not null default now()
);

-- Feed reads are always "newest N".
create index if not exists social_posts_posted_at_idx
  on public.social_posts (posted_at desc);

-- Row Level Security: the sync writes with the service-role key (bypasses RLS).
-- Enable RLS and expose read-only access to the anon key in case the feed is
-- ever read client-side; server reads use the service role and are unaffected.
alter table public.social_posts enable row level security;

drop policy if exists "social_posts public read" on public.social_posts;
create policy "social_posts public read"
  on public.social_posts for select
  using (true);
