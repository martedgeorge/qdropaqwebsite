const articles = [
  ['Pension Division', 'Age Patterns in Divorce', '/articles/Age-Patterns-in-Divorce.html'],
  ['Pension Valuation', 'Cost of Living Adjustment in Pension Division', '/articles/Cost-of-Living-Adjustment.html'],
  ['Retirement Plans', 'Defined Contribution Plans in Divorce', '/articles/Defined-Contribution-Plan.html'],
  ['Retirement Issues', 'Early Retirement Window Enhancements', '/articles/Early-Retirement-Window-E.html'],
  ['Pension Valuation', 'Formula Enhancements to a Defined Benefit Pension', '/articles/Formula-Enhancements-to-a.html'],
  ['Pension Division', 'Marital Portion of NJ Pensions', '/articles/Marital-portion-of-NJ-pensions.html'],
  ['Pension Division', 'Marital Portion of Pensions', '/articles/Marital-portion-of-pensio.html'],
  ['Advanced Topics', 'Present Value vs Deferred Distribution', '/articles/Present-Value-Calculation-Versus.html'],
  ['Disability Benefits', 'Disability Payments as Marital Property', '/articles/Reconciling-Mixed-Signals.html'],
  ['Survivor Benefits', 'Survivor Annuity is a Marital Asset', '/articles/Survivor-Annuity-is-a-Mar.html'],
  ['Retirement Issues', 'The Demarco Case and Delayed Retirement', '/articles/The-Demarco-Case-and-Delayed-Retirement.html'],
  ['Military Benefits', 'Military Retirement Disability Issues', '/articles/The-Disability-Issue-in-the-Distribution-of-Military.html'],
  ['Social Security', 'The Social Security Offset', '/articles/The-Social-Security-Offse.html'],
  ['Pension Valuation', 'Normal Retirement Age in Pension Valuation', '/articles/What-is-the-normal-reti.html']
];

export default function Resources() {
  return (
    <>
      <section className="pageHero">
        <p className="eyebrow">Resource Library</p>
        <h1>QDRO & Pension Division Articles</h1>
        <p className="pageLead">
          Educational articles on pensions, retirement valuation, QDROs, survivor benefits,
          and complex divorce-related retirement issues.
        </p>
      </section>

      <section className="section resourcesPage">
        <div className="resourceIntro">
          <p>
            Browse articles from QDROPAQ’s pension and retirement division library.
            These resources are provided for educational purposes and should not be considered legal advice.
          </p>
        </div>

        <div className="resourceGrid">
          {articles.map(([category, title, link]) => (
            <article className="resourceCard" key={title}>
              <span className="resourceCategory">{category}</span>
              <h2>{title}</h2>
              <p>
                Learn more about this retirement division issue and how it may affect
                pension valuation, QDRO preparation, or divorce settlement planning.
              </p>
              <a className="textLink" href={link} target="_blank" rel="noreferrer">
                Read Article →
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
