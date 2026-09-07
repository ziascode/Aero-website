"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FOOTER_LINK_GROUPS } from "@/lib/data";
import { onHashLinkClick } from "@/lib/hash-nav";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";

export function SiteFooter() {
  const pathname = usePathname();

  return (
    <footer style={{ backgroundColor: "#072445", color: "#FFFFFF" }}>
      <div className="aero-footer-grid">
        <div>
          <Link
            href="/#top"
            aria-label="Aero Cleaning Services — home"
            onClick={onHashLinkClick("/#top", pathname)}
            style={{ display: "inline-flex", marginBottom: "20px" }}
          >
            <span style={{ display: "inline-flex", padding: "12px 16px", borderRadius: "12px", background: "#FFFFFF" }}>
              <Image
                src="/AeroCleaningServicesLogo.webp"
                alt="Aero Cleaning Services Ltd"
                width={300}
                height={100}
                style={{ width: "150px", height: "50px", objectFit: "contain" }}
              />
            </span>
          </Link>
          <p style={{ fontSize: "16px", lineHeight: "24px", maxWidth: "32ch", margin: 0, color: "color-mix(in srgb, #FFFFFF 68%, transparent)" }}>
            Commercial janitorial &amp; industrial hygiene for offices, warehouses and production floors.
          </p>
        </div>

        {FOOTER_LINK_GROUPS.map(([heading, links]) => (
          <div key={heading}>
            <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "14px", letterSpacing: "0.2px", textTransform: "uppercase", fontWeight: 600, color: "color-mix(in srgb, #FFFFFF 55%, transparent)", marginBottom: "18px" }}>{heading}</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px" }}>
              {links.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={onHashLinkClick(href, pathname)}
                  className="aero-footer-link"
                  style={{ color: "color-mix(in srgb, #FFFFFF 85%, transparent)" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div>
          <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "14px", letterSpacing: "0.2px", textTransform: "uppercase", fontWeight: 600, color: "color-mix(in srgb, #FFFFFF 55%, transparent)", marginBottom: "18px" }}>Get in touch</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", color: "color-mix(in srgb, #FFFFFF 85%, transparent)" }}>
            <a href="tel:14105550142" className="aero-footer-link" style={{ display: "flex", alignItems: "center", gap: "10px", color: "inherit" }}>
              <PhoneIcon />
              (410) 555-0142
            </a>
            <a href="mailto:hello@aerocleaning.ca" className="aero-footer-link" style={{ display: "flex", alignItems: "center", gap: "10px", color: "inherit" }}>
              <MailIcon />
              hello@aerocleaning.ca
            </a>
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <PinIcon />
              Serving the Greater Toronto Area
            </span>
          </div>
        </div>
      </div>
      <div className="aero-footer-legal">
        <span style={{ marginRight: "auto" }}>© 2026 Aero Cleaning Services. All rights reserved.</span>
        <span>Insured &amp; DBS vetted</span>
        <span>ISO 9001 &amp; 14001</span>
      </div>
    </footer>
  );
}
