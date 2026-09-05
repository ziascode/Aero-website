"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SERVICE_ROWS } from "@/lib/data";
import { headingBase, primaryBtn, sectionHeading, tagStyle } from "@/lib/styles";
import { ArrowUpRight, ChevronDown } from "@/components/icons";
import { useIsMobile } from "@/hooks/use-is-mobile";

export function Services() {
  const isMobile = useIsMobile();
  const [openService, setOpenService] = useState(0);
  const [activeDeskRow, setActiveDeskRow] = useState(0);
  const cardRefs = useRef([]);
  const deskRowRefs = useRef([]);
  const hoveringDesk = useRef(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const kick = () => {
      root.querySelectorAll("video").forEach((v) => {
        v.muted = true;
        v.loop = true;
        if (v.paused) v.play().catch(() => {});
      });
    };
    kick();
    const timer = setInterval(kick, 1200);
    document.addEventListener("click", kick);
    return () => {
      clearInterval(timer);
      document.removeEventListener("click", kick);
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      const centerY = window.innerHeight / 2;
      const nearest = (list) => {
        let bestIdx = -1;
        let bestDist = Infinity;
        list.forEach((el, i) => {
          if (!el) return;
          const r = el.getBoundingClientRect();
          const dist = Math.abs(r.top + r.height / 2 - centerY);
          if (dist < bestDist) {
            bestDist = dist;
            bestIdx = i;
          }
        });
        return bestIdx;
      };
      if (isMobile) {
        const i = nearest(cardRefs.current);
        if (i !== -1) setOpenService(i);
      } else if (!hoveringDesk.current) {
        const i = nearest(deskRowRefs.current);
        if (i !== -1) setActiveDeskRow(i);
      }
    };
    const interval = setInterval(tick, 150);
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    tick();
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
    };
  }, [isMobile]);

  return (
    <section id="services" ref={rootRef} style={{ padding: "88px var(--aero-gutter) 24px", backgroundColor: "#FFFFFF" }}>
     
      <hr style={{ height: "1px", border: 0, margin: "0 0 28px", background: "var(--color-divider)" }} />
      <h2 className="aero-section-heading" style={{ ...sectionHeading, margin: 0, maxWidth: "26ch" }}>
        <span className="aero-services-title">
          Complete&nbsp;<span style={{ color: "rgb(14, 126, 255)" }}>cleaning</span>&nbsp;
          <br />
          Services
        </span>
      </h2>

      {!isMobile && (
        <div className="aero-service-list" onMouseLeave={() => { hoveringDesk.current = false; }}>
          {SERVICE_ROWS.map((s, i) => (
            <article
              key={s.title}
              ref={(el) => { deskRowRefs.current[i] = el; }}
              className={`aero-service-card${activeDeskRow === i ? " is-active" : ""}`}
              onMouseEnter={() => { hoveringDesk.current = true; setActiveDeskRow(i); }}
            >
              <div className="aero-service-copy">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="aero-service-bullets">
                  {s.tags.map((t) => (
                    <li key={t} className="tag tag-outline" style={tagStyle}>{t}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-primary" style={{ ...primaryBtn, width: "40%", padding: "16px 24px", alignSelf: "flex-start" }}>
                  Book service
                  <ArrowUpRight />
                </Link>
              </div>
              <div className="aero-service-media">
                <div className="aero-service-media-frame">
                  <video autoPlay loop muted playsInline src={s.video} />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {isMobile && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "40px" }}>
          {SERVICE_ROWS.map((s, i) => {
            const open = openService === i;
            return (
              <div
                key={s.title}
                ref={(el) => { cardRefs.current[i] = el; }}
                style={{
                  borderRadius: "20px",
                  border: `1.5px solid ${open ? "#0E7EFF" : "var(--color-divider)"}`,
                  background: open ? "#D7EDFE" : "#FFFFFF",
                  boxShadow: open ? "0 10px 28px rgba(14, 126, 255, 0.2)" : "none",
                  overflow: "hidden",
                  transition: "background-color 280ms ease, border-color 280ms ease, box-shadow 280ms ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenService(open ? -1 : i)}
                  style={{ position: "relative", display: "flex", alignItems: "center", width: "100%", minHeight: "64px", padding: "24px 48px", background: "transparent", border: 0, cursor: "pointer" }}
                >
                    <h3 style={{ ...headingBase, fontSize: "24px", lineHeight: "30px", margin: 0, width: "100%", textAlign: "center", color: "var(--color-text)" }}>{s.title}</h3>
                  <span
                    style={{ position: "absolute", right: "20px", top: "50%", transform: `translateY(-50%) rotate(${open ? 180 : 0}deg)`, color: "var(--color-accent-700)", transition: "transform 300ms ease", display: "flex" }}
                  >
                    <ChevronDown />
                  </span>
                </button>
                <div style={{ display: "grid", gridTemplateRows: open ? "1fr" : "0fr", transition: "grid-template-rows 380ms ease" }}>
                  <div style={{ overflow: "hidden", minHeight: 0 }}>
                    <div style={{ padding: "0 20px 22px" }}>
                      <p style={{ fontSize: "16px", lineHeight: "24px", margin: "0 0 16px", color: "#000000", fontWeight: 400 }}>{s.desc}</p>
                      <ul className="aero-service-bullets">
                        {s.tags.map((t) => (
                          <li key={t} className="tag tag-outline" style={{ ...tagStyle, background: "#FFFFFF" }}>{t}</li>
                        ))}
                      </ul>
                      <div style={{ marginBottom: "16px" }}>
                        <Link href="/contact" className="btn btn-primary" style={{ ...primaryBtn, gap: "8px" }}>
                          Book service
                          <ArrowUpRight size={13} />
                        </Link>
                      </div>
                      <div className="aero-service-media" style={{ padding: 0 }}>
                        <div className="aero-service-media-frame">
                          {s.video && (
                            <video autoPlay loop muted playsInline src={s.video} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
