import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

const steps = [
  {
    n: "01",
    h: "Intake & document review",
    p:
      "You send us the decree (or draft agreement), the plan name, and any summary plan description on hand. We read everything before we say anything.",
  },
  {
    n: "02",
    h: "Plan analysis",
    p:
      "We pull the plan’s current procedures, confirm benefit type, vesting status, and any plan-specific QDRO rules. Where useful, we contact the administrator directly.",
  },
  {
    n: "03",
    h: "Drafting",
    p:
      "Your order is custom-drafted from the actual plan document. Language is matched to the plan’s requirements, the decree, and the parties’ intent.",
  },
  {
    n: "04",
    h: "Pre-qualification",
    p:
      "The draft is submitted to the plan administrator for pre-approval before it ever reaches the court — a quiet step that prevents most rejections.",
  },
  {
    n: "05",
    h: "Court entry",
    p:
      "Once pre-qualified, the order is finalized for execution and entry. We provide clear instructions and remain on the file until the plan acknowledges receipt.",
  },
  {
    n: "06",
    h: "Plan acceptance & follow-through",
    p:
      "We track the plan’s formal qualification letter, confirm benefit setup, and remain available for follow-up questions for as long as your matter is open.",
  },
];

export default function Process() {
  return (
    <main data-testid="page-process">
      <PageHeader
        eyebrow="Our Process"
        title="A deliberate sequence, not a queue."
        lede="Every file moves through the same six considered steps. Each is handled personally — and each exists to reduce the cost, delay, and rework that follow when a QDRO is filed before the plan has reviewed it."
        testid="process-header"
      />

      <section style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="container-quiet">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--cream-line)" }}>
            {steps.map((s, i) => (
              <FadeIn key={s.n} delay={i * 50}>
                <div data-testid={`process-step-${s.n}`} style={{ background: "var(--ivory)", padding: "2.2rem 1.8rem", height: "100%" }}>
                  <div className="numeral" style={{ marginBottom: "1rem" }}>{s.n}</div>
                  <h3
                    style={{
                      fontFamily: "Newsreader, Georgia, serif",
                      fontSize: "1.2rem",
                      color: "var(--ink)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {s.h}
                  </h3>
                  <p style={{ fontSize: "0.97rem" }}>{s.p}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div style={{ marginTop: "3rem" }}>
            <Link to="/getting-started" data-testid="process-cta" className="btn-primary">
              Begin Intake
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
