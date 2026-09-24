import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";

const page = SERVICE_PAGES["carpet-cleaning"];

export const metadata = {
  title: "Commercial Carpet Cleaning Guelph | Aero Cleaning",
  description:
    "Commercial carpet cleaning across Guelph, Kitchener, Waterloo and Cambridge. Hot-water extraction, traffic-lane cleaning and low dry times.",
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
