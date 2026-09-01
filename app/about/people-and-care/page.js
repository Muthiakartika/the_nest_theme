import Button from "../../../components/Button";
import ImagePlaceholder from "../../../components/ImagePlaceholder";
import Motif from "../../../components/Motif";
import Reveal from "../../../components/Reveal";
import { SectionHeading, StitchRule, TickList } from "../../../components/Stitch";
import { CTASection, PageMasthead } from "../../../components/Page";
import { educatorCommitments } from "../../../data/site";

export const metadata = {
  title: "Our People & Care",
  description:
    "We hire for character, not only qualifications. How The Nest’s educators — and everyone else on campus — are chosen, screened and held to one standard of care.",
};

export default function PeoplePage() {
  return (
    <>
      <PageMasthead
        crumbs={[{ label: "About", href: "/about" }, { label: "Our People & Care" }]}
        mark="hand"
        title="Nurturers. Guides. Co-Learners."
        lede="We don’t simply hire for qualifications — we hire for character. We intentionally seek people who are naturally caring, gentle, patient, and emotionally intelligent, who nurture curiosity, encourage independence, and recognise every child as a unique individual."
      />

      <section className="section section--tight g-cream">
        <div className="wrap">
          <Reveal>
            <ImagePlaceholder
              caption="The full Nest team — educators, administrators and campus staff together, warm and candid, on campus"
              label="Our team"
              ratio="21 / 9"
              motifSize={100}
              motif="boat"
            />
          </Reveal>
        </div>
      </section>

      {/* A shared standard — the differentiating claim, given its own room */}
      <section className="section g-forest on-dark">
        <div className="wrap">
          <div className="split split--wide-left">
            <Reveal className="stack">
              <span aria-hidden="true" style={{ color: "var(--tan)", display: "block" }}>
                <Motif name="boat" size={34} />
              </span>
              <h2 className="d-lg stitch-in" style={{ "--i": 1 }}>
                Every person plays a part
              </h2>
              <StitchRule tone="strong" width="120px" />
              <p className="lede stitch-in" style={{ "--i": 2 }}>
                This philosophy extends far beyond our teaching staff. Every
                person who sets foot on The Nest&rsquo;s campus plays a part in a
                child&rsquo;s sense of safety and belonging — our administrators,
                teaching assistants, cleaners, gardeners, drivers, and security
                team all share the same standard of warmth, care, and
                attentiveness.
              </p>
              <p className="lede stitch-in" style={{ "--i": 3 }}>
                Every interaction, however small, contributes to how a child
                experiences The Nest as a second home.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <ImagePlaceholder
                caption="Admin staff, teaching assistants, gardeners and drivers — the wider Nest family, mid-morning"
                label="The wider team"
                ratio="4 / 5"
                motif="house"
                tone="forest"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* The commitment — eight, worked as two columns of stitched ticks */}
      <section className="section g-cream">
        <div className="wrap stack-lg">
          <Reveal>
            <SectionHeading
              mark="tick"
              title="Every educator at The Nest is committed to:"
              size="d-lg"
              wide
            />
          </Reveal>
          <Reveal delay={80}>
            <TickList items={educatorCommitments} columns={2} />
          </Reveal>
        </div>
      </section>

      {/* Care you can see */}
      <section className="section g-paper">
        <div className="wrap">
          <div className="split split--wide-right">
            <Reveal className="split__media-first">
              <ImagePlaceholder
                caption="An educator in The Nest’s signature denim bib apron, kneeling to a child’s level during an activity"
                label="Hygiene-ready"
                ratio="1 / 1"
                motif="hand"
              />
            </Reveal>

            <Reveal delay={120} className="stack">
              <SectionHeading mark="shield" title="Care you can see" size="d-lg" />
              <p className="lede stitch-in" style={{ "--i": 1 }}>
                Every member of our team is background-screened and
                health-monitored, and wears The Nest&rsquo;s signature
                hygiene-ready attire throughout the day — a simple, visible sign
                of our standards in practice.
              </p>
              <div className="btn-row stitch-in" style={{ "--i": 2 }}>
                <Button href="/about/health-hygiene-nutrition" variant="primary">
                  Health, Hygiene &amp; Nutrition
                </Button>
                <Button href="/child-safety" variant="stitch">
                  Child Safety Standards
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
