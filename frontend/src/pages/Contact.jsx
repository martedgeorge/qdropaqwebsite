import React from "react";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main data-testid="page-contact">
      <PageHeader
        eyebrow="Contact"
        title="A quiet conversation, when you are ready."
        lede="There is no triage line and no intake assistant. The person you call is the person who will read your decree, review your plan, and draft your order."
        testid="contact-header"
      />

      <section style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="container-quiet grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--cream-line)" }}>
                <Tile
                  icon={<Phone size={18} />}
                  label="Phone"
                  value="215-782-9847"
                  href="tel:2157829847"
                  testid="contact-phone"
                  hint="Monday – Friday, 9–5 ET"
                />
                <Tile
                  icon={<Mail size={18} />}
                  label="Email"
                  value="carol@qdropaq.com"
                  href="mailto:carol@qdropaq.com"
                  testid="contact-email"
                  hint="Response within one business day"
                />
                <Tile
                  icon={<MapPin size={18} />}
                  label="Mail"
                  value="1657 The Fairway #169, Jenkintown, PA 19046"
                  testid="contact-address"
                  hint="By appointment for in-person review"
                />
                <Tile
                  icon={<MapPin size={18} />}
                  label="Jurisdictions"
                  value="All 50 states"
                  testid="contact-jurisdictions"
                  hint="Private, public, military, and government plans"
                />
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn delay={80}>
              <div className="card-paper" style={{ padding: "2rem" }}>
                <div className="eyebrow" style={{ marginBottom: "0.8rem" }}>A note from Carol</div>
                <p className="serif-italic" style={{ fontSize: "1.15rem", color: "var(--ink)", lineHeight: 1.5 }}>
                  “When you call, you will reach me. If I am on another line, I
                  will return your call the same day. That is the standard we
                  have kept for three decades, and we intend to keep keeping it.”
                </p>
                <div style={{ marginTop: "1.4rem", fontSize: "0.9rem", color: "var(--ink-mute)" }}>
                  Carol Owen — Principal
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}

function Tile({ icon, label, value, href, hint, testid }) {
  const Inner = (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--bronze-deep)", marginBottom: "0.7rem" }}>
        {icon}
        <span style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>{label}</span>
      </div>
      <div style={{ fontFamily: "Newsreader, Georgia, serif", fontSize: "1.15rem", color: "var(--ink)" }}>{value}</div>
      {hint && <div style={{ fontSize: "0.88rem", color: "var(--ink-mute)", marginTop: "0.5rem" }}>{hint}</div>}
    </>
  );
  return (
    <div data-testid={testid} style={{ background: "var(--ivory)", padding: "1.8rem" }}>
      {href ? <a href={href}>{Inner}</a> : Inner}
    </div>
  );
}
