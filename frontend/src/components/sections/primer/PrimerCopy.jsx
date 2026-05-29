import { BookOpen, CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "What plan administrators actually look for",
  "The three most common rejection reasons",
  "A clean checklist for the parties to follow",
];

export default function PrimerCopy() {
  return (
    <>
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
      <ul style={LIST_STYLE}>
        {HIGHLIGHTS.map((line) => (
          <li key={line} style={LIST_ITEM_STYLE}>
            <CheckCircle2 size={16} style={{ color: "var(--sage)", marginTop: 3 }} />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

const LIST_STYLE = {
  fontSize: "0.93rem",
  color: "var(--ink-soft)",
  display: "grid",
  gap: 8,
  marginTop: "1rem",
};

const LIST_ITEM_STYLE = { display: "flex", alignItems: "flex-start", gap: 8 };
