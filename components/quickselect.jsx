"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { QUICKSELECT_ITEMS } from "@/lib/data";
import { onHashLinkClick } from "@/lib/hash-nav";

function OfficeIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="14" y="10" width="36" height="46" rx="3" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.75" />
      <path d="M27 56V44h10v12" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <rect x="20" y="18" width="7" height="6" rx="1" fill="currentColor" opacity="0.85" />
      <rect x="29" y="18" width="7" height="6" rx="1" fill="currentColor" opacity="0.45" />
      <rect x="38" y="18" width="7" height="6" rx="1" fill="currentColor" opacity="0.85" />
      <rect x="20" y="28" width="7" height="6" rx="1" fill="currentColor" opacity="0.45" />
      <rect x="29" y="28" width="7" height="6" rx="1" fill="currentColor" opacity="0.85" />
      <rect x="38" y="28" width="7" height="6" rx="1" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

function JanitorialIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g transform="rotate(36 32 32)">
        <path d="M32 11v20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M23 31h18l3 17H20l3-17Z" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        <path d="M22.2 36h19.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
        <path d="M28 39v7M32 39v7M36 39v7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.4" />
      </g>
      <path d="M42.5 41h14l-2 13H44.5l-2-13Z" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M41 41h17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M46 47h7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

function ConstructionIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M16 42v-6c0-11 7.2-19.5 16-19.5c8.8 0 16 8.5 16 19.5v6" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M32 17v25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M7 42h50v2A5 5 0 0 1 52 47H12A5 5 0 0 1 7 44V42Z" fill="currentColor" />
    </svg>
  );
}

function WindowIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="13" y="12" width="30" height="40" rx="2" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.75" />
      <path d="M28 12v40M13 32h30" stroke="currentColor" strokeWidth="1.75" />
      <path d="M40 20l10 4-8 22-10-4 8-22Z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M48 24v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BiohazardIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="currentColor" fillOpacity="0.14" />
      <g fill="currentColor" transform="translate(32 32)">
        {[0, 120, 240].map((deg) => (
          <g key={deg} transform={`rotate(${deg})`}>
            <path d="M0-4.2a10.4 10.4 0 0 1 9.2-13.6 15.4 15.4 0 0 0-18.4 0A10.4 10.4 0 0 1 0-4.2Z" />
            <circle cy="-19.8" r="3.15" />
          </g>
        ))}
        <circle r="3.5" />
      </g>
    </svg>
  );
}

function CarpetIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M10 40c8-8 36-8 44 0v10H10V40Z" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M16 42c6-5 26-5 32 0" stroke="currentColor" strokeWidth="1.25" opacity="0.45" />
      <path d="M16 47h32" stroke="currentColor" strokeWidth="1.25" opacity="0.35" />
      <rect x="28" y="10" width="8" height="18" rx="2" fill="currentColor" />
      <path d="M24 28h16l2 6H22l2-6Z" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

const ICONS = {
  office: OfficeIcon,
  janitorial: JanitorialIcon,
  construction: ConstructionIcon,
  window: WindowIcon,
  biohazard: BiohazardIcon,
  carpet: CarpetIcon,
};

export function Quickselect() {
  const pathname = usePathname();

  return (
    <section className="aero-quickselect" aria-label="Quick select a service">
      <div className="aero-quickselect-grid">
        {QUICKSELECT_ITEMS.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onHashLinkClick(item.href, pathname)}
              className="aero-quickselect-card"
            >
              <span className="aero-quickselect-media" aria-hidden="true">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 720px) 50vw, 33vw"
                  className="aero-quickselect-image"
                />
                <span className="aero-quickselect-overlay" />
              </span>
              <span className="aero-quickselect-label">{item.label}</span>
              <span className="aero-quickselect-icon">
                <Icon />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
