import { notFound } from "next/navigation";
import Button from "../../../components/Button";
import ImagePlaceholder from "../../../components/ImagePlaceholder";
import Motif from "../../../components/Motif";
import Reveal from "../../../components/Reveal";
import { MotifBand, SectionHeading, StitchRule, TickList } from "../../../components/Stitch";
import { ProgramHero, ProgramStrip } from "../../../components/ProgramCard";
import { CTASection } from "../../../components/Page";
import { programBySlug, programs } from "../../../data/programs";

/**
 * The reusable program detail template.
 *
 * One template, four instances. Every block below renders only when the
 * program actually carries that content, so Infants gets its safe-sleep
 * commitment, Preschool gets its projects and leadership, and Kids’ Club gets
 * its suitability list — without four bespoke pages to maintain.
 */

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

// Next 15 hands `params` over as a promise, so both of these await it.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = programBySlug(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.tagline}`,
    description: p.intro.slice(0, 175),
  };
}

export default async function ProgramPage({ params }) {
  const { slug } = await params;
  const program = programBySlug(slug);
  if (!program) notFound();

  const {
    name,
    ageLabel,
    ratio,
    ratioLabel,
    ratioNote,
    motif,
    bandNote,
    attendance,
    environment,
    experience,
    experienceTitle,
    feature,
    projects,
    suitableFor,
  } = program;

  return (
    <>
      <nav className="crumb wrap" aria-label="Breadcrumb" style={{ paddingTop: "1.75rem", marginBottom: 0 }}>
        <a href="/">Home</a>
        <Motif name="arrow" size={12} aria-hidden="true" />
        <a href="/programs">Programs</a>
        <Motif name="arrow" size={12} aria-hidden="true" />
        <span>{name}</span>
      </nav>

      <ProgramHero program={program} />

      {/* Attendance and ratio — the two facts a parent checks first */}
      <section className="section section--tight g-forest on-dark">
        <div className="wrap">
          <div className="split split--wide-left" style={{ alignItems: "center" }}>
            <Reveal>
              <h2 className="d-md stitch-in">Attendance</h2>
              <StitchRule tone="strong" width="90px" style={{ marginBlock: "1rem 1.5rem" }} />
              <div className="grid-2" style={{ gap: "1.25rem" }}>
                {attendance.map((a, i) => (
                  <div className="step stitch-in" key={a.label} style={{ "--i": i + 1 }}>
                    <span aria-hidden="true" style={{ color: "var(--tan)" }}>
                      <Motif name="clock" size={24} />
                    </span>
                    <span className="step__t">{a.label}</span>
                    <p>{a.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="stat">
                <span
                  className="chip"
                  style={{ justifySelf: "start", marginBottom: "0.35rem" }}
                >
                  {ratioLabel}
                </span>
                <span className="stat__fig">{ratio}</span>
                <span className="stat__cap">{ratioNote}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Environment & experience */}
      <section className="section g-cream">
        <div className="wrap stack-lg">
          <div className="split" style={{ alignItems: "end" }}>
            <Reveal>
              <SectionHeading
                mark={motif}
                title={
                  environment
                    ? "Environment and everyday experience"
                    : experienceTitle || "What children experience"
                }
                size="d-lg"
              />
            </Reveal>
            <Reveal delay={110}>
              <p className="pullquote pullquote--wide stitch-in">{bandNote}</p>
            </Reveal>
          </div>

          {environment ? (
            <Reveal>
              <div className="split split--top">
                <div className="stack-sm">
                  <h3 className="d-sm">The environment</h3>
                  <StitchRule width="70px" tone="strong" />
                  <TickList items={environment} className="stitch-in" />
                </div>
                <div className="stack-sm">
                  <h3 className="d-sm">What children experience</h3>
                  <StitchRule width="70px" tone="strong" />
                  <TickList items={experience} className="stitch-in" />
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <TickList items={experience} columns={2} />
            </Reveal>
          )}

          <Reveal>
            <MotifBand names={[motif, motif, motif, motif, motif, motif, motif, motif, motif]} size={24} />
          </Reveal>
        </div>
      </section>

      {/* Project-based learning — Preschool only */}
      {projects ? (
        <section className="section g-paper">
          <div className="wrap stack-lg">
            <Reveal>
              <SectionHeading
                mark="blocks"
                title="Project-based learning, in practice"
                size="d-lg"
                lede="Real investigations children have run here — each one begun by a question they asked themselves."
              />
            </Reveal>
            <Reveal>
              <div className="grid-3">
                {projects.map((pr, i) => (
                  <div className="card stitched stitch-in" key={pr.title} style={{ "--i": i }}>
                    <span className="card__motif" aria-hidden="true">
                      <Motif name={pr.motif} size={30} />
                    </span>
                    <h3>&ldquo;{pr.title}&rdquo;</h3>
                    <p>{pr.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* Suitability — Kids’ Club only */}
      {suitableFor ? (
        <section className="section g-paper">
          <div className="wrap stack-lg">
            <Reveal>
              <SectionHeading
                mark="sun"
                title="Care that flexes with your week"
                size="d-lg"
              />
            </Reveal>
            <Reveal>
              <div className="grid-3">
                {suitableFor.map((s, i) => (
                  <div className="card stitched stitch-in" key={s.title} style={{ "--i": i }}>
                    <span className="card__motif" aria-hidden="true">
                      <Motif name={s.motif} size={30} />
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* The program’s own commitment block */}
      {feature ? (
        <section className="section g-forest on-dark">
          <div className="wrap">
            <div className="split split--wide-right">
              <Reveal className="split__media-first">
                <ImagePlaceholder
                  caption={feature.caption}
                  label={feature.label}
                  ratio="4 / 5"
                  motif={feature.motif}
                  tone="forest"
                />
              </Reveal>

              <Reveal delay={120} className="stack">
                <span aria-hidden="true" style={{ color: "var(--tan)", display: "block" }}>
                  <Motif name={feature.motif} size={34} />
                </span>
                <h2 className="d-lg stitch-in" style={{ "--i": 1 }}>
                  {feature.title}
                </h2>
                <StitchRule tone="strong" width="120px" />
                <p className="lede stitch-in" style={{ "--i": 2 }}>
                  {feature.body}
                </p>
                <TickList items={feature.points} />
              </Reveal>
            </div>
          </div>
        </section>
      ) : null}

      {/* Close */}
      <section className="section section--tight g-cream">
        <div className="wrap">
          <Reveal>
            <div className="split" style={{ alignItems: "center" }}>
              <div className="stack">
                <h2 className="d-md">See {name} in action</h2>
                <StitchRule tone="strong" width="90px" />
                <p className="lede">
                  The honest way to judge a room for {ageLabel.toLowerCase()} is
                  to stand in it on an ordinary morning. Come and do that.
                </p>
              </div>
              <div className="btn-row">
                <Button href="/contact" variant="primary">
                  Book a Tour for {name}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ProgramStrip programs={programs} currentSlug={program.slug} />

      <CTASection ground="g-cream" />
    </>
  );
}
