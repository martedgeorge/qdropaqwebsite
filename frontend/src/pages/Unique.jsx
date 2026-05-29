import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import NumberedCard from "@/components/cards/NumberedCard";

const POINTS = [
  {
    n: "01",
    h: "One specialist, one file",
    p:
      "Your matter is not passed between team members. The person reviewing your plan is the person drafting your order — and the person who will pick up when you call with a question.",
  },
  {
    n: "02",
    h: "Plan-first, never template-first",
    p:
      "Every draft begins with the actual plan document. We never reach for a template hoping it fits. The order is written to the plan, in the plan’s language.",
  },
  {
    n: "03",
    h: "Proprietary calculation",
    p:
      "Our valuation work is calculated in-house using methods developed and refined over three decades. We do not rely on third-party software for substance.",
  },
  {
    n: "04",
    h: "Pre-qualification, every time",
    p:
      "We send drafts to the plan administrator before the court enters them. It is a quiet step. It saves clients enormous time and expense downstream.",
  },
  {
    n: "05",
    h: "Flat, predictable fees",
    p:
      "QDRO drafting at a flat $495. No retainer creep, no hourly clock running while you decide. Pricing is set out in plain text on the Fees & Forms page.",
  },
  {
    n: "06",
    h: "Plain language, always",
    p:
      "We write to you the way we wish a financial specialist had written to us during a difficult decision — clearly, without jargon, and with respect for what you are going through.",
  },
];

const STAGGER = 50;

export default function Unique() {
  return (
    <main data-testid="page-unique">
      <PageHeader
        eyebrow="What makes us different"
        title="A small practice, by design."
        lede="The market for QDRO services is full of high-volume providers and law firms that outsource the work. QDROPAQ has stayed deliberately small for thirty years — because pensions, marriages, and the families they support deserve a more careful hand."
        testid="unique-header"
      />
      <section style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="container-quiet">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--cream-line)" }}>
            {POINTS.map((d, i) => (
              <FadeIn key={d.n} delay={i * STAGGER}>
                <NumberedCard
                  numeral={d.n}
                  heading={d.h}
                  body={d.p}
                  headingSize="1.15rem"
                  testid={`unique-${d.n}`}
                />
              </FadeIn>
            ))}
          </div>
          <div style={{ marginTop: "3rem", display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link to="/our-process" data-testid="unique-cta-process" className="btn-ghost">Our Process</Link>
            <Link to="/getting-started" data-testid="unique-cta-start" className="btn-primary">Begin Intake</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
