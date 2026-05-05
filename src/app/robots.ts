import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/book/"],
      },
    ],
    sitemap: "https://zioncs.com/sitemap.xml",
    host: "https://zioncs.com",
  };
}
