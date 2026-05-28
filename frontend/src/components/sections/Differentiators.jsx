import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";

const POINTS = [
  {
    id: "specialist",
    n: "01",
    h: "One specialist, one file",
    p:
      "Your matter is handled directly by Carol Owen from intake to plan acceptance. No paralegal queue, no template hand-off.",
  },
  {
    id: "plan-first",
    n: "02",
    h: "Plan-first drafting",
    p:
      "Every order begins with the actual plan document. We read the rules before we write the order — the order then matches reality.",
  },
  {
    id: "flat-fee",
    n: "03",
    h: "Flat, predictable fees",
    p:
      "QDRO drafting at a flat $495. No hourly clocks, no surprises. See Fees & Forms for the full schedule.",
  },
];

export default function Differentiators() {
  return (
    <section style={{ paddingTop: "6rem", paddingBottom: "5rem" }}>
      <div className="container-quiet">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end"
          style={{ marginBottom: "3rem" }}
        >
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="eyebrow" style={{ marginBottom: "1rem" }}>What sets us apart</div>
              <h2 className="display-lg" style={{ maxWidth: "20ch" }}>
                A specialty practice in a field of generalists.
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-5">
            <FadeIn delay={80}>
              <p style={{ maxWidth: "44ch" }}>
                Most family-law firms outsource QDRO work. We are the people they
                outsource to — and have been since 1995.
              </p>
            </FadeIn>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: "var(--cream-line)" }}
        >
          {POINTS.map((d, i) => (
            <FadeIn key={d.id} delay={i * 80}>
              <div
                data-testid={`difference-${d.id}`}
                style={{ background: "var(--ivory)", padding: "2.2rem 1.8rem", height: "100%" }}
              >
                <div className="numeral" style={{ marginBottom: "1.2rem" }}>{d.n}</div>
                <h3
                  style={{
                    fontFamily: "Newsreader, Georgia, serif",
                    fontSize: "1.2rem",
                    marginBottom: "0.6rem",
                    color: "var(--ink)",
                  }}
                >
                  {d.h}
                </h3>
                <p style={{ fontSize: "0.95rem" }}>{d.p}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div style={{ marginTop: "2.4rem" }}>
          <Link to="/unique" data-testid="difference-learn-more" className="link-quiet">
            Read more about what makes us different →
          </Link>
        </div>
      </div>
    </section>
  );
}
