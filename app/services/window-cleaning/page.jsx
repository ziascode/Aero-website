import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";

const page = SERVICE_PAGES["window-cleaning"];

export const metadata = {
  title: "Window Cleaning - Aero Cleaning Services",
  description:
    "Interior and exterior commercial window cleaning for Guelph, Kitchener, Waterloo and Cambridge. Storefronts, partitions, and high-level glass. Fixed quote in two working days.",
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
