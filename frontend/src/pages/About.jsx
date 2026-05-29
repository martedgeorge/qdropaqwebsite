import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import AboutNarrative from "@/components/about/AboutNarrative";
import ByTheNumbersCard from "@/components/about/ByTheNumbersCard";
import { REVEAL_STAGGER_BASE } from "@/constants/ui";

export default function About() {
  return (
    <main data-testid="page-about">
      <PageHeader
        eyebrow="About QDROPAQ"
        title="A specialty practice, quietly built over three decades."
        lede="QDROPAQ has prepared pension valuations and Qualified Domestic Relations Orders since 1995. Our work is custom — calculated and drafted file by file — and our standards are the ones used by other practitioners as a benchmark."
        testid="about-header"
      />
      <section style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="container-quiet grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <FadeIn><AboutNarrative /></FadeIn>
          </div>
          <div className="lg:col-span-5">
            <FadeIn delay={REVEAL_STAGGER_BASE}>
              <ByTheNumbersCard />
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
