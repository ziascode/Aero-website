import Link from "next/link";

/**
 * CleanHub-style pill button: icon capsule expands on hover.
 * variant: "primary" | "ghost" | "light" | "gold" | "outline"
 * Pass href for links, or omit href and use type="submit" for forms.
 */
export function LiquidButton({
  href,
  children,
  icon,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  style,
  type = "button",
  disabled,
  ...props
}) {
  const classes = [
    "btn",
    variant === "primary" || variant === "gold" ? "btn-primary" : "",
    "aero-btn-liquid",
    variant === "ghost" ? "aero-btn-liquid--ghost" : "",
    variant === "light" ? "aero-btn-liquid--light" : "",
    variant === "gold" ? "aero-btn-liquid--gold" : "",
    variant === "outline" ? "aero-btn-liquid--outline" : "",
    size === "compact" ? "aero-btn-liquid--compact" : "",
    size === "wide" ? "aero-btn-liquid--wide" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className="aero-btn-liquid-label">{children}</span>
      {icon ? (
        <span className="aero-btn-liquid-icon" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </>
  );

  if (!href) {
    return (
      <button
        type={type}
        className={classes}
        onClick={onClick}
        style={style}
        disabled={disabled}
        {...props}
      >
        {content}
      </button>
    );
  }

  const isExternal = typeof href === "string" && /^(tel:|mailto:|https?:)/.test(href);

  if (isExternal) {
    return (
      <a href={href} className={classes} onClick={onClick} style={style} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick} style={style} {...props}>
      {content}
    </Link>
  );
}
