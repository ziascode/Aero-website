import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";

const page = SERVICE_PAGES["carpet-cleaning"];

export const metadata = {
  title: "Carpet Cleaning - Aero Cleaning Services",
  description:
    "Commercial carpet cleaning for Guelph, Kitchener, Waterloo and Cambridge. Hot-water extraction, traffic-lane care, and low dry time for next-day occupancy.",
};

export default function CarpetCleaningPage() {
  return (
    <ServiceLandingPage
      page={page}
      trackingPrefix="service-carpet"
      source="service-carpet-cleaning"
    />
  );
}
