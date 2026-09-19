import { sectionHeading } from "@/lib/styles";

export function ServiceProcess({ page }) {
  const heading = page.processHeading || "From walkthrough to night crew";

  return (
    <section className="aero-service-process" aria-labelledby="service-process-heading">
      <h2 id="service-process-heading" style={{ ...sectionHeading, margin: "0 0 40px", maxWidth: "22ch" }}>
        {heading}
      </h2>
      <ol className="aero-service-process-list">
        {page.steps.map((step) => (
          <li key={step.title} className="aero-service-process-step">
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
