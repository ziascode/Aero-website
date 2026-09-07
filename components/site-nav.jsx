"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { onHashLinkClick } from "@/lib/hash-nav";
import { primaryBtn } from "@/lib/styles";
import { PhoneIcon } from "@/components/icons";

export function SiteNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, [pathname]);

  const activeLabel = NAV_LINKS.find((link) => {
    if (link.href.startsWith("/#")) {
      const target = link.href.slice(1); // "#services"
      if (pathname !== "/") return false;
      if (link.href === "/#top") return !hash || hash === "#top";
      return hash === target;
    }
    return link.href === pathname;
  })?.label;

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "32px",
        padding: "18px var(--aero-gutter)",
        borderBottom: "1px solid var(--color-divider)",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Link
        href="/#top"
        aria-label="Aero Cleaning Services — home"
        onClick={onHashLinkClick("/#top", pathname)}
        style={{ display: "flex", alignItems: "center", marginRight: "auto", lineHeight: 1, flex: "0 0 auto" }}
      >
        <Image
          src="/AeroCleaningServicesLogo.webp"
          alt="Aero Cleaning Services Ltd"
          width={300}
          height={100}
          priority
          style={{ width: "138px", height: "46px", objectFit: "contain" }}
        />
      </Link>
      <div className="aero-nav-links">
        {NAV_LINKS.map(({ href, label }) => {
          const active = label === activeLabel;
          return (
            <Link
              key={label}
              href={href}
              onClick={(event) => {
                onHashLinkClick(href, pathname)(event);
                if (href.startsWith("/#") && pathname === "/") {
                  setHash(href.slice(1));
                }
              }}
              className={active ? undefined : "aero-nav-link"}
              style={{ color: active ? "var(--color-accent-700)" : "inherit" }}
            >
              {label}
            </Link>
          );
        })}
      </div>
      <Link href="tel:14105550142" className="btn btn-primary" style={{ ...primaryBtn, gap: "8px", padding: "9px 16px", whiteSpace: "nowrap", flex: "0 0 auto", textTransform: "none", letterSpacing: "0.2px" }}>
        <PhoneIcon size={14} />
        (410) 555-0142
      </Link>
    </nav>
  );
}
