import { STATS } from "@/lib/data";
import { headingBase } from "@/lib/styles";

export function Stats() {
  return (
    <section style={{ color: "var(--color-bg)", backgroundColor: "#072445" }}>
      <div className="aero-stats-grid">
        {STATS.map(([n, label], i) => (
          <div key={label} className="aero-stats-cell" data-last={i === STATS.length - 1 ? "true" : "false"}>
            <div style={{ ...headingBase, fontSize: "38px", lineHeight: "44px", color: "#FFFFFF" }}>{n}</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "14px", letterSpacing: "0.2px", textTransform: "uppercase", marginTop: "12px", color: "color-mix(in srgb, #f2f2f3 72%, transparent)" }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
