import { sectionHeading } from "@/lib/styles";
import { ArrowRight, PhoneIcon } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" style={{ color: "var(--color-bg)", padding: "80px var(--aero-gutter)", backgroundColor: "#072445" }}>
      <div className="aero-contact-grid">
        <div>
          <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "14px", letterSpacing: "0.2px", textTransform: "uppercase", fontWeight: 600, color: "color-mix(in srgb, #f2f2f3 72%, transparent)", marginBottom: "12px" }}>Book a walkthrough</span>
          <h2 style={{ ...sectionHeading, margin: 0, color: "var(--color-bg)" }}>
            <span style={{ display: "block" }}>Tell us the floor plan.</span>
            <span style={{ display: "block" }}>We’ll price the schedule.</span>
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "24px", maxWidth: "54ch", margin: "22px 0 0", color: "color-mix(in srgb, #f2f2f3 82%, transparent)" }}>
            A supervisor walks the site, measures the areas and returns a fixed monthly figure within two working days. No lock-in for the first quarter.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
          <a href="tel:14105550142" className="btn" style={{ width: "100%", justifyContent: "center", gap: "10px", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", padding: "12px 25px", background: "var(--color-bg)", color: "var(--color-accent-900)", borderColor: "var(--color-bg)" }}>
            Book service
            <ArrowRight />
          </a>
          <a href="tel:14105550142" className="btn" style={{ width: "100%", justifyContent: "center", gap: "10px", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", padding: "12px 25px", background: "transparent", color: "var(--color-bg)", borderColor: "color-mix(in srgb, #f2f2f3 45%, transparent)" }}>
            <PhoneIcon />
            Call now
          </a>
          <span style={{ fontFamily: "var(--font-heading)", fontSize: "14px", letterSpacing: "0.2px", textTransform: "uppercase", color: "color-mix(in srgb, #f2f2f3 65%, transparent)", marginTop: "4px" }}>
            Lines open 24/7 · (410) 555-0142
          </span>
        </div>
      </div>
    </section>
  );
}
