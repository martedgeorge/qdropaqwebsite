import PageHero from '../components/PageHero.jsx';
import { faqItems } from '../data.js';

export default function FAQ() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions" text="Helpful answers for self-represented clients, mediation participants, and anyone trying to understand retirement division after divorce." />
      <section className="section faqPage">
        {faqItems.map((item) => (
          <article className="faqArticle" key={item.question}>
            <h2>{item.question}</h2>
            {item.answer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </article>
        ))}
      </section>
    </>
  );
}
