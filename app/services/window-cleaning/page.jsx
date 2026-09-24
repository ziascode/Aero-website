import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";

const page = SERVICE_PAGES["window-cleaning"];

export const metadata = {
  title: "Commercial Window Cleaning Guelph | Aero Cleaning",
  description:
    "Interior and exterior commercial window cleaning across Guelph, Kitchener, Waterloo and Cambridge. Storefronts, partitions and high-level glass.",
};

export default function WindowCleaningPage() {
  return (
    <ServiceLandingPage
      page={page}
      trackingPrefix="service-window"
      source="service-window-cleaning"
    />
  );
}
