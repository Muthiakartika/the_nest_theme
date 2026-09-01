"use client";

import { useMemo, useState } from "react";
import Button from "./Button";
import Motif from "./Motif";
import { programs } from "../data/programs";
import {
  RATES_CONFIRMED,
  attendanceFor,
  formatAmount,
  getRate,
} from "../data/rates";

/**
 * TuitionEstimator — three steps: program, attendance, estimate.
 *
 * The figures come from data/rates.js and are placeholders until the centre
 * supplies real fees. While RATES_CONFIRMED is false the panel refuses to
 * present itself as a quote and says so in plain words, because a parent
 * reading an invented fee as a real one is worse than no estimator at all.
 */
export default function TuitionEstimator() {
  const [programSlug, setProgramSlug] = useState("");
  const [attendanceId, setAttendanceId] = useState("");

  const options = useMemo(
    () => (programSlug ? attendanceFor(programSlug) : []),
    [programSlug]
  );

  const program = programs.find((p) => p.slug === programSlug);
  const attendance = options.find((o) => o.id === attendanceId);
  const rate = programSlug && attendanceId ? getRate(programSlug, attendanceId) : null;

  const pickProgram = (slug) => {
    setProgramSlug(slug);
    // A program change can invalidate the attendance choice (Kids’ Club is
    // flexible-only), so clear it rather than carry a stale selection.
    const next = attendanceFor(slug);
    setAttendanceId(next.length === 1 ? next[0].id : "");
  };

  return (
    <div className="est">
      <div className="est__steps">
        <fieldset className="est__step" style={{ border: 0, padding: 0, margin: 0 }}>
          <legend className="est__legend">
            <span className="est__num" aria-hidden="true">
              1
            </span>
            Select a program
          </legend>
          <div className="choices choices--4">
            {programs.map((p) => (
              <label className="choice" key={p.slug}>
                <input
                  type="radio"
                  name="est-program"
                  value={p.slug}
                  checked={programSlug === p.slug}
                  onChange={() => pickProgram(p.slug)}
                />
                <span className="choice__box">
                  <span className="choice__t">{p.name}</span>
                  <span className="choice__s">{p.ageLabel}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset
          className="est__step"
          style={{ border: 0, padding: 0, margin: 0, opacity: programSlug ? 1 : 0.45 }}
          disabled={!programSlug}
        >
          <legend className="est__legend">
            <span className="est__num" aria-hidden="true">
              2
            </span>
            Select attendance
          </legend>
          {programSlug ? (
            <div className={`choices choices--${options.length > 2 ? "4" : "2"}`}>
              {options.map((o) => (
                <label className="choice" key={o.id}>
                  <input
                    type="radio"
                    name="est-attendance"
                    value={o.id}
                    checked={attendanceId === o.id}
                    onChange={() => setAttendanceId(o.id)}
                  />
                  <span className="choice__box">
                    <span className="choice__t">{o.label}</span>
                    <span className="choice__s">{o.detail}</span>
                  </span>
                </label>
              ))}
            </div>
          ) : (
            <p className="field__hint">Choose a program first.</p>
          )}
        </fieldset>
      </div>

      <div className="est__out stitched" aria-live="polite">
        <span className="est__period">
          <span className="est__num" aria-hidden="true" style={{ marginRight: "0.5rem" }}>
            3
          </span>
          Your estimate
        </span>

        {rate ? (
          <>
            <span className="est__amount">{formatAmount(rate.amount)}</span>
            <span className="est__period">{rate.period}</span>
            <p className="est__summary">
              {program.name} · {attendance.label} · {attendance.detail}
              <br />
              Ratio {program.ratio}.
            </p>
            <div className="btn-row" style={{ marginTop: "0.35rem" }}>
              <Button href="/contact" variant="tan">
                Book a Tour
              </Button>
            </div>
          </>
        ) : (
          <>
            <span className="est__amount" style={{ opacity: 0.45 }}>
              —
            </span>
            <p className="est__summary">
              Choose a program and an attendance pattern and your estimate
              appears here.
            </p>
          </>
        )}

        {!RATES_CONFIRMED ? (
          <p className="est__notice">
            <Motif name="alert" size={16} />
            <span>
              <strong style={{ color: "var(--tan)", fontWeight: 600 }}>
                Indicative only.
              </strong>{" "}
              These figures are placeholders while our published fees are being
              finalised. Your exact tuition will be confirmed in writing before
              you enroll — nothing here is a quote.
            </span>
          </p>
        ) : null}
      </div>
    </div>
  );
}
