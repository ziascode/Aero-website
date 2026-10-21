import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

const page = SERVICE_PAGES["janitorial-services"];

export const metadata = pageMetadata({
  path: "/services/janitorial-services",
  title: 'Janitorial Services Guelph | Aero Cleaning',
  description:
    'Recurring janitorial contracts and day porter service across Guelph, Kitchener, Waterloo and Cambridge. Whole-building coverage, frequency to suit.',
});

export default function Page() {
  return (
    <ServiceLandingPage
      page={page}
      trackingPrefix="service-janitorial"
      source="service-janitorial-services"
    />
  );
}
