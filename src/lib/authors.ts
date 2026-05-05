export type Author = {
  slug: string;
  name: string;
  role: string;
  /** Short bio. 1-2 sentences. */
  bio: string;
};

export const AUTHORS: Record<string, Author> = {
  kevin: {
    slug: "kevin",
    name: "Kevin Handrin",
    role: "Owner / General Manager",
    bio: "Started ZionCS in 2016 as a pool-deck crew. Lives in Sandy. Owns most of the technical content on this site.",
  },
  amy: {
    slug: "amy",
    name: "Amy Carlin",
    role: "Marketing / PR / Office Manager",
    bio: "Runs ZionCS marketing and the front-of-house side of every project. Writes the homeowner-facing content.",
  },
  josh: {
    slug: "josh",
    name: "Josh Rowberry",
    role: "Project Manager",
    bio: "Project manager for residential and commercial work. Walks most of the quote sites and writes the build-process content.",
  },
  editorial: {
    slug: "editorial",
    name: "ZionCS Editorial Team",
    role: "Editorial",
    bio: "Collaborative ZionCS team posts — reviewed by Kevin, Amy, and Josh before publishing.",
  },
} as const;

export function getAuthor(slug: string): Author {
  return AUTHORS[slug] ?? AUTHORS.editorial;
}
