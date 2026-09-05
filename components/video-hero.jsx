"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { primaryBtn } from "@/lib/styles";
import { ArrowRight } from "@/components/icons";

const STATS = [
  ["2015", "Founded in Guelph, Ontario"],
  ["8+", "Industries we clean for"],
  ["100%", "Locally owned & insured"],
  ["Giving back", "On every contract signed"],
];

export function VideoHero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section className="aero-video-hero" aria-label="Commercial cleaning intro">
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
        <p className="aero-video-hero-kicker">Guelph, Kitchener, Waterloo &amp; Cambridge · Since 2015</p>

        <div className="aero-video-hero-copy">
          <h1>Commercial Cleaning Services</h1>
          <p>
            Office cleaning, post-construction cleanup and janitorial services are our specialties: detail-focused commercial cleaning for the Guelph, Kitchener, Waterloo and Cambridge area.
          </p>
          <div className="aero-video-hero-actions">
          <Link href="/contact" className="btn btn-primary" style={{ ...primaryBtn, fontSize: "15px", letterSpacing: "0.06em", padding: "13px 24px" }}>
            Book Your Cleaning Service
            <ArrowRight />
          </Link>
          </div>
        </div>

        <dl className="aero-video-hero-stats">
          {STATS.map(([value, label]) => (
            <div key={label}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
