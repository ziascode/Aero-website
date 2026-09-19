import Image from "next/image";

/** Full-bleed single image band for service landing pages. */
export function ServiceFeatureImage({ src, alt = "", label = "Service photo" }) {
  if (!src) return null;

  return (
    <section className="aero-service-feature" aria-label={label}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="aero-service-feature-img"
        priority={false}
      />
    </section>
  );
}
