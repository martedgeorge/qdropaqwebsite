import React from "react";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import FeeScheduleTable from "@/components/fees/FeeScheduleTable";
import FormsList from "@/components/fees/FormsList";

const FEES = [
  { svc: "QDRO Drafting (per plan)", price: "$495", note: "Flat fee. Includes plan pre-qualification." },
  { svc: "Pension Valuation", price: "Quoted", note: "Defined-benefit plans, marital coverture, present-value analysis." },
  { svc: "Plan Pre-Qualification Only", price: "Quoted", note: "Where a draft order already exists." },
  { svc: "Revisions & Re-Submissions", price: "Quoted", note: "Where the order has been rejected by a plan." },
];

const FORMS = [
  ["Intake Questionnaire", "PDF · completed at the start of every matter"],
  ["Plan Information Form", "PDF · for use when contacting the plan administrator"],
  ["Sample Engagement Letter", "PDF · the terms of our engagement"],
];

export default function Fees() {
  return (
    <main data-testid="page-fees">
      <PageHeader
        eyebrow="Fees & Forms"
        title="Plain pricing. Predictable terms."
        lede="QDROPAQ’s flat-fee model exists for a reason: pensions are stressful enough without an hourly clock running in the background. Below is what we charge and the forms we will ask you to complete."
        testid="fees-header"
      />

      <section style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="container-quiet">
          <FadeIn>
            <div className="eyebrow" style={{ marginBottom: "1rem" }}>Fee schedule</div>
            <FeeScheduleTable rows={FEES} />
            <p style={{ marginTop: "1.2rem", fontSize: "0.9rem", color: "var(--ink-mute)" }}>
              All fees include direct correspondence with the specialist on your file.
              Court filing fees, where applicable, are not included.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="container-quiet">
          <FadeIn>
            <div className="eyebrow" style={{ marginBottom: "1rem" }}>Forms</div>
            <FormsList items={FORMS} />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
