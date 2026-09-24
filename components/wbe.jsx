import Image from "next/image";
import { sectionHeading } from "@/lib/styles";
import { VerifiedIcon } from "@/components/icons";

const POINTS = [
  "Founded and led by Roxana Di Caro, in Guelph since 2015",
  "Certification documents ready for procurement and RFPs",
  "Spend with Aero counts toward supplier-diversity targets",
];

export function Wbe() {
  return (
    <section id="wbe" className="aero-wbe" aria-labelledby="wbe-heading">
      <div className="aero-wbe-grid">
        <figure className="aero-wbe-badge">
          <Image
            src="/wbe-brand.png"
            alt="WBE Canada certified — Canadian Women Brand"
            width={447}
            height={447}
          />
        </figure>

        <div className="aero-wbe-copy">
          <span className="aero-wbe-kicker">Certified diverse supplier</span>
          <h2 id="wbe-heading" style={{ ...sectionHeading, margin: "12px 0 0", maxWidth: "24ch" }}>
            Women-owned, certified by WBE Canada
          </h2>
          <p>
            Aero is certified by Women Business Enterprise Canada. If your organisation reports on supplier diversity, spend with Aero counts toward it, and the certification paperwork is ready to attach to an RFP without anyone chasing it.
          </p>
          <ul className="aero-wbe-points">
            {POINTS.map((point) => (
              <li key={point}>
                <VerifiedIcon />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
