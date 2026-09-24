import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";

const page = SERVICE_PAGES["post-construction"];

export const metadata = {
  title: "Post-Construction Cleaning Guelph | Builders' Clean",
  description:
    "Post-construction and builders' cleans across Guelph, Kitchener, Waterloo and Cambridge. Rough, intermediate and final phases, ready for handover.",
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
