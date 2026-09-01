import Link from "next/link";
import Motif from "./Motif";

/**
 * Button — three voices only.
 *   primary : solid Forest Green. One per view, on the action we want.
 *   stitch  : the sampler’s own outline button, worked in running stitch.
 *   tan     : Gold Tan solid. Reserved for Forest grounds, where Tan on
 *             Forest reads 8.2:1. Never used on Cream.
 */
export default function Button({
  href,
  variant = "primary",
  icon = "arrow",
  children,
  className = "",
  type = "button",
  ...rest
}) {
  const cls = [
    "btn",
    `btn--${variant}`,
    variant === "stitch" && "stitched",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      <span>{children}</span>
      {icon ? <Motif name={icon} size={15} className="btn__icon" /> : null}
    </>
  );

  if (href) {
    const external = /^(https?:|mailto:|tel:)/.test(href);
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          {...rest}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} {...rest}>
      {inner}
    </button>
  );
}

/** A quiet inline link with a running-stitch tail. */
export function TextLink({ href, children, className = "", ...rest }) {
  const cls = ["tlink", className].filter(Boolean).join(" ");
  const inner = (
    <>
      <span>{children}</span>
      <Motif name="arrow" size={14} />
    </>
  );
  const external = /^(https?:|mailto:|tel:)/.test(href || "");
  if (external) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {inner}
    </Link>
  );
}
