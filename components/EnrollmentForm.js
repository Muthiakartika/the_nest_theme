"use client";

import { useState } from "react";
import Button from "./Button";
import Motif from "./Motif";
import {
  ErrorSummary,
  Field,
  Success,
  email as isEmail,
  required,
  validate,
} from "./Form";
import { programs } from "../data/programs";
import { attendanceFor } from "../data/rates";

/**
 * EnrollmentForm — four steps, validated one step at a time, with a review
 * screen before anything is sent.
 *
 * Submission is deliberately not wired to a backend: swap `handleSubmit` for
 * a POST to the centre’s form endpoint or CRM. Everything up to that point is
 * real, so the flow can be tested end to end today.
 */

const STEPS = ["Child", "Family", "Program", "Review"];

const initial = {
  childName: "",
  childDob: "",
  childLanguages: "",
  childNotes: "",
  parentName: "",
  parentEmail: "",
  parentPhone: "",
  relationship: "",
  program: "",
  attendance: "",
  startDate: "",
  message: "",
};

const rulesByStep = [
  {
    childName: [required("your child’s name")],
    childDob: [required("your child’s date of birth")],
  },
  {
    parentName: [required("your name")],
    parentEmail: [required("your email address"), isEmail],
    parentPhone: [required("a phone or WhatsApp number")],
  },
  {
    program: [required("the program you’re interested in")],
    startDate: [required("a preferred start date")],
  },
  {},
];

