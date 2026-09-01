"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "./Button";
import Motif from "./Motif";
import { nav, site } from "../data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the panel on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock the page behind the open panel, and let Escape close it.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isCurrent = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`hdr${stuck ? " hdr--stuck" : ""}`}>
      <div className="wrap">
        <div className="hdr__inner">
          <Link href="/" className="mark" aria-label={`${site.name} — home`}>
            <Motif name="eyelet" size={19} className="mark__glyph" />
            <span className="mark__type">
              <span className="mark__the">the</span>
              <span className="mark__nest">Nest</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav__link"
                aria-current={isCurrent(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hdr__cta">
            <Button href="/contact" variant="primary" icon={null}>
              Book a Tour
            </Button>
            <button
              type="button"
              className="hdr__burger"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="burger__lines" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      <div className="hdr__rule" aria-hidden="true" />

      {open ? (
        <div className="mnav" id="mobile-nav">
          <div className="wrap">
            <ul className="mnav__list">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="mnav__link"
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    <Motif name="arrow" size={16} className="mnav__go" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mnav__foot">
              <Button href="/contact" variant="primary">
                Book a Tour
              </Button>
              <Button href={`mailto:${site.email}`} variant="stitch" icon="mail">
                {site.email}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
