import Motif from "../../components/Motif";
import Reveal from "../../components/Reveal";
import { SectionHeading, StitchRule } from "../../components/Stitch";
import { PageMasthead } from "../../components/Page";
import TourForm from "../../components/TourForm";
import { site } from "../../data/site";

export const metadata = {
  title: "Contact & Book a Tour",
  description:
    "Visit The Nest in Umalas, Bali. Request a tour, message the admissions desk on WhatsApp, or email hello@thenestdaycare.com.",
};

const details = [
  {
    motif: "pin",
    label: "Visit our campus",
    value: site.locationLong,
    href: null,
    pending: "Street address to be supplied",
  },
  {
    motif: "mail",
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    motif: "chat",
    label: "WhatsApp",
    value: "Admissions desk",
    href: site.whatsapp,
    pending: "Number to be supplied",
  },
  {
    motif: "clock",
    label: "Opening hours",
    value: "Mon–Fri 8:30am–2:30pm · Kids’ Club Mon–Sun 7:00am–7:00pm",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageMasthead
        crumbs={[{ label: "Contact" }]}
        mark="house"
        title="Let’s begin the journey."
        lede="We’d love to meet your family and show you around. Come on a weekday morning if you can — that’s when the centre is at its busiest and most honest."
      />

      <section className="section section--tight g-cream">
        <div className="wrap">
          <div className="split split--wide-left" style={{ alignItems: "start" }}>
            <Reveal className="stack">
              <SectionHeading
                mark="pin"
                title="Request a tour"
                size="d-md"
              />
              <TourForm />
            </Reveal>

            <Reveal delay={120} className="stack">
              <h2 className="d-md">Reach us directly</h2>
              <StitchRule tone="strong" width="90px" />
              <div className="contact-list">
                {details.map((d) => {
                  const Inner = (
                    <>
                      <Motif name={d.motif} size={22} aria-hidden="true" />
                      <span>
                        <span className="contact-row__l">{d.label}</span>
                        <span className="contact-row__v">{d.value}</span>
                        {/* The note sits on the row it excuses, not four rows
                            away, so this can never read as a working route. */}
                        {d.pending ? (
                          <span className="chip chip--outline" style={{ marginTop: "0.45rem" }}>
                            <Motif name="alert" size={12} />
                            {d.pending}
                          </span>
                        ) : null}
                      </span>
                    </>
                  );
                  return d.href ? (
                    <a
                      className="contact-row"
                      key={d.label}
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div className="contact-row" key={d.label}>
                      {Inner}
                    </div>
                  );
                })}
              </div>
              <p className="field__hint">
                Until the phone line is listed, email reaches the admissions
                desk fastest.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Scheduler + map slots */}
      <section className="section g-paper">
        <div className="wrap stack-lg">
          <div className="split" style={{ alignItems: "end" }}>
            <Reveal>
              <SectionHeading mark={null} title="Or pick a time yourself" size="d-lg" />
            </Reveal>
            <Reveal delay={110}>
              <p className="lede stitch-in">
                Once our booking calendar is connected you&rsquo;ll be able to
                choose a slot here without waiting for a reply.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="split">
              <div className="embed stitched">
                <div className="embed__inner">
                  <Motif name="clock" size={38} style={{ color: "var(--tan-ink)" }} />
                  <span className="embed__t">Booking calendar</span>
                  <p>
                    Embed slot — drop the centre&rsquo;s chosen scheduler here
                    (Calendly, Cal.com, or the centre&rsquo;s own booking tool).
                    Sized and styled to sit inside this frame.
                  </p>
                </div>
              </div>

              <div className="embed stitched">
                <div className="embed__inner">
                  <Motif name="pin" size={38} style={{ color: "var(--tan-ink)" }} />
                  <span className="embed__t">Umalas, Bali campus</span>
                  <p>
                    Embed slot — Google Maps iframe, centred on the campus, with
                    directions from Canggu and Seminyak.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* No motif band here — the footer immediately below carries one, and two
          identical worked rows back to back read as a mistake. */}
      <section className="section section--tight g-forest on-dark">
        <div className="wrap center">
          <Reveal>
            <span aria-hidden="true" style={{ color: "var(--tan)", display: "block", marginBottom: "1.5rem" }}>
              <Motif name="nest" size={34} style={{ marginInline: "auto" }} />
            </span>
            <p className="pullquote pullquote--wide" style={{ marginInline: "auto" }}>
              &ldquo;A second home for the first six years.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
