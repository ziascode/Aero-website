import { EMAIL } from "@/lib/contact";
import { SITE_ORIGIN } from "@/lib/site-urls";

const WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/** Facts already published on the site: phone, email, maps address, service area, hours. */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_ORIGIN}/#business`,
  name: "Aero Cleaning Services",
  legalName: "Aero Cleaning Services Ltd",
  url: SITE_ORIGIN,
  telephone: "+1-519-831-5126",
  email: EMAIL,
  image: `${SITE_ORIGIN}/about-boardroom.jpg`,
  description:
    "Office, janitorial and post-construction cleaning across Guelph, Kitchener, Waterloo and Cambridge. Women-owned and WBE certified, cleaning since 2015.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 Edinburgh Rd S",
    addressLocality: "Guelph",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: ["Guelph", "Kitchener", "Waterloo", "Cambridge"].map((name) => ({
    "@type": "City",
    name,
  })),
  foundingDate: "2015",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: WEEK,
    opens: "00:00",
    closes: "23:59",
  },
};

export function faqPageJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
