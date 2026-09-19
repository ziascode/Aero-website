"use client";

import { useEffect, useId } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { submitServiceLead } from "@/app/actions/lead";
import { LiquidButton } from "@/components/liquid-button";
import { ArrowRight, PhoneIcon } from "@/components/icons";
import { sectionHeading } from "@/lib/styles";

const initialState = { ok: false, message: "" };

function SubmitButton({ label, id }) {
  const { pending } = useFormStatus();
  return (
    <LiquidButton
      id={id}
      type="submit"
      icon={<ArrowRight />}
      size="wide"
      disabled={pending}
      aria-busy={pending}
      className="aero-lp-track-cta"
    >
      {pending ? "Sending…" : label}
    </LiquidButton>
  );
}

/** Walkthrough lead form used on service landing pages. */
export function ServiceLeadForm({ page, source, trackingPrefix = "service" }) {
  const [state, formAction] = useFormState(submitServiceLead, initialState);
  const uid = useId().replace(/:/g, "");
  const formId = `${trackingPrefix}-lead-form`;
  const eventId = `${trackingPrefix}-lead-form`;

  useEffect(() => {
    if (!state.ok) return;
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
  }, [state.ok, eventId]);

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
            href="tel:14105550142"
            className="aero-lp-contact-phone aero-lp-track-tel"
          >
            <PhoneIcon size={18} />
            Prefer to talk? (410) 555-0142
          </a>
        </div>

        <div className="aero-lp-contact-form-wrap">
          {state.ok ? (
            <p className="aero-lp-form-success" role="status">
              {state.message}
            </p>
          ) : (
            <form id={formId} className="aero-lp-form" action={formAction} noValidate>
              <input type="hidden" name="source" value={source} />
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
                Rough size or # of restrooms <span>(optional)</span>
                <input id={`svc-notes-${uid}`} name="notes" type="text" />
              </label>
              {state.message ? (
                <p className="aero-lp-form-error" role="alert">
                  {state.message}
                </p>
              ) : null}
              <SubmitButton label={page.formSubmitLabel} id={`${trackingPrefix}-form-submit`} />
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
