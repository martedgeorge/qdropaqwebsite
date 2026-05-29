import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import TeamPhilosophyCard from "@/components/team/TeamPhilosophyCard";
import useDocumentMeta from "@/hooks/useDocumentMeta";
import { REVEAL_STAGGER_BASE } from "@/constants/ui";

const TEAM = [
  {
    name: "Carol Owen",
    role: "Principal · QDRO Specialist",
    bio:
      "Carol leads every engagement personally. She is the throughline from intake through plan acceptance — and the voice on the other end of the phone when you have a question.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mark K. Altschuler",
    role: "Actuary · Author",
    bio:
      "Mark is QDROPAQ’s actuary and the author of the benchmark works on assessing and distributing retirement plans in divorce — texts used by courts and practitioners nationwide.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80",
  },
];

const testIdFor = (name) => `team-member-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export default function Team() {
  useDocumentMeta({
    title: "Who We Are",
    description:
      "Carol Owen, Principal, and Mark K. Altschuler, Actuary — the two specialists who lead every QDROPAQ engagement.",
  });
  return (
    <main data-testid="page-team">
      <PageHeader
        eyebrow="Who We Are"
        title="A small practice with the depth of a much larger one."
        lede="Two specialists. Thirty years of focus. A working approach built around the people on the file, not the file itself."
        testid="team-header"
      />
      <section style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="container-quiet grid grid-cols-1 md:grid-cols-2 gap-12">
          {TEAM.map((m, i) => (
            <FadeIn key={m.name} delay={i * REVEAL_STAGGER_BASE}>
              <TeamMemberCard {...m} testid={testIdFor(m.name)} />
            </FadeIn>
          ))}
        </div>
        <div className="container-quiet" style={{ marginTop: "5rem" }}>
          <FadeIn><TeamPhilosophyCard /></FadeIn>
        </div>
      </section>
    </main>
  );
}
