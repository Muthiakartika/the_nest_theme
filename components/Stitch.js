import Motif, { MOTIF_NAMES } from "./Motif";
import Reveal from "./Reveal";

/**
 * StitchRule — a running-stitch rule. Replaces the hairline everywhere.
 * Pure CSS background so an Elementor rebuild can reproduce it with a
 * divider widget plus one custom-CSS snippet.
 */
export function StitchRule({ tone = "", width, className = "", style }) {
  const cls = ["rule", tone === "strong" && "rule--strong", tone === "tan" && "rule--tan", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div
      className={cls}
      style={{ ...(width ? { maxWidth: width } : null), ...style }}
      aria-hidden="true"
    />
  );
}

/**
 * MotifBand — a worked row of the sampler.
 *
 * `loose` draws the same alphabet larger and slightly off-square. That is the
 * whole idea of a practice cloth: the first band is careful and even, and by
 * the foot of the work the hand has grown confident. We use it to mark
 * progression, never as random decoration.
 */
export function MotifBand({
  names = MOTIF_NAMES,
  size = 26,
  loose = false,
  tone = "",
  count,
  className = "",
  animate = true,
}) {
  const list = count ? names.slice(0, count) : names;
  const cls = [
    "motif-band",
    loose && "motif-band--loose",
    tone === "tan" && "motif-band--tan",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const band = (
    <div className={cls} aria-hidden="true">
      {list.map((n, i) => (
        <span key={`${n}-${i}`} className="motif-cell" style={{ "--i": i }}>
          <Motif name={n} size={loose ? size + 6 : size} />
        </span>
      ))}
    </div>
  );

  return animate ? <Reveal>{band}</Reveal> : band;
}

/**
 * SectionHeading — band mark, heading, rule, optional lede.
 *
 * Deliberately no text eyebrow above the heading. A sampler marks the start
 * of a band with a worked motif, not with a caption repeating what the band
 * plainly is; the heading carries its own weight. Where a label would have
 * held real information (an age, a ratio, a stage), pass it as `facts` and it
 * is set below the rule as data rather than above the heading as decoration.
 */
export function SectionHeading({
  mark = "eyelet",
  title,
  size = "d-lg",
  lede,
  facts,
  wide = false,
  align = "left",
  children,
  as: Tag = "h2",
}) {
  return (
    <div
      className={`shead${wide ? " shead--wide" : ""}${
        align === "center" ? " shead--center" : ""
      }`}
    >
      {mark ? (
        <span aria-hidden="true" style={{ color: "var(--tan-ink)" }}>
          <Motif name={mark} size={26} />
        </span>
      ) : null}
      <Tag className={size}>{title}</Tag>
      <StitchRule className="shead__rule" tone="strong" />
      {facts ? (
        <div className="btn-row" style={{ gap: "0.5rem" }}>
          {facts.map((f) => (
            <span className="chip" key={f}>
              {f}
            </span>
          ))}
        </div>
      ) : null}
      {lede ? <p className="lede">{lede}</p> : null}
      {children}
    </div>
  );
}

/** A stitched tick list. The tick is drawn, never a glyph. */
export function TickList({ items, columns = 1, className = "" }) {
  return (
    <ul className={`ticks${columns === 2 ? " ticks--two" : ""}${className ? ` ${className}` : ""}`}>
      {items.map((t) => (
        <li key={t}>
          <Motif name="tick" size={17} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
