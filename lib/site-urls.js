/** Canonical origin and paths. Middleware, sitemap, and page metadata share this list. */
export const SITE_ORIGIN = "https://aerocleaning.ca";

export const CANONICAL_PATHS = [
  "/",
  "/about",
  "/book",
  "/reviews",
  "/services",
  "/services/office-cleaning",
  "/services/janitorial-services",
  "/services/post-construction",
  "/services/window-cleaning",
  "/services/biohazard-emergency",
  "/services/carpet-cleaning",
  "/services/warehouse-floors",
];

/** Legacy paths that are not a spelling of a canonical path. Each value is the final URL. */
const ALIASES = {
  "/lp/janitorial-services": "/services/janitorial-services",
  "/contact": "/book",
  "/contact-us": "/book",
  "/about-office-cleaning": "/about",
  "/window-cleaning": "/services/window-cleaning",
  "/sample-page": "/",
  "/aeromaids": "/",
};

/**
 * One normalization step: decode, split camelCase, lowercase, turn underscores
 * into hyphens, collapse repeats, and drop a trailing slash.
 */
export function normalizePath(pathname) {
  let path = pathname || "/";
  try {
    path = decodeURIComponent(path);
  } catch {
    path = pathname || "/";
  }
  if (!path.startsWith("/")) path = `/${path}`;
  path = path
    .replace(/([a-z\d])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/\/{2,}/g, "/")
    .replace(/-+/g, "-")
    .replace(/\/-/g, "/")
    .replace(/-\//g, "/");
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return path || "/";
}

const byNormalized = new Map(CANONICAL_PATHS.map((path) => [path, path]));
const byCompact = new Map(CANONICAL_PATHS.map((path) => [path.replace(/-/g, ""), path]));

for (const [alias, target] of Object.entries(ALIASES)) {
  byNormalized.set(alias, target);
  const compact = alias.replace(/-/g, "");
  if (!byCompact.has(compact)) byCompact.set(compact, target);
}

/**
 * Final canonical path for this request, or null when the path is not a known page.
 * Callers redirect only when the result differs from the raw pathname, so case,
 * camelCase, missing hyphens, and trailing slashes resolve in a single hop.
 */
export function resolveCanonical(pathname) {
  const normalized = normalizePath(pathname);
  if (byNormalized.has(normalized)) return byNormalized.get(normalized);
  return byCompact.get(normalized.replace(/-/g, "")) ?? null;
}
