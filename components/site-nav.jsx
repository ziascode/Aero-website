"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";
import { primaryBtn } from "@/lib/styles";
import { PhoneIcon } from "@/components/icons";

export function SiteNav() {
  const pathname = usePathname();
  const activeLabel = NAV_LINKS.find((link) => link.href === pathname)?.label;

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
      <Link href="/" aria-label="Aero Cleaning Services — home" style={{ display: "flex", alignItems: "center", marginRight: "auto", lineHeight: 1, flex: "0 0 auto" }}>
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
