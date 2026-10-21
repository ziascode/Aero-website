import { Services } from "@/components/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/services",
  title: "Services — Aero Cleaning Services",
  description: "Office cleaning, warehouse and factory floor care, and commercial cleaning from Aero Cleaning Services.",
});

export default function ServicesPage() {
  return <Services />;
}
