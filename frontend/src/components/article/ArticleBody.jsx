import React from "react";

export function ArticleHeading({ children }) {
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

export function ArticleParagraph({ children }) {
  return (
    <p style={{ marginBottom: "1.1rem", fontSize: "1.05rem", lineHeight: 1.75 }}>{children}</p>
  );
}

const SECTIONS = [
  {
    id: "lede",
    h: null,
    p:
      "A divorce decree alone cannot direct a retirement plan to pay benefits to anyone other than the participant. To do that, the plan needs a separate court order written in language it can accept — a Qualified Domestic Relations Order, or QDRO.",
  },
  {
    id: "what-it-does",
    h: "What it does",
    p:
      "The QDRO identifies the participant and the alternate payee (typically the former spouse), specifies the portion of the benefit assigned to the alternate payee, and addresses the rules of the specific plan. When properly drafted, qualified by the plan, and entered by the court, it directs the plan administrator to pay benefits accordingly.",
  },
  {
    id: "why-qualified",
    h: "Why “qualified” matters",
    p:
      "An order is only “qualified” once the plan administrator confirms it meets that plan’s rules. A court can sign an order tomorrow that the plan refuses to honor next month. Pre-qualification — sending the draft to the plan before court entry — is the single most effective way to avoid that outcome. We pre-qualify every order we draft.",
  },
  {
    id: "db-vs-dc",
    h: "Defined-benefit vs. defined-contribution",
    p:
      "QDROs are written differently depending on the type of plan. A 401(k) QDRO assigns a dollar amount or percentage as of a date. A pension QDRO assigns a portion of a future benefit stream — which requires decisions about survivor coverage, early-retirement subsidies, and how the marital coverture period is measured. Mistakes in either category are expensive to fix later.",
  },
  {
    id: "where-we-come-in",
    h: "Where QDROPAQ comes in",
    p:
      "Our role is to read the plan, draft to the plan, pre-qualify with the plan, and follow the order through to acceptance. We do this on a flat-fee basis, with one specialist on your file from start to finish. The result is a quietly executed order that does what the decree intended — without surprises after the fact.",
  },
];

export default function ArticleBody() {
  return (
    <>
      {SECTIONS.map((s) => (
        <React.Fragment key={s.id}>
          {s.h && <ArticleHeading>{s.h}</ArticleHeading>}
          <ArticleParagraph>{s.p}</ArticleParagraph>
        </React.Fragment>
      ))}
    </>
  );
}
