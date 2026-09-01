"use client";

import { useState } from "react";
import Button from "./Button";
import {
  ErrorSummary,
  Field,
  Success,
  email as isEmail,
  notPast,
  required,
  validate,
} from "./Form";
import { programs } from "../data/programs";

/**
 * TourForm — the site’s primary conversion.
 *
 * Kept deliberately short: a tour request should never feel like an
 * application. Five fields, one optional message.
 *
 * TODO(client): POST `values` to the centre’s endpoint, or replace this whole
 * block with the chosen scheduler embed once a vendor is picked.
 */

const initial = {
  name: "",
  email: "",
  phone: "",
  program: "",
  date: "",
  message: "",
};

const rules = {
  name: [required("your name")],
  email: [required("your email address"), isEmail],
  phone: [required("a phone or WhatsApp number")],
  date: [notPast],
};

export default function TourForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (name) => (e) => {
    const v = e.target.value;
    setValues((s) => ({ ...s, [name]: v }));
    setErrors((s) => (s[name] ? { ...s, [name]: undefined } : s));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values, rules);
    const clean = Object.fromEntries(Object.entries(found).filter(([, v]) => v));
    setErrors(clean);
    if (Object.keys(clean).length) return;
    setSent(true);
  };

  if (sent) {
    return (
      <Success title="Your tour request is with us.">
        We&rsquo;ll confirm your visit by email or WhatsApp within one working
        day. Bring your child if you can — seeing them in the space tells you
        more than we ever could.
      </Success>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="stack">
      <ErrorSummary errors={errors} />

      <div className="form-grid">
        <Field
          label="Your name"
          name="name"
          required
          value={values.name}
          onChange={set("name")}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          label="Phone / WhatsApp"
          name="phone"
          type="tel"
          required
          value={values.phone}
          onChange={set("phone")}
          error={errors.phone}
          autoComplete="tel"
        />
        <Field
          label="Email address"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={set("email")}
          error={errors.email}
          autoComplete="email"
        />
        <Field
          label="Which program?"
          name="program"
          as="select"
          value={values.program}
          onChange={set("program")}
          options={programs.map((p) => ({
            value: p.slug,
            label: `${p.name} · ${p.ageLabel}`,
          }))}
          hint="Not sure? Leave it blank and we’ll help you work it out."
        />
        <Field
          label="Preferred visit date"
          name="date"
          type="date"
          required
          value={values.date}
          onChange={set("date")}
          error={errors.date}
          hint="Mornings show the centre at its busiest and most honest."
        />
        <Field
          label="Anything you’d like us to know?"
          name="message"
          as="textarea"
          full
          value={values.message}
          onChange={set("message")}
        />
      </div>

      <div className="btn-row">
        <Button type="submit" variant="primary">
          Request a Tour
        </Button>
      </div>

      <p className="field__hint">
        We only use these details to arrange your visit. See our{" "}
        <a href="/privacy-policy" style={{ color: "var(--forest)" }}>
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
