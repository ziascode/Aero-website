import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export function SiteFrame({ children }) {
  return (
    <div className="aero-shell">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
