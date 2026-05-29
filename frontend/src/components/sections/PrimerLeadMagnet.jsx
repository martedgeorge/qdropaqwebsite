import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import PrimerCopy from "@/components/sections/primer/PrimerCopy";
import PrimerForm from "@/components/sections/primer/PrimerForm";
import PrimerSuccess from "@/components/sections/primer/PrimerSuccess";
import { requestPrimer, friendlyError } from "@/lib/api";

const INITIAL = { email: "", role: "" };

const SECTION_STYLE = {
  background: "var(--paper)",
  borderTop: "1px solid var(--cream-line)",
  borderBottom: "1px solid var(--cream-line)",
  padding: "5rem 0",
};

export default function PrimerLeadMagnet() {
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await requestPrimer({ email: form.email, role: form.role || undefined });
      setDone(true);
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section style={SECTION_STYLE}>
      <div className="container-quiet grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <FadeIn className="lg:col-span-6">
          <PrimerCopy />
        </FadeIn>
        <FadeIn className="lg:col-span-6" delay={80}>
          <div className="card-paper" style={{ padding: "2rem" }}>
            {done ? (
              <PrimerSuccess />
            ) : (
              <PrimerForm
                email={form.email}
                role={form.role}
                submitting={submitting}
                error={error}
                onChange={onChange}
                onSubmit={onSubmit}
              />
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
