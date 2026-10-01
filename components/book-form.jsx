"use client";

import { useEffect, useId, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BOOK_SERVICES } from "@/lib/data";
import { LiquidButton } from "@/components/liquid-button";
import { ArrowRight } from "@/components/icons";

const SUCCESS_MESSAGE =
  "Thanks — a supervisor will follow up within one business day to book your walkthrough.";

function encodeFormBody(form) {
  const data = new FormData(form);
  return new URLSearchParams(data).toString();
}

function serviceFromQuery(value) {
  return BOOK_SERVICES.find((item) => item.slug === value)?.label || "";
}

export function BookForm() {
  const uid = useId().replace(/:/g, "");
  const searchParams = useSearchParams();
  const requested = serviceFromQuery(searchParams.get("service") || "");
  const [service, setService] = useState(requested);
  const [pending, setPending] = useState(false);
  const [ok, setOk] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setService(requested);
  }, [requested]);

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setPending(true);
    setMessage("");

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const city = String(data.get("city") || "").trim();
    const chosen = String(data.get("service") || "").trim();

    if (!name || !company || !phone || !email || !city || !chosen) {
      setPending(false);
      setMessage("Please fill in name, company, phone, email, city and service.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setPending(false);
      setMessage("Enter a valid work email.");
      return;
    }

    try {
      const pagePath = form.querySelector('[name="page_path"]');
      if (pagePath) pagePath.value = window.location.pathname + window.location.search;

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

  if (ok) {
    return (
      <p className="aero-lp-form-success" role="status">
        {message || SUCCESS_MESSAGE}
      </p>
    );
  }

  return (
    <form
      id="book-lead-form"
      className="aero-lp-form aero-book-form"
      name="service-lead"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      noValidate
    >
      <input type="hidden" name="form-name" value="service-lead" />
      <input type="hidden" name="source" value="book-page" />
      <input type="hidden" name="page_path" value="" />
      <p className="aero-lp-form-honeypot" aria-hidden="true">
        <label>
          Don’t fill this out
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="aero-lp-form-row">
        <label htmlFor={`book-name-${uid}`}>
          Full name
          <input id={`book-name-${uid}`} name="name" type="text" autoComplete="name" required />
        </label>
        <label htmlFor={`book-company-${uid}`}>
          Company
          <input id={`book-company-${uid}`} name="company" type="text" autoComplete="organization" required />
        </label>
      </div>
      <div className="aero-lp-form-row">
        <label htmlFor={`book-phone-${uid}`}>
          Phone
          <input id={`book-phone-${uid}`} name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label htmlFor={`book-email-${uid}`}>
          Work email
          <input id={`book-email-${uid}`} name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label htmlFor={`book-city-${uid}`}>
        Building city
        <input
          id={`book-city-${uid}`}
          name="city"
          type="text"
          autoComplete="address-level2"
          placeholder="Guelph, Kitchener, Waterloo, Cambridge…"
          required
        />
      </label>
      <label htmlFor={`book-service-${uid}`}>
        Service
        <select
          id={`book-service-${uid}`}
          name="service"
          value={service}
          required
          onChange={(event) => setService(event.target.value)}
        >
          <option value="">Select a service</option>
          {BOOK_SERVICES.map((item) => (
            <option key={item.slug} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      {message ? (
        <p className="aero-lp-form-error" role="alert">
          {message}
        </p>
      ) : null}
      <LiquidButton
        id="book-form-submit"
        type="submit"
        icon={<ArrowRight />}
        size="wide"
        disabled={pending}
        aria-busy={pending}
      >
        {pending ? "Sending…" : "Request my walkthrough"}
      </LiquidButton>
    </form>
  );
}
