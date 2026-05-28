import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <main data-testid="page-about">
      <PageHeader
        eyebrow="About QDROPAQ"
        title="A specialty practice, quietly built over three decades."
        lede="QDROPAQ has prepared pension valuations and Qualified Domestic Relations Orders since 1995. Our work is custom — calculated and drafted file by file — and our standards are the ones used by other practitioners as a benchmark."
        testid="about-header"
      />

      <section style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="container-quiet grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <FadeIn>
              <h2 className="display-md" style={{ marginBottom: "1.2rem" }}>
                Mathematical depth, procedural calm.
              </h2>
              <p style={{ marginBottom: "1.2rem" }}>
                Most QDRO providers rely on standardized software and templates.
                We do not. Every valuation begins with the actual plan document
                and the parties’ specific circumstances, and every order is
                drafted to match that plan’s rules — not a generic form.
              </p>
              <p style={{ marginBottom: "1.2rem" }}>
                The benchmark works on assessing and distributing retirement
                plans in divorce — authored by Mark K. Altschuler, QDROPAQ’s
                actuary — are the same texts that other practitioners and
                courts reach for. That depth informs every file we touch.
              </p>
              <p>
                We work exclusively with pro se parties: petitioners on their
                own, attorneys-of-record who need a specialist, and mediators
                guiding a settlement. The result is a measured, accurate path
                through what is often the most consequential financial decision
                of a divorce.
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-5">
            <FadeIn delay={80}>
              <div className="card-paper" style={{ padding: "2rem" }}>
                <div className="eyebrow" style={{ marginBottom: "1rem" }}>By the numbers</div>
                <ul className="space-y-4">
                  {[
                    ["30+ years", "Practicing exclusively in pensions and QDROs"],
                    ["40,000+", "Valuations and Orders completed"],
                    ["Nationwide", "All 50 states; private, public, and government plans"],
                    ["1:1 model", "Direct contact with your specialist"],
                  ].map(([k, v]) => (
                    <li key={k} style={{ borderTop: "1px solid var(--cream-line)", paddingTop: "0.9rem" }}>
                      <div style={{ fontFamily: "Newsreader, Georgia, serif", fontSize: "1.15rem", color: "var(--ink)" }}>{k}</div>
                      <div style={{ fontSize: "0.92rem", color: "var(--ink-mute)", marginTop: "0.25rem" }}>{v}</div>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "1.6rem" }}>
                  <Link to="/our-process" className="link-quiet" data-testid="about-cta-process">See how we work →</Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
