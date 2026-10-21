import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

const page = SERVICE_PAGES["office-cleaning"];

export const metadata = pageMetadata({
  path: "/services/office-cleaning",
  title: 'Office Cleaning Guelph, Kitchener & Waterloo | Aero',
  description:
    'Office cleaning across Guelph, Kitchener, Waterloo and Cambridge. Nightly, weekly or custom frequency, with the scope signed off room by room.',
});

export default function Page() {
  return (
    <ServiceLandingPage
      page={page}
      trackingPrefix="service-office"
      source="service-office-cleaning"
    />
  );
}
