import Link from "next/link";
import Motif from "./Motif";
import { MotifBand } from "./Stitch";
import { footerNav, site } from "../data/site";

/**
 * Footer — the foot of the cloth, where a sampler carries its signature.
 * The signature line is where the maker writes who made it and where.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ftr on-dark">
      <div className="wrap">
        <MotifBand
          names={["leaf", "sprout", "sun", "bowl", "book", "blocks", "bloom", "hand", "water", "house", "boat", "moon", "eyelet"]}
          size={22}
        />

        <div className="rule" aria-hidden="true" style={{ margin: "2.25rem 0 clamp(2.25rem, 4vw, 3.25rem)" }} />

        <div className="ftr__grid">
          <div className="ftr__col ftr__sig-col">
            <Link href="/" className="mark" style={{ color: "var(--cream)" }}>
              <Motif name="eyelet" size={19} className="mark__glyph" style={{ color: "var(--tan)" }} />
              <span className="mark__type">
                <span className="mark__the">the</span>
                <span className="mark__nest">Nest</span>
              </span>
            </Link>
            <p className="ftr__sig" style={{ marginTop: "1.25rem" }}>
              A second home for the first six years.
            </p>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.8125rem",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "var(--tan)",
                fontWeight: 600,
              }}
            >
              {site.location} · {site.ages}
            </p>
          </div>

          {footerNav.map((col) => (
            <div className="ftr__col" key={col.heading}>
              <h3>{col.heading}</h3>
              <ul>
                {col.links.map((l) => {
                  // A route the client has not supplied yet renders as plain
                  // text, never as a link that goes nowhere.
                  if (!l.href) {
                    return (
                      <li key={l.label}>
                        <span className="ftr__pending">
                          {l.label}
                          {l.pending ? <em>{l.pending}</em> : null}
                        </span>
                      </li>
                    );
                  }
                  const external = /^(https?:|mailto:)/.test(l.href);
                  return (
                    <li key={l.label}>
                      {external ? (
                        <a
                          href={l.href}
                          target={l.href.startsWith("http") ? "_blank" : undefined}
                          rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href}>{l.label}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="ftr__base">
          <span>
            © {year} {site.name} · {site.locationLong}
          </span>
          <span style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
