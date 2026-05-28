import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function ClosingCTA() {
  return (
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
  );
}
