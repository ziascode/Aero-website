"use server";

export async function submitServiceLead(prevState, formData) {
  const name = String(formData.get("name") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const city = String(formData.get("city") || "").trim();
  const notes = String(formData.get("notes") || "").trim();
  const source = String(formData.get("source") || "service").trim();

  if (!name || !company || !phone || !email || !city) {
    return {
      ok: false,
      message: "Please fill in name, company, phone, email and city.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Enter a valid work email." };
  }

  const lead = {
    name,
    company,
    phone,
    email,
    city,
    notes,
    source,
    submittedAt: new Date().toISOString(),
  };

  console.info("[service-lead]", lead);

  return {
    ok: true,
    message: "Thanks — a supervisor will follow up within one business day to book your walkthrough.",
  };
}

/** @deprecated Use submitServiceLead */
export async function submitJanitorialLead(prevState, formData) {
  return submitServiceLead(prevState, formData);
}
