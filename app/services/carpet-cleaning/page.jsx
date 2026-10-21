import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

const page = SERVICE_PAGES["carpet-cleaning"];

export const metadata = pageMetadata({
  path: "/services/carpet-cleaning",
  title: 'Carpet Cleaning Guelph | Aero Cleaning',
  description:
    'Commercial carpet cleaning across Guelph, Kitchener, Waterloo and Cambridge. Hot-water extraction, traffic-lane cleaning and low dry times.',
});

export default function Page() {
  return (
    <ServiceLandingPage
      page={page}
      trackingPrefix="service-carpet"
      source="service-carpet-cleaning"
    />
  );
}
