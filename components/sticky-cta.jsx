"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PHONE_TEL } from "@/lib/contact";
import { PhoneIcon } from "@/components/icons";

export function StickyCta() {
  const pathname = usePathname();
  const router = useRouter();
  const isServicePage = pathname?.startsWith("/services/");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.querySelector("[data-sticky-reveal]");
    if (!target) {
      setVisible(true);
      return;
    }

    function update() {
      const onScreen = target.getBoundingClientRect().top < window.innerHeight;
      setVisible((current) => (current === onScreen ? current : onScreen));
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

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
    <aside
      className={`aero-sticky-cta${visible ? " is-visible" : ""}`}
      aria-label="Quick actions"
      aria-hidden={visible ? undefined : true}
    >
      <Link
        id={isServicePage ? "service-sticky-cta" : "sticky-cta-book"}
        href={isServicePage ? "#contact" : "/#contact"}
        className={`aero-sticky-cta-btn aero-sticky-cta-btn--primary${isServicePage ? " aero-lp-track-cta" : ""}`}
        tabIndex={visible ? undefined : -1}
        onClick={onBookClick}
      >
        Book a consultation
      </Link>
      <a
        id={isServicePage ? "service-sticky-tel" : "sticky-cta-tel"}
        href={PHONE_TEL}
        className={`aero-sticky-cta-btn aero-sticky-cta-btn--call${isServicePage ? " aero-lp-track-tel" : ""}`}
        tabIndex={visible ? undefined : -1}
      >
        <PhoneIcon size={18} />
        Talk to an agent
      </a>
    </aside>
  );
}
