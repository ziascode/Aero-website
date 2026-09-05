import Image from "next/image";
import { Stars, VerifiedIcon } from "@/components/icons";

export function ReviewCard({ r, glass }) {
  return (
    <div
      style={{
        flex: "0 0 320px",
        border: glass ? "1px solid rgba(255,255,255,0.7)" : "1px solid var(--color-divider)",
        backgroundColor: glass ? "var(--color-accent-100)" : "#FFFFFF",
        backdropFilter: glass ? "blur(14px)" : undefined,
        WebkitBackdropFilter: glass ? "blur(14px)" : undefined,
        boxShadow: glass ? undefined : "0 2px 10px rgba(15, 23, 42, 0.06)",
        borderRadius: "16px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: r.avatarBg,
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "18px",
            flex: "0 0 auto",
          }}
        >
          {r.initial}
        </span>
        <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)" }}>{r.name}</span>
          <span style={{ fontSize: "14px", color: "color-mix(in srgb, var(--color-text) 55%, transparent)" }}>{r.date}</span>
        </div>
        <Image src="/google.png" alt="Google" width={18} height={18} style={{ width: "18px", height: "18px", objectFit: "contain", marginLeft: "auto", flex: "0 0 auto" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <Stars gap={2} />
        <VerifiedIcon />
      </div>
      <p style={{ fontSize: "16px", lineHeight: "24px", margin: 0, color: "var(--color-text)" }}>{r.text}</p>
    </div>
  );
}
