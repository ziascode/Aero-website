import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { Quickselect } from "@/components/quickselect";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";
import { VideoHero } from "@/components/video-hero";
import { Wbe } from "@/components/wbe";

export default function HomePage() {
  return (
    <>
      <VideoHero />
      {/* <Stats /> */}
      <LogoMarquee />
      {/* <Hero /> */}
      <Quickselect />
      <Services />
      <Reviews />
      <About />
      
      {/* <Contact /> */}
      <Wbe />
      <Faq />
    </>
  );
}
