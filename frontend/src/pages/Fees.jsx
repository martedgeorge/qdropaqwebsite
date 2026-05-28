import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

const fees = [
  { svc: "QDRO Drafting (per plan)", price: "$495", note: "Flat fee. Includes plan pre-qualification." },
  { svc: "Pension Valuation", price: "Quoted", note: "Defined-benefit plans, marital coverture, present-value analysis." },
  { svc: "Plan Pre-Qualification Only", price: "Quoted", note: "Where a draft order already exists." },
  { svc: "Revisions & Re-Submissions", price: "Quoted", note: "Where the order has been rejected by a plan." },
];

const forms = [
  ["Intake Questionnaire", "PDF · completed at the start of every matter"],
  ["Plan Information Form", "PDF · for use when contacting the plan administrator"],
  ["Sample Engagement Letter", "PDF · the terms of our engagement"],
];

export default function Fees() {
  return (
    <main data-testid="page-fees">
      <PageHeader
        eyebrow="Fees & Forms"
        title="Plain pricing. Predictable terms."
        lede="QDROPAQ’s flat-fee model exists for a reason: pensions are stressful enough without an hourly clock running in the background. Below is what we charge and the forms we will ask you to complete."
        testid="fees-header"
      />

      <section style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="container-quiet">
          <FadeIn>
            <div className="eyebrow" style={{ marginBottom: "1rem" }}>Fee schedule</div>
            <div className="card-paper">
              <div style={{ borderBottom: "1px solid var(--cream-line)", padding: "1.2rem 1.6rem", display: "grid", gridTemplateColumns: "2fr 1fr 2fr", gap: 16, fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-mute)" }}>
                <div>Service</div>
                <div>Fee</div>
                <div className="hidden md:block">Notes</div>
              </div>
              {fees.map((f) => (
                <div
                  key={f.svc}
                  data-testid={`fee-row-${f.svc.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  style={{
                    padding: "1.4rem 1.6rem",
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 2fr",
                    gap: 16,
                    borderBottom: f !== fees[fees.length - 1] ? "1px solid var(--cream-line)" : "none",
                    alignItems: "baseline",
                  }}
                >
                  <div style={{ fontFamily: "Newsreader, Georgia, serif", fontSize: "1.05rem", color: "var(--ink)" }}>{f.svc}</div>
                  <div style={{ fontFamily: "Newsreader, Georgia, serif", fontSize: "1.05rem", color: "var(--bronze-deep)" }}>{f.price}</div>
                  <div className="hidden md:block" style={{ fontSize: "0.92rem", color: "var(--ink-soft)" }}>{f.note}</div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "1.2rem", fontSize: "0.9rem", color: "var(--ink-mute)" }}>
              All fees include direct correspondence with the specialist on your file. Court filing fees, where applicable, are not included.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="container-quiet">
          <FadeIn>
            <div className="eyebrow" style={{ marginBottom: "1rem" }}>Forms</div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--cream-line)" }}>
              {forms.map(([f, d]) => (
                <li key={f} data-testid={`form-${f.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} style={{ background: "var(--ivory)", padding: "1.8rem", listStyle: "none" }}>
                  <div style={{ fontFamily: "Newsreader, Georgia, serif", fontSize: "1.1rem", color: "var(--ink)", marginBottom: "0.4rem" }}>{f}</div>
                  <div style={{ fontSize: "0.9rem", color: "var(--ink-mute)" }}>{d}</div>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "1.4rem", fontSize: "0.9rem", color: "var(--ink-mute)" }}>
              Forms are sent directly when your matter opens. To request a copy in advance,{" "}
              <Link to="/contact" data-testid="forms-contact-link" className="link-quiet">contact Carol</Link>.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
