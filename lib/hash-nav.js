/** Scroll to an in-page hash target. Returns true when the href was a homepage hash. */
export function scrollToHash(href, { smooth = true } = {}) {
  if (typeof window === "undefined" || !href?.startsWith("/#")) return false;
  const id = href.slice(2);
  const behavior = smooth ? "smooth" : "auto";

  if (id === "top") {
    window.scrollTo({ top: 0, behavior });
    window.history.pushState(null, "", href);
    return true;
  }

  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior, block: "start" });
  window.history.pushState(null, "", href);
  return true;
}

export function onHashLinkClick(href, pathname) {
  return (event) => {
    if (!href.startsWith("/#")) return;
    // Already on the homepage — scroll without a route change.
    if (pathname === "/") {
      event.preventDefault();
      scrollToHash(href);
    }
    // Leaving another route for /#… — let Next navigate; HashScroll will finish.
  };
}
