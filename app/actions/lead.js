"use server";

/**
 * @deprecated Lead forms submit via Netlify Forms (client POST to /__forms.html).
 * Kept for any legacy imports; does not persist leads.
 */
export async function submitServiceLead(prevState, formData) {
  const name = String(formData.get("name") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const city = String(formData.get("city") || "").trim();

  if (!name || !company || !phone || !email || !city) {
    return {
      ok: false,
      message: "Please fill in name, company, phone, email and city.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Enter a valid work email." };
  }

  return {
    ok: true,
    message: "Thanks — a supervisor will follow up within one business day to book your walkthrough.",
  };
}

/** @deprecated Use ServiceLeadForm / Netlify Forms */
export async function submitJanitorialLead(prevState, formData) {
  return submitServiceLead(prevState, formData);
}
