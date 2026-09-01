import Button from "../components/Button";
import Motif from "../components/Motif";
import { MotifBand, StitchRule } from "../components/Stitch";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="nf g-cream">
      <div className="wrap">
        <div className="nf__inner">
          <span aria-hidden="true" style={{ color: "var(--tan-ink)" }}>
            <Motif name="nest" size={52} />
          </span>
          <h1 className="d-lg">Looks like this nest is empty.</h1>
          <StitchRule tone="strong" width="110px" />
          <p className="lede" style={{ margin: 0 }}>
            The page you&rsquo;re looking for has flown off. Let&rsquo;s get you
            back on track.
          </p>
          <div className="btn-row">
            <Button href="/" variant="primary">
              Back to Homepage
            </Button>
            <Button href="/programs" variant="stitch">
              View Programs
            </Button>
          </div>
        </div>

        <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
          <MotifBand size={24} loose />
        </div>
      </div>
    </section>
  );
}
