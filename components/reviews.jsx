"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { AVATAR_COLORS, REVIEWS } from "@/lib/data";
import { GOOGLE_MAPS_URL } from "@/lib/contact";
import { onHashLinkClick } from "@/lib/hash-nav";
import { sectionHeading } from "@/lib/styles";
import { LiquidButton } from "@/components/liquid-button";
import { ArrowRight, Stars } from "@/components/icons";
import { ReviewCard } from "@/components/review-card";

function buildReviews(arr, offset) {
  return arr.map((r, i) => ({
    ...r,
    initial: r.name[0],
    avatarBg: AVATAR_COLORS[(i + offset) % AVATAR_COLORS.length],
  }));
}

const maskStyle = {
  width: "100%",
  overflow: "hidden",
  maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
  WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
};

function MarqueeSet({ reviews, copy, hidden = false }) {
  return (
    <div className="aero-marquee-set" aria-hidden={hidden || undefined}>
      {reviews.map((r, i) => (
        <ReviewCard key={`${copy}-${r.name}-${i}`} r={r} glass />
      ))}
    </div>
  );
}

function ReviewBands({ row1, row2 }) {
  return (
    <div className="aero-reviews-bands-rows">
      <div style={maskStyle}>
        <div className="aero-marquee-slow">
          <MarqueeSet reviews={row1} copy="a" />
          <MarqueeSet reviews={row1} copy="b" hidden />
        </div>
      </div>
      <div style={maskStyle}>
        <div className="aero-marquee-rev">
          <MarqueeSet reviews={row2} copy="a" />
          <MarqueeSet reviews={row2} copy="b" hidden />
        </div>
      </div>
    </div>
  );
}

export function Reviews({ ctaHref = "/book", bandsOnly = false } = {}) {
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

  function onBook(event) {
    if (isInPageHash) {
      event.preventDefault();
      document.getElementById(ctaHref.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    onHashLinkClick(ctaHref, pathname)(event);
  }

  const isHome = pathname === "/";

  return (
    <section
      id="reviews"
      className={isHome ? "aero-reviews-home aero-reviews-section" : "aero-reviews-section"}
      style={{ position: "relative", overflow: "hidden", backgroundColor: "#FFFFFF" }}
    >
      <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "14px", letterSpacing: "0.2px", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-2-900)", marginBottom: "12px" }}>Google Reviews</span>
      <hr style={{ height: "1px", border: 0, margin: "0 0 28px", background: "rgba(255,255,255,0.6)" }} />
      <div className="aero-reviews-grid">
        <div style={{ borderRadius: "25px", padding: "10px 0", backgroundColor: "#FFFFFF" }}>
          <h2 style={{ ...sectionHeading, margin: 0, maxWidth: "22ch", color: "var(--color-text)" }}>
            Rated 5 stars by your local businesses
          </h2>
          <p className="aero-reviews-dek" style={{ maxWidth: "46ch", margin: "20px 0 0", fontSize: "16px", lineHeight: "24px", color: "color-mix(in srgb, var(--color-text) 78%, transparent)" }}>
            Every review below comes from a live Google listing — offices, depots and production sites across the region, scored after the first quarter of service.
          </p>
          <div className="aero-reviews-actions">
            <div className="aero-reviews-rating" aria-label="5 stars on Google">
              <Image src="/google.png" alt="" width={40} height={40} className="aero-reviews-rating-logo" />
              <span className="aero-reviews-rating-copy">
                <span className="aero-reviews-rating-brand">Google</span>
                <Stars size={22} gap={4} />
              </span>
            </div>
            {isHome ? (
              <LiquidButton
                href={GOOGLE_MAPS_URL}
                className="aero-reviews-cta-lead"
                target="_blank"
                rel="noreferrer"
                icon={<ArrowRight size={14} />}
              >
                Leave a review
              </LiquidButton>
            ) : (
              <LiquidButton
                href={ctaHref}
                className="aero-reviews-cta-lead"
                onClick={onBook}
                icon={<ArrowRight size={14} />}
              >
                Book service
              </LiquidButton>
            )}
          </div>
        </div>
        <figure style={{ position: "relative", margin: 0, borderRadius: "25px", background: "rgba(255,255,255,0.45)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.7)", padding: "8px" }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", borderRadius: "18px", overflow: "hidden" }}>
            <Image src="/review6.jpg" alt="Google reviews for Aero Cleaning Services" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: "center" }} />
          </div>
        </figure>
      </div>

      <ReviewBands row1={row1} row2={row2} />
    </section>
  );
}
