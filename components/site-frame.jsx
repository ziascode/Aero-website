import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { StickyCta } from "@/components/sticky-cta";

export function SiteFrame({ children }) {
  return (
    <div className="aero-shell">
      <a href="#main" className="aero-skip-link">
        Skip to main content
      </a>
      <SiteNav />
      <main id="main">{children}</main>
      <SiteFooter />
      <StickyCta />
    </div>
  );
}
