import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

const page = SERVICE_PAGES["window-cleaning"];

export const metadata = pageMetadata({
  path: "/services/window-cleaning",
  title: 'Window Cleaning Guelph | Aero Cleaning',
  description:
    'Interior and exterior commercial window cleaning across Guelph, Kitchener, Waterloo and Cambridge. Storefronts, partitions and high-level glass.',
});

export default function Page() {
  return (
    <ServiceLandingPage
      page={page}
      trackingPrefix="service-window"
      source="service-window-cleaning"
    />
  );
}
