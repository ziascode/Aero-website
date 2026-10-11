import { ServiceLandingPage } from "@/components/service-landing-page";
import { SERVICE_PAGES } from "@/lib/data";

const page = SERVICE_PAGES["post-construction"];

export const metadata = {
  alternates: { canonical: "/services/post-construction" },
  title: "Post-Construction Cleaning Guelph | Aero Cleaning",
  description:
    "We clear dust, debris, and residue after a build or renovation, leaving the space spotless and move-in ready across Guelph, Kitchener, Waterloo and Cambridge.",
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
