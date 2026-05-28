import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

export default function GettingStarted() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    role: "",
    matter: "",
    notes: "",
  });

  const change = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main data-testid="page-getting-started">
      <PageHeader
        eyebrow="Getting Started"
        title="Tell us a little about your matter."
        lede="A short intake helps us understand the plan, the decree, and the timing before our first conversation. Nothing here commits you to engagement — and everything you share is held in confidence."
        testid="start-header"
      />

      <section style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="container-quiet grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            {submitted ? (
              <FadeIn>
                <div className="card-paper" style={{ padding: "2.6rem" }} data-testid="intake-success">
                  <div className="eyebrow" style={{ marginBottom: "0.8rem" }}>Received</div>
                  <h2 className="display-md" style={{ marginBottom: "0.9rem" }}>Thank you. We will read every word.</h2>
                  <p style={{ marginBottom: "1.2rem" }}>
                    Carol will respond within one business day with next steps, any
                    follow-up questions, and a quote for the work — in plain English.
                  </p>
                  <Link to="/" className="link-quiet">Return home →</Link>
                </div>
              </FadeIn>
            ) : (
              <FadeIn>
                <form onSubmit={onSubmit} data-testid="intake-form" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field label="Your name" value={form.name} onChange={change("name")} required testid="field-name" />
                    <Field label="Email" type="email" value={form.email} onChange={change("email")} required testid="field-email" />
                    <Field label="Phone" value={form.phone} onChange={change("phone")} testid="field-phone" />
                    <Field label="State" value={form.state} onChange={change("state")} testid="field-state" />
                  </div>

                  <div>
                    <Label>I am the…</Label>
                    <select
                      data-testid="field-role"
                      value={form.role}
                      onChange={change("role")}
                      style={inputStyle}
                    >
                      <option value="">Select…</option>
                      <option>Participant (plan member)</option>
                      <option>Alternate Payee (former spouse)</option>
                      <option>Attorney</option>
                      <option>Mediator</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <Label>What do you need help with?</Label>
                    <select
                      data-testid="field-matter"
                      value={form.matter}
                      onChange={change("matter")}
                      style={inputStyle}
                    >
                      <option value="">Select…</option>
                      <option>Pension valuation</option>
                      <option>QDRO drafting</option>
                      <option>Both valuation and QDRO</option>
                      <option>Review of an existing draft order</option>
                      <option>Unsure — would like guidance</option>
                    </select>
                  </div>

                  <div>
                    <Label>Anything we should know?</Label>
                    <textarea
                      data-testid="field-notes"
                      value={form.notes}
                      onChange={change("notes")}
                      rows={5}
                      style={{ ...inputStyle, resize: "vertical" }}
                      placeholder="Plan name, decree status, timing, complications…"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button type="submit" data-testid="intake-submit" className="btn-primary">
                      Send intake
                    </button>
                    <span style={{ fontSize: "0.85rem", color: "var(--ink-mute)" }}>
                      We respond within one business day.
                    </span>
                  </div>
                </form>
              </FadeIn>
            )}
          </div>

          <aside className="lg:col-span-4">
            <FadeIn delay={80}>
              <div className="card-paper" style={{ padding: "1.8rem" }}>
                <div className="eyebrow" style={{ marginBottom: "0.8rem" }}>Or speak with us directly</div>
                <div style={{ fontFamily: "Newsreader, Georgia, serif", fontSize: "1.25rem", color: "var(--ink)", marginBottom: "0.4rem" }}>Carol Owen</div>
                <div style={{ fontSize: "0.92rem", color: "var(--ink-mute)" }}>Principal · QDRO Specialist</div>
                <div style={{ borderTop: "1px solid var(--cream-line)", marginTop: "1.2rem", paddingTop: "1.2rem", fontSize: "0.95rem" }}>
                  <a href="tel:2157829847" data-testid="start-phone" style={{ display: "block", color: "var(--ink)", marginBottom: "0.4rem" }}>
                    215-782-9847
                  </a>
                  <a href="mailto:carol@qdropaq.com" data-testid="start-email" style={{ color: "var(--ink)" }}>
                    carol@qdropaq.com
                  </a>
                </div>
                <p style={{ marginTop: "1.4rem", fontSize: "0.9rem" }}>
                  No phone trees. No paralegal triage. You will speak with the
                  specialist who would handle your matter.
                </p>
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>
    </main>
  );
}

const inputStyle = {
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

function Label({ children }) {
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

function Field({ label, type = "text", value, onChange, required, testid }) {
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
