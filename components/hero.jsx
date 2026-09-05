"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HERO_IMAGES, LABELS } from "@/lib/data";
import { headingBase, primaryBtn } from "@/lib/styles";
import { ArrowRight, PhoneIcon, SprayIcon, Stars } from "@/components/icons";

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const rotate = setInterval(() => setActive((a) => (a + 1) % LABELS.length), 2500);
    return () => clearInterval(rotate);
  }, []);

  return (
    <>
      <section
        id="top"
        className="aero-hero"
        style={{
          textAlign: "center",
          background: "linear-gradient(180deg, #C9E5FD, #C9E5FD, #F2FAFF)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "2px",
            fontSize: "12px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "color-mix(in srgb, var(--color-text) 65%, transparent)",
          }}
        >
          <span style={{ display: "inline-flex", width: "20px", height: "20px" }}>
            <Image src="/google.png" alt="Google" width={20} height={20} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </span>
          <Stars />
          5.0 · 240+ Google reviews
        </div>

        <h1 style={{ ...headingBase, fontSize: "clamp(46px, 6.4vw, 90px)", lineHeight: 1.04, margin: "0 auto", maxWidth: "20ch" }}>
          <span className="aero-hero-title" style={{ display: "inline", color: "#1D1F20", fontWeight: 600 }}>Commercial &amp; Office</span>
          <span className="aero-hero-title" style={{ display: "block" }}>Cleaning Services</span>
        </h1>

        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginTop: "30px" }}>
          <Link href="/contact" className="btn btn-primary" style={{ ...primaryBtn, fontSize: "15px", padding: "13px 24px" }}>
            Book service
            <ArrowRight />
          </Link>
          <Link href="/contact" className="btn btn-secondary" style={{ gap: "10px", fontSize: "15px", letterSpacing: "0.06em", textTransform: "uppercase", padding: "13px 24px", color: "var(--color-text)", borderRadius: "25px" }}>
            <PhoneIcon />
            Call now
          </Link>
        </div>

        <div className="aero-hero-tabs">
          {LABELS.map((label, i) => (
            <button
              key={label}
              type="button"
              className="aero-tab"
              onClick={() => setActive(i)}
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "9px 16px",
                border: "1px solid #FFFFFF",
                background: i === active ? "#D2EAFD" : "#FFFFFF",
                color: "var(--color-text)",
                borderRadius: "15px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "background 260ms ease, border-color 260ms ease, color 260ms ease",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <section style={{ padding: "44px var(--aero-gutter) 0", background: "linear-gradient(180deg, #F2FAFF, #FFFFFF, #FFFFFF)" }}>
        <figure className="blueprint" style={{ position: "relative", margin: "0 auto", maxWidth: "1000px", borderRadius: "25px 25px 0 0" }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: "25px 25px 0 0" }}>
            {LABELS.map((label, i) => (
              <div
                key={label}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "scale(1)" : "scale(1.03)",
                  visibility: i === active ? "visible" : "hidden",
                  pointerEvents: i === active ? "auto" : "none",
                  borderRadius: "25px 25px 0 0",
                  transition: "opacity 520ms ease, transform 700ms ease, visibility 520ms",
                }}
              >
                <Image
                  src={HERO_IMAGES[i]}
                  alt={`${label} in a commercial workplace`}
                  fill
                  sizes="(max-width: 1000px) 100vw, 1000px"
                  priority={i === 0}
                  style={{ objectFit: "cover", borderRadius: "25px 25px 0 0" }}
                />
              </div>
            ))}
          </div>
          <span
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              zIndex: 2,
              border: "1px solid var(--color-divider)",
              padding: "7px 14px",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "25px",
              backgroundColor: "#E3F0FFB7",
            }}
          >
            <SprayIcon />
            {LABELS[active]}
          </span>
        </figure>
      </section>
    </>
  );
}
