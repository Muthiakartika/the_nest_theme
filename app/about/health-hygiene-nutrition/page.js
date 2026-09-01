import Button from "../../../components/Button";
import ImagePlaceholder from "../../../components/ImagePlaceholder";
import Motif from "../../../components/Motif";
import Reveal from "../../../components/Reveal";
import { SectionHeading, StitchRule, TickList } from "../../../components/Stitch";
import { CTASection, PageMasthead } from "../../../components/Page";

export const metadata = {
  title: "Health, Hygiene & Nutrition",
  description:
    "Freshly prepared meals, allergy-aware planning, strict sanitation, and the signature denim bib apron worn by every educator at The Nest, every day.",
};

export default function HealthPage() {
  return (
    <>
      <PageMasthead
        crumbs={[
          { label: "About", href: "/about" },
          { label: "Health, Hygiene & Nutrition" },
        ]}
        mark="bowl"
        title="Healthy children learn best."
        lede="Cleanliness, nourishment, and wellbeing are foundational at The Nest — woven into every meal, every surface, and every layer of the day."
      />

      <section className="section section--tight g-cream">
        <div className="wrap">
          <div className="split">
            <Reveal className="stack-sm">
              <span aria-hidden="true" style={{ color: "var(--tan-ink)", display: "block" }}>
                <Motif name="sprout" size={32} />
              </span>
              <h2 className="d-md stitch-in" style={{ "--i": 1 }}>
                Nutrition, wellness &amp; care
              </h2>
              <StitchRule tone="strong" width="100px" />
              <p className="lede stitch-in" style={{ "--i": 2 }}>
                Freshly prepared meals, whole foods where possible, allergy-aware
                planning, and balanced nutrition.
              </p>
            </Reveal>

            <Reveal delay={120} className="stack-sm">
              <span aria-hidden="true" style={{ color: "var(--tan-ink)", display: "block" }}>
                <Motif name="water" size={32} />
              </span>
              <h2 className="d-md stitch-in" style={{ "--i": 1 }}>
                Health, hygiene &amp; safety
              </h2>
              <StitchRule tone="strong" width="100px" />
              <p className="lede stitch-in" style={{ "--i": 2 }}>
                Strict sanitation protocols, daily cleaning routines, and ongoing
                staff health monitoring.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The apron — the single most concrete, checkable proof on the site */}
      <section className="section g-forest on-dark">
        <div className="wrap">
          <div className="split split--wide-right">
            <Reveal className="split__media-first">
              <ImagePlaceholder
                caption="Close detail — The Nest’s signature denim bib apron worn over an educator’s clothes, mid-activity with a child"
                label="The apron"
                ratio="4 / 5"
                motif="hand"
                tone="forest"
              />
            </Reveal>

            <Reveal delay={120} className="stack">
              <span aria-hidden="true" style={{ color: "var(--tan)", display: "block" }}>
                <Motif name="tick" size={34} />
              </span>
              <h2 className="d-lg stitch-in" style={{ "--i": 1 }}>
                Our signature denim bib apron
              </h2>
              <StitchRule tone="strong" width="120px" />
              <p className="lede stitch-in" style={{ "--i": 2 }}>
                Every educator wears The Nest&rsquo;s signature denim bib apron — a
                durable, easily sanitised protective layer worn over regular
                clothing for sensory play, creative activities, and meal service.
                It&rsquo;s changed and cleaned regularly, giving families a simple,
                visible sign of our hygiene standards in practice.
              </p>
              <TickList
                items={[
                  "Worn by every educator, every day",
                  "Regularly laundered and sanitised",
                  "A protective layer for messy, hands-on learning",
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section g-cream">
        <div className="wrap stack-lg">
          <Reveal>
            <SectionHeading
              mark="book"
              title="Questions about care, in practice"
              size="d-lg"
              lede="The specifics families ask us most — meals, allergies, sickness, and what happens on a difficult morning."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="btn-row">
              <Button href="/faqs" variant="primary">
                Read Dietary &amp; Nutrition FAQs
              </Button>
              <Button href="/child-safety" variant="stitch">
                Child Safety &amp; Wellbeing
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection ground="g-cream-deep" />
    </>
  );
}