export default function EnrollmentForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (name) => (e) => {
    const v = e.target.value;
    setValues((s) => ({ ...s, [name]: v }));
    setErrors((s) => (s[name] ? { ...s, [name]: undefined } : s));
  };

  const attendanceOptions = values.program ? attendanceFor(values.program) : [];

  const next = () => {
    const found = validate(values, rulesByStep[step]);
    const clean = Object.fromEntries(Object.entries(found).filter(([, v]) => v));
    setErrors(clean);
    if (Object.keys(clean).length) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const back = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO(client): POST `values` to the centre’s enrollment endpoint or CRM.
    setSent(true);
  };

  if (sent) {
    return (
      <Success title="Thank you — your enrollment enquiry is with us.">
        Our admissions team will be in touch within two working days to arrange
        your orientation. If it&rsquo;s urgent, message the admissions desk on
        WhatsApp and mention {values.childName || "your child"}&rsquo;s name.
      </Success>
    );
  }

  const programName = programs.find((p) => p.slug === values.program)?.name;
  const attendanceName = attendanceOptions.find((a) => a.id === values.attendance)?.label;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ol className="wiz__bar" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {STEPS.map((s, i) => (
          <li
            key={s}
            className="wiz__tick"
            data-state={i < step ? "done" : i === step ? "current" : "todo"}
            aria-current={i === step ? "step" : undefined}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              {i < step ? <Motif name="tick" size={13} /> : null}
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{s}</span>
          </li>
        ))}
      </ol>

      <div className="wiz__panel">
        <ErrorSummary errors={errors} />

        {step === 0 ? (
          <>
            <h3 className="d-sm">About your child</h3>
            <div className="form-grid">
              <Field
                label="Child’s full name"
                name="childName"
                required
                value={values.childName}
                onChange={set("childName")}
                error={errors.childName}
                autoComplete="off"
              />
              <Field
                label="Date of birth"
                name="childDob"
                type="date"
                required
                value={values.childDob}
                onChange={set("childDob")}
                error={errors.childDob}
                hint="This is how we place your child in the right stage."
              />
              <Field
                label="Languages spoken at home"
                name="childLanguages"
                value={values.childLanguages}
                onChange={set("childLanguages")}
                hint="Optional. Helpful for our bilingual educators."
              />
              <Field
                label="Anything we should know?"
                name="childNotes"
                as="textarea"
                full
                value={values.childNotes}
                onChange={set("childNotes")}
                hint="Allergies, dietary needs, medical notes, or anything that helps your child settle."
              />
            </div>
          </>
        ) : null}

        {step === 1 ? (
          <>
            <h3 className="d-sm">How we reach you</h3>
            <div className="form-grid">
              <Field
                label="Your full name"
                name="parentName"
                required
                value={values.parentName}
                onChange={set("parentName")}
                error={errors.parentName}
                autoComplete="name"
              />
              <Field
                label="Relationship to child"
                name="relationship"
                as="select"
                value={values.relationship}
                onChange={set("relationship")}
                options={[
                  { value: "Mother", label: "Mother" },
                  { value: "Father", label: "Father" },
                  { value: "Guardian", label: "Guardian" },
                  { value: "Other", label: "Other" },
                ]}
              />
              <Field
                label="Email address"
                name="parentEmail"
                type="email"
                required
                value={values.parentEmail}
                onChange={set("parentEmail")}
                error={errors.parentEmail}
                autoComplete="email"
              />
              <Field
                label="Phone / WhatsApp"
                name="parentPhone"
                type="tel"
                required
                value={values.parentPhone}
                onChange={set("parentPhone")}
                error={errors.parentPhone}
                autoComplete="tel"
                hint="WhatsApp is usually the quickest way to reach us."
              />
            </div>
          </>
        ) : null}

        {step === 2 ? (
          <>
            <h3 className="d-sm">Program and start date</h3>
            <div className="form-grid">
              <Field
                label="Program"
                name="program"
                as="select"
                required
                value={values.program}
                onChange={(e) => {
                  set("program")(e);
                  setValues((s) => ({ ...s, attendance: "" }));
                }}
                error={errors.program}
                options={programs.map((p) => ({
                  value: p.slug,
                  label: `${p.name} · ${p.ageLabel}`,
                }))}
              />
              <Field
                label="Attendance"
                name="attendance"
                as="select"
                value={values.attendance}
                onChange={set("attendance")}
                disabled={!values.program}
                options={attendanceOptions.map((a) => ({
                  value: a.id,
                  label: `${a.label} — ${a.detail}`,
                }))}
                hint={values.program ? undefined : "Choose a program first."}
              />
              <Field
                label="Preferred start date"
                name="startDate"
                type="date"
                required
                value={values.startDate}
                onChange={set("startDate")}
                error={errors.startDate}
              />
              <Field
                label="Anything else?"
                name="message"
                as="textarea"
                full
                value={values.message}
                onChange={set("message")}
              />
            </div>
          </>
        ) : null}

        {step === 3 ? (
          <>
            <h3 className="d-sm">Check this over before you send it</h3>
            <div className="review">
              {[
                ["Child", values.childName],
                ["Date of birth", values.childDob],
                ["Languages at home", values.childLanguages],
                ["Notes", values.childNotes],
                ["Parent / guardian", values.parentName],
                ["Relationship", values.relationship],
                ["Email", values.parentEmail],
                ["Phone / WhatsApp", values.parentPhone],
                ["Program", programName],
                ["Attendance", attendanceName],
                ["Preferred start", values.startDate],
                ["Message", values.message],
              ]
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div className="review__row" key={k}>
                    <span className="review__k">{k}</span>
                    <span className="review__v">{v}</span>
                  </div>
                ))}
            </div>
            <p className="field__hint">
              We only use these details to arrange your child&rsquo;s place and
              orientation. See our{" "}
              <a href="/privacy-policy" style={{ color: "var(--forest)" }}>
                Privacy Policy
              </a>
              .
            </p>
          </>
        ) : null}

        <div className="wiz__nav">
          {step > 0 ? (
            <Button type="button" variant="stitch" icon={null} onClick={back}>
              Back
            </Button>
          ) : (
            <span />
          )}

          {step < STEPS.length - 1 ? (
            <Button type="button" variant="primary" onClick={next}>
              Continue
            </Button>
          ) : (
            <Button type="submit" variant="primary" icon="tick">
              Submit Enrollment
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
