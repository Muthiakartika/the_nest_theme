"use client";

import { useId, useMemo, useState } from "react";
import Motif from "./Motif";

/**
 * Accordion — one question, one answer.
 * The panel animates on grid-template-rows so the answer keeps its natural
 * height and stays selectable; the sign turns and fills with Gold Tan.
 */
export function AccordionItem({ q, a, pending, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className="acc__item">
      <h3 style={{ margin: 0 }}>
        <button
          type="button"
          className="acc__btn"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-btn`}
          onClick={() => setOpen((v) => !v)}
        >
          <span>{q}</span>
          <span className="acc__sign" aria-hidden="true">
            <Motif name="chevron" size={15} />
          </span>
        </button>
      </h3>
      <div
        className="acc__panel"
        data-open={open}
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
      >
        <div>
          <div className="acc__body">
            <p style={{ margin: 0 }}>{a}</p>
            {pending ? (
              <p
                style={{
                  margin: "0.9rem 0 0",
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "flex-start",
                  fontSize: "0.82rem",
                  color: "var(--ink-small)",
                  fontStyle: "italic",
                }}
              >
                <Motif name="alert" size={15} style={{ marginTop: 2, flex: "none" }} />
                {pending}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * FAQ — the parent knowledge base, filtered by category.
 * "All" is the default because a parent’s question rarely arrives pre-sorted.
 */
export default function FAQ({ faqs, categories }) {
  const [active, setActive] = useState("All");

  const shown = useMemo(
    () => (active === "All" ? faqs : faqs.filter((f) => f.category === active)),
    [faqs, active]
  );

  return (
    <div className="stack-lg">
      <div className="filters" role="group" aria-label="Filter questions by topic">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            type="button"
            className="filter"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="acc">
        {shown.map((f, i) => (
          <AccordionItem
            key={f.q}
            q={f.q}
            a={f.a}
            pending={f.pending}
            defaultOpen={i === 0}
          />
        ))}
      </div>

      <p aria-live="polite" className="field__hint">
        Showing {shown.length} of {faqs.length} questions
        {active !== "All" ? ` in ${active}` : ""}.
      </p>
    </div>
  );
}
