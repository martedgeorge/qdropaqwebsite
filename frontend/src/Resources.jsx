const articleGroups = [
  {
    category: 'QDRO & Retirement Plans',
    description: 'Articles explaining retirement plan division, QDROs, and defined contribution plans.',
    articles: [
      ['Defined Contribution Plans in Divorce', '/articles/Defined-Contribution-Plan.html'],
      ['Marital Portion of Pensions', '/articles/Marital-portion-of-pensio.html'],
      ['Marital Portion of NJ Pensions', '/articles/Marital-portion-of-NJ-pensions.html'],
      ['Survivor Annuity is a Marital Asset', '/articles/Survivor-Annuity-is-a-Mar.html']
    ]
  },
  {
    category: 'Pension Valuation Issues',
    description: 'Resources on pension values, retirement age, cost-of-living adjustments, and benefit formulas.',
    articles: [
      ['Cost of Living Adjustment in Pension Division', '/articles/Cost-of-Living-Adjustment.html'],
      ['Formula Enhancements to a Defined Benefit Pension', '/articles/Formula-Enhancements-to-a.html'],
      ['Normal Retirement Age in Pension Valuation', '/articles/What-is-the-normal-reti.html'],
      ['Present Value vs Deferred Distribution', '/articles/Present-Value-Calculation-Versus.html']
    ]
  },
  {
    category: 'Advanced Divorce & Benefit Topics',
    description: 'More complex issues involving military benefits, disability, Social Security offsets, and delayed retirement.',
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
      <section className="pageHero">
        <p className="eyebrow">Resource Library</p>
        <h1>QDRO & Pension Division Articles</h1>
        <p className="pageLead">
          Educational articles on retirement division, pension valuation, QDROs,
          survivor benefits, and complex divorce-related financial issues.
        </p>
      </section>

      <section className="section resourceIntroBlock">
        <div>
          <p className="eyebrow">Expert Guidance</p>
          <h2>Learn from pension and QDRO professionals.</h2>
        </div>
        <p>
          These resources help clients, attorneys, mediators, and financial professionals
          better understand the retirement issues that can arise during divorce.
        </p>
      </section>

      <section className="section resourcesPage">
        {articleGroups.map((group) => (
          <div className="resourceGroup" key={group.category}>
            <div className="resourceGroupHeader">
              <p className="eyebrow">{group.category}</p>
              <h2>{group.category}</h2>
              <p>{group.description}</p>
            </div>

            <div className="resourceGrid">
              {group.articles.map(([title, link]) => (
                <article className="resourceCard" key={title}>
                  <h3>{title}</h3>
                  <p>
                    Read this article from QDROPAQ’s pension and retirement
                    division resource library.
                  </p>
                  <a className="textLink" href={link} target="_blank" rel="noreferrer">
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
