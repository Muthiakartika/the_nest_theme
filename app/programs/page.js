import Button from "../../components/Button";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import Motif from "../../components/Motif";
import Reveal from "../../components/Reveal";
import { SectionHeading, StitchRule } from "../../components/Stitch";
import { ProgramBand } from "../../components/ProgramCard";
import { CTASection, PageMasthead } from "../../components/Page";
import { programs } from "../../data/programs";
import { partnership } from "../../data/site";

export const metadata = {
  title: "Programs",
  description:
    "Infants 1–2, Toddlers 2–3, Preschool 3–5, and flexible Kids’ Club care for 1–6 year olds. Four stages of one continuous journey at The Nest, Umalas.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageMasthead
        crumbs={[{ label: "Programs" }]}
        mark="sprout"
        title="Four stages, one continuous journey."
        lede="Children do not move between rooms here so much as grow through them. Each stage carries forward the relationships and routines of the one before it, and the ratio widens only as a child needs us less."
      />

      <section className="section section--tight g-cream">
        <div className="wrap">
          {programs.map((p, i) => (
            <ProgramBand key={p.slug} program={p} index={i} />
          ))}
        </div>
      </section>

      {/* Family partnership */}
      <section className="section g-forest on-dark">
        <div className="wrap stack-lg">
          <div className="split split--wide-left" style={{ alignItems: "start" }}>
            <Reveal className="stack">
              <span aria-hidden="true" style={{ color: "var(--tan)", display: "block" }}>
                <Motif name="hand" size={34} />
              </span>
              <h2 className="d-lg stitch-in" style={{ "--i": 1 }}>
                Growing together
              </h2>
              <StitchRule tone="strong" width="120px" />
              <p className="lede stitch-in" style={{ "--i": 2 }}>
                We believe children thrive when families and educators work
                together. Through ongoing communication, developmental
                observations, and shared celebrations of progress, we build
                strong partnerships that support every child&rsquo;s growth,
                wellbeing, and learning journey.
              </p>
            </Reveal>

            <Reveal delay={140} className="stack">
              {partnership.map((p, i) => (
                <div
                  key={p.title}
                  className="stitch-in"
                  style={{
                    "--i": i,
                    display: "grid",
                    gridTemplateColumns: "32px minmax(0, 1fr)",
                    gap: "1.1rem",
                    alignItems: "start",
                    paddingBottom: "1.4rem",
                    backgroundImage:
                      "repeating-linear-gradient(90deg, var(--thread-dark) 0 9px, transparent 9px 16px)",
                    backgroundSize: "100% 1.5px",
                    backgroundPosition: "0 100%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <span aria-hidden="true" style={{ color: "var(--tan)" }}>
                    <Motif name={p.motif} size={26} />
                  </span>
                  <span>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--f-display)",
                        fontSize: "1.24rem",
                        fontWeight: 500,
                        letterSpacing: "-0.018em",
                        color: "var(--cream)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {p.title}
                    </span>
                    <span style={{ fontSize: "0.9rem", color: "var(--on-dark-soft)" }}>
                      {p.body}
                    </span>
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Find the right program */}
      <section className="section g-cream">
        <div className="wrap">
          <div className="split split--wide-right">
            <Reveal className="split__media-first">
              <ImagePlaceholder
                caption="Children of different ages together in the garden — the whole journey in one frame"
                label="All ages"
                ratio="4 / 3"
                motif="nest"
              />
            </Reveal>
            <Reveal delay={120} className="stack">
              <SectionHeading
                mark="sun"
                title="Find the right program for your child"
                size="d-lg"
                lede="Every child deserves a place where they feel safe, supported, and inspired to learn. If your child sits near an age boundary, we’ll talk it through with you on your tour."
                facts={["Infants", "Toddlers", "Preschool", "Kids’ Club"]}
              />
              <div className="btn-row stitch-in" style={{ "--i": 3 }}>
                <Button href="/contact" variant="primary">
                  Book a Centre Tour
                </Button>
                <Button href="/admissions" variant="stitch" icon="download">
                  Download Centre Handbook
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection ground="g-cream-deep" />
    </>
  );
}
