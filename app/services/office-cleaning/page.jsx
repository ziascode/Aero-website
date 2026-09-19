import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";

const page = SERVICE_PAGES["office-cleaning"];

export const metadata = {
  title: "Office Cleaning - Aero Cleaning Services",
  description:
    "Custom office cleaning for Guelph, Kitchener, Waterloo and Cambridge. Flexible frequency, logged visits, and a fixed quote after a site walkthrough.",
};

export default function OfficeCleaningPage() {
  return (
    <ServiceLandingPage
      page={page}
      trackingPrefix="service-office"
      source="service-office-cleaning"
    />
  );
}
