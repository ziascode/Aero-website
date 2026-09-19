import Image from "next/image";

const CELL_CLASS = ["is-tall", "is-wide", "is-small", "is-small"];

/** Full-bleed 4-cell mosaic — tall left, wide top-right, two small bottom-right. */
export function LpGallery({ images }) {
  if (!images?.length) return null;

  return (
    <section className="aero-lp-gallery" aria-label="Service gallery">
      <div className="aero-lp-gallery-grid">
        {images.slice(0, 4).map((image, index) => (
          <div key={image.src} className={`aero-lp-gallery-cell ${CELL_CLASS[index] ?? "is-small"}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={
                index === 0
                  ? "(max-width: 768px) 100vw, 33vw"
                  : index === 1
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 50vw, 33vw"
              }
              className="aero-lp-gallery-img"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
