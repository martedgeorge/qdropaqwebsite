import React from "react";
import { Link } from "react-router-dom";

const idFor = (f) => `form-${f.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export default function FormsList({ items }) {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--cream-line)" }}>
        {items.map(([f, d]) => (
          <li key={f} data-testid={idFor(f)} style={{ background: "var(--ivory)", padding: "1.8rem", listStyle: "none" }}>
            <div style={{ fontFamily: "Newsreader, Georgia, serif", fontSize: "1.1rem", color: "var(--ink)", marginBottom: "0.4rem" }}>
              {f}
            </div>
            <div style={{ fontSize: "0.9rem", color: "var(--ink-mute)" }}>{d}</div>
          </li>
        ))}
      </ul>
      <p style={{ marginTop: "1.4rem", fontSize: "0.9rem", color: "var(--ink-mute)" }}>
        Forms are sent directly when your matter opens. To request a copy in advance,{" "}
        <Link to="/contact" data-testid="forms-contact-link" className="link-quiet">contact Carol</Link>.
      </p>
    </>
  );
}
