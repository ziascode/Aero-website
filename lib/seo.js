import { SITE_ORIGIN } from "@/lib/site-urls";

const DEFAULT_OG_IMAGE = {
  url: "/office-hero.jpg",
  width: 1200,
  height: 630,
  alt: "Commercial office after a clean by Aero Cleaning Services",
};

/** Shared Open Graph + Twitter fields for every page (Z-07). */
export function pageMetadata({ title, description, path, images = [DEFAULT_OG_IMAGE] }) {
  const url = path === "/" ? SITE_ORIGIN : `${SITE_ORIGIN}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_CA",
      siteName: "Aero Cleaning Services",
      title,
      description,
      url,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((image) => (typeof image === "string" ? image : image.url)),
    },
  };
}

export function credentialLogoAlt(title) {
  if (title === "WSIB") return "WSIB";
  if (title === "BBB") return "Better Business Bureau accredited";
  return `${title} logo`;
}
