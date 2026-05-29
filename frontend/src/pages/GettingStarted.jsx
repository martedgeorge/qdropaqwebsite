import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import IntakeForm from "@/components/forms/IntakeForm";
import { IntakeSuccess, IntakeContactAside } from "@/components/forms/IntakeAside";
import useDocumentMeta from "@/hooks/useDocumentMeta";
import { submitIntake, friendlyError } from "@/lib/api";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  state: "",
  role: "",
  matter: "",
  notes: "",
};

export default function GettingStarted() {
  useDocumentMeta({
    title: "Getting Started",
    description:
      "Tell us a little about your matter. A short, confidential intake before any conversation — and no commitment.",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState(INITIAL_FORM);

  const change = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await submitIntake({
        ...form,
        // Strip empty optional fields so EmailStr/Optional rules are clean
        phone: form.phone || undefined,
        state: form.state || undefined,
        role: form.role || undefined,
        matter: form.matter || undefined,
        notes: form.notes || undefined,
      });
      setSubmitted(true);
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setSubmitting(false);
    }
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
              <IntakeSuccess />
            ) : (
              <FadeIn>
                <IntakeForm
                  form={form}
                  onChange={change}
                  onSubmit={onSubmit}
                  submitting={submitting}
                  error={error}
                />
              </FadeIn>
            )}
          </div>
          <aside className="lg:col-span-4">
            <IntakeContactAside />
          </aside>
        </div>
      </section>
    </main>
  );
}
