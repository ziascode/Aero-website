import { AVATAR_COLORS, REVIEWS } from "@/lib/data";
import { ReviewCard } from "@/components/review-card";

function withAvatars(arr, offset) {
  return arr.map((r, i) => ({
    ...r,
    initial: r.name[0],
    avatarBg: AVATAR_COLORS[(i + offset) % AVATAR_COLORS.length],
  }));
}

/** Static review grid for service heroes (no marquee). */
export function ReviewsBands({ variant = "default" }) {
  const hero = variant === "hero";
  const reviews = withAvatars(REVIEWS.slice(0, hero ? 8 : 5), 0);

  return (
    <section
      id="reviews"
      className={hero ? "aero-reviews-bands aero-reviews-bands--hero" : "aero-reviews-bands"}
      aria-label="Google reviews"
    >
      <div className={hero ? "aero-reviews-bands-grid" : "aero-reviews-bands-row"}>
        {reviews.map((r) => (
          <ReviewCard key={r.name} r={r} glass compact={hero} onDark={hero} />
        ))}
      </div>
    </section>
  );
}
