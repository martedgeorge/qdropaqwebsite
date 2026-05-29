import React from "react";

export const inputStyle = {
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

export function Label({ children }) {
  return (
    <label
      style={{
        fontSize: "0.78rem",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "var(--ink-mute)",
      }}
    >
      {children}
    </label>
  );
}

export function Field({ label, type = "text", value, onChange, required, testid }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        data-testid={testid}
        style={inputStyle}
      />
    </div>
  );
}

export function SelectField({ label, value, onChange, testid, options }) {
  return (
    <div>
      <Label>{label}</Label>
      <select data-testid={testid} value={value} onChange={onChange} style={inputStyle}>
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
