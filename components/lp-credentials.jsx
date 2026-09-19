import Image from "next/image";
import { ABOUT_CREDENTIALS } from "@/lib/data";

export function LpCredentials() {
  return (
    <section className="aero-lp-credentials" aria-label="Credentials and certifications">
      <ul className="aero-lp-credentials-list">
        {ABOUT_CREDENTIALS.map((item) => (
          <li key={item.title} className="aero-lp-credentials-item">
            <Image
              src={item.logo}
              alt=""
              width={item.rounded ? 48 : 72}
              height={48}
              className={["aero-lp-credentials-logo", item.rounded ? "is-rounded" : ""].filter(Boolean).join(" ")}
            />
            <div>
              <span className="aero-lp-credentials-title">{item.title}</span>
              <span className="aero-lp-credentials-detail">{item.detail}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
