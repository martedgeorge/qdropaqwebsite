import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import ArticleBody from "@/components/article/ArticleBody";

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
            <ArticleBody />
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
