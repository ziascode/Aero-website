import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";

const page = SERVICE_PAGES["janitorial-services"];

export const metadata = {
  title: "Janitorial Services Guelph & Tri-City | Aero Cleaning",
  description:
    "Recurring janitorial contracts and day porter service across Guelph, Kitchener, Waterloo and Cambridge. Whole-building coverage, frequency to suit.",
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
