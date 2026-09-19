import { Faq } from "@/components/faq";
import { LpCredentials } from "@/components/lp-credentials";
import { LpGallery } from "@/components/lp-gallery";
import { LpPain } from "@/components/lp-pain";
import { LpProcess } from "@/components/lp-process";
import { LpTracking } from "@/components/lp-tracking";
import { ReviewsBands } from "@/components/reviews-bands";
import { ServiceFeatureImage } from "@/components/service-feature-image";
import { ServiceHero } from "@/components/service-hero";
import { ServiceIncludes } from "@/components/service-includes";
import { ServiceLeadForm } from "@/components/service-lead-form";

/** Shared LP-style layout for /services/* pages (full site nav via SiteFrame). */
export function ServiceLandingPage({ page, trackingPrefix, source }) {
  return (
    <div className="aero-service-page aero-service-page--airy">
      <LpTracking />
      <ServiceHero page={page} trackingPrefix={trackingPrefix}>
        <ReviewsBands variant="hero" />
      </ServiceHero>
      <LpCredentials />
      <LpPain page={page} />
      {page.featureImage ? (
        <ServiceFeatureImage
          src={page.featureImage}
          alt={page.featureImageAlt || ""}
          label={`${page.title} photo`}
        />
      ) : (
        <LpGallery images={page.galleryImages} />
      )}
      <ServiceIncludes page={page} />
      <LpProcess page={page} />
      <Faq hideKicker items={page.faqItems} phoneId={`${trackingPrefix}-faq-tel`} />
      <ServiceLeadForm page={page} source={source} trackingPrefix={trackingPrefix} />
    </div>
  );
}
