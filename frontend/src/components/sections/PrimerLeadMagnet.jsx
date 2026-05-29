import { useState } from "react";
import { BookOpen, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { requestPrimer, friendlyError } from "@/lib/api";

const ROLES = ["Pro se party", "Attorney", "Mediator", "Other"];

export default function PrimerLeadMagnet() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await requestPrimer({ email, role: role || undefined });
      setDone(true);
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      style={{
        background: "var(--paper)",
        borderTop: "1px solid var(--cream-line)",
        borderBottom: "1px solid var(--cream-line)",
        padding: "5rem 0",
      }}
    >
      <div className="container-quiet grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <FadeIn className="lg:col-span-6">
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
            <BookOpen size={18} style={{ color: "var(--bronze-deep)" }} />
            <div className="eyebrow" style={{ marginBottom: 0 }}>Quiet reading</div>
          </div>
          <h2 className="display-md" style={{ marginBottom: "1rem", maxWidth: "22ch" }}>
            The Plan Pre-Qualification Primer.
          </h2>
          <p style={{ marginBottom: "1rem", maxWidth: "54ch" }}>
            A short, plainly-written PDF explaining why pre-qualifying a QDRO with the
            plan administrator — before court entry — is the single most consequential
            step in the process. Written for pro se parties, attorneys, and mediators.
          </p>
          <ul
            style={{
              fontSize: "0.93rem",
              color: "var(--ink-soft)",
              display: "grid",
              gap: 8,
              marginTop: "1rem",
            }}
          >
            {[
              "What plan administrators actually look for",
              "The three most common rejection reasons",
              "A clean checklist for the parties to follow",
            ].map((line) => (
              <li key={line} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <CheckCircle2 size={16} style={{ color: "var(--sage)", marginTop: 3 }} />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn className="lg:col-span-6" delay={80}>
          <div className="card-paper" style={{ padding: "2rem" }}>
            {done ? (
              <div data-testid="primer-success">
                <div className="eyebrow" style={{ marginBottom: "0.8rem" }}>On its way</div>
                <h3
                  style={{
                    fontFamily: "Newsreader, Georgia, serif",
                    fontSize: "1.45rem",
                    color: "var(--ink)",
                    marginBottom: "0.6rem",
                  }}
                >
                  Thank you — the primer is on its way.
                </h3>
                <p style={{ fontSize: "0.95rem" }}>
                  We will email the PDF shortly. If you don’t see it, check your spam
                  folder, then write to{" "}
                  <a href="mailto:carol@qdropaq.com" style={{ color: "var(--bronze-deep)" }}>
                    carol@qdropaq.com
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} data-testid="primer-form" className="space-y-4">
                <div>
                  <label
                    style={{
                      fontSize: "0.78rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--ink-mute)",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    data-testid="primer-email"
                    placeholder="you@example.com"
                    style={INPUT}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: "0.78rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--ink-mute)",
                    }}
                  >
                    I am a…
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    data-testid="primer-role"
                    style={INPUT}
                  >
                    <option value="">Select…</option>
                    {ROLES.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  data-testid="primer-submit"
                  className="btn-primary"
                  disabled={submitting}
                  style={submitting ? { opacity: 0.65, cursor: "wait" } : undefined}
                >
                  {submitting ? "Sending…" : "Send me the primer"}
                </button>
                <p style={{ fontSize: "0.82rem", color: "var(--ink-mute)", marginTop: "0.6rem" }}>
                  One email. No marketing follow-up unless you ask for it.
                </p>
                {error && (
                  <div
                    role="alert"
                    data-testid="primer-error"
                    style={{
                      marginTop: "0.4rem",
                      padding: "0.7rem 0.9rem",
                      background: "#FBEDE6",
                      border: "1px solid #E8C6B5",
                      borderRadius: 2,
                      fontSize: "0.9rem",
                      color: "#7A2E10",
                    }}
                  >
                    {error}
                  </div>
                )}
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const INPUT = {
  width: "100%",
  background: "var(--ivory)",
  border: "1px solid var(--cream-line)",
  borderRadius: 2,
  padding: "0.85rem 1rem",
  fontFamily: "Mulish, sans-serif",
  fontSize: "0.98rem",
  color: "var(--ink)",
  outline: "none",
  marginTop: "0.4rem",
};
