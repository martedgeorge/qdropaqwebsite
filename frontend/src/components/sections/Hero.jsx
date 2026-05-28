import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section style={{ paddingTop: "5.5rem", paddingBottom: "4rem" }}>
      <div className="container-quiet grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <FadeIn>
            <div className="eyebrow" style={{ marginBottom: "1.4rem" }}>
              Pension Valuations &nbsp;·&nbsp; QDRO Drafting
            </div>
          </FadeIn>
          <FadeIn delay={80}>
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
          <FadeIn delay={140}>
            <p className="lead" style={{ maxWidth: "58ch", marginBottom: "2.2rem" }}>
              For three decades QDROPAQ has prepared pension valuations and
              Qualified Domestic Relations Orders for divorcing parties, mediators,
              and pro se petitioners — quietly, accurately, and one file at a time.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/getting-started" data-testid="hero-cta-primary" className="btn-primary">
                Begin Intake <ArrowRight size={16} />
              </Link>
              <Link to="/our-process" data-testid="hero-cta-secondary" className="btn-ghost">
                Review Our Process
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-5">
          <FadeIn delay={160}>
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Professional advisors in conversation"
                data-testid="hero-image"
                style={{
                  width: "100%",
                  height: 460,
                  objectFit: "cover",
                  borderRadius: 3,
                  filter: "saturate(0.9) contrast(0.96)",
                }}
              />
              <div
                className="card-paper"
                style={{
                  position: "absolute",
                  bottom: -28,
                  left: -28,
                  padding: "1.1rem 1.3rem",
                  maxWidth: 280,
                  boxShadow: "0 18px 40px -28px rgba(30,42,55,0.25)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--ink-mute)",
                  }}
                >
                  Authored Standards
                </div>
                <div
                  style={{
                    fontFamily: "Newsreader, Georgia, serif",
                    fontSize: "1.05rem",
                    color: "var(--ink)",
                    marginTop: "0.35rem",
                    lineHeight: 1.35,
                  }}
                >
                  Benchmark works by Mark K. Altschuler, QDROPAQ Actuary.
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
