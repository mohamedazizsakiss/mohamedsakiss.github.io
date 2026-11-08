import type { MetadataRoute } from "next";
import { SITE_URL, locales, localePath } from "@/i18n/config";

const url = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

// One entry per language, each listing the others as translations (hreflang).
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, url(localePath(l))]));

  return locales.map((lang) => ({
    url: url(localePath(lang)),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: lang === "en" ? 1 : 0.8,
    alternates: { languages },
  }));
}
