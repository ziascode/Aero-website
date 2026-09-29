"use client";

import { useEffect, useId, useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import { LiquidButton } from "@/components/liquid-button";
import { ArrowRight, PhoneIcon } from "@/components/icons";
import { sectionHeading } from "@/lib/styles";

const SUCCESS_MESSAGE =
  "Thanks — a supervisor will follow up within one business day to book your walkthrough.";

function encodeFormBody(form) {
  const data = new FormData(form);
  return new URLSearchParams(data).toString();
}

/** Walkthrough lead form used on service landing pages. Submits to Netlify Forms. */
export function ServiceLeadForm({ page, source, trackingPrefix = "service" }) {
  const uid = useId().replace(/:/g, "");
  const formId = `${trackingPrefix}-lead-form`;
  const eventId = `${trackingPrefix}-lead-form`;
  const [pending, setPending] = useState(false);
  const [ok, setOk] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!ok) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "service_form_submit",
      event_id: eventId,
      page_path: window.location.pathname,
    });
    if (typeof window.gtag === "function") {
      window.gtag("event", "service_form_submit", {
        event_category: "service_page",
        event_label: eventId,
      });
    }
  }, [ok, eventId]);

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setPending(true);
    setMessage("");

    const name = String(new FormData(form).get("name") || "").trim();
    const company = String(new FormData(form).get("company") || "").trim();
    const phone = String(new FormData(form).get("phone") || "").trim();
    const email = String(new FormData(form).get("email") || "").trim();
    const city = String(new FormData(form).get("city") || "").trim();

    if (!name || !company || !phone || !email || !city) {
      setPending(false);
      setMessage("Please fill in name, company, phone, email and city.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setPending(false);
      setMessage("Enter a valid work email.");
      return;
    }

    try {
      const pagePath = form.querySelector('[name="page_path"]');
      if (pagePath) pagePath.value = window.location.pathname;

      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormBody(form),
      });

      if (!res.ok) {
        throw new Error(`Form submission failed (${res.status})`);
      }

      setOk(true);
      setMessage(SUCCESS_MESSAGE);
      form.reset();
    } catch {
      setMessage("Something went wrong. Please call us or try again in a moment.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="contact" className="aero-lp-contact" aria-labelledby={`service-contact-heading-${uid}`}>
      <div className="aero-lp-contact-grid">
        <div className="aero-lp-contact-copy">
          <h2
            id={`service-contact-heading-${uid}`}
            style={{ ...sectionHeading, margin: 0, color: "var(--color-bg)" }}
          >
            {page.formHeading}
          </h2>
          <p className="aero-lp-contact-lede">{page.formIntro}</p>
          <a
            id={`${trackingPrefix}-contact-tel`}
            href={PHONE_TEL}
            className="aero-lp-contact-phone aero-lp-track-tel"
          >
            <PhoneIcon size={18} />
            Prefer to talk? {PHONE_DISPLAY}
          </a>
        </div>

        <div className="aero-lp-contact-form-wrap">
          {ok ? (
            <p className="aero-lp-form-success" role="status">
              {message || SUCCESS_MESSAGE}
            </p>
          ) : (
            <form
              id={formId}
              className="aero-lp-form"
              name="service-lead"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              noValidate
            >
              <input type="hidden" name="form-name" value="service-lead" />
              <input type="hidden" name="source" value={source} />
              <input type="hidden" name="page_path" value="" />
              <p className="aero-lp-form-honeypot" aria-hidden="true">
                <label>
                  Don’t fill this out
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>
              <div className="aero-lp-form-row">
                <label htmlFor={`svc-name-${uid}`}>
                  Full name
                  <input id={`svc-name-${uid}`} name="name" type="text" autoComplete="name" required />
                </label>
                <label htmlFor={`svc-company-${uid}`}>
                  Company
                  <input id={`svc-company-${uid}`} name="company" type="text" autoComplete="organization" required />
                </label>
              </div>
              <div className="aero-lp-form-row">
                <label htmlFor={`svc-phone-${uid}`}>
                  Phone
                  <input id={`svc-phone-${uid}`} name="phone" type="tel" autoComplete="tel" required />
                </label>
                <label htmlFor={`svc-email-${uid}`}>
                  Work email
                  <input id={`svc-email-${uid}`} name="email" type="email" autoComplete="email" required />
                </label>
              </div>
              <label htmlFor={`svc-city-${uid}`}>
                Building city
                <input
                  id={`svc-city-${uid}`}
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="Guelph, Kitchener, Waterloo, Cambridge…"
                  required
                />
              </label>
              <label htmlFor={`svc-notes-${uid}`}>
                Rough size or number of washrooms (optional)
                <input id={`svc-notes-${uid}`} name="notes" type="text" />
              </label>
              {message ? (
                <p className="aero-lp-form-error" role="alert">
                  {message}
                </p>
              ) : null}
              <LiquidButton
                id={`${trackingPrefix}-form-submit`}
                type="submit"
                icon={<ArrowRight />}
                size="wide"
                disabled={pending}
                aria-busy={pending}
                className="aero-lp-track-cta"
              >
                {pending ? "Sending…" : page.formSubmitLabel}
              </LiquidButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/** @deprecated Use ServiceLeadForm */
export function LpLeadForm(props) {
  return (
    <ServiceLeadForm
      {...props}
      source={props.source || "service-janitorial-services"}
      trackingPrefix={props.trackingPrefix || "service-janitorial"}
    />
  );
}
