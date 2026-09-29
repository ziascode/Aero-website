"use client";

import { useEffect, useRef, useState } from "react";
import { SERVICE_ROWS } from "@/lib/data";
import { headingBase, sectionHeading, tagStyle } from "@/lib/styles";
import { LiquidButton } from "@/components/liquid-button";
import { ArrowUpRight, ChevronDown } from "@/components/icons";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { onHashLinkClick } from "@/lib/hash-nav";
import { usePathname } from "next/navigation";

export function Services() {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [openService, setOpenService] = useState(0);
  const [activeDeskRow, setActiveDeskRow] = useState(0);
  const headerRefs = useRef([]);
  const deskRowRefs = useRef([]);
  const hoveringDesk = useRef(false);
  const rootRef = useRef(null);
  const openServiceRef = useRef(0);
  const manualUntil = useRef(0);

  useEffect(() => {
    openServiceRef.current = openService;
  }, [openService]);

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
    if (isMobile) return;

    const nearest = (list, centerY) => {
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

    const tick = () => {
      if (hoveringDesk.current) return;
      const idx = nearest(deskRowRefs.current, window.innerHeight / 2);
      if (idx !== -1) setActiveDeskRow(idx);
    };

    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    tick();
    return () => {
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    const LINE = 0.28;
    const STEP_PX = 36;
    let frame = 0;
    let anchorScroll = window.scrollY;

    const crossedIndex = (line) => {
      let idx = -1;
      const headers = headerRefs.current;
      for (let i = 0; i < headers.length; i += 1) {
        const header = headers[i];
        if (!header) continue;
        if (header.getBoundingClientRect().top <= line) idx = i;
        else break;
      }
      return idx;
    };

    const tick = () => {
      if (Date.now() < manualUntil.current) return;
      const root = rootRef.current;
      if (!root) return;
      const section = root.getBoundingClientRect();
      if (section.bottom < 0 || section.top > window.innerHeight) return;

      const traveled = Math.abs(window.scrollY - anchorScroll);
      if (traveled < STEP_PX) return;

      const line = window.innerHeight * LINE;
      const idx = crossedIndex(line);
      const current = openServiceRef.current;
      const target = idx < 0 ? 0 : idx;
      if (target === current) {
        anchorScroll = window.scrollY;
        return;
      }

      const next = target > current ? current + 1 : current - 1;
      anchorScroll = window.scrollY;
      setOpenService(next);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isMobile]);

  const onMobileToggle = (i, currentlyOpen) => {
    manualUntil.current = Date.now() + 1400;
    setOpenService(currentlyOpen ? -1 : i);
  };
  return (
    <section id="services" ref={rootRef} style={{ padding: "88px var(--aero-gutter) 24px", backgroundColor: "#FFFFFF" }}>
     
      <hr style={{ height: "1px", border: 0, margin: "0 0 28px", background: "var(--color-divider)" }} />
      <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "14px", letterSpacing: "0.2px", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-2-900)", marginBottom: "12px" }}>What we do</span>
      <h2 className="aero-section-heading" style={{ ...sectionHeading, margin: 0, maxWidth: "26ch" }}>
        Services
      </h2>
      <p style={{ maxWidth: "46ch", margin: "16px 0 0", fontSize: "16px", lineHeight: "24px" }}>
        Six core services, plus whatever else the building needs.
      </p>

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
                <LiquidButton
                  href="/#contact"
                  onClick={onHashLinkClick("/#contact", pathname)}
                  icon={<ArrowUpRight />}
                  style={{ width: "40%", alignSelf: "flex-start" }}
                >
                  Book service
                </LiquidButton>
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
        <div className="aero-service-accordion" style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "40px" }}>
          {SERVICE_ROWS.map((s, i) => {
            const open = openService === i;
            return (
              <div
                key={s.title}
                ref={(el) => { headerRefs.current[i] = el?.querySelector("button") ?? null; }}
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
                  onClick={() => onMobileToggle(i, open)}
                  style={{ position: "relative", display: "flex", alignItems: "center", width: "100%", minHeight: "112px", padding: "28px 56px", background: "transparent", border: 0, cursor: "pointer" }}
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
                        <LiquidButton
                          href="/#contact"
                          onClick={onHashLinkClick("/#contact", pathname)}
                          icon={<ArrowUpRight />}
                        >
                          Book service
                        </LiquidButton>
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
