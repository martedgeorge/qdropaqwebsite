import React from "react";

// Generic CSS-hairline grid wrapper. Children become cells with a 1px cream divider.
export default function HairlineGrid({ cols = "1 sm:grid-cols-2", children }) {
  return (
    <div
      className={`grid grid-cols-${cols} gap-px`}
      style={{ background: "var(--cream-line)" }}
    >
      {children}
    </div>
  );
}
