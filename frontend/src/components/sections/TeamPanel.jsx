import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";

export default function TeamPanel() {
  return (
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
  );
}
