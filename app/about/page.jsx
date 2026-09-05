import { About } from "@/components/about";
import { Wbe } from "@/components/wbe";

export const metadata = {
  title: "About Us — Aero Cleaning Services",
  description: "Roxana founded Aero Cleaning Services Ltd. in Guelph in 2015. Cleaning Guelph, Kitchener, Waterloo and Cambridge, with a portion of every contract donated back to the community.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Wbe />
    </>
  );
}
