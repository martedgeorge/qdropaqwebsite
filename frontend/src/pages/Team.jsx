import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import { TEAM_MEMBER_IMAGE_HEIGHT, REVEAL_STAGGER_BASE } from "@/constants/ui";

const team = [
  {
    name: "Carol Owen",
    role: "Principal · QDRO Specialist",
    bio:
      "Carol leads every engagement personally. She is the throughline from intake through plan acceptance — and the voice on the other end of the phone when you have a question.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mark K. Altschuler",
    role: "Actuary · Author",
    bio:
      "Mark is QDROPAQ’s actuary and the author of the benchmark works on assessing and distributing retirement plans in divorce — texts used by courts and practitioners nationwide.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Team() {
  return (
    <main data-testid="page-team">
      <PageHeader
        eyebrow="Who We Are"
        title="A small practice with the depth of a much larger one."
        lede="Two specialists. Thirty years of focus. A working approach built around the people on the file, not the file itself."
        testid="team-header"
      />

      <section style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="container-quiet grid grid-cols-1 md:grid-cols-2 gap-12">
          {team.map((m, i) => (
            <FadeIn key={m.name} delay={i * REVEAL_STAGGER_BASE}>
              <article data-testid={`team-member-${m.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <img
                  src={m.img}
                  alt={m.name}
                  style={{
                    width: "100%",
                    height: TEAM_MEMBER_IMAGE_HEIGHT,
                    objectFit: "cover",
                    borderRadius: 3,
                    filter: "saturate(0.85) contrast(0.96)",
                    marginBottom: "1.4rem",
                  }}
                />
                <div className="eyebrow" style={{ marginBottom: "0.5rem" }}>{m.role}</div>
                <h2 style={{ fontFamily: "Newsreader, Georgia, serif", fontSize: "1.7rem", marginBottom: "0.8rem", color: "var(--ink)" }}>{m.name}</h2>
                <p>{m.bio}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="container-quiet" style={{ marginTop: "5rem" }}>
          <FadeIn>
            <div className="card-paper" style={{ padding: "2.4rem" }}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <div className="eyebrow" style={{ marginBottom: "0.8rem" }}>A quiet philosophy</div>
                  <h3 className="display-md" style={{ marginBottom: "0.9rem" }}>
                    “We answer the phone. We read every document. We send back plain English.”
                  </h3>
                  <p>
                    That has been the operating standard for three decades. It does not
                    scale to a high-volume practice — and that is the point.
                  </p>
                </div>
                <div className="md:col-span-4">
                  <Link to="/contact" data-testid="team-cta-contact" className="btn-primary">
                    Speak with Carol
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
