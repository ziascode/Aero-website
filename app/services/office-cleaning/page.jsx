import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";

const page = SERVICE_PAGES["office-cleaning"];

export const metadata = {
  title: "Office Cleaning Guelph, Kitchener & Waterloo | Aero",
  description:
    "Office cleaning across Guelph, Kitchener, Waterloo and Cambridge. Nightly, weekly or custom frequency, with the scope signed off room by room.",
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
