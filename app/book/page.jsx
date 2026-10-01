import { Suspense } from "react";
import { BookForm } from "@/components/book-form";
import { BookMap } from "@/components/book-map";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { EMAIL, EMAIL_MAILTO, LOCATION, PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export const metadata = {
  title: "Book your cleaning service — Aero Cleaning Services",
  description:
    "Request a free cleaning quote for office, post-construction, or janitorial service in Guelph. Aero’s offices are open 24 hours a day.",
};

export default function BookPage() {
  return (
    <>
      <section className="aero-book" aria-labelledby="book-heading">
        <div className="aero-book-lead">
          <h1 id="book-heading">Book your cleaning service</h1>
          <aside className="aero-book-card" aria-label="Contact details">
            <dl className="aero-book-details">
              <div>
                <dt><PhoneIcon size={16} /> Phone</dt>
                <dd><a href={PHONE_TEL}>{PHONE_DISPLAY}</a></dd>
              </div>
              <div>
                <dt><MailIcon /> Email</dt>
                <dd><a href={EMAIL_MAILTO}>{EMAIL}</a></dd>
              </div>
              <div>
                <dt><PinIcon /> Office</dt>
                <dd>{LOCATION}</dd>
              </div>
              <div>
                <dt><ClockIcon size={16} /> Hours</dt>
                <dd>Open 24 hours a day, 7 days a week.</dd>
              </div>
            </dl>
          </aside>
        </div>
        <div className="aero-book-panel">
          <div className="aero-lp-contact-form-wrap">
            <Suspense fallback={null}>
              <BookForm />
            </Suspense>
          </div>
        </div>
      </section>

      <BookMap />
    </>
  );
}
