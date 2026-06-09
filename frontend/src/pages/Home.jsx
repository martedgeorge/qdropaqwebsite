import { Link } from 'react-router-dom';
import {
  A,
  stats,
  affiliations,
  publications,
  plansHandled,
  processSteps
} from '../data.js';

export default function Home() {
  return (
    <>
      <section className="homeHero">
        <div className="heroCopy">
          <p className="eyebrow">QDROPAQ</p>

          <h1>Pension valuation and QDRO preparation for divorce matters.</h1>

          <p className="lead">
            QDROPAQ helps self-represented clients, mediators, attorneys, and financial professionals divide retirement benefits with clarity and care.
          </p>

          <p>
            Retirement assets are often one of the most important financial issues in divorce. We provide specialized support for QDRO preparation, pension valuation, and retirement plan division.
          </p>

          <div className="buttonRow">
            <Link className="button primary" to="/contact">Start a Request</Link>
            <Link className="button secondary" to="/services">View Services</Link>
          </div>
        </div>

        <aside className="heroAuthorityCard quietCard">
          <p className="eyebrow light">Professional Experience</p>
          <h2>Technical knowledge for complex retirement division.</h2>
          <p>
            QDROPAQ combines decades of pension valuation experience, published authority, and practical support throughout the process.
          </p>

          <div className="miniStats">
            {stats.map(([number, label]) => (
              <div key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="section overviewSection">
        <div>
          <p className="eyebrow">Overview</p>
          <h2>Focused retirement division support.</h2>
        </div>

        <div>
          <p>
            QDROPAQ provides professional QDRO preparation and pension valuation services for divorce-related retirement matters. The work is technical, plan-specific, and often time-sensitive.
          </p>

          <p>
            Our role is to help clients understand what documents are needed, how the process works, and how retirement orders and valuations fit into the larger divorce settlement.
          </p>

          <Link className="textLink" to="/overview">Learn more about QDROPAQ →</Link>
        </div>
      </section>

      <section className="section servicesPreview">
        <div className="sectionHeadingRow">
          <div>
            <p className="eyebrow">Services</p>
            <h2>Specialized services for retirement division.</h2>
          </div>

          <Link className="button secondary" to="/services">All Services</Link>
        </div>

        <div className="servicePreviewGrid">
          <Link className="servicePreviewCard" to="/services">
            <h3>QDRO Preparation</h3>
            <p>Custom retirement division orders prepared for plan review and court certification.</p>
          </Link>

          <Link className="servicePreviewCard" to="/services">
            <h3>Pension Valuations</h3>
            <p>Professional valuation support for defined benefit plans, federal pensions, military pensions, and related benefits.</p>
          </Link>

          <Link className="servicePreviewCard" to="/services">
            <h3>Consulting Support</h3>
            <p>Support for attorneys, mediators, financial professionals, and self-represented clients.</p>
          </Link>
        </div>
      </section>

      <section className="section bookFeature">
        <div>
          <p className="eyebrow">Published Authority</p>
          <h2>Authors of benchmark pension and QDRO treatises.</h2>

          <p>
            Mark K. Altschuler has authored and co-authored nationally recognized works on pension valuation, divorce, and retirement benefit division.
          </p>

          <ul className="featureList">
            {publications.slice(0, 5).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Link className="textLink" to="/staff">Meet the team →</Link>
        </div>

        <img src={`${A}fanned-books.jpg`} alt="Published QDRO and pension books" />
      </section>

      <section className="section plansSection quietPurple">
        <div className="sectionHeadingRow">
          <div>
            <p className="eyebrow light">Plans We Handle</p>
            <h2>Experience with many retirement plan types.</h2>
          </div>

          <Link className="button whiteButton" to="/fees-forms">Forms & Requests</Link>
        </div>

        <div className="planGrid">
          {plansHandled.map((plan) => (
            <div className="planItem" key={plan}>{plan}</div>
          ))}
        </div>
      </section>

      <section className="section processPreview">
        <div>
          <p className="eyebrow">Process</p>
          <h2>A clear path from intake to completion.</h2>

          <p>
            QDROPAQ uses a structured process designed to address plan requirements, court certification, and final submission.
          </p>

          <Link className="button secondary" to="/process">View Process</Link>
        </div>

        <ol className="processPreviewList">
          {processSteps.slice(0, 5).map((step) => (
            <li key={step.title}>{step.title}</li>
          ))}
        </ol>
      </section>

      <section className="section resourceHomePreview">
        <div>
          <p className="eyebrow">Library</p>
          <h2>Articles and resources on pension division.</h2>
          <p>
            Browse QDROPAQ’s resource library for articles on QDROs, survivor benefits, pension valuation, Social Security offsets, and related divorce issues.
          </p>
        </div>

        <Link className="button primary" to="/resources">View Resource Library</Link>
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
          <h2>Have a QDRO or pension valuation question?</h2>
          <p>Contact Carol Altschuler to begin the intake process.</p>
        </div>

        <Link className="button primary" to="/contact">Contact QDROPAQ</Link>
      </section>
    </>
  );
}
