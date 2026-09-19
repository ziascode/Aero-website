const STEP_ICONS = [
  <svg key="map" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21h18" />
    <path d="M5 21V8l7-4 7 4v13" />
    <path d="M9 21v-5h6v5" />
    <path d="M9 11h.01M15 11h.01" />
  </svg>,
  <svg key="quote" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 4h9a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 0 1 2-2z" />
    <path d="M9 10h6M9 14h4" />
  </svg>,
  <svg key="start" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M8 3v3.5M16 3v3.5M3.5 10h17" />
    <path d="m9.5 14.5 1.8 1.8 3.7-3.8" />
  </svg>,
];

function StepArrow({ id }) {
  const gradId = `aero-lp-arrow-grad-${id}`;
  return (
    <span className="aero-lp-process-arrow" aria-hidden="true">
      <svg className="aero-lp-process-arrow-svg" width="88" height="24" viewBox="0 0 88 24" fill="none">
        <defs>
          <linearGradient id={gradId} x1="0" y1="12" x2="88" y2="12" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0e7eff" stopOpacity="0.15" />
            <stop offset="45%" stopColor="#0e7eff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0e7eff" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <line
          className="aero-lp-process-arrow-track"
          x1="2"
          y1="12"
          x2="70"
          y2="12"
          stroke={`url(#${gradId})`}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <line
          className="aero-lp-process-arrow-charge"
          x1="2"
          y1="12"
          x2="70"
          y2="12"
          stroke="#5eb6ff"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength="100"
        />
        <path className="aero-lp-process-arrow-head" d="M68 5.5 82 12 68 18.5Z" fill="#0e7eff" />
      </svg>
    </span>
  );
}

/** Refined 3-step process with charged connectors — LP only. */
export function LpProcess({ page }) {
  const heading = page.processHeading || "How it works";
  const steps = page.steps?.slice(0, 3) ?? [];

  return (
    <section className="aero-lp-process" aria-labelledby="lp-process-heading">
      <div className="aero-lp-process-shell">
        <p className="aero-lp-process-kicker">The process</p>
        <h2 id="lp-process-heading" className="aero-lp-process-heading">
          {heading}
        </h2>

        <ol className="aero-lp-process-list">
          {steps.map((step, index) => (
            <li key={step.title} className="aero-lp-process-item">
              <article className="aero-lp-process-card">
                <span className="aero-lp-process-icon">{STEP_ICONS[index]}</span>
                <span className="aero-lp-process-step" aria-hidden="true">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
              {index < steps.length - 1 ? <StepArrow id={index} /> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
