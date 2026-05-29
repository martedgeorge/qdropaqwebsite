import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import {
  BUTTON_ICON_SIZE,
  REVEAL_STAGGER_BASE,
  REVEAL_STAGGER_LONG,
  REVEAL_FINAL_DELAY,
} from "@/constants/ui";

export default function HeroContent() {
  return (
    <div className="lg:col-span-7">
      <FadeIn>
        <div className="eyebrow" style={{ marginBottom: "1.4rem" }}>
          Pension Valuations &nbsp;·&nbsp; QDRO Drafting
        </div>
      </FadeIn>
      <FadeIn delay={REVEAL_STAGGER_BASE}>
        <h1
          className="display-xl"
          data-testid="hero-headline"
          style={{ maxWidth: "16ch", marginBottom: "1.6rem" }}
        >
          A measured approach to dividing retirement
          <span className="serif-italic" style={{ color: "var(--bronze-deep)" }}>
            {" "}assets.
          </span>
        </h1>
      </FadeIn>
      <FadeIn delay={REVEAL_STAGGER_LONG}>
        <p className="lead" style={{ maxWidth: "58ch", marginBottom: "2.2rem" }}>
          For three decades QDROPAQ has prepared pension valuations and Qualified
          Domestic Relations Orders for divorcing parties, mediators, and pro se
          petitioners — quietly, accurately, and one file at a time.
        </p>
      </FadeIn>
      <FadeIn delay={REVEAL_FINAL_DELAY}>
        <div className="flex flex-wrap items-center gap-3">
          <Link to="/getting-started" data-testid="hero-cta-primary" className="btn-primary">
            Begin Intake <ArrowRight size={BUTTON_ICON_SIZE} />
          </Link>
          <Link to="/our-process" data-testid="hero-cta-secondary" className="btn-ghost">
            Review Our Process
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
