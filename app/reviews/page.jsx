import { Reviews } from "@/components/reviews";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/reviews",
  title: "Reviews — Aero Cleaning Services",
  description: "Rated 5.0 on Google by the facilities teams we clean for, across offices, depots and production sites.",
});

export default function ReviewsPage() {
  return <Reviews />;
}
