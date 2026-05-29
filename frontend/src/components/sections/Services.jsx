import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import FeatureCard from "@/components/cards/FeatureCard";
import { REVEAL_STAGGER_SHORT } from "@/constants/ui";

const SERVICES = [
  {
    id: "valuations",
    title: "Pension Valuations",
    body:
      "Custom actuarial valuations of defined-benefit pensions for equitable distribution, mediation, and settlement planning.",
  },
  {
    id: "drafting",
    title: "QDRO Drafting",
    body:
      "Plan-specific Qualified Domestic Relations Orders prepared from the actual plan document — not generic templates.",
  },
  {
    id: "pre-qual",
    title: "Plan Pre-Qualification",
    body:
      "Coordination with plan administrators before court entry, reducing rejections and post-decree complications.",
  },
  {
    id: "guidance",
    title: "Ongoing Guidance",
    body:
      "Direct, plain-English support from intake through plan acceptance and benefit commencement.",
  },
];

function ServicesIntro() {
  return (
    <FadeIn>
      <div className="eyebrow" style={{ marginBottom: "1.1rem" }}>What we do</div>
      <h2 className="display-lg" style={{ marginBottom: "1.2rem" }}>
        Considered work, prepared one file at a time.
      </h2>
      <p style={{ marginBottom: "1.6rem" }}>
        Every valuation and order is reviewed personally by a specialist.
        No assembly line, no junior associates learning on your matter.
      </p>
      <Link to="/about" data-testid="services-learn-more" className="link-quiet">
        More about our approach →
      </Link>
    </FadeIn>
  );
}

function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: "var(--cream-line)" }}>
      {SERVICES.map((s, i) => (
        <FadeIn key={s.id} delay={i * REVEAL_STAGGER_SHORT}>
          <FeatureCard title={s.title} body={s.body} testid={`service-${s.id}`} />
        </FadeIn>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <div className="container-quiet">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4"><ServicesIntro /></div>
          <div className="lg:col-span-8"><ServicesGrid /></div>
        </div>
      </div>
    </section>
  );
}
