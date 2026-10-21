import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { HashScroll } from "@/components/hash-scroll";
import { LogoMarquee } from "@/components/logo-marquee";
import { Quickselect } from "@/components/quickselect";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { VideoHero } from "@/components/video-hero";
import { Wbe } from "@/components/wbe";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/",
  title: "Commercial Cleaning Guelph | Aero Cleaning Services",
  description:
    "Office, janitorial and post-construction cleaning across Guelph, Kitchener, Waterloo and Cambridge. Women-owned and WBE certified, cleaning since 2015.",
});

export default function HomePage() {
  return (
    <>
      <HashScroll />
      <VideoHero />
      <LogoMarquee />
      <Quickselect />
      <Services />
      <Reviews />
      <About />
      <Wbe />
      <Faq />
      <Contact />
    </>
  );
}
