import Image from "next/image";
import { Wbe } from "@/components/wbe";
import { LiquidButton } from "@/components/liquid-button";
import { ArrowRight, PhoneIcon } from "@/components/icons";
import { ABOUT_CREDENTIALS, ABOUT_GIVEBACK } from "@/lib/data";
import { EMAIL, EMAIL_MAILTO, PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export const metadata = {
  title: "About Aero Cleaning | Women-Owned, Guelph, Since 2015",
  description:
    "Aero Cleaning Services Ltd. has served Guelph and the surrounding area since 2015, with office, post-construction, and janitorial cleaning, and a share of every contract given locally.",
};

export default function AboutPage() {
  return (
    <>
      <section className="aero-about-page-intro" aria-labelledby="about-page-heading">
        <Image
          className="aero-about-page-hero-media"
          src="/office-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="aero-about-page-hero-overlay" aria-hidden="true" />
        <div className="aero-about-page-hero-inner">
          <h1 id="about-page-heading">Cleaning Guelph and the surrounding area since 2015.</h1>
          <p className="aero-about-page-slogan">
            Excellence in every clean, commitment in every service.
          </p>
        </div>
      </section>

      <section className="aero-about-page-story" aria-label="What Aero does">
        <div className="aero-about-page-lead">
          <p>
            At Aero Cleaning Services Ltd., we are dedicated to delivering reliable, high-quality, and professional cleaning solutions. Specializing in office cleaning, post-construction cleanup, and comprehensive janitorial services, we tailor our approach to each client so every space is maintained to a high standard of cleanliness and hygiene.
          </p>
          <p>
            We take pride in a personalized approach and affordable pricing. Our team uses current methods and equipment, from small offices to large commercial facilities, and we build a cleaning plan that fits the budget and the schedule.
          </p>
          <p>
            Beyond the cleaning itself, a portion of proceeds from every contract signed is donated to an organization chosen by our clients.
          </p>
        </div>
      </section>

      <section className="aero-about-page-founder" aria-labelledby="about-founder-heading">
        <figure className="aero-about-page-portrait">
          <Image
            src="/about/roxana.jpg"
            alt="Roxana Di Caro, founder of Aero Cleaning Services"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />
        </figure>
        <div>
          <span className="aero-about-page-kicker is-on-navy">Meet our founder</span>
          <h2 id="about-founder-heading">Roxana Di Caro</h2>
          <p>
            Roxana founded Aero Cleaning Services Ltd. out of her home in Guelph in 2015. Fueled by a vision to transform the commercial cleaning industry, she has built a company known for reliable, professional service and immaculate standards. Driven by the support she received upon moving to Canada in 1997 as a refugee, Roxana is passionate about giving back to her community.
          </p>
          <LiquidButton
            href="https://www.linkedin.com/in/roxana-di-caro-zamfir-015465181/"
            variant="light"
            icon={<ArrowRight />}
            target="_blank"
            rel="noreferrer"
          >
            Roxana on LinkedIn
          </LiquidButton>
        </div>
      </section>

      <section className="aero-about-page-stand" data-sticky-reveal aria-labelledby="about-stand-heading">
        <span className="aero-about-page-kicker">How we stand</span>
        <h2 id="about-stand-heading">Insured, covered, and certified.</h2>
        <p className="aero-about-page-stand-copy">
          Aero is WSIB covered, insured, BBB accredited, WBE Canada certified, and an Environmental Choice cleaner. We are also members of the Guelph and Kitchener chambers of commerce.
        </p>
        <dl className="aero-about-page-creds">
          {ABOUT_CREDENTIALS.map((cred) => (
            <div className="aero-about-page-cred" key={cred.title}>
              <dt>{cred.title}</dt>
              <dd>{cred.detail}</dd>
              <Image
                className={[cred.rounded ? "is-rounded" : "", cred.title === "BBB" ? "is-mark" : ""].filter(Boolean).join(" ") || undefined}
                src={cred.logo}
                alt=""
                width={cred.rounded ? 72 : 120}
                height={72}
              />
            </div>
          ))}
        </dl>
      </section>

      <section className="aero-about-page-give" aria-labelledby="about-give-heading">
        <div className="aero-about-page-give-intro">
          <div>
            <span className="aero-about-page-kicker">Giving back</span>
            <h2 id="about-give-heading">Making a difference together</h2>
          </div>
          <p>
            A portion of proceeds from every contract signed is donated to an organization chosen by our clients. Together, we can create positive change and leave a lasting impact on our communities.
          </p>
        </div>
        <figure className="aero-about-page-sponsor">
          <Image
            src="/about/diamond-sponsor.jpg"
            alt="Roxana at a lectern, accepted as a diamond sponsor"
            width={400}
            height={400}
          />
          <figcaption>Diamond sponsor</figcaption>
        </figure>
        <ul className="aero-about-give-grid">
          {ABOUT_GIVEBACK.map((org) => (
            <li className="aero-about-give-tile" key={org.name}>
              <Image src={org.logo} alt={org.name} width={220} height={120} />
            </li>
          ))}
        </ul>
      </section>

      <Wbe />

      <section className="aero-about-page-close" aria-labelledby="about-close-heading">
        <div>
          <h2 id="about-close-heading">
            Enough about our cleaning business. We would like to learn about yours.
          </h2>
          <p>Tell us about the building and the cleaning requirements. It starts with a call.</p>
          <a className="aero-about-page-mail" href={EMAIL_MAILTO}>{EMAIL}</a>
        </div>
        <div className="aero-about-page-close-actions">
          <LiquidButton href={PHONE_TEL} variant="light" size="wide" icon={<ArrowRight />}>
            Book a walkthrough
          </LiquidButton>
          <LiquidButton href={PHONE_TEL} variant="ghost" size="wide" icon={<PhoneIcon />}>
            Call {PHONE_DISPLAY}
          </LiquidButton>
        </div>
      </section>
    </>
  );
}
