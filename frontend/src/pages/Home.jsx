import { Link } from 'react-router-dom';
import {
  A,
  stats,
  affiliations,
  publications,
  plansHandled,
  processSteps,
  trustPillars,
  whoWeWorkWith,
  whyPeopleHire
} from '../data.js';

export default function Home() {
  return (
    <>
      <section className="homeHero">
        <div className="heroCopy">
          <p className="eyebrow">QDRO Preparation & Retirement Plan Valuations</p>
          <h1>Need a QDRO But Don’t Have a Lawyer?</h1>
          <p className="lead">
            Professional QDRO preparation and retirement plan valuations for self-represented divorce clients and mediated settlements.
          </p>
          <p>
            Retirement assets are often the largest financial asset divided in divorce. A mistake can lead to delays, unexpected taxes, lost benefits, or costly future disputes.
          </p>

          <div className="trustLine">
            Over 30 Years Experience • 12,000+ QDROs Drafted • 30,000+ Valuations Performed • Zero Liability Claims
          </div>

          <div className="buttonRow">
            <Link className="button primary" to="/contact">Start Your QDRO Today</Link>
            <Link className="button secondary" to="/process">Learn About Our Process</Link>
          </div>
        </div>

        <aside className="heroAuthorityCard">
          <img src={`${A}fanned-books.jpg`} alt="QDROPAQ benchmark pension and QDRO books" />
          <div>
            <p className="eyebrow light">National Standard-Setting Experience</p>
            <h2>We Wrote the Books.</h2>
            <p>Benchmark pension and QDRO treatises authored and co-authored by QDROPAQ experts.</p>
          </div>
        </aside>
      </section>

      <section className="statsBand">
        {stats.map(([number, label]) => (
          <div className="stat" key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section trustPillars">
        {trustPillars.map((item) => (
          <div className="trustPillar" key={item}>{item}</div>
        ))}
      </section>

      <section className="section bookFeature">
        <img src={`${A}fanned-books.jpg`} alt="Published QDRO and pension books" />
        <div>
          <p className="eyebrow">Published Authority</p>
          <h2>Authors of Benchmark Pension & QDRO Treatises</h2>
          <p>
            These benchmark works by Mark K. Altschuler, QDROPAQ Actuary, establish national standards for assessing and distributing retirement plans in divorce.
          </p>
          <ul className="featureList">
            {publications.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <Link className="textLink" to="/who-we-are">View credentials and affiliations</Link>
        </div>
      </section>

      <section className="section editorialSection">
        <div>
          <p className="eyebrow">Why People Hire QDROPAQ</p>
          <h2>Retirement division is too important to leave to guesswork.</h2>
        </div>
        <div className="editorialList">
          {whyPeopleHire.map((item) => <p key={item}>{item}</p>)}
        </div>
      </section>

      <section className="section plansSection">
        <div className="sectionHeadingRow">
          <div>
            <p className="eyebrow light">Plans We Handle</p>
            <h2>Experience with a wide range of retirement plans and benefit structures.</h2>
          </div>
          <Link className="button whiteButton" to="/faq">Read common questions</Link>
        </div>
        <div className="planGrid">
          {plansHandled.map((plan) => <div className="planItem" key={plan}>{plan}</div>)}
        </div>
      </section>

      <section className="section serveSection">
        <div>
          <p className="eyebrow">Who We Work With</p>
          <h2>Support for individuals, mediators, and professionals.</h2>
        </div>
        <div className="serveGrid">
          {whoWeWorkWith.map((item) => (
            <Link className="serveCard" to="/who-we-serve" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span>Learn more</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section whyChooseSection">
        <p className="eyebrow light">Why Clients Choose QDROPAQ</p>
        <h2>Specialized expertise every step of the way.</h2>
        <div className="grid fourCards">
          <article className="colorCard white"><h3>Accurate Valuations</h3><p>Proprietary valuation tools, hand calculations, and actuarial experience for complex retirement divisions.</p></article>
          <article className="colorCard white"><h3>Custom Drafted Orders</h3><p>No generic templates. Each order is drafted for the plan, the parties’ agreement, and applicable requirements.</p></article>
          <article className="colorCard white"><h3>Plan Pre-Approval Focus</h3><p>Pre-approval helps confirm that the plan can accept the order once court-certified.</p></article>
          <article className="colorCard white"><h3>Real Human Support</h3><p>Phone and email support from knowledgeable professionals throughout the process.</p></article>
        </div>
      </section>

      <section className="section processPreview">
        <div>
          <p className="eyebrow">Process Preview</p>
          <h2>A clear path from intake to completion.</h2>
          <p>QDROPAQ uses a focused process designed to move efficiently while addressing plan requirements, court certification, and final plan implementation.</p>
          <Link className="button secondary" to="/process">View Full 7-Step Process</Link>
        </div>
        <ol className="processPreviewList">
          {processSteps.map((step) => <li key={step.title}>{step.title}</li>)}
        </ol>
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
        <div>
          <p className="eyebrow light">Get Started</p>
          <h2>Protect Your Retirement. Protect Your Future.</h2>
        </div>
        <Link className="button primary" to="/contact">Contact QDROPAQ</Link>
      </section>
    </>
  );
}
