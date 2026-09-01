import Button from "../../components/Button";
import Reveal from "../../components/Reveal";
import { CTASection, PageMasthead } from "../../components/Page";
import FAQ from "../../components/FAQ";
import { faqCategories, faqs } from "../../data/faqs";
import { site } from "../../data/site";

export const metadata = {
  title: "FAQs",
  description:
    "Clear answers on health and sickness, meals and allergies, daily operations, ratios, hours, enrollment and settling in at The Nest Daycare, Umalas.",
};

export default function FaqPage() {
  return (
    <>
      <PageMasthead
        crumbs={[{ label: "FAQs" }]}
        mark="chat"
        title="Your questions, answered."
        lede="Clear answers and total transparency. Where a policy is still being finalised we say so, rather than give you a vague one."
      />

      {/* Held to the same left edge as the masthead — a centred reading column
          under a left-aligned heading reads as two different pages. */}
      <section className="section section--tight g-cream">
        <div className="wrap">
          <Reveal>
            <div style={{ maxWidth: "880px" }}>
              <FAQ faqs={faqs} categories={faqCategories} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section g-paper">
        <div className="wrap center">
          <Reveal className="stack">
            <h2 className="d-md">Can&rsquo;t find your answer?</h2>
            <p className="lede">
              Ask the admissions desk directly — we answer WhatsApp faster than
              email, and no question is too small.
            </p>
            <div className="btn-row">
              <Button href="/contact" variant="primary">
                Contact Admissions
              </Button>
              <Button href={`mailto:${site.email}`} variant="stitch" icon="mail">
                {site.email}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection ground="g-forest" />
    </>
  );
}
