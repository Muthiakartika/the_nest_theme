"use client";

import { useId } from "react";
import Motif from "./Motif";

/**
 * Form primitives.
 *
 * Errors name the problem and the recovery, in the site’s own voice — never
 * "Invalid input". Every control is labelled, every error is wired to its
 * field with aria-describedby, and the invalid state is carried by a 2px ring
 * plus text, never by colour alone.
 */

export function Field({
  label,
  name,
  type = "text",
  as = "input",
  required = false,
  hint,
  error,
  options,
  full = false,
  ...rest
}) {
  const id = useId();
  const describedBy = [hint ? `${id}-hint` : null, error ? `${id}-err` : null]
    .filter(Boolean)
    .join(" ");

  const shared = {
    id,
    name,
    className: "field__ctrl",
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": describedBy || undefined,
    required,
    ...rest,
  };

  return (
    <div className={`field${error ? " field--error" : ""}${full ? " field--full" : ""}`}>
      <label className="field__label" htmlFor={id}>
        {label}
        {required ? (
          <span className="field__req" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>

      {as === "select" ? (
        <select {...shared}>
          <option value="">Please choose…</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : as === "textarea" ? (
        <textarea {...shared} />
      ) : (
        <input type={type} {...shared} />
      )}

      {hint ? (
        <span className="field__hint" id={`${id}-hint`}>
          {hint}
        </span>
      ) : null}

      {error ? (
        <span className="field__err" id={`${id}-err`}>
          <Motif name="alert" size={15} style={{ flex: "none", marginTop: 1 }} />
          {error}
        </span>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ rules */

/**
 * `label` is written as a noun phrase — "your child’s name", "a phone or
 * WhatsApp number" — so the message reads correctly whether the field is a
 * contact detail or not.
 */
export const required = (label) => (v) =>
  v && String(v).trim() ? null : `Please add ${label}.`;

export const email = (v) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || "").trim())
    ? null
    : "That doesn’t look like a complete email address — check for a typo.";

export const notPast = (v) => {
  if (!v) return "Choose a date you’d like to visit.";
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(v) >= today
    ? null
    : "That date has already passed — please pick a day from today onwards.";
};

/** Runs a { field: [rule, ...] } map over values and returns an error map. */
export function validate(values, rules) {
  const errors = {};
  Object.entries(rules).forEach(([key, list]) => {
    for (const rule of list) {
      const message = rule(values[key]);
      if (message) {
        errors[key] = message;
        break;
      }
    }
  });
  return errors;
}

/** A short, plain summary of everything that still needs fixing. */
export function ErrorSummary({ errors }) {
  const list = Object.values(errors);
  if (!list.length) return null;
  return (
    <div
      className="field__err"
      role="alert"
      style={{
        padding: "0.9rem 1.1rem",
        background: "rgba(122, 47, 38, 0.07)",
        borderRadius: 2,
        alignItems: "flex-start",
      }}
    >
      <Motif name="alert" size={16} style={{ flex: "none", marginTop: 2 }} />
      <span>
        {list.length === 1
          ? "One thing to fix before we can send this."
          : `${list.length} things to fix before we can send this.`}
      </span>
    </div>
  );
}

/** The shared post-submit state. */
export function Success({ title, children }) {
  return (
    <div className="done stitched" role="status">
      <span className="done__mark" aria-hidden="true">
        <Motif name="tick" size={26} />
      </span>
      <h3 className="d-md">{title}</h3>
      <p style={{ color: "var(--ink-soft)", margin: 0, maxWidth: "44ch" }}>{children}</p>
    </div>
  );
}
