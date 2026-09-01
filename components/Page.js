import Link from "next/link";
import Button from "./Button";
import Motif from "./Motif";
import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";
import { MotifBand, StitchRule } from "./Stitch";

/**
 * PageMasthead — the head of an interior cloth.
 * Breadcrumb, heading, rule, lede, and an optional worked band beneath.
 */
export function PageMasthead({
  crumbs = [],
  title,
  lede,
  facts,
  mark = "eyelet",
  band = true,
  children,
  ground = "g-cream",
}) {
  return (
    <section className={`masthead ${ground}${band ? " masthead--band" : ""}`}>
      <div className="wrap">
        {crumbs.length ? (
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} style={{ display: "contents" }}>
                <Motif name="arrow" size={12} aria-hidden="true" />
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              </span>
            ))}
          </nav>
        ) : null}

        <div className="masthead__grid">
          <Reveal className="stack">
            {mark ? (
              <span aria-hidden="true" style={{ color: "var(--tan-ink)", display: "block" }}>
                <Motif name={mark} size={30} />
              </span>
            ) : null}
            <h1 className="d-lg stitch-in" style={{ "--i": 1 }}>
              {title}
            </h1>
            <StitchRule tone="strong" width="120px" />
            {facts ? (
              <div className="btn-row" style={{ gap: "0.5rem" }}>
                {facts.map((f, i) => (
                  <span className="chip stitch-in" style={{ "--i": i + 2 }} key={f}>
                    {f}
                  </span>
                ))}
              </div>
            ) : null}
          </Reveal>

          {lede ? (
            <Reveal delay={120}>
              <p className="lede stitch-in">{lede}</p>
              {children}
            </Reveal>
          ) : (
            children
          )}
        </div>

        {band ? (
          <div style={{ marginTop: "clamp(2.5rem, 5vw, 4rem)" }}>
            <MotifBand size={24} />
          </div>
        ) : null}
      </div>
    </section>
  );
}

/**
 * CTASection — the close. Every page ends within reach of a tour, because
 * the tour is the conversion.
 */
export function CTASection({
  title = "Come and see The Nest for yourself.",
  body = "We would love to meet your family and show you around our Umalas campus — the rooms, the garden, and the educators your child would be with.",
  primary = { href: "/contact", label: "Book a Tour" },
  secondary = { href: "/admissions", label: "Download Handbook", icon: "download" },
  ground = "g-forest",
  caption = "The Nest’s entrance in warm afternoon light — timber signage, planting, an open gate",
}) {
  const dark = ground === "g-forest";
  return (
    <section className={`section ${ground}${dark ? " on-dark" : ""}`}>
      <div className="wrap">
        <div className="split split--wide-left">
          <Reveal className="stack">
            <span aria-hidden="true" style={{ color: dark ? "var(--tan)" : "var(--tan-ink)", display: "block" }}>
              <Motif name="nest" size={34} />
            </span>
            <h2 className="d-lg stitch-in" style={{ "--i": 1 }}>
              {title}
            </h2>
            <StitchRule tone="strong" width="120px" />
            <p className="lede stitch-in" style={{ "--i": 2 }}>
              {body}
            </p>
            <div className="btn-row stitch-in" style={{ "--i": 3 }}>
              <Button href={primary.href} variant={dark ? "tan" : "primary"}>
                {primary.label}
              </Button>
              {secondary ? (
                <Button href={secondary.href} variant="stitch" icon={secondary.icon || "arrow"}>
                  {secondary.label}
                </Button>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <ImagePlaceholder
              caption={caption}
              label="Image"
              ratio="4 / 3"
              motif="house"
              tone={dark ? "forest" : "paper"}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/**
 * A pending-content slot. Used where the client still owes copy — parent
 * testimonials, legal text. Never filled with invented content.
 */
export function PendingSlot({ children, note = "Client copy pending" }) {
  return (
    <div className="pending stitched">
      <span className="chip chip--outline">
        <Motif name="alert" size={12} />
        {note}
      </span>
      <p className="pending__q">{children}</p>
    </div>
  );
}
