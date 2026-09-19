import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";

const page = SERVICE_PAGES["post-construction"];

export const metadata = {
  title: "Post Construction Cleaning - Aero Cleaning Services",
  description:
    "Builders’ cleans for Guelph, Kitchener, Waterloo and Cambridge. Dust, glass, adhesive removal and final floors ahead of handover. Fixed project quote in two working days.",
};

export default function PostConstructionPage() {
  return (
    <ServiceLandingPage
      page={page}
      trackingPrefix="service-post-construction"
      source="service-post-construction"
    />
  );
}
