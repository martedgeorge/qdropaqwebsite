import { useEffect, useState } from "react";

const STORAGE_KEY = "qdropaq.cookieConsent";
const ACCEPTED = "accepted";

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored !== ACCEPTED) {
      // Show on first idle frame to avoid flash during initial render
      const t = window.setTimeout(() => setOpen(true), 400);
      return () => window.clearTimeout(t);
    }
    return undefined;
  }, [setOpen]);

  if (!open) return null;

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, ACCEPTED);
    setOpen(false);
  };

  return (
    <div
      data-testid="cookie-consent"
      role="dialog"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: 16,
        left: 16,
        right: 16,
        maxWidth: 520,
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: 60,
        background: "var(--paper)",
        border: "1px solid var(--cream-line)",
        borderRadius: 3,
        boxShadow: "0 24px 60px -32px rgba(30,42,55,0.35)",
        padding: "1.1rem 1.3rem",
        display: "flex",
        gap: "0.9rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: 1, minWidth: 220, fontSize: "0.9rem", color: "var(--ink-soft)" }}>
        We use only essential cookies and basic, anonymised analytics. No
        third-party advertising, ever.
      </div>
      <button
        type="button"
        onClick={accept}
        data-testid="cookie-accept"
        className="btn-primary"
        style={{ padding: "0.55rem 1rem", fontSize: "0.88rem" }}
      >
        I agree
      </button>
    </div>
  );
}
