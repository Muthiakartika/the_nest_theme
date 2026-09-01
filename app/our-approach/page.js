import Button from "../../components/Button";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import Motif from "../../components/Motif";
import Reveal from "../../components/Reveal";
import { MotifBand, SectionHeading, StitchRule } from "../../components/Stitch";
import { CTASection, PageMasthead } from "../../components/Page";
import { harmony, principles } from "../../data/site";

export const metadata = {
  title: "Our Approach",
  description:
    "Nurture · Embrace · Inspire. The Balinese belief that a child grows best in harmony, paired with a Reggio Emilia-inspired framework where the environment is the third teacher.",
};

/** The hundred languages — the forms of expression The Nest treats as equal. */
const languages = [
  { label: "Drawing", motif: "bloom" },
  { label: "Movement", motif: "water" },
  { label: "Storytelling", motif: "book" },
  { label: "Music", motif: "sun" },
  { label: "Construction", motif: "blocks" },
  { label: "Play", motif: "leaf" },
];

export default function ApproachPage() {
  return (
    <>
      <PageMasthead
        crumbs={[{ label: "Our Approach" }]}
        mark="nest"
        title="A philosophy of harmony, put into daily practice."
        lede="Inspired by the Balinese belief that a child grows best in harmony — with family, community, and nature — The Nest holds each child the way a good home holds a family: close enough to feel safe, open enough to keep growing."
      />

      {/* The harmony triangle */}
      <section className="section section--tight g-cream">
        <div className="wrap stack-lg">
          <Reveal>
            <StitchRule tone="strong" />
          </Reveal>
          <Reveal>
            <div className="grid-3">
              {harmony.map((h, i) => (
                <div className="stitch-in" key={h.title} style={{ "--i": i }}>
                  <span aria-hidden="true" style={{ color: "var(--tan-ink)", display: "block" }}>
                    <Motif name={h.motif} size={40} />
                  </span>
                  <h2 className="d-md" style={{ marginTop: "1rem" }}>
                    {h.title}
                  </h2>
                  <p style={{ marginTop: "0.5rem", color: "var(--ink-soft)" }}>{h.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reggio — the environment as third teacher */}
      <section className="section g-forest on-dark">
        <div className="wrap">
          <div className="split split--wide-left">
            <Reveal className="stack">
              <span aria-hidden="true" style={{ color: "var(--tan)", display: "block" }}>
                <Motif name="house" size={34} />
              </span>
              <h2 className="d-lg stitch-in" style={{ "--i": 1 }}>
                The environment is our &ldquo;third teacher&rdquo;
              </h2>
              <StitchRule tone="strong" width="120px" />
              <p className="lede stitch-in" style={{ "--i": 2 }}>
                This sits alongside a Reggio Emilia-inspired framework, where the
                environment itself acts as a child&rsquo;s third teacher. Children
                are treated as active, capable participants — their ideas,
                questions, and theories shape daily experience.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <ImagePlaceholder
                caption="Natural light through timber shelving, open-ended materials laid out at child height — the Reggio classroom"
                label="Environment"
                ratio="4 / 3"
                motif="blocks"
                tone="forest"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Five principles — a numbered sequence that genuinely reads as a set */}
      <section className="section g-paper">
        <div className="wrap stack-lg">
          <Reveal>
            <SectionHeading
              mark="sprout"
              title="Five principles that shape every day"
              size="d-lg"
              wide
            />
          </Reveal>

          <div className="trust">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="trust__item">
                  <span className="trust__mark" aria-hidden="true">
                    <Motif name={p.motif} size={36} />
                  </span>
                  <span>
                    <span className="trust__t" style={{ display: "block" }}>
                      {p.title}
                    </span>
                    <p className="trust__b">{p.body}</p>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The hundred languages */}
      <section className="section g-cream-deep">
        <div className="wrap stack-lg">
          <Reveal>
            <SectionHeading
              mark="bloom"
              title="Every form of expression is valued"
              size="d-lg"
              lede="A child who cannot yet explain something in words can very often build it, draw it, sing it, or act it out. We treat all of those as answers."
            />
          </Reveal>

          <Reveal>
            <div className="moments" style={{ gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}>
              {languages.map((l, i) => (
                <div className="moment motif-cell" key={l.label} style={{ "--i": i }}>
                  <Motif name={l.motif} size={30} />
                  <span className="moment__t">{l.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="split" style={{ alignItems: "center" }}>
              <ImagePlaceholder
                caption="A child engrossed in a project — hands busy, materials spread, no adult in frame"
                label="In practice"
                ratio="16 / 9"
                motif="bloom"
              />
              <div className="stack">
                <p className="pullquote">
                  Children are active participants, not passive recipients of
                  instruction.
                </p>
                <div className="btn-row">
                  <Button href="/programs" variant="primary">
                    See Our Programs
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <MotifBand size={26} loose />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
