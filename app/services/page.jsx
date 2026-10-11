import { Services } from "@/components/services";

export const metadata = {
  alternates: { canonical: "/services" },
  title: "Services — Aero Cleaning Services",
  description: "Office cleaning, warehouse and factory floor care, and commercial cleaning from Aero Cleaning Services.",
};

export default function ServicesPage() {
  return <Services />;
}
