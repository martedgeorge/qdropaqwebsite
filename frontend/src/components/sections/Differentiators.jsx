import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import NumberedCard from "@/components/cards/NumberedCard";
import { REVEAL_STAGGER_BASE } from "@/constants/ui";

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

function DifferentiatorsHeader() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end" style={{ marginBottom: "3rem" }}>
      <div className="lg:col-span-7">
        <FadeIn>
          <div className="eyebrow" style={{ marginBottom: "1rem" }}>What sets us apart</div>
          <h2 className="display-lg" style={{ maxWidth: "20ch" }}>
            A specialty practice in a field of generalists.
          </h2>
        </FadeIn>
      </div>
      <div className="lg:col-span-5">
        <FadeIn delay={REVEAL_STAGGER_BASE}>
          <p style={{ maxWidth: "44ch" }}>
            Most family-law firms outsource QDRO work. We are the people they
            outsource to — and have been since 1995.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}

function DifferentiatorsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--cream-line)" }}>
      {POINTS.map((d, i) => (
        <FadeIn key={d.id} delay={i * REVEAL_STAGGER_BASE}>
          <NumberedCard numeral={d.n} heading={d.h} body={d.p} testid={`difference-${d.id}`} />
        </FadeIn>
      ))}
    </div>
  );
}

export default function Differentiators() {
  return (
    <section style={{ paddingTop: "6rem", paddingBottom: "5rem" }}>
      <div className="container-quiet">
        <DifferentiatorsHeader />
        <DifferentiatorsGrid />
        <div style={{ marginTop: "2.4rem" }}>
          <Link to="/unique" data-testid="difference-learn-more" className="link-quiet">
            Read more about what makes us different →
          </Link>
        </div>
      </div>
    </section>
  );
}
