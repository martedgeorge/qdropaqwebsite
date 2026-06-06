import PageHero from '../components/PageHero.jsx';
import { whoWeWorkWith } from '../data.js';

export default function WhoWeServe() {
  return (
    <>
      <PageHero
        eyebrow="Who We Work With"
        title="QDRO and retirement division support for individuals, mediators, and professionals."
        lead="QDROPAQ provides focused support for people and professionals navigating retirement division, pension valuation, and plan-specific order requirements."
      />
      <section className="section articleGrid">
        {whoWeWorkWith.map((item) => (
          <article className="articleCard orangeTop" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    </>
  );
}
