import React from "react";
import { Link } from "react-router-dom";

const TEXT_COLOR = "#D9D8D2";
const MUTED_COLOR = "#7E868F";

export function FooterColumn({ heading, links }) {
  return (
    <div>
      <div
        style={{
          fontSize: "0.72rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: MUTED_COLOR,
          marginBottom: "1rem",
        }}
      >
        {heading}
      </div>
      <ul className="space-y-2.5" style={{ fontSize: "0.93rem" }}>
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} data-testid={l.testid} style={{ color: TEXT_COLOR }}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterEstablishedBlurb() {
  return (
    <div>
      <div
        style={{
          fontSize: "0.72rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: MUTED_COLOR,
          marginBottom: "1rem",
        }}
      >
        Established
      </div>
      <p style={{ fontSize: "0.88rem", color: "#A9B0B7" }}>
        Three decades of pension valuation and QDRO drafting. 40,000+ matters
        completed nationwide.
      </p>
    </div>
  );
}
