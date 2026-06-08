const articleGroups = [
  {
    title: 'Articles',
    description: 'Educational articles on pensions, QDROs, retirement valuation, and divorce-related financial issues.',
    links: [
      ['Age Patterns in Divorce', '/articles/Age-Patterns-in-Divorce.html'],
      ['Cost of Living Adjustment in Pension Division', '/articles/Cost-of-Living-Adjustment.html'],
      ['Defined Contribution Plans in Divorce', '/articles/Defined-Contribution-Plan.html'],
      ['Early Retirement Window Enhancements', '/articles/Early-Retirement-Window-E.html'],
      ['Formula Enhancements to a Defined Benefit Pension', '/articles/Formula-Enhancements-to-a.html'],
      ['Marital Portion of NJ Pensions', '/articles/Marital-portion-of-NJ-pensions.html'],
      ['Marital Portion of Pensions', '/articles/Marital-portion-of-pensio.html'],
      ['Present Value vs Deferred Distribution', '/articles/Present-Value-Calculation-Versus.html'],
      ['Disability Payments as Marital Property', '/articles/Reconciling-Mixed-Signals.html'],
      ['Survivor Annuity is a Marital Asset', '/articles/Survivor-Annuity-is-a-Mar.html'],
      ['The Demarco Case and Delayed Retirement', '/articles/The-Demarco-Case-and-Delayed-Retirement.html'],
      ['Military Retirement Disability Issues', '/articles/The-Disability-Issue-in-the-Distribution-of-Military.html'],
      ['The Social Security Offset', '/articles/The-Social-Security-Offse.html'],
      ['Normal Retirement Age in Pension Valuation', '/articles/What-is-the-normal-reti.html']
    ]
  },
  {
    title: 'Div Tips',
    description: 'Helpful guidance for avoiding common mistakes during divorce-related retirement division.',
    links: [
      ['What Is a QDRO?', '/faq'],
      ['Can I Get a QDRO Without a Lawyer?', '/faq'],
      ['Biggest Mistakes in Dividing Retirement Benefits', '/faq'],
      ['How Are Retirement Accounts Divided?', '/faq']
    ]
  },
  {
    title: 'Learn About Pensions',
    description: 'Introductory resources for understanding pensions, survivor benefits, retirement age, and plan rules.',
    links: [
      ['Pension Valuations', '/services'],
      ['QDROs', '/services'],
      ['Survivor Benefits', '/resources'],
      ['Methods & Standards', '/library']
    ]
  }
];

export default function Resources() {
  return (
    <>
      <section className="resourcesHero">
        <p className="eyebrow">Resource Center</p>
        <h1>QDRO & Pension Division Library</h1>
        <p>
          A professional resource library for articles, divorce tips, pension education,
          and retirement division guidance.
        </p>
      </section>

      <section className="section libraryLayout">
        <aside className="librarySidebar">
          <h3>Pension Analysis Consultants, Inc.</h3>

          <div className="sideGroup">
            <h4>Services</h4>
            <a href="/services">Pension Valuations</a>
            <a href="/services">QDROs</a>
            <a href="/services">Expert Testimony</a>
            <a href="/services">Legal Language Consulting</a>
          </div>

          <div className="sideGroup">
            <h4>Library</h4>
            <a href="#articles">Articles</a>
            <a href="#div-tips">Div Tips</a>
            <a href="#learn">Learn About Pensions</a>
            <a href="/library">Methods & Standards</a>
          </div>

          <div className="sideGroup">
            <h4>Get Started</h4>
            <a href="/contact">Contact QDROPAQ</a>
            <a href="/fees-forms">Fees & Forms</a>
          </div>
        </aside>

        <main className="libraryMain">
          {articleGroups.map((group, index) => (
            <section
              className="resourceSection"
              id={index === 0 ? 'articles' : index === 1 ? 'div-tips' : 'learn'}
              key={group.title}
            >
              <div className="libraryIntro">
                <p className="eyebrow">{group.title}</p>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>

              <div className="articleDirectory">
                {group.links.map(([title, link]) => (
                  <a
                    className="articleDirectoryCard"
                    href={link}
                    target={link.startsWith('/articles') ? '_blank' : undefined}
                    rel={link.startsWith('/articles') ? 'noreferrer' : undefined}
                    key={title}
                  >
                    <span>{group.title}</span>
                    <h3>{title}</h3>
                    <p>
                      View this resource for more information about retirement
                      division, pensions, QDROs, or divorce-related financial issues.
                    </p>
                    <strong>Open Resource →</strong>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </main>
      </section>
    </>
  );
}
