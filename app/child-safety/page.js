import Button from "../../components/Button";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import Motif from "../../components/Motif";
import Reveal from "../../components/Reveal";
import { SectionHeading, StitchRule, TickList } from "../../components/Stitch";
import { CTASection, PageMasthead } from "../../components/Page";
import { safetyLayers } from "../../data/site";

export const metadata = {
  title: "Child Safety",
  description:
    "Access-controlled entry, CCTV, recorded arrivals and departures, screened staff, and pediatric first-aid certified educators. The Nest’s safety standards in full.",
};

export default function SafetyPage() {
  return (
    <>
      <PageMasthead
        crumbs={[{ label: "Child Safety" }]}
        mark="shield"
        title="Keeping every child safe, every day."
        lede="A secure, transparent campus — by design, not by exception. These are the protections we hold ourselves to, written plainly so you can check them against anywhere else you visit."
      />

      <section className="section section--tight g-cream">
        <div className="wrap">
          <Reveal>
            <ImagePlaceholder
              caption="The Nest’s calm, secure entrance — warm timber signage, access-controlled gate, planting either side"
              label="Entrance"
              ratio="21 / 9"
              motifSize={100}
              motif="shield"
            />
          </Reveal>
        </div>
      </section>

      {/* The three layers, each given real room */}
      <section className="section g-paper">
        <div className="wrap stack-lg">
          {safetyLayers.map((layer, i) => (
            <Reveal key={layer.title}>
              {/* Three parallel items, so they hold one shape. Alternating the
                  column widths without also reordering only made the set look
                  ragged; a parent scanning safety claims wants a stable
                  left edge to compare down. */}
              <div className="split split--wide-left" style={{ alignItems: "start" }}>
                <div className="stack">
                  <span aria-hidden="true" style={{ color: "var(--tan-ink)", display: "block" }}>
                    <Motif name={layer.motif} size={36} />
                  </span>
                  <h2 className="d-md stitch-in" style={{ "--i": 1 }}>
                    {layer.title}
                  </h2>
                  <StitchRule tone="strong" width="100px" />
                  <p className="lede stitch-in" style={{ "--i": 2 }}>
                    {layer.body}
                  </p>
                </div>
                <div className="stitch-in" style={{ "--i": 3 }}>
                  <TickList items={layer.points} />
                </div>
              </div>
              {i < safetyLayers.length - 1 ? (
                <StitchRule style={{ marginTop: "clamp(2.5rem, 5vw, 4rem)" }} />
              ) : null}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ongoing training */}
      <section className="section g-forest on-dark">
        <div className="wrap">
          <div className="split split--wide-left">
            <Reveal className="stack">
              <span aria-hidden="true" style={{ color: "var(--tan)", display: "block" }}>
                <Motif name="clock" size={34} />
              </span>
              <h2 className="d-lg stitch-in" style={{ "--i": 1 }}>
                Ongoing training, every term
              </h2>
              <StitchRule tone="strong" width="120px" />
              <p className="lede stitch-in" style={{ "--i": 2 }}>
                Fire evacuation, emergency response, first aid readiness and
                child-safeguarding practices — reinforced continually so
                responses stay calm and confident.
              </p>
              <div className="btn-row stitch-in" style={{ "--i": 3 }}>
                <Button href="/contact" variant="tan">
                  Book a Tour
                </Button>
                <Button href="/admissions" variant="stitch" icon="download">
                  Download Safety Policy
                </Button>
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--on-dark-faint)", maxWidth: "40ch" }}>
                Safety Policy PDF to be supplied by the centre.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <ImagePlaceholder
                caption="Educators in a termly safety briefing — practical, unposed, on campus"
                label="Training"
                ratio="4 / 3"
                motif="shield"
                tone="forest"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tight g-cream">
        <div className="wrap">
          <Reveal>
            <SectionHeading
              mark="chat"
              title="Anything we haven’t covered?"
              size="d-md"
              lede="Ask us directly, or read how families’ most common safety and wellbeing questions are answered."
            />
            <div className="btn-row" style={{ marginTop: "1.75rem" }}>
              <Button href="/faqs" variant="primary">
                Read the FAQs
              </Button>
              <Button href="/about/health-hygiene-nutrition" variant="stitch">
                Health, Hygiene &amp; Nutrition
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection ground="g-cream-deep" />
    </>
  );
}
