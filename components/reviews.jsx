"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { AVATAR_COLORS, REVIEWS } from "@/lib/data";
import { onHashLinkClick } from "@/lib/hash-nav";
import { sectionHeading } from "@/lib/styles";
import { LiquidButton } from "@/components/liquid-button";
import { ArrowRight } from "@/components/icons";
import { ReviewCard } from "@/components/review-card";

function buildReviews(arr, offset) {
  const mapped = arr.map((r, i) => ({
    ...r,
    initial: r.name[0],
    avatarBg: AVATAR_COLORS[(i + offset) % AVATAR_COLORS.length],
  }));
  return mapped.concat(mapped);
}

const maskStyle = {
  width: "100%",
  overflow: "hidden",
  maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
  WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
};

function ReviewBands({ row1, row2 }) {
  return (
    <div className="aero-reviews-bands-rows">
      <div style={maskStyle}>
        <div className="aero-marquee-slow" style={{ display: "flex", width: "max-content", gap: "20px" }}>
          {row1.map((r, i) => (
            <ReviewCard key={`r1-${i}`} r={r} glass />
          ))}
        </div>
      </div>
      <div style={maskStyle}>
        <div className="aero-marquee-rev" style={{ display: "flex", width: "max-content", gap: "20px" }}>
          {row2.map((r, i) => (
            <ReviewCard key={`r2-${i}`} r={r} glass />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Reviews({ ctaHref = "/#contact", bandsOnly = false } = {}) {
  const pathname = usePathname();
  const half = Math.ceil(REVIEWS.length / 2);
  const row1 = buildReviews(REVIEWS.slice(0, half), 0);
  const row2 = buildReviews(REVIEWS.slice(half), 3);
  const isInPageHash = ctaHref.startsWith("#");

  if (bandsOnly) {
    return (
      <section id="reviews" className="aero-reviews-bands" aria-label="Google reviews">
        <ReviewBands row1={row1} row2={row2} />
      </section>
    );
  }

  return (
    <section id="reviews" style={{ padding: "24px var(--aero-gutter) 88px", position: "relative", overflow: "hidden", backgroundColor: "#FFFFFF" }}>
      <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "14px", letterSpacing: "0.2px", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-2-900)", marginBottom: "12px" }}>Google Reviews</span>
      <hr style={{ height: "1px", border: 0, margin: "0 0 28px", background: "rgba(255,255,255,0.6)" }} />
      <div className="aero-reviews-grid">
        <div style={{ borderRadius: "25px", padding: "10px 0", backgroundColor: "#FFFFFF" }}>
          <h2 style={{ ...sectionHeading, margin: 0, maxWidth: "22ch", color: "var(--color-text)" }}>
            Rated 5.0 by the people who manage the buildings
          </h2>
          <p style={{ maxWidth: "46ch", margin: "20px 0 0", fontSize: "16px", lineHeight: "24px", color: "color-mix(in srgb, var(--color-text) 78%, transparent)" }}>
            Every review below comes from a live Google listing — offices, depots and production sites across the region, scored after the first quarter of service.
          </p>
          <span style={{ display: "block", marginTop: "24px", fontFamily: "var(--font-heading)", fontSize: "14px", letterSpacing: "0.2px", textTransform: "uppercase", color: "color-mix(in srgb, var(--color-text) 70%, transparent)" }}>
            5.0 average across 32 Google reviews
          </span>
          <LiquidButton
            href={ctaHref}
            onClick={(event) => {
              if (isInPageHash) {
                event.preventDefault();
                document.getElementById(ctaHref.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
                return;
              }
              onHashLinkClick(ctaHref, pathname)(event);
            }}
            icon={<ArrowRight size={14} />}
            style={{ marginTop: "20px" }}
          >
            Book service
          </LiquidButton>
        </div>
        <figure style={{ position: "relative", margin: 0, borderRadius: "25px", background: "rgba(255,255,255,0.45)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.7)", padding: "8px" }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", borderRadius: "18px", overflow: "hidden" }}>
            <Image src="/review6.png" alt="Google reviews for Aero Cleaning Services" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: "center" }} />
          </div>
        </figure>
      </div>

      <ReviewBands row1={row1} row2={row2} />
    </section>
  );
}
