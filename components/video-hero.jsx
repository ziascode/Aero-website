"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { onHashLinkClick } from "@/lib/hash-nav";
import { primaryBtn } from "@/lib/styles";
import { ArrowRight } from "@/components/icons";

const STATS = [
  { value: "2015", label: "Founded in Guelph, Ontario" },
  { type: "google" },
  { value: "100%", label: "Locally owned & insured", mobileHidden: true },
  { value: "Giving back", label: "On every contract signed", mobileHidden: true },
];

export function VideoHero() {
  const videoRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section id="top" className="aero-video-hero" aria-label="Commercial cleaning intro">
      <video
        ref={videoRef}
        className="aero-video-hero-media"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://images.pexels.com/photos/9300768/pexels-photo-9300768.jpeg"
      >
        <source src="http://demo.fableux.com/wp-content/uploads/2026/07/video.mp4" type="video/mp4" />
        <source src="https://www.pexels.com/download/video/6195524/" type="video/mp4" />
      </video>
      <div className="aero-video-hero-overlay" />

      <div className="aero-video-hero-inner">
        <p className="aero-video-hero-kicker">Guelph, Kitchener, Waterloo &amp; Cambridge</p>

        <div className="aero-video-hero-copy">
          <h1>Commercial Cleaning Services</h1>
          <p className="aero-video-hero-slogan">A team you can rely on</p>
          <p className="aero-video-hero-lede-desk">
            Office cleaning, post-construction cleanup and janitorial services are our specialties: detail-focused commercial cleaning for the Guelph, Kitchener, Waterloo and Cambridge area.
          </p>
          <p className="aero-video-hero-lede-mobile">
            Office cleaning, post-construction cleanup and janitorial services for businesses across the region.
          </p>
          <div className="aero-video-hero-actions">
            <Link
              href="/#contact"
              onClick={onHashLinkClick("/#contact", pathname)}
              className="btn btn-primary aero-video-hero-cta"
              style={{ ...primaryBtn, fontSize: "15px", letterSpacing: "0.06em", padding: "13px 24px" }}
            >
              Book Your Cleaning Service
              <ArrowRight />
            </Link>
          </div>
        </div>

        <dl className="aero-video-hero-stats">
          {STATS.map((stat) =>
            stat.type === "google" ? (
              <div key="google-rating" className="aero-video-hero-rating">
                <dt>
                  <Image src="/google.png" alt="" width={28} height={28} className="aero-video-hero-rating-logo" />
                  <span>5.0</span>
                </dt>
                <dd>Rated on Google Reviews</dd>
              </div>
            ) : (
              <div key={stat.label} className={stat.mobileHidden ? "aero-video-hero-stat-extra" : undefined}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            )
          )}
        </dl>
      </div>
    </section>
  );
}
