"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal — the site’s single authored motion.
 *
 * A sampler is worked one row at a time, left to right. When a band enters
 * the viewport its running-stitch rule draws itself across, and its motifs
 * land in sequence behind it. Everything is visible by default if motion is
 * reduced or JS never runs; this only ever *adds* the stitching.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setSeen(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${seen ? " is-in" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { "--delay": `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
