"use client";

import Image from "next/image";
import { LiquidButton } from "@/components/liquid-button";
import { ArrowRight, PhoneIcon, Stars } from "@/components/icons";

export function ServiceHero({ page, children, trackingPrefix = "service" }) {
  function scrollToContact(event) {
    event.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const primaryId = `${trackingPrefix}-hero-cta`;
  const telId = `${trackingPrefix}-hero-tel`;

  return (
    <section className="aero-service-hero" aria-label={`${page.title} intro`}>
      <div className="aero-service-hero-main">
        <div className="aero-service-hero-grid">
          <div className="aero-service-hero-copy">
            {page.kicker ? <span className="aero-service-hero-kicker">{page.kicker}</span> : null}
            <h1 className="aero-service-hero-title">{page.title}</h1>
            <p className="aero-service-hero-lede">{page.lede}</p>

            {page.perks?.length ? (
              <ul className="aero-service-hero-perks">
                {page.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
            ) : null}

            <div className="aero-service-hero-rating" aria-label={`Google rating ${page.ratingValue}`}>
              <Image src="/google.png" alt="" width={22} height={22} className="aero-service-hero-rating-logo" />
              <Stars size={14} gap={2} />
              <span className="aero-service-hero-rating-value">{page.ratingValue}</span>
              <span className="aero-service-hero-rating-label">{page.ratingLabel}</span>
            </div>

            <div className="aero-service-hero-actions">
              <LiquidButton
                id={primaryId}
                href="#contact"
                onClick={scrollToContact}
                icon={<ArrowRight />}
                className="aero-lp-track-cta"
              >
                {page.ctaLabel}
              </LiquidButton>
              <LiquidButton
                id={telId}
                href="tel:14105550142"
                variant="ghost"
                icon={<PhoneIcon />}
                className="aero-lp-track-tel"
              >
                Call now
              </LiquidButton>
            </div>
          </div>

          <figure className="aero-service-hero-media">
            {page.heroVideo ? (
              <video
                className="aero-service-hero-video"
                src={page.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={page.imageAlt || `${page.title} video`}
              />
            ) : (
              <Image
                src={page.image}
                alt={page.imageAlt || ""}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 52vw"
                className="aero-service-hero-image"
              />
            )}
          </figure>
        </div>
      </div>
      {children}
    </section>
  );
}
