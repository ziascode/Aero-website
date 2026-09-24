import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";

const page = SERVICE_PAGES["biohazard-emergency"];

export const metadata = {
  title: "Emergency Cleaning & Restoration Guelph | Aero",
  description:
    "Emergency cleanup across Guelph, Kitchener, Waterloo and Cambridge. Water, flood, sewer backup and biohazard response, documented for insurers.",
};

export default function BiohazardEmergencyPage() {
  return (
    <ServiceLandingPage
      page={page}
      trackingPrefix="service-biohazard"
      source="service-biohazard-emergency"
    />
  );
}
