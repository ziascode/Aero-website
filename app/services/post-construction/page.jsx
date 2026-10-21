import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

const page = SERVICE_PAGES["post-construction"];

export const metadata = pageMetadata({
  path: "/services/post-construction",
  title: 'Post-Construction Cleaning Guelph | Aero',
  description:
    'We clear dust, debris, and residue after a build or renovation, leaving the space spotless and move-in ready across Guelph, Kitchener, Waterloo and Cambridge.',
});

export default function Page() {
  return (
    <ServiceLandingPage
      page={page}
      trackingPrefix="service-post"
      source="service-post-construction"
    />
  );
}
