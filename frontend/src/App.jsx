const A = '/assets/';

const stats = [
  ['30+', 'Years Experience'],
  ['12,000+', 'QDROs Drafted'],
  ['30,000+', 'Valuations Performed'],
  ['Zero', 'Liability Claims']
];

const process = ['Information Gathering', 'Custom Drafting', 'Plan Pre-Approval', 'Plan Revisions', 'Court Approval', 'Final Submission', 'Completion'];

const faqs = [
  ['What Is a QDRO?', 'A Qualified Domestic Relations Order is a court order used to divide certain retirement benefits between spouses after divorce or legal separation.'],
  ['Can I Get a QDRO Without a Lawyer?', 'Yes. Many self-represented parties and mediation clients can obtain a professionally prepared QDRO without hiring a divorce attorney.'],
  ['What Is a Pro Se QDRO?', 'A Pro Se QDRO is prepared for people representing themselves rather than working through divorce attorneys.'],
  ['Biggest Mistakes in Dividing Retirement Benefits', 'Common mistakes include relying only on a divorce decree, waiting too long, using generic forms, and overlooking survivor benefits.'],
  ['What Is a Pension Division?', 'A pension division allocates part of one spouse’s pension benefits to the other spouse as part of a divorce settlement.'],
  ['How Much Does a QDRO Cost?', 'Costs vary depending on plan type, complexity, and whether valuation services are needed. QDROPAQ provides clear fee information before moving forward.'],
  ['What If My Pension Was Never Addressed?', 'It may still be possible to review the divorce decree, settlement agreement, and plan information to understand available options.']
];

function Header() {
  return <header className="header">
    <a className="brand" href="#home"><img src={`${A}logo-2026.png`} alt="QDROPAQ" /></a>
    <nav>
      <a href="#about">Who We Are</a>
      <a href="#different">Why QDROPAQ</a>
      <a href="#process">Process</a>
      <a href="#faq">FAQ</a>
      <a href="#contact" className="navCta">Contact</a>
    </nav>
  </header>;
}

function App() {
  return <>
    <Header />
    <main id="home">
      <section className="hero section">
        <div className="heroText">
          <p className="eyebrow">Professional QDRO Preparation & Retirement Plan Valuations</p>
          <h1>Need a QDRO But Don’t Have a Lawyer?</h1>
          <p className="lead">QDROPAQ helps self-represented divorce clients and mediated settlements divide retirement benefits correctly with experienced guidance, personalized service, and affordable flat-fee pricing.</p>
          <div className="checks">
            <span>No attorney required</span><span>Custom-drafted QDROs</span><span>Nationwide service</span><span>Personal support</span>
          </div>
          <div className="buttons"><a href="#contact" className="button primary">Start Your QDRO Today</a><a href="#process" className="button secondary">See the Process</a></div>
        </div>
        <div className="heroCard">
          <h3>Protect Your Retirement.<br/>Protect Your Future.</h3>
          <p>Retirement assets are often the largest financial asset divided in divorce. Mistakes can cause delays, lost benefits, tax issues, and future disputes.</p>
        </div>
      </section>

      <section className="stats">
        {stats.map(([n,l]) => <div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>)}
      </section>

      <section id="different" className="section twoCol">
        <div><p className="eyebrow">Why QDROPAQ Is Different</p><h2>Specialized expertise for retirement division.</h2><p>QDROPAQ combines proprietary valuation tools, hand-calculation experience, custom drafting, and real human support for pro se clients and mediated settlements.</p></div>
        <div className="grid cards">
          {['Accurate Retirement Valuations','Custom-Drafted QDROs','Real Human Support','Built for Pro Se Clients'].map(t => <article className="card" key={t}><h3>{t}</h3><p>Focused guidance designed to reduce stress and help clients move through the retirement division process with confidence.</p></article>)}
        </div>
      </section>

      <section id="about" className="section aboutPanel">
        <div>
          <p className="eyebrow">Who We Are</p>
          <h2>Authors of benchmark Pension and QDRO treatises.</h2>
          <p>QDROPAQ provides pro se divorce parties with exceptional marital valuation and QDRO service, with no lawyer needed, at a surprisingly affordable fee.</p>
          <p>These benchmark treatises, authored or co-authored by QDROPAQ actuarial experts, set national standards for assessing and distributing retirement plans in divorce.</p>
        </div>
        <img src={`${A}fanned-books.jpg`} alt="Published QDRO and pension books" />
      </section>

      <section className="section">
        <p className="eyebrow">Expertise Snapshot</p>
        <div className="grid three">
          <article className="card"><h3>Published Writings</h3><ul><li>Valuation of Specific Assets in Divorce</li><li>Valuation Strategies in Divorce</li><li>Value of Pensions in Divorce</li><li>Dividing Pensions in Divorce</li><li>80+ published articles</li></ul></article>
          <article className="card"><h3>Credentials & Awards</h3><ul><li>Society of Actuaries examinations</li><li>Casualty Actuarial Society examinations</li><li>American Academy of Financial & Economic Experts</li><li>Best QDRO recognition</li></ul></article>
          <article className="card"><h3>Experience</h3><ul><li>Over 30 years experience</li><li>12,000+ QDROs drafted</li><li>30,000+ valuations performed</li><li>Zero liability claims, ever</li></ul></article>
        </div>
      </section>

      <section className="logoStrip section">
        <p className="eyebrow">Present & Past Affiliations</p>
        <div className="logos">
          {['aba-logo.png','aafee-logo.jpg','aaml-logo.jpg','pfd-logo.png','florida-bar-family-law.jpg','best-qdro-expert.jpg'].map(img => <div className="logoBox" key={img}><img src={`${A}${img}`} alt="Professional affiliation or award" /></div>)}
        </div>
      </section>

      <section id="process" className="section process">
        <p className="eyebrow">Our Process</p>
        <h2>A clear 7-step process from intake to completion.</h2>
        <div className="timeline">{process.map((p,i) => <div className="step" key={p}><b>{i+1}</b><span>{p}</span></div>)}</div>
      </section>

      <section id="faq" className="section faq">
        <p className="eyebrow">Frequently Asked Questions</p>
        <h2>Helpful answers for self-represented clients.</h2>
        <div className="faqList">{faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </section>

      <section id="contact" className="section contact">
        <div><p className="eyebrow">Get Started</p><h2>Ready to move forward?</h2><p>Reach out to QDROPAQ for professional QDRO preparation and retirement plan valuation support.</p></div>
        <div className="contactCard"><p><strong>Email:</strong> carol@qdropaq.com</p><p><strong>Phone:</strong> (215) 782-9847</p><p><strong>Website:</strong> www.QDROPAQ.com</p></div>
      </section>
    </main>
    <footer>© QDROPAQ. We value the future ®</footer>
  </>;
}

export default App;
