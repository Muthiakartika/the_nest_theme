import Button, { TextLink } from "../components/Button";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Motif from "../components/Motif";
import Reveal from "../components/Reveal";
import { MotifBand, SectionHeading, StitchRule } from "../components/Stitch";
import { ProgramBand } from "../components/ProgramCard";
import { CTASection, PendingSlot } from "../components/Page";
import { programs } from "../data/programs";
import { dailyLife, dayAtTheNest, harmony, trustPoints } from "../data/site";

export const metadata = {
  title: "The Nest Daycare — A second home for the first six years",
  description:
    "A warm, nature-led daycare in Umalas, Bali for children aged 1–6. Reggio Emilia-inspired learning, educator ratios from 1:3, and a secure campus. Book a tour.",
};

const ratioStrip = [
  { fig: "1:3", lab: "Infants", cap: "One educator per three — our lowest ratio, where children need us most." },
  { fig: "1:5", lab: "Toddlers", cap: "One educator per five, as independence begins to grow." },
  { fig: "1:8", lab: "Preschool", cap: "Collaborative project work inside a strong peer community." },
  { fig: "7–7", lab: "Kids’ Club", cap: "Flexible, play-based care, Monday to Sunday." },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------
          THE FIRST ROW — worked tight and even, the way a sampler opens
          --------------------------------------------------------------- */}
      <section className="hero">
        <div className="wrap">
          <MotifBand size={25} />

          <div className="hero__grid">
            <Reveal className="stack" delay={80}>
              <h1 className="stitch-in">
                A second home for the{" "}
                <span className="underscored">first six years.</span>
              </h1>
              <StitchRule tone="strong" width="150px" />
              <p className="hero__lede stitch-in" style={{ "--i": 1 }}>
                A warm, nature-led daycare in Umalas built around gentle
                routines, curious minds, and a sense of home — inspired by
                Reggio Emilia and the Balinese belief that a child grows best in
                harmony.
              </p>
              <div className="btn-row stitch-in" style={{ "--i": 2 }}>
                <Button href="/contact" variant="primary">
                  Book a Tour
                </Button>
                <Button href="/programs" variant="stitch">
                  Explore Programs
                </Button>
              </div>
            </Reveal>

            <Reveal className="hero__media" delay={220}>
              <ImagePlaceholder
                caption="A child mid-laugh, barefoot on timber decking, reaching for a leaf — golden-hour light, low camera"
                label="Hero image"
                ratio="4 / 5"
                motif="leaf"
              />
              <ImagePlaceholder
                className="hero__inset"
                caption="An educator crouched to a child’s eye level, both looking at something in the grass"
                label="Inset"
                ratio="1 / 1"
                motif="hand"
                tone="tan"
              />
            </Reveal>
          </div>

          <Reveal>
            <StitchRule tone="strong" />
            <div className="ratios">
              {ratioStrip.map((r, i) => (
                <div className="ratios__cell stitch-in" key={r.lab} style={{ "--i": i }}>
                  <span className="ratios__fig">{r.fig}</span>
                  <span className="ratios__lab">{r.lab}</span>
                  <span className="ratios__cap">{r.cap}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          PHILOSOPHY — the dark band. Two named pedagogies, held together.
          --------------------------------------------------------------- */}
      <section className="section g-forest on-dark">
        <div className="wrap">
          <div className="split split--wide-left" style={{ alignItems: "start" }}>
            <Reveal className="stack">
              <span aria-hidden="true" style={{ color: "var(--tan)", display: "block" }}>
                <Motif name="nest" size={34} />
              </span>
              <h2 className="d-lg stitch-in" style={{ "--i": 1 }}>
                Nurture · Embrace · Inspire
              </h2>
              <StitchRule tone="strong" width="120px" />
              <p className="lede stitch-in" style={{ "--i": 2 }}>
                Inspired by the Balinese belief that a child grows best in
                harmony — with family, community, and nature — paired with a
                Reggio Emilia-inspired approach where the environment itself is
                a child&rsquo;s &ldquo;third teacher.&rdquo;
              </p>
              <div className="btn-row stitch-in" style={{ "--i": 3 }}>
                <Button href="/our-approach" variant="tan">
                  Explore Our Approach
                </Button>
              </div>
            </Reveal>

            <Reveal delay={140} className="stack">
              {harmony.map((h, i) => (
                <div
                  key={h.title}
                  className="stitch-in"
                  style={{
                    "--i": i,
                    display: "grid",
                    gridTemplateColumns: "34px minmax(0, 1fr)",
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
                    <Motif name={h.motif} size={28} />
                  </span>
                  <span>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--f-display)",
                        fontSize: "1.32rem",
                        fontWeight: 500,
                        letterSpacing: "-0.018em",
                        color: "var(--cream)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {h.title}
                    </span>
                    <span style={{ fontSize: "0.92rem", color: "var(--on-dark-soft)" }}>
                      {h.body}
                    </span>
                  </span>
                </div>
              ))}
              <p className="pullquote pullquote--wide" style={{ marginTop: "0.5rem" }}>
                &ldquo;A village of support where every child feels seen, heard,
                valued, and empowered to spread their wings.&rdquo;
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          A GLIMPSE INSIDE — the shape of an ordinary day
          --------------------------------------------------------------- */}
      <section className="section g-cream">
        <div className="wrap stack-lg">
          <div className="split" style={{ alignItems: "end" }}>
            <Reveal>
              <SectionHeading mark={null} title="A day at The Nest" size="d-lg" />
            </Reveal>
            <Reveal delay={100}>
              <p className="lede stitch-in">
                Gentle routines a child can predict, and inside them, room to
                follow whatever catches their attention that morning.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <ImagePlaceholder
              caption="Wide campus view — timber, greenery and open shade, children moving between indoor and outdoor spaces"
              label="Campus"
              ratio="3 / 1"
              motif="house"
              motifSize={96}
            />
          </Reveal>

          <Reveal>
            <div className="moments">
              {dayAtTheNest.map((m, i) => (
                <div className="moment motif-cell" key={m.label} style={{ "--i": i }}>
                  <Motif name={m.motif} size={30} />
                  <span className="moment__t">{m.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          PROGRAMS — four bands, worked at increasing looseness
          --------------------------------------------------------------- */}
      <section className="section g-paper">
        <div className="wrap stack-lg">
          <div className="split" style={{ alignItems: "end" }}>
            <Reveal>
              <SectionHeading
                mark="sprout"
                title="Learning designed for every stage of childhood"
                size="d-lg"
              />
            </Reveal>
            <Reveal delay={100}>
              <p className="lede stitch-in">
                From first connections to school readiness, each stage supports
                growth through nurturing relationships and purposeful
                environments — one continuous journey, not four separate rooms.
              </p>
            </Reveal>
          </div>

          <div>
            {programs.map((p, i) => (
              <ProgramBand key={p.slug} program={p} index={i} compact />
            ))}
          </div>

          <Reveal>
            <div
              className="split"
              style={{ alignItems: "center", gap: "1.5rem clamp(2rem, 5vw, 5rem)" }}
            >
              <p className="pullquote pullquote--wide">
                Not sure which stage fits your child?
              </p>
              <div className="btn-row">
                <Button href="/admissions" variant="stitch">
                  Family Partnership &amp; Next Steps
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          TRUST — the protective questions, answered plainly
          --------------------------------------------------------------- */}
      <section className="section g-cream-deep">
        <div className="wrap">
          <div className="split split--wide-right">
            <Reveal className="stack">
              <SectionHeading
                mark={null}
                title="A place you can trust, a place they’ll love"
                size="d-lg"
              />
              <ImagePlaceholder
                caption="The Nest’s calm, secure entrance — warm timber signage, access-controlled gate"
                label="Entrance"
                ratio="4 / 3"
                motif="shield"
                style={{ marginTop: "0.5rem" }}
              />
            </Reveal>

            <Reveal delay={120}>
              <div className="trust">
                {trustPoints.map((t, i) => (
                  <div className="trust__item stitch-in" key={t.title} style={{ "--i": i }}>
                    <span className="trust__mark" aria-hidden="true">
                      <Motif name={t.motif} size={34} />
                    </span>
                    <span>
                      <span className="trust__t" style={{ display: "block" }}>
                        {t.title}
                      </span>
                      <p className="trust__b">{t.body}</p>
                    </span>
                  </div>
                ))}
              </div>
              <div className="btn-row" style={{ marginTop: "2rem" }}>
                <TextLink href="/child-safety">Read our safety standards</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          DAILY LIFE — patches basted at varied crops
          --------------------------------------------------------------- */}
      <section className="section g-cream">
        <div className="wrap stack-lg">
          <Reveal>
            {/* Centred, no mark — the gallery below is the subject, and this
                breaks the left-aligned lockup running down the page. */}
            <SectionHeading
              mark={null}
              align="center"
              title="Moments from The Nest"
              size="d-lg"
              lede="Ordinary days, which is rather the point."
            />
          </Reveal>

          <Reveal>
            <div className="gallery">
              {dailyLife.map((g, i) => (
                <div className="stitch-in" key={g.caption} style={{ "--i": i }}>
                  <ImagePlaceholder
                    caption={g.caption}
                    label={g.label}
                    ratio={g.ratio}
                    motif={g.motif}
                    tone={i % 3 === 1 ? "tan" : "paper"}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          FAMILIES — honestly empty until the client supplies real words
          --------------------------------------------------------------- */}
      <section className="section g-forest on-dark">
        <div className="wrap stack-lg">
          <Reveal>
            <SectionHeading
              mark="hand"
              title="Loved by our Nest families"
              size="d-lg"
              lede="Real words from real families will sit here."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="grid-3">
              {[0, 1, 2].map((i) => (
                <div className="stitch-in" key={i} style={{ "--i": i }}>
                  <PendingSlot note="Testimonial pending">
                    Parent testimonial — to be supplied by the centre, with the
                    parent&rsquo;s name and their child&rsquo;s programme.
                  </PendingSlot>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection ground="g-cream" />
    </>
  );
}
