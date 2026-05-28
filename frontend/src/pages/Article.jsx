import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

export default function Article() {
  return (
    <main data-testid="page-article">
      <PageHeader
        eyebrow="Article · 6 min read"
        title="What is a QDRO?"
        lede="A Qualified Domestic Relations Order is the legal instrument that allows a retirement plan to pay a portion of one spouse’s benefit to the other after a divorce. Below is a plain-English walk-through."
        testid="article-header"
      />

      <section style={{ paddingTop: "2.5rem", paddingBottom: "5rem" }}>
        <div className="container-narrow">
          <FadeIn>
            <Para>
              A divorce decree alone cannot direct a retirement plan to pay benefits
              to anyone other than the participant. To do that, the plan needs a
              separate court order written in language it can accept — a Qualified
              Domestic Relations Order, or QDRO.
            </Para>
            <H2>What it does</H2>
            <Para>
              The QDRO identifies the participant and the alternate payee (typically
              the former spouse), specifies the portion of the benefit assigned to
              the alternate payee, and addresses the rules of the specific plan.
              When properly drafted, qualified by the plan, and entered by the
              court, it directs the plan administrator to pay benefits accordingly.
            </Para>
            <H2>Why “qualified” matters</H2>
            <Para>
              An order is only “qualified” once the plan administrator confirms it
              meets that plan’s rules. A court can sign an order tomorrow that the
              plan refuses to honor next month. Pre-qualification — sending the
              draft to the plan before court entry — is the single most effective
              way to avoid that outcome. We pre-qualify every order we draft.
            </Para>
            <H2>Defined-benefit vs. defined-contribution</H2>
            <Para>
              QDROs are written differently depending on the type of plan. A 401(k)
              QDRO assigns a dollar amount or percentage as of a date. A pension
              QDRO assigns a portion of a future benefit stream — which requires
              decisions about survivor coverage, early-retirement subsidies, and
              how the marital coverture period is measured. Mistakes in either
              category are expensive to fix later.
            </Para>
            <H2>Where QDROPAQ comes in</H2>
            <Para>
              Our role is to read the plan, draft to the plan, pre-qualify with the
              plan, and follow the order through to acceptance. We do this on a
              flat-fee basis, with one specialist on your file from start to
              finish. The result is a quietly executed order that does what the
              decree intended — without surprises after the fact.
            </Para>

            <div style={{ marginTop: "2.4rem", display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link to="/getting-started" data-testid="article-cta-start" className="btn-primary">
                Begin Intake
              </Link>
              <Link to="/our-process" data-testid="article-cta-process" className="btn-ghost">
                See our process
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

function H2({ children }) {
  return (
    <h2
      style={{
        fontFamily: "Newsreader, Georgia, serif",
        fontSize: "1.45rem",
        marginTop: "2.2rem",
        marginBottom: "0.8rem",
        color: "var(--ink)",
      }}
    >
      {children}
    </h2>
  );
}
function Para({ children }) {
  return <p style={{ marginBottom: "1.1rem", fontSize: "1.05rem", lineHeight: 1.75 }}>{children}</p>;
}
