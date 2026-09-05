export const HEADING_WEIGHT = "700";

export const tagStyle = {
  fontSize: "12px",
  letterSpacing: "0.06em",
  padding: "6px 12px",
  textTransform: "uppercase",
  color: "var(--color-accent-700)",
  borderColor: "color-mix(in srgb, var(--color-accent) 55%, transparent)",
  borderRadius: "25px",
};

export const primaryBtn = {
  gap: "10px",
  fontSize: "12px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  padding: "12px 25px",
  backgroundColor: "#0E7EFF",
  borderColor: "#0E7EFF",
  borderRadius: "25px",
  color: "#FFFFFF",
};

export const headingBase = {
  fontFamily: "var(--font-heading)",
  fontWeight: HEADING_WEIGHT,
  letterSpacing: "0",
  textTransform: "uppercase",
};

export const sectionHeading = {
  ...headingBase,
  fontSize: "clamp(32px, 3.6vw, 46px)",
  lineHeight: 1.06,
};
