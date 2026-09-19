import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";

const page = SERVICE_PAGES["janitorial-services"];

export const metadata = {
  title: "Janitorial Services - Aero Cleaning Services",
  description:
    "Recurring janitorial and day porter services for Guelph, Kitchener, Waterloo and Cambridge. Fixed quote in two working days. No lock-in for the first quarter.",
};

export default function JanitorialServicesPage() {
  return (
    <ServiceLandingPage
      page={page}
      trackingPrefix="service-janitorial"
      source="service-janitorial-services"
    />
  );
}
