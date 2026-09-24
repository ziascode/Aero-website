import { About } from "@/components/about";
import { Wbe } from "@/components/wbe";

export const metadata = {
  title: "About Aero Cleaning | Women-Owned, Guelph, Since 2015",
  description: "Aero Cleaning Services has cleaned Guelph offices, plants and warehouses since 2015. Women-owned, WBE Canada certified, and giving back locally.",
};

export default function AboutPage() {
  return (
    <>
      <About hideMoreLink />
      <Wbe />
    </>
  );
}
