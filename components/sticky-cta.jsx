"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { PhoneIcon } from "@/components/icons";

export function StickyCta() {
  const pathname = usePathname();
  const router = useRouter();
  const isServicePage = pathname?.startsWith("/services/");

  function onBookClick(event) {
    event.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (pathname === "/") {
      return;
    }
    router.push("/#contact");
  }

  return (
    <aside className="aero-sticky-cta" aria-label="Quick actions">
      <Link
        id={isServicePage ? "service-sticky-cta" : "sticky-cta-book"}
        href={isServicePage ? "#contact" : "/#contact"}
        className={`aero-sticky-cta-btn aero-sticky-cta-btn--primary${isServicePage ? " aero-lp-track-cta" : ""}`}
        onClick={onBookClick}
      >
        Book a consultation
      </Link>
      <a
        id={isServicePage ? "service-sticky-tel" : "sticky-cta-tel"}
        href="tel:14105550142"
        className={`aero-sticky-cta-btn aero-sticky-cta-btn--call${isServicePage ? " aero-lp-track-tel" : ""}`}
      >
        <PhoneIcon size={18} />
        Talk to an agent
      </a>
    </aside>
  );
}
