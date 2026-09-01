import Button, { TextLink } from "../../components/Button";
import Motif from "../../components/Motif";
import Reveal from "../../components/Reveal";
import { MotifBand, SectionHeading, StitchRule } from "../../components/Stitch";
import { CTASection, PageMasthead } from "../../components/Page";
import TuitionEstimator from "../../components/TuitionEstimator";
import EnrollmentForm from "../../components/EnrollmentForm";
import { enrollmentSteps } from "../../data/site";

export const metadata = {
  title: "Admissions & Enrollment",
  description:
    "Transparent, seamless care for modern families. Estimate your tuition, walk the four-step enrollment journey, and submit your enrollment to The Nest online.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageMasthead
        crumbs={[{ label: "Admissions" }]}
        mark="book"
        title="Transparent, seamless care for modern families."
        lede="No hidden steps and no guesswork. Estimate what a place would cost, see exactly how joining works, and start your enrollment here — all before you speak to anyone."
      >
        <div className="btn-row" style={{ marginTop: "1.75rem" }}>
          <Button href="#estimate" variant="primary" icon="chevron">
            Estimate your tuition
          </Button>
          <Button href="#enroll" variant="stitch" icon="chevron">
            Submit enrollment online
          </Button>
        </div>
      </PageMasthead>

      {/* Fees */}
      <section className="section g-cream" id="estimate">
        <div className="wrap stack-lg">
          <Reveal>
            <SectionHeading
              mark="bowl"
              title="Estimate your tuition"
              size="d-lg"
              lede="Three steps. Choose the stage your child is at and the pattern that suits your week."
            />
          </Reveal>
          <Reveal delay={80}>
            <TuitionEstimator />
          </Reveal>
        </div>
      </section>

      {/* The journey — a sequence where the order genuinely matters */}
      <section className="section g-forest on-dark">
        <div className="wrap stack-lg">
          <Reveal>
            <SectionHeading
              mark={null}
              title="Your enrollment journey"
              size="d-lg"
              lede="Four steps, in this order. Most families are through the first two inside a week."
            />
          </Reveal>

          <Reveal>
            <div className="steps">
              {enrollmentSteps.map((s, i) => (
                <div className="step stitch-in" key={s.title} style={{ "--i": i }}>
                  <span className="step__n">STEP {String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true" style={{ color: "var(--tan)" }}>
                    <Motif name={s.motif} size={28} />
                  </span>
                  <span className="step__t">{s.title}</span>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="btn-row">
              <Button href="/contact" variant="tan">
                Start with step one — book a tour
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Enrollment form */}
      <section className="section g-paper" id="enroll">
        <div className="wrap">
          <div className="split split--wide-right" style={{ alignItems: "start" }}>
            <Reveal className="stack">
              <SectionHeading
                mark={null}
                title="Submit your enrollment"
                size="d-lg"
                lede="Everything below is saved as you go through the steps, and you’ll see it all again before anything is sent."
              />
              <StitchRule tone="strong" />
              <div className="stack-sm">
                <h3 className="d-sm">Documents</h3>
                <div className="btn-row" style={{ flexDirection: "column", alignItems: "stretch" }}>
                  <Button href="#" variant="stitch" icon="download">
                    Download Centre Handbook
                  </Button>
                  <Button href="#" variant="stitch" icon="download">
                    Download Safety Policy
                  </Button>
                </div>
                <p className="field__hint">
                  Handbook and Safety Policy PDFs to be supplied by the centre.
                </p>
              </div>
              <StitchRule />
              <TextLink href="/faqs">Still have questions? Read the FAQs</TextLink>
            </Reveal>

            <Reveal delay={120}>
              <EnrollmentForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tight g-cream-deep">
        <div className="wrap">
          <MotifBand size={26} loose />
        </div>
      </section>

      <CTASection ground="g-cream" />
    </>
  );
}
