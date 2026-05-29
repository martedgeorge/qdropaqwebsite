import React from "react";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactTile from "@/components/contact/ContactTile";
import CarolNoteCard from "@/components/contact/CarolNoteCard";
import { CONTACT_ICON_SIZE, REVEAL_STAGGER_BASE } from "@/constants/ui";

const TILES = [
  {
    icon: <Phone size={CONTACT_ICON_SIZE} />,
    label: "Phone",
    value: "215-782-9847",
    href: "tel:2157829847",
    hint: "Monday – Friday, 9–5 ET",
    testid: "contact-phone",
  },
  {
    icon: <Mail size={CONTACT_ICON_SIZE} />,
    label: "Email",
    value: "carol@qdropaq.com",
    href: "mailto:carol@qdropaq.com",
    hint: "Response within one business day",
    testid: "contact-email",
  },
  {
    icon: <MapPin size={CONTACT_ICON_SIZE} />,
    label: "Mail",
    value: "1657 The Fairway #169, Jenkintown, PA 19046",
    hint: "By appointment for in-person review",
    testid: "contact-address",
  },
  {
    icon: <MapPin size={CONTACT_ICON_SIZE} />,
    label: "Jurisdictions",
    value: "All 50 states",
    hint: "Private, public, military, and government plans",
    testid: "contact-jurisdictions",
  },
];

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
                {TILES.map((t) => <ContactTile key={t.testid} {...t} />)}
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-5">
            <FadeIn delay={REVEAL_STAGGER_BASE}><CarolNoteCard /></FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
