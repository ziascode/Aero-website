import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

const page = SERVICE_PAGES["warehouse-floors"];

export const metadata = pageMetadata({
  path: "/services/warehouse-floors",
  title: 'Warehouse & Factory Floor Cleaning Guelph | Aero Cleaning',
  description:
    'Warehouse and factory floor care across Guelph, Kitchener, Waterloo and Cambridge. Ride-on scrubbing, degreasing, sealing and spill response.',
});

export default function Page() {
  return (
    <ServiceLandingPage
      page={page}
      trackingPrefix="service-warehouse"
      source="service-warehouse-floors"
    />
  );
}
