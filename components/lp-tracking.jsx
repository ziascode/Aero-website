"use client";

import { useEffect } from "react";

/**
 * Pushes GTM/dataLayer events for LP CTA and tel clicks.
 * Conversion IDs are on the elements themselves for Google/Meta pixel mapping.
 */
export function LpTracking() {
  useEffect(() => {
    function onClick(event) {
      const tel = event.target.closest?.(".aero-lp-track-tel");
      const cta = event.target.closest?.(".aero-lp-track-cta");
      if (!tel && !cta) return;

      const payload = {
        event: tel ? "lp_tel_click" : "lp_cta_click",
        event_id: (tel || cta).id || undefined,
        page_path: window.location.pathname,
      };

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);

      if (typeof window.gtag === "function") {
        window.gtag("event", payload.event, {
          event_category: "landing_page",
          event_label: payload.event_id,
        });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
