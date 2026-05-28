import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "Pension Valuations",
    body:
      "Custom actuarial valuations of defined-benefit pensions for equitable distribution, mediation, and settlement planning.",
  },
  {
    title: "QDRO Drafting",
    body:
      "Plan-specific Qualified Domestic Relations Orders prepared from the actual plan document — not generic templates.",
  },
  {
    title: "Plan Pre-Qualification",
    body:
      "Coordination with plan administrators before court entry, reducing rejections and post-decree complications.",
  },
  {
    title: "Ongoing Guidance",
    body:
      "Direct, plain-English support from intake through plan acceptance and benefit commencement.",
  },
];

const differences = [
  {
    n: "01",
    h: "One specialist, one file",
    p:
      "Your matter is handled directly by Carol Owen from intake to plan acceptance. No paralegal queue, no template hand-off.",
  },
  {
    n: "02",
    h: "Plan-first drafting",
    p:
      "Every order begins with the actual plan document. We read the rules before we write the order — the order then matches reality.",
  },
  {
    n: "03",
    h: "Flat, predictable fees",
    p:
      "QDRO drafting at a flat $495. No hourly clocks, no surprises. See Fees & Forms for the full schedule.",
  },
];

export default function Home() {
  return (
    <main data-testid="page-home">
      {/* HERO — restrained, asymmetric, no large display sizes */}
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

      {/* CREDIBILITY BAR — small, quiet stats */}
      <section style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="container-quiet">
          <div
            className="hairline"
            style={{ borderTopColor: "var(--cream-line)" }}
          />
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
              {[
                ["30+", "Years of practice"],
                ["40,000+", "Valuations & QDROs"],
                ["1995", "Established"],
                ["$495", "Flat QDRO fee"],
              ].map(([k, v], i) => (
                <div key={i} data-testid={`stat-${i}`}>
                  <div
                    style={{
                      fontFamily: "Newsreader, Georgia, serif",
                      fontSize: "2rem",
                      color: "var(--ink)",
                      lineHeight: 1,
                    }}
                  >
                    {k}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--ink-mute)",
                      marginTop: "0.6rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <div className="hairline" />
        </div>
      </section>

      {/* SERVICES — calm two-column list */}
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container-quiet">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
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
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: "var(--cream-line)" }}>
                {services.map((s, i) => (
                  <FadeIn key={s.title} delay={i * 60}>
                    <div
                      data-testid={`service-${i}`}
                      style={{ background: "var(--ivory)", padding: "2rem 1.8rem", height: "100%" }}
                    >
                      <h3
                        style={{
                          fontFamily: "Newsreader, Georgia, serif",
                          fontSize: "1.25rem",
                          color: "var(--ink)",
                          marginBottom: "0.7rem",
                        }}
                      >
                        {s.title}
                      </h3>
                      <p style={{ fontSize: "0.97rem" }}>{s.body}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUIET QUOTE — establishes voice */}
      <section style={{ background: "var(--paper)", padding: "5rem 0", borderTop: "1px solid var(--cream-line)", borderBottom: "1px solid var(--cream-line)" }}>
        <div className="container-narrow text-center">
          <FadeIn>
            <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>Our position</div>
            <p
              className="serif-italic"
              style={{
                fontSize: "clamp(1.4rem, 2.4vw, 1.85rem)",
                lineHeight: 1.45,
                color: "var(--ink)",
                maxWidth: "44ch",
                margin: "0 auto",
              }}
            >
              “A pension is often the largest asset in a marriage. It deserves
              the same care as the home — and a steadier hand than the typical
              template can provide.”
            </p>
            <div style={{ marginTop: "1.5rem", color: "var(--ink-mute)", fontSize: "0.88rem", letterSpacing: "0.06em" }}>
              QDROPAQ — Established 1995
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DIFFERENCE — three numbered points */}
      <section style={{ paddingTop: "6rem", paddingBottom: "5rem" }}>
        <div className="container-quiet">
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
              <FadeIn delay={80}>
                <p style={{ maxWidth: "44ch" }}>
                  Most family-law firms outsource QDRO work. We are the people they
                  outsource to — and have been since 1995.
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--cream-line)" }}>
            {differences.map((d, i) => (
              <FadeIn key={d.n} delay={i * 80}>
                <div
                  data-testid={`difference-${i}`}
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

      {/* TEAM PANEL */}
      <section style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
        <div className="container-quiet grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <FadeIn>
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80"
                alt="Specialist at her desk reviewing documents"
                data-testid="team-image"
                style={{
                  width: "100%",
                  height: 480,
                  objectFit: "cover",
                  borderRadius: 3,
                  filter: "saturate(0.9) contrast(0.96)",
                }}
              />
            </FadeIn>
          </div>
          <div className="lg:col-span-6">
            <FadeIn delay={80}>
              <div className="eyebrow" style={{ marginBottom: "1rem" }}>Who you’ll work with</div>
              <h2 className="display-lg" style={{ marginBottom: "1.2rem", maxWidth: "20ch" }}>
                Direct access to the person preparing your order.
              </h2>
              <p style={{ marginBottom: "1.6rem", maxWidth: "52ch" }}>
                QDROPAQ is intentionally small. The specialist drafting your order
                is the same specialist who answers when you call. No phone trees,
                no paralegal triage — just considered, accurate work delivered with
                a calm, human voice.
              </p>
              <Link to="/who-we-are" data-testid="team-cta" className="link-quiet">
                Meet the team →
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CLOSING CTA — quiet, not promotional */}
      <section style={{ background: "#13202C", color: "#E8E3D6" }}>
        <div className="container-quiet" style={{ padding: "5rem 1.5rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <FadeIn>
                <div
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#A39870",
                    marginBottom: "1rem",
                  }}
                >
                  When you are ready
                </div>
                <h2
                  className="display-lg"
                  style={{ color: "#F2EDE0", maxWidth: "22ch", marginBottom: "1rem" }}
                >
                  A conversation, before any commitment.
                </h2>
                <p style={{ color: "#BFC3C8", maxWidth: "54ch" }}>
                  Tell us a little about your matter. We will review the plan, the
                  decree, and the open questions — and write back with a clear,
                  measured path forward.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/getting-started"
                data-testid="footer-cta-start"
                className="btn-primary"
                style={{ background: "#E8E3D6", color: "#13202C", borderColor: "#E8E3D6" }}
              >
                Begin Intake <ArrowRight size={16} />
              </Link>
              <a
                href="tel:2157829847"
                data-testid="footer-cta-call"
                className="btn-ghost"
                style={{ borderColor: "#3A4754", color: "#E8E3D6" }}
              >
                <PhoneCall size={16} /> 215-782-9847
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
