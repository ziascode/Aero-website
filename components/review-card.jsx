import Image from "next/image";
import { Stars, VerifiedIcon } from "@/components/icons";

export function ReviewCard({ r, glass, compact, onDark }) {
  const darkGlass = glass && onDark;

  return (
    <div
      className={[
        "aero-review-card",
        compact ? "aero-review-card--compact" : "",
        darkGlass ? "aero-review-card--on-dark" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        flex: compact ? "1 1 auto" : "0 0 320px",
        width: compact ? "100%" : undefined,
        minWidth: compact ? 0 : undefined,
        border: darkGlass
          ? "1px solid color-mix(in srgb, #ffffff 28%, transparent)"
          : glass
            ? "1px solid rgba(255,255,255,0.7)"
            : "1px solid var(--color-divider)",
        backgroundColor: darkGlass
          ? "color-mix(in srgb, #ffffff 12%, transparent)"
          : glass
            ? "var(--color-accent-100)"
            : "#FFFFFF",
        backdropFilter: glass ? "blur(20px) saturate(1.4)" : undefined,
        WebkitBackdropFilter: glass ? "blur(20px) saturate(1.4)" : undefined,
        boxShadow: darkGlass
          ? "inset 0 1px 0 color-mix(in srgb, #ffffff 22%, transparent), 0 8px 24px color-mix(in srgb, #021428 28%, transparent)"
          : glass
            ? undefined
            : "0 2px 10px rgba(15, 23, 42, 0.06)",
        borderRadius: "16px",
        padding: compact ? "14px 16px" : "20px",
        display: "flex",
        flexDirection: "column",
        gap: compact ? "10px" : "14px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span
          style={{
            width: compact ? "36px" : "44px",
            height: compact ? "36px" : "44px",
            borderRadius: "50%",
            background: r.avatarBg,
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: compact ? "15px" : "18px",
            flex: "0 0 auto",
          }}
        >
          {r.initial}
        </span>
        <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
          <span
            style={{
              fontSize: compact ? "14px" : "16px",
              fontWeight: 700,
              color: darkGlass ? "#ffffff" : "var(--color-text)",
            }}
          >
            {r.name}
          </span>
          <span
            style={{
              fontSize: compact ? "12px" : "14px",
              color: darkGlass
                ? "color-mix(in srgb, #d7edfe 70%, transparent)"
                : "color-mix(in srgb, var(--color-text) 55%, transparent)",
            }}
          >
            {r.date}
          </span>
        </div>
        <Image
          src="/google.png"
          alt=""
          width={18}
          height={18}
          style={{ width: "18px", height: "18px", objectFit: "contain", marginLeft: "auto", flex: "0 0 auto" }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <Stars gap={2} size={compact ? 12 : undefined} />
        <VerifiedIcon />
      </div>
      <p
        className={compact ? "aero-review-card-text aero-review-card-text--clamp" : "aero-review-card-text"}
        style={{
          fontSize: compact ? "14px" : "16px",
          lineHeight: compact ? "20px" : "24px",
          margin: 0,
          color: darkGlass ? "color-mix(in srgb, #ffffff 88%, #d7edfe)" : "var(--color-text)",
        }}
      >
        {r.text}
      </p>
    </div>
  );
}
