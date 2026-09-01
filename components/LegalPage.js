import Motif from "./Motif";
import Reveal from "./Reveal";
import { StitchRule } from "./Stitch";
import { PageMasthead } from "./Page";
import { site } from "../data/site";

/**
 * LegalPage — one template governing both Privacy Policy and Terms of Use.
 *
 * The centre has not supplied legal copy, and legal copy is not ours to
 * invent: a fabricated privacy policy is a false statement about how a
 * family’s data is handled. Each section therefore ships as a clearly marked
 * slot with a note on what belongs in it, so counsel can fill it in without
 * touching the layout.
 */
export default function LegalPage({ title, intro, sections, crumbLabel }) {
  return (
    <>
      <PageMasthead
        crumbs={[{ label: crumbLabel || title }]}
        mark="book"
        title={title}
        lede={intro}
        band={false}
      />

      <section className="section section--tight g-cream">
        <div className="wrap-narrow">
          <Reveal>
            <div
              className="pending stitched"
              style={{ marginBottom: "clamp(2.5rem, 5vw, 3.5rem)" }}
            >
              <span className="chip chip--outline">
                <Motif name="alert" size={12} />
                Awaiting legal copy
              </span>
              <p className="pending__q" style={{ fontStyle: "normal", color: "var(--ink-soft)" }}>
                The sections below are structured and styled, ready for the
                centre&rsquo;s own wording. Legal text is to be supplied by the
                client or their counsel and has deliberately not been drafted
                here.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="longform">
              {sections.map((s, i) => (
                <div key={s.heading} className="stitch-in" style={{ "--i": i }}>
                  <h2>
                    {i + 1}. {s.heading}
                  </h2>
                  <p style={{ color: "var(--ink-small)" }}>{s.note}</p>
                  {i < sections.length - 1 ? (
                    <StitchRule style={{ marginTop: "2.25rem" }} />
                  ) : null}
                </div>
              ))}

              <StitchRule tone="strong" style={{ marginTop: "3rem" }} />

              <p
                style={{
                  marginTop: "1.5rem",
                  fontSize: "0.85rem",
                  color: "var(--ink-small)",
                }}
              >
                Questions about this page? Write to{" "}
                <a href={`mailto:${site.email}`} style={{ color: "var(--forest)" }}>
                  {site.email}
                </a>
                .
                <br />
                Last updated: [date to be set on publication] · {site.name},{" "}
                {site.locationLong}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
