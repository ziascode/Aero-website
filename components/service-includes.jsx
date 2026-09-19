import { sectionHeading } from "@/lib/styles";
import { VerifiedIcon } from "@/components/icons";

export function ServiceIncludes({ page }) {
  const groups = page.includeGroups || [{ title: null, items: page.includes || [] }];
  const heading = page.includesHeading || "What every visit covers";

  return (
    <section className="aero-service-includes" aria-labelledby="service-includes-heading">
      <h2 id="service-includes-heading" style={{ ...sectionHeading, margin: "0 0 16px", maxWidth: "24ch" }}>
        {heading}
      </h2>
      <p className="aero-service-includes-lede">{page.includesIntro}</p>
      <div className="aero-service-includes-groups">
        {groups.map((group) => (
          <div key={group.title || "includes"} className="aero-service-includes-group">
            {group.title ? <h3 className="aero-service-includes-group-title">{group.title}</h3> : null}
            <ul className="aero-service-includes-list">
              {group.items.map((item) => (
                <li key={item}>
                  <VerifiedIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
