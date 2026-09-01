import Motif, { RegMark } from "./Motif";

/**
 * ImagePlaceholder — a patch basted onto the cloth, drawn as an unstitched
 * pattern chart.
 *
 * The Nest has no photography yet. Rather than dress that absence up as a
 * grey box, we borrow the sampler’s own notation: a chart is what the work
 * looks like *before* it is stitched. Gridded ground, registration crosses at
 * the corners, the motif that belongs in this square, and the brief for the
 * photographer set as a linen label along the foot.
 *
 * Every one of these is a real production instruction. Swap the whole
 * component for <Image> when the shoot lands; the caption is the shot list.
 */
export default function ImagePlaceholder({
  caption,
  label = "Image",
  ratio = "4 / 3",
  tone = "paper",
  motif = "eyelet",
  motifSize = 56,
  className = "",
  style,
}) {
  return (
    <figure
      className={`patch stitched${tone !== "paper" ? ` patch--${tone}` : ""}${
        className ? ` ${className}` : ""
      }`}
      style={{ aspectRatio: ratio, ...style }}
    >
      <span className="patch__chart" aria-hidden="true" />

      <RegMark className="patch__reg patch__reg--tl" />
      <RegMark className="patch__reg patch__reg--tr" />
      <RegMark className="patch__reg patch__reg--br" />

      <span className="patch__mark" aria-hidden="true">
        <Motif name={motif} size={motifSize} />
      </span>

      <figcaption className="patch__caption">
        <span className="patch__badge">{label}</span>
        <p className="patch__text">{caption}</p>
      </figcaption>
    </figure>
  );
}
