import { Link } from 'react-router-dom';
import { A, stats, affiliations } from '../data.js';

export default function Home() {
  return (
    <>
      <section className="homeHero">
        <div className="heroCopy">
          <p className="eyebrow">Professional QDRO Preparation & Retirement Plan Valuations</p>
          <h1>Need a QDRO But Don’t Have a Lawyer?</h1>
          <p className="lead">Professional QDRO preparation and retirement plan valuations for self-represented divorce clients and mediated settlements.</p>
          <p>Retirement assets are often the largest financial asset divided in divorce. A mistake can lead to delays, unexpected taxes, lost benefits, or costly future disputes.</p>
          <div className="checks">
            <span>No attorney required</span>
            <span>Professional retirement plan valuations</span>
            <span>Custom-drafted QDROs and retirement orders</span>
            <span>Personal support throughout the process</span>
            <span>Nationwide service</span>
          </div>
          <div className="buttonRow">
            <Link className="button primary" to="/contact">Start Your QDRO Today</Link>
            <Link className="button secondary" to="/process">Learn About Our Process</Link>
          </div>
        </div>
        <div className="heroBookCard">
          <img src={`${A}fanned-books.jpg`} alt="QDROPAQ benchmark books" />
          <h2>We Wrote the Books.</h2>
          <p>Benchmark pension and QDRO treatises authored and co-authored by QDROPAQ experts.</p>
        </div>
      </section>

      <section className="statsBand">
        {stats.map(([number, label]) => (
          <div className="stat" key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section bookFeature">
        <div>
          <p className="eyebrow">National Standard-Setting Experience</p>
          <h2>Authors of Benchmark Pension & QDRO Treatises</h2>
          <p>These benchmark works by Mark K. Altschuler, QDROPAQ Actuary, establish national standards for assessing and distributing retirement plans in divorce.</p>
          <ul className="featureList">
            <li>Valuation of Specific Assets in Divorce</li>
            <li>Valuation Strategies in Divorce</li>
            <li>Value of Pensions in Divorce</li>
            <li>Dividing Pensions in Divorce</li>
            <li>80+ published articles</li>
          </ul>
        </div>
        <img src={`${A}fanned-books.jpg`} alt="Published QDRO and pension books" />
      </section>

      <section className="section orangeSection">
        <p className="eyebrow light">Why Clients Choose QDROPAQ</p>
        <h2>Expertise every step of the way.</h2>
        <div className="grid fourCards">
          <article className="colorCard purple"><h3>Accurate Valuations</h3><p>Proprietary valuation tools, hand calculations, and actuarial experience for complex retirement divisions.</p></article>
          <article className="colorCard white"><h3>Custom Drafted Orders</h3><p>No generic templates. Each QDRO is drafted for the plan, the parties’ agreement, and applicable requirements.</p></article>
          <article className="colorCard black"><h3>Fast Turnaround</h3><p>Valuations and QDRO drafting are handled efficiently, with many completed under two weeks.</p></article>
          <article className="colorCard white"><h3>Real Human Support</h3><p>Phone and email support from knowledgeable professionals throughout the entire process.</p></article>
        </div>
      </section>

      <section className="section affiliationPreview">
        <p className="eyebrow">Recognition & Affiliations</p>
        <h2>Professional credibility that supports every engagement.</h2>
        <div className="logoGrid">
          {affiliations.map(([image, label]) => (
            <div className="logoBox" key={image}>
              <img src={`${A}${image}`} alt={label} />
            </div>
          ))}
        </div>
      </section>

      <section className="ctaBand">
        <h2>Protect Your Retirement. Protect Your Future.</h2>
        <Link className="button primary" to="/contact">Contact QDROPAQ</Link>
      </section>
    </>
  );
}
