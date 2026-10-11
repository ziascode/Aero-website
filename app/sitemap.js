import { CANONICAL_PATHS, SITE_ORIGIN } from "@/lib/site-urls";

export default function sitemap() {
  const lastModified = new Date();
  return CANONICAL_PATHS.map((path) => ({
    url: `${SITE_ORIGIN}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
