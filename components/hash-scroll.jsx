"use client";

import { useEffect } from "react";
import { scrollToHash } from "@/lib/hash-nav";

/** After navigating to /#section from another route, scroll to the target. */
export function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const href = `/${hash}`;
    const timer = window.setTimeout(() => scrollToHash(href, { smooth: false }), 40);
    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
