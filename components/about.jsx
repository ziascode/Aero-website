import Image from "next/image";
import Link from "next/link";
import { ABOUT_CREDENTIALS, ABOUT_GIVEBACK } from "@/lib/data";

export function About({ hideMoreLink = false } = {}) {
  return (
    <section id="about" className="aero-about">
      <div className="aero-about-top">
        <figure className="aero-about-photo">
          <Image
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
            alt="A modern Guelph-area boardroom after a commercial clean"
            fill
            sizes="(max-width: 768px) 100vw, 48vw"
            style={{ objectFit: "cover" }}
          />
        </figure>

        <div className="aero-about-copy">
          <span className="aero-about-kicker">About Aero</span>
          <h2>Cleaning Guelph and the surrounding area since 2015</h2>
          <p>
            Roxana Di Caro came to Canada in 1997, a young refugee from Romania. She started Aero in 2015 by knocking on doors around Guelph and asking businesses what they needed. The company has grown well past that, but the approach has not changed much: someone comes out, looks at the building and works out what it takes.
          </p>
          {hideMoreLink ? null : <Link href="/about">More about Aero</Link>}
          <dl className="aero-about-creds">
            {ABOUT_CREDENTIALS.map((item) => (
              <div key={item.title} className="aero-about-cred">
                <div>
                  <dt>{item.title}</dt>
                  <dd>{item.detail}</dd>
                </div>
                <Image
                  src={item.logo}
                  alt={`${item.title} logo`}
                  width={item.rounded ? 56 : 88}
                  height={56}
                  className={["aero-about-cred-logo", item.rounded && "is-rounded"].filter(Boolean).join(" ")}
                />
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="aero-about-give">
        <span className="aero-about-kicker">Giving 2% Back to the Community</span>
        <div className="aero-about-give-intro">
          <h3>
            Making a <span>Difference</span> Together
          </h3>
          <p>
            A portion of proceeds from every contract signed is donated to an organization chosen by our clients. Together, we can create positive change and leave a lasting impact on our communities.
          </p>
        </div>
        <ul className="aero-about-give-grid">
          {ABOUT_GIVEBACK.map((org) => (
            <li key={org.name} className="aero-about-give-tile">
              <Image src={org.logo} alt={org.name} width={240} height={140} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
