const ROLES = ["Pro se party", "Attorney", "Mediator", "Other"];

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

const LABEL = {
  fontSize: "0.78rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--ink-mute)",
};

function ErrorBanner({ message }) {
  if (!message) return null;
  return (
    <div role="alert" data-testid="primer-error" style={BANNER}>
      {message}
    </div>
  );
}

const BANNER = {
  marginTop: "0.4rem",
  padding: "0.7rem 0.9rem",
  background: "#FBEDE6",
  border: "1px solid #E8C6B5",
  borderRadius: 2,
  fontSize: "0.9rem",
  color: "#7A2E10",
};

export default function PrimerForm({ email, role, submitting, error, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} data-testid="primer-form" className="space-y-4">
      <div>
        <label style={LABEL}>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={onChange("email")}
          data-testid="primer-email"
          placeholder="you@example.com"
          style={INPUT}
        />
      </div>
      <div>
        <label style={LABEL}>I am a…</label>
        <select value={role} onChange={onChange("role")} data-testid="primer-role" style={INPUT}>
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
      <ErrorBanner message={error} />
    </form>
  );
}
