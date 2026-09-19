import { sectionHeading } from "@/lib/styles";

export function LpPain({ page }) {
  return (
    <section className="aero-lp-pain" aria-labelledby="lp-pain-heading">
      <div className="aero-lp-pain-head">
        <span className="aero-lp-pain-kicker">{page.painKicker || "What you get"}</span>
        <h2 id="lp-pain-heading" className="aero-lp-pain-heading" style={sectionHeading}>
          {page.painHeading}
        </h2>
        {page.painIntro ? <p className="aero-lp-pain-lede">{page.painIntro}</p> : null}
      </div>

      <ul className="aero-lp-pain-grid">
        {page.pains.map((pain, index) => (
          <li key={pain.title} className="aero-lp-pain-card">
            <span className="aero-lp-pain-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="aero-lp-pain-body">
              <h3>{pain.title}</h3>
              <p>{pain.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
