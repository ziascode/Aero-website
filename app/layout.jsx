import { Lato, League_Spartan, Poppins } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SiteFrame } from "@/components/site-frame";
import { localBusinessJsonLd } from "@/lib/schema";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-spartan",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const siteTitle = "Commercial Cleaning Guelph | Aero Cleaning Services";
const siteDescription =
  "Office, janitorial and post-construction cleaning across Guelph, Kitchener, Waterloo and Cambridge. Women-owned and WBE certified, cleaning since 2015.";

export const metadata = {
  metadataBase: new URL("https://aerocleaning.ca"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Aero Cleaning Services",
    title: siteTitle,
    description: siteDescription,
    url: "https://aerocleaning.ca",
    images: [
      {
        url: "/office-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial office after a clean by Aero Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/office-hero.jpg"],
  },
};

export const viewport = {
  themeColor: "#072445",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${leagueSpartan.variable} ${poppins.variable}`}>
      <head>
        <link rel="stylesheet" href="/ds/styles.css" />
      </head>
      <body className={lato.className}>
        <JsonLd data={localBusinessJsonLd} />
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
