const articleGroups = [
  {
    category: 'QDRO & Retirement Plans',
    intro: 'Clear explanations of retirement plan division, QDROs, and account-based plans.',
    articles: [
      ['Defined Contribution Plans in Divorce', '/articles/Defined-Contribution-Plan.html'],
      ['Marital Portion of Pensions', '/articles/Marital-portion-of-pensio.html'],
      ['Marital Portion of NJ Pensions', '/articles/Marital-portion-of-NJ-pensions.html'],
      ['Survivor Annuity is a Marital Asset', '/articles/Survivor-Annuity-is-a-Mar.html']
    ]
  },
  {
    category: 'Pension Valuation',
    intro: 'Articles on pension values, retirement age, benefit formulas, COLAs, and present value issues.',
    articles: [
      ['Cost of Living Adjustment in Pension Division', '/articles/Cost-of-Living-Adjustment.html'],
      ['Formula Enhancements to a Defined Benefit Pension', '/articles/Formula-Enhancements-to-a.html'],
      ['Normal Retirement Age in Pension Valuation', '/articles/What-is-the-normal-reti.html'],
      ['Present Value vs Deferred Distribution', '/articles/Present-Value-Calculation-Versus.html']
    ]
  },
  {
    category: 'Advanced Divorce Issues',
    intro: 'More complex topics involving military retirement, disability, Social Security offsets, and delayed retirement.',
    articles: [
      ['Military Retirement Disability Issues', '/articles/The-Disability-Issue-in-the-Distribution-of-Military.html'],
      ['Disability Payments as Marital Property', '/articles/Reconciling-Mixed-Signals.html'],
      ['The Social Security Offset', '/articles/The-Social-Security-Offse.html'],
      ['The Demarco Case and Delayed Retirement', '/articles/The-Demarco-Case-and-Delayed-Retirement.html'],
      ['Early Retirement Window Enhancements', '/articles/Early-Retirement-Window-E.html'],
      ['Age Patterns in Divorce', '/articles/Age-Patterns-in-Divorce.html']
    ]
  }
];

export default function Resources() {
  return (
    <>
      <section className="resourcesHero">
        <p className="eyebrow">Resource Library</p>
        <h1>QDRO & Pension Division Articles</h1>
        <p>
          Educational articles from QDROPAQ on pensions, QDROs, retirement valuation,
          survivor benefits, and complex divorce-related financial issues.
        </p>
      </section>

      <section className="resourceAuthority">
        <div>
          <strong>30+ Years</strong>
          <span>Experience</span>
        </div>
        <div>
          <strong>12,000+</strong>
          <span>QDROs Drafted</span>
        </div>
        <div>
          <strong>30,000+</strong>
          <span>Valuations Performed</span>
        </div>
        <div>
          <strong>Published</strong>
          <span>Pension Experts</span>
        </div>
      </section>

      <section className="section resourcesPage">
        {articleGroups.map((group) => (
          <div className="resourceGroup" key={group.category}>
            <div className="resourceGroupHeader">
              <p className="eyebrow">{group.category}</p>
              <h2>{group.category}</h2>
              <p>{group.intro}</p>
            </div>

            <div className="resourceGrid">
              {group.articles.map(([title, link]) => (
                <article className="resourceCard" key={title}>
                  <div>
                    <span className="resourceTag">{group.category}</span>
                    <h3>{title}</h3>
                    <p>
                      Learn more about this retirement division issue and how it may
                      affect pension valuation, QDRO preparation, or divorce settlement planning.
                    </p>
                  </div>

                  <a href={link} target="_blank" rel="noreferrer">
                    Read Article →
                  </a>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
