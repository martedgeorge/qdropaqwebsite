import PageHero from '../components/PageHero.jsx';
import { processSteps } from '../data.js';

export default function Process() {
  return (
    <>
      <PageHero eyebrow="Our Process" title="A focused sequence from intake to completion." text="QDROPAQ works collaboratively and efficiently to help divide retirement benefits according to the parties’ intent, applicable rules, and plan requirements." />
      <section className="section processPageIntro">
        <div className="introPanel orangePanel">
          <h2>Personal guidance throughout.</h2>
          <p>QDROPAQ provides live personal support and guidance throughout the process. The goal is to move efficiently, keep fees affordable, and ensure the order meets retirement plan compliance requirements.</p>
        </div>
      </section>
      <section className="section processTimeline">
        {processSteps.map((step, index) => (
          <article className="processStep" key={step.title}>
            <div className="processNumber">{index + 1}</div>
            <div>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
