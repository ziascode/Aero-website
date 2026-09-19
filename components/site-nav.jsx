"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { onHashLinkClick } from "@/lib/hash-nav";
import { LiquidButton } from "@/components/liquid-button";
import { PhoneIcon } from "@/components/icons";

function NavDropdown({ link, active }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={`aero-nav-dropdown${open ? " is-open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={["aero-nav-link", "aero-nav-dropdown-trigger", active ? "is-active" : ""].filter(Boolean).join(" ")}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => setOpen((prev) => !prev)}
      >
        {link.label}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <ul id={menuId} className="aero-nav-dropdown-menu" role="list">
        <li className="aero-nav-dropdown-panel" role="presentation">
          <ul className="aero-nav-dropdown-list" role="list">
            {link.children.map((child) => (
              <li key={child.label}>
                <Link
                  href={child.href}
                  className="aero-nav-dropdown-item"
                  onClick={() => setOpen(false)}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

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
    if (link.children) {
      return pathname === "/services" || pathname.startsWith("/services/");
    }
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
        {NAV_LINKS.map((link) => {
          const active = link.label === activeLabel;
          if (link.children) {
            return <NavDropdown key={link.label} link={link} active={active} />;
          }
          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={(event) => {
                onHashLinkClick(link.href, pathname)(event);
                if (link.href.startsWith("/#") && pathname === "/") {
                  setHash(link.href.slice(1));
                }
              }}
              className={active ? undefined : "aero-nav-link"}
              style={{ color: active ? "var(--color-accent-700)" : "inherit" }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <LiquidButton href="tel:14105550142" size="compact" icon={<PhoneIcon size={14} />} style={{ flex: "0 0 auto" }}>
        (410) 555-0142
      </LiquidButton>
    </nav>
  );
}
