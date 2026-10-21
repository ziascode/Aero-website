import { Contact } from "@/components/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact — Aero Cleaning Services",
  description: "Book a walkthrough. A supervisor walks the site and returns a fixed monthly figure within two working days.",
});

export default function ContactPage() {
  return <Contact />;
}
