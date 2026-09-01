import Button, { TextLink } from "../../components/Button";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import Motif from "../../components/Motif";
import Reveal from "../../components/Reveal";
import { MotifBand, SectionHeading, StitchRule, TickList } from "../../components/Stitch";
import { CTASection, PageMasthead } from "../../components/Page";
import { pillars } from "../../data/site";

export const metadata = {
  title: "Our Story",
  description:
    "A place to land. A place to belong. The Nest Daycare in Umalas, Bali — our vision, mission, and the three pillars that shape every day here.",
};

export default function AboutPage() {
  return (
    <>
      <PageMasthead
        crumbs={[{ label: "About" }]}
        mark="house"
        title="A place to land. A place to belong."
        lede="At The Nest, we believe every child is capable, curious, and deeply connected to the world around them. Inspired by the Reggio Emilia philosophy and grounded in the warmth of family culture, we’ve created a learning environment that feels like home — safe, welcoming, and full of possibility."
      />

      <section className="section section--tight g-cream">
        <div className="wrap">
          <Reveal>
            <ImagePlaceholder
              caption="Full-bleed editorial — The Nest campus in warm afternoon light, children and educators moving through the garden"
              label="Campus"
              ratio="21 / 9"
              motifSize={100}
              motif="leaf"
            />
          </Reveal>
        </div>
      </section>

      {/* Vision & mission — set as two statements, not two cards */}
      <section className="section g-forest on-dark">
        <div className="wrap stack-lg">
          <Reveal>
            <p className="pullquote pullquote--wide">
              &ldquo;We partner closely with families to create a village of
              support where every child feels seen, heard, valued, and empowered
              to spread their wings.&rdquo;
            </p>
          </Reveal>

          <Reveal>
            <StitchRule tone="strong" />
          </Reveal>

          <div className="split split--top">
            <Reveal className="stack-sm">
              <span aria-hidden="true" style={{ color: "var(--tan)", display: "block" }}>
                <Motif name="sun" size={30} />
              </span>
              <h2 className="d-md stitch-in" style={{ "--i": 1 }}>
                Our vision
              </h2>
              <p className="lede stitch-in" style={{ "--i": 2 }}>
                To become the most trusted early learning community in Bali —
                where children feel a deep sense of belonging and every child
                develops the confidence, curiosity and resilience to thrive.
              </p>
            </Reveal>

            <Reveal delay={120} className="stack-sm">
              <span aria-hidden="true" style={{ color: "var(--tan)", display: "block" }}>
                <Motif name="nest" size={30} />
              </span>
              <h2 className="d-md stitch-in" style={{ "--i": 1 }}>
                Our mission
              </h2>
              <p className="lede stitch-in" style={{ "--i": 2 }}>
                To provide a safe, nurturing, and inspiring second home where
                children learn, explore, and grow at their own pace — in
                partnership with every family.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The three pillars */}
      <section className="section g-cream">
        <div className="wrap stack-lg">
          <Reveal>
            <SectionHeading
              mark="sprout"
              title="Preparing wings to fly"
              size="d-lg"
              lede="Three foundations hold everything else up. They are the reason our days are shaped the way they are."
            />
          </Reveal>

          <Reveal>
            <div className="grid-3">
              {pillars.map((p, i) => (
                <div className="step stitch-in" key={p.kicker} style={{ "--i": i }}>
                  <span aria-hidden="true" style={{ color: "var(--tan-ink)" }}>
                    <Motif name={p.motif} size={32} />
                  </span>
                  <h3 className="d-sm">{p.kicker}</h3>
                  <p>
                    <strong style={{ color: "var(--forest)", fontWeight: 600 }}>
                      {p.title}
                    </strong>{" "}
                    — {p.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <MotifBand size={26} />
          </Reveal>
        </div>
      </section>

      {/* Our people */}
      <section className="section g-paper">
        <div className="wrap">
          <div className="split split--wide-right">
            <Reveal className="split__media-first">
              <ImagePlaceholder
                caption="Portrait — a Nest educator in the signature denim bib apron, warm and genuine, natural light"
                label="Our people"
                ratio="4 / 5"
                motif="hand"
              />
            </Reveal>

            <Reveal delay={120} className="stack">
              <SectionHeading
                mark="hand"
                title="Nurturers. Guides. Co-Learners."
                size="d-lg"
              />
              <p className="lede stitch-in" style={{ "--i": 1 }}>
                We don&rsquo;t simply hire for qualifications — we hire for
                character. Every educator builds trusting relationships,
                practises child-led learning, and celebrates each child&rsquo;s
                unique pace of development.
              </p>
              <div className="btn-row stitch-in" style={{ "--i": 2 }}>
                <Button href="/about/people-and-care" variant="primary">
                  Meet Our People &amp; Care
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our promise */}
      <section className="section g-cream-deep">
        <div className="wrap">
          <div className="split">
            <Reveal className="stack">
              <SectionHeading
                mark="bloom"
                title="We nurture. We inspire. We empower."
                size="d-lg"
              />
              <div className="btn-row stitch-in" style={{ "--i": 2 }}>
                <Button href="/admissions" variant="stitch" icon="download">
                  Download Centre Handbook
                </Button>
              </div>
              <p className="field__hint" style={{ maxWidth: "40ch" }}>
                Handbook PDF to be supplied by the centre.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <TickList
                items={[
                  "Safe, emotionally supportive environments",
                  "Curiosity, creativity and exploration",
                  "Confidence, independence and resilience",
                ]}
              />
              <div className="btn-row" style={{ marginTop: "2rem" }}>
                <TextLink href="/our-approach">How children learn here</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
