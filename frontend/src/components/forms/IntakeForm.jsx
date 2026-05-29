import { Field, SelectField, Label, inputStyle } from "@/components/forms/FormPrimitives";

const ROLE_OPTIONS = [
  "Participant (plan member)",
  "Alternate Payee (former spouse)",
  "Attorney",
  "Mediator",
  "Other",
];

const MATTER_OPTIONS = [
  "Pension valuation",
  "QDRO drafting",
  "Both valuation and QDRO",
  "Review of an existing draft order",
  "Unsure — would like guidance",
];

export default function IntakeForm({ form, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} data-testid="intake-form" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Your name" value={form.name} onChange={onChange("name")} required testid="field-name" />
        <Field label="Email" type="email" value={form.email} onChange={onChange("email")} required testid="field-email" />
        <Field label="Phone" value={form.phone} onChange={onChange("phone")} testid="field-phone" />
        <Field label="State" value={form.state} onChange={onChange("state")} testid="field-state" />
      </div>

      <SelectField
        label="I am the…"
        value={form.role}
        onChange={onChange("role")}
        testid="field-role"
        options={ROLE_OPTIONS}
      />

      <SelectField
        label="What do you need help with?"
        value={form.matter}
        onChange={onChange("matter")}
        testid="field-matter"
        options={MATTER_OPTIONS}
      />

      <div>
        <Label>Anything we should know?</Label>
        <textarea
          data-testid="field-notes"
          value={form.notes}
          onChange={onChange("notes")}
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
  );
}
