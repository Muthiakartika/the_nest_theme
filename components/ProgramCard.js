import Link from "next/link";
import Motif from "./Motif";
import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";
import { StitchRule } from "./Stitch";

/**
 * ProgramBand — one worked band of the cloth.
 *
 * The four programs are one continuous journey, so they are set as four
 * stacked bands rather than four cards in a grid. Each band’s motif row is
 * worked at its own density: Infants close and even, Kids’ Club open and
 * loose. The composition carries the development the copy describes.
 *
 * The age leads, at display scale, because "my child is two" is the first
 * question a parent is actually asking.
 */
/**
 * `compact` is the home-page teaser: same bands, but the sampler annotation
 * and the ratio caption are held back so that clicking through to /programs
 * delivers something the visitor has not already read.
 */
export function ProgramBand({ program, index = 0, compact = false }) {
  const { slug, name, ageLabel, ageShort, ratio, cardBlurb, bandNote, motif, density } =
    program;

  const loose = index >= 2;
  const size = 15 + index * 3;

  return (
    <Reveal delay={index * 90}>
      <Link href={`/programs/${slug}`} className="pband">
        <div
          className={`pband__row${loose ? " motif-band--loose" : ""}`}
          data-band={index + 1}
          aria-hidden="true"
        >
          {Array.from({ length: density }).map((_, i) => (
            <span className="motif-cell" key={i} style={{ "--i": i }}>
              <Motif name={motif} size={size} />
            </span>
          ))}
        </div>

        <div className="pband__body">
          <span className="pband__age">{ageShort}</span>

          <span className="pband__main">
            <span className="pband__name">{name}</span>
            <span className="pband__blurb">{cardBlurb}</span>
            {compact ? null : <span className="pband__note">{bandNote}</span>}
          </span>

          <span className="pband__meta">
            <span className="pband__ratio">{ratio}</span>
            {compact ? null : (
              <span className="pband__ratiocap">educator to children</span>
            )}
          </span>

          <span className="pband__go">
            <span>View program</span>
            <Motif name="arrow" size={15} />
          </span>
        </div>

        <span className="pband__rule" aria-hidden="true" />
        <span className="vh">
          {name}, ages {ageLabel}, ratio {ratio}
        </span>
      </Link>
    </Reveal>
  );
}

/**
 * ProgramCard — the compact form, for cross-links between program pages.
 */
export function ProgramCard({ program }) {
  return (
    <Link href={`/programs/${program.slug}`} className="pcard stitched">
      <span className="card__motif" aria-hidden="true">
        <Motif name={program.motif} size={30} />
      </span>
      <span className="pcard__name">{program.name}</span>
      <span className="pcard__meta">
        {program.ageLabel} · {program.ratio}
      </span>
      <span className="pcard__blurb">{program.cardBlurb}</span>
      <span className="tlink" style={{ marginTop: "auto" }}>
        <span>View program</span>
        <Motif name="arrow" size={14} />
      </span>
    </Link>
  );
}

/**
 * ProgramStrip — every program except the current one, for the foot of a
 * program detail page. The journey continues either side of this stage.
 */
export function ProgramStrip({ programs, currentSlug, title = "The rest of the journey" }) {
  const rest = programs.filter((p) => p.slug !== currentSlug);
  return (
    <section className="section section--tight g-cream-deep">
      <div className="wrap stack-lg">
        <div className="shead">
          <h2 className="d-md">{title}</h2>
          <StitchRule tone="strong" className="shead__rule" />
        </div>
        <div className="grid-3">
          {rest.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * ProgramHero — the head of a program detail page.
 */
export function ProgramHero({ program }) {
  return (
    <section className="section section--tight g-cream">
      <div className="wrap">
        <div className="split split--wide-left">
          <Reveal className="stack">
            <span aria-hidden="true" style={{ color: "var(--tan-ink)", display: "block" }}>
              <Motif name={program.motif} size={34} />
            </span>
            <h1 className="d-lg stitch-in" style={{ "--i": 1 }}>
              {program.tagline}
            </h1>
            <StitchRule tone="strong" width="120px" />
            <div className="btn-row stitch-in" style={{ "--i": 2, gap: "0.5rem" }}>
              <span className="chip">{program.name}</span>
              <span className="chip chip--outline">{program.ageLabel}</span>
              <span className="chip chip--outline">{program.ratio} ratio</span>
            </div>
            <p className="lede stitch-in" style={{ "--i": 3 }}>
              {program.intro}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <ImagePlaceholder
              caption={program.heroCaption}
              label="Hero image"
              ratio={program.heroRatio || "5 / 4"}
              motif={program.motif}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
