import type { MetadataRoute } from "next";

const SITE_URL = "https://beslenmepsikolojisi.org.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/hakkimizda",
    "/egitim",
    "/sempozyum",
    "/galeri",
    "/makaleler",
    "/etkinlikler",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/sempozyum" ? 0.9 : 0.7,
  }));
}
