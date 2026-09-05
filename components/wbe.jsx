import Image from "next/image";
import { sectionHeading } from "@/lib/styles";
import { VerifiedIcon } from "@/components/icons";

const POINTS = [
  "Founded and led by Roxana in Guelph since 2015",
  "Certification paperwork ready for your procurement team and RFPs",
  "Spend with Aero counts toward your supplier-diversity targets",
];

export function Wbe() {
  return (
    <section className="aero-wbe" aria-labelledby="wbe-heading">
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
          <span className="aero-wbe-kicker">Certified Diverse Supplier</span>
          <h2 id="wbe-heading" style={{ ...sectionHeading, margin: "12px 0 0", maxWidth: "24ch" }}>
            A <span style={{ color: "#0E7EFF" }}>women-owned</span> business, certified by WBE Canada
          </h2>
          <p>
            Aero is proud to be a <strong>women-owned, WBE Canada–certified</strong> business. Choose Aero Cleaning Services as you look to build diversity within your supply chain.
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
