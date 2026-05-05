import type { MetadataRoute } from "next";
import { getAllProjects } from "@/data/projects";
import { getAllPostSlugs } from "@/data/posts";

const BASE = "https://zioncs.com";

const SERVICE_SLUGS = [
  "concrete-driveways-utah",
  "stamped-decorative-concrete-utah",
  "pool-decks-utah",
  "concrete-patios-utah",
  "residential-concrete-repair-utah",
  "industrial-concrete-foundations-utah",
  "commercial-flatwork-parking-lots-sidewalks",
  "dumpster-pad-trash-enclosure-concrete-utah",
  "sport-courts-utah",
  "rv-pads-utah",
  "splash-pads-utah",
  "sidewalks-curbing-utah",
];

const LOCATION_SLUGS = ["sandy-utah", "salt-lake-city", "st-george"];

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "services", priority: 0.9, changeFrequency: "monthly" },
  { path: "projects", priority: 0.8, changeFrequency: "weekly" },
  { path: "blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "utah-concrete-contractor", priority: 0.9, changeFrequency: "monthly" },
  { path: "wasatch-front-concrete-contractor", priority: 0.8, changeFrequency: "monthly" },
  { path: "builders", priority: 0.8, changeFrequency: "monthly" },
  { path: "commercial", priority: 0.8, changeFrequency: "monthly" },
  { path: "multi-site", priority: 0.8, changeFrequency: "monthly" },
  { path: "quote", priority: 0.7, changeFrequency: "yearly" },
  { path: "contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "about", priority: 0.6, changeFrequency: "yearly" },
  { path: "privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: r.path ? `${BASE}/${r.path}` : `${BASE}/`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationEntries: MetadataRoute.Sitemap = LOCATION_SLUGS.map((slug) => ({
    url: `${BASE}/locations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectEntries: MetadataRoute.Sitemap = getAllProjects().map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...locationEntries,
    ...projectEntries,
    ...postEntries,
  ];
}
