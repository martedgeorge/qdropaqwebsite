import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import IntakeForm from "@/components/forms/IntakeForm";
import { IntakeSuccess, IntakeContactAside } from "@/components/forms/IntakeAside";

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
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);

  const change = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const onSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

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
                <IntakeForm form={form} onChange={change} onSubmit={onSubmit} />
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
