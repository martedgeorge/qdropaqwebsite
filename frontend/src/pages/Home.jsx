import { Link } from 'react-router-dom';
import {
  A,
  stats,
  affiliations,
  plansHandled,
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

          <p className="trustLine">
            Over 30 Years Experience • 12,000+ QDROs Drafted • 30,000+ Valuations Performed • Zero Liability Claims
          </p>

          <div className="checks">
            <span>No attorney required</span>
            <span>Custom-drafted QDROs</span>
            <span>Professional retirement valuations</span>
            <span>Personal support</span>
            <span>Nationwide service</span>
          </div>

          <div className="buttonRow">
            <Link className="button primary" to="/contact">Start Your QDRO Today</Link>
            <Link className="button secondary" to="/process">View Our Process</Link>
          </div>
        </div>

        <div className="heroBookCard">
          <img src={`${A}fanned-books.jpg`} alt="QDROPAQ benchmark books" />
          <h2>Authors of Benchmark Pension & QDRO Treatises</h2>
          <p>
            QDROPAQ experts have authored and co-authored nationally recognized pension and QDRO publications used in divorce and retirement division matters.
          </p>
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
          <h2>We literally wrote the books on pension and QDRO division.</h2>
          <p>
            These benchmark works by Mark K. Altschuler, QDROPAQ Actuary, establish national standards for assessing and distributing retirement plans in divorce.
          </p>
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

      <section className="section whyHireSection">
        <p className="eyebrow">Why People Hire QDROPAQ</p>
        <h2>Retirement division is too important to leave to guesswork.</h2>
        <p className="sectionIntro">
          Clients come to QDROPAQ when they need experienced guidance, accurate calculations, and confidence that retirement assets are being divided correctly.
        </p>

        <div className="grid threeCards">
          {whyPeopleHire.map((item) => (
            <article className="simpleCard" key={item}>
              <span className="checkMark">✓</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section plansSection">
        <div>
          <p className="eyebrow light">Plans We Handle</p>
          <h2>Experience with a wide range of retirement plans and benefit structures.</h2>
        </div>

        <div className="grid fourCards">
          {plansHandled.map((plan) => (
            <article className="planCard" key={plan}>
              <h3>{plan}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section workWithSection">
        <p className="eyebrow">Who We Work With</p>
        <h2>Support for individuals, mediators, and professionals.</h2>

        <div className="grid threeCards">
          {whoWeWorkWith.map((person) => (
            <article className="simpleCard" key={person}>
              <h3>{person}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section orangeSection">
        <p className="eyebrow light">Why Clients Choose QDROPAQ</p>
        <h2>Specialized expertise every step of the way.</h2>

        <div className="grid fourCards">
          <article className="colorCard purple">
            <h3>Accurate Valuations</h3>
            <p>
              Proprietary valuation tools, hand calculations, and actuarial experience for complex retirement divisions.
            </p>
          </article>

          <article className="colorCard white">
            <h3>Custom Drafted Orders</h3>
            <p>
              No generic templates. Each QDRO is drafted for the plan, the parties’ agreement, and applicable requirements.
            </p>
          </article>

          <article className="colorCard black">
            <h3>Nationally Recognized Expertise</h3>
            <p>
              Benchmark pension and QDRO publications, decades of experience, and thousands of completed matters.
            </p>
          </article>

          <article className="colorCard white">
            <h3>Real Human Support</h3>
            <p>
              Phone and email support from knowledgeable professionals throughout the entire process.
            </p>
          </article>
        </div>
      </section>

      <section className="section processPreview">
        <div>
          <p className="eyebrow">Process Preview</p>
          <h2>A clear path from intake to completion.</h2>
          <p>
            QDROPAQ uses a focused process designed to move efficiently while ensuring the retirement plan requirements are properly addressed.
          </p>
          <Link className="button secondary" to="/process">View Full 7-Step Process</Link>
        </div>

        <ol className="processPreviewList">
          <li>Intake & Document Review</li>
          <li>Drafting the QDRO</li>
          <li>Pre-Approval Review</li>
          <li>Plan-Required Revisions</li>
          <li>Court Certification</li>
          <li>Final Plan Submission</li>
          <li>Plan Follow-Up & Completion</li>
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
