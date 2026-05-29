import { useState } from "react";
import { FileText, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { requestCompanion, friendlyError } from "@/lib/api";

const HIGHLIGHTS = [
  "Exact questions to put to the plan administrator",
  "What documents to request — and in what order",
  "Red flags that mean you should pause before filing",
];
const ROLES = ["Pro se party", "Attorney", "Mediator", "Other"];

const SECTION = {
  background: "var(--ivory)",
  borderTop: "1px solid var(--cream-line)",
  borderBottom: "1px solid var(--cream-line)",
  padding: "5rem 0",
};

const INPUT = {
  width: "100%",
  background: "var(--paper)",
  border: "1px solid var(--cream-line)",
  borderRadius: 2,
  padding: "0.85rem 1rem",
  fontFamily: "Mulish, sans-serif",
  fontSize: "0.98rem",
  color: "var(--ink)",
  outline: "none",
  marginTop: "0.4rem",
};

const LABEL = {
  fontSize: "0.78rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--ink-mute)",
};

export default function CompanionLeadMagnet() {
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
      await requestCompanion({ email, role: role || undefined });
      setDone(true);
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section style={SECTION}>
      <div className="container-quiet grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <FadeIn className="lg:col-span-6">
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
            <FileText size={18} style={{ color: "var(--bronze-deep)" }} />
            <div className="eyebrow" style={{ marginBottom: 0 }}>One-page reference</div>
          </div>
          <h2 className="display-md" style={{ marginBottom: "1rem", maxWidth: "22ch" }}>
            What to ask your plan administrator.
          </h2>
          <p style={{ marginBottom: "1rem", maxWidth: "54ch" }}>
            A single-page companion sheet — the exact questions, in the right order, to
            put to a plan administrator before a QDRO is finalised. Usable directly in a
            call or a letter.
          </p>
          <ul style={{ display: "grid", gap: 8, marginTop: "1rem", fontSize: "0.93rem", color: "var(--ink-soft)" }}>
            {HIGHLIGHTS.map((line) => (
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
              <div data-testid="companion-success">
                <div className="eyebrow" style={{ marginBottom: "0.8rem" }}>On its way</div>
                <h3 style={{ fontFamily: "Newsreader, Georgia, serif", fontSize: "1.45rem", color: "var(--ink)", marginBottom: "0.6rem" }}>
                  Thank you — we’ll email the sheet shortly.
                </h3>
                <p style={{ fontSize: "0.95rem" }}>
                  If you don’t see it, check spam, then write to{" "}
                  <a href="mailto:carol@qdropaq.com" style={{ color: "var(--bronze-deep)" }}>carol@qdropaq.com</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} data-testid="companion-form" className="space-y-4">
                <div>
                  <label style={LABEL}>Email</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} data-testid="companion-email" style={INPUT} placeholder="you@example.com" />
                </div>
                <div>
                  <label style={LABEL}>I am a…</label>
                  <select value={role} onChange={(e) => setRole(e.target.value)} data-testid="companion-role" style={INPUT}>
                    <option value="">Select…</option>
                    {ROLES.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </div>
                <button type="submit" disabled={submitting} className="btn-primary" data-testid="companion-submit"
                        style={submitting ? { opacity: 0.65, cursor: "wait" } : undefined}>
                  {submitting ? "Sending…" : "Send me the sheet"}
                </button>
                <p style={{ fontSize: "0.82rem", color: "var(--ink-mute)", marginTop: "0.6rem" }}>
                  One email. No marketing follow-up unless you ask for it.
                </p>
                {error && (
                  <div role="alert" data-testid="companion-error" style={{
                    marginTop: "0.4rem", padding: "0.7rem 0.9rem", background: "#FBEDE6",
                    border: "1px solid #E8C6B5", borderRadius: 2, fontSize: "0.9rem", color: "#7A2E10",
                  }}>{error}</div>
                )}
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
