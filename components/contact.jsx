import { sectionHeading } from "@/lib/styles";
import { HOURS_LABEL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import { LiquidButton } from "@/components/liquid-button";
import { ArrowRight, PhoneIcon } from "@/components/icons";

export function Contact({ hideKicker = false } = {}) {
  return (
    <section id="contact" className="aero-contact" style={{ color: "var(--color-bg)", padding: "80px var(--aero-gutter)", backgroundColor: "#072445" }}>
      <div className="aero-contact-grid">
        <div className="aero-contact-copy">
          {hideKicker ? null : (
            <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "14px", letterSpacing: "0.2px", textTransform: "uppercase", fontWeight: 600, color: "color-mix(in srgb, #f2f2f3 72%, transparent)", marginBottom: "12px" }}>Book a walkthrough</span>
          )}
          <h2 style={{ ...sectionHeading, margin: 0, color: "var(--color-bg)" }}>
            <span style={{ display: "block" }}>Tell us about the building.</span>
            <span style={{ display: "block" }}>We will price the schedule.</span>
          </h2>
          <p className="aero-contact-copy-text" style={{ fontSize: "16px", lineHeight: "24px", margin: "22px 0 0", color: "color-mix(in srgb, #d7edfe 88%, #f2f2f3)" }}>
            A supervisor walks the site, measures the areas and returns a fixed monthly figure within two working days. No lock-in for the first quarter.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
          <LiquidButton href={PHONE_TEL} variant="light" size="wide" icon={<ArrowRight />}>
            Book a walkthrough
          </LiquidButton>
          <LiquidButton href={PHONE_TEL} variant="ghost" size="wide" icon={<PhoneIcon />}>
            Call {PHONE_DISPLAY}
          </LiquidButton>
          <span style={{ fontFamily: "var(--font-heading)", fontSize: "14px", letterSpacing: "0.2px", textTransform: "uppercase", color: "color-mix(in srgb, #f2f2f3 65%, transparent)", marginTop: "4px" }}>
            {HOURS_LABEL} · {PHONE_DISPLAY}
          </span>
        </div>
      </div>
    </section>
  );
}
