import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";

const page = SERVICE_PAGES["biohazard-emergency"];

export const metadata = {
  title: "Biohazard & Emergency Cleaning - Aero Cleaning Services",
  description:
    "Rapid biohazard and emergency cleaning for Guelph, Kitchener, Waterloo and Cambridge. Water, fire, sewage and biohazard response with full PPE and insurance documentation.",
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
