import Image from "next/image";
import { LOGOS } from "@/lib/data";

export function LogoMarquee() {
  const logoStrip = LOGOS.concat(LOGOS);

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "64px 0 40px", overflow: "hidden" }}>
      <div style={{ padding: "0 var(--aero-gutter)", marginBottom: "18px", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-heading)", fontSize: "14px", letterSpacing: "0.2px", textTransform: "uppercase", fontWeight: 600, color: "color-mix(in srgb, var(--color-text) 55%, transparent)" }}>
          Trusted by facilities teams at
        </span>
      </div>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="aero-marquee" style={{ display: "flex", width: "max-content", gap: "64px" }}>
          {logoStrip.map(([alt, src], i) => (
            <div key={`${alt}-${i}`} style={{ flex: "0 0 auto", display: "flex", alignItems: "center", height: "40px" }}>
              <Image
                src={src}
                alt={alt}
                width={160}
                height={40}
                style={{ height: "40px", width: "auto", maxWidth: "160px", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
