import { Lato, League_Spartan, Poppins } from "next/font/google";
import { SiteFrame } from "@/components/site-frame";
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

export const metadata = {
  title: "Aero Cleaning Services — Commercial & Office Cleaning",
  description:
    "Nightly janitorial, industrial floor care and specialist sanitation for offices, plants and warehouses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${leagueSpartan.variable} ${poppins.variable}`}>
      <head>
        <link rel="stylesheet" href="/ds/styles.css" />
      </head>
      <body className={lato.className}>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
