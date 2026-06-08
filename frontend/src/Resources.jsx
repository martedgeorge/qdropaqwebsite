const articles = [
  ['Age Patterns in Divorce', '/articles/Age-Patterns-in-Divorce.html'],
  ['Cost of Living Adjustment in Pension Division', '/articles/Cost-of-Living-Adjustment.html'],
  ['Defined Contribution Plans in Divorce', '/articles/Defined-Contribution-Plan.html'],
  ['Early Retirement Window Enhancements', '/articles/Early-Retirement-Window-E.html'],
  ['Formula Enhancements to a Defined Benefit Pension', '/articles/Formula-Enhancements-to-a.html'],
  ['Marital Portion of NJ Pensions', '/articles/Marital-portion-of-NJ-pensions.html'],
  ['Marital Portion of Pensions', '/articles/Marital-portion-of-pensio.html'],
  ['Present Value vs Deferred Distribution', '/articles/Present-Value-Calculation-Versus.html'],
  ['Reconciling Mixed Signals: Disability Payments', '/articles/Reconciling-Mixed-Signals.html'],
  ['Survivor Annuity is a Marital Asset', '/articles/Survivor-Annuity-is-a-Mar.html'],
  ['The Demarco Case and Delayed Retirement', '/articles/The-Demarco-Case-and-Delayed-Retirement.html'],
  ['Military Retirement Disability Issues', '/articles/The-Disability-Issue-in-the-Distribution-of-Military.html'],
  ['The Social Security Offset', '/articles/The-Social-Security-Offse.html'],
  ['Normal Retirement Age in Pension Valuation', '/articles/What-is-the-normal-reti.html']
];

export default function Resources() {
  return (
    <>
      <section className="pageHero">
        <p className="eyebrow">Resources</p>
        <h1>QDRO & Pension Division Articles</h1>
        <p className="pageLead">
          Educational articles on pensions, retirement valuation, QDROs, survivor benefits, and complex divorce-related retirement issues.
        </p>
      </section>

      <section className="section resourcesPage">
        {articles.map(([title, link]) => (
          <article className="articleCard orangeTop" key={title}>
            <h2>{title}</h2>
            <p>Read this article from QDROPAQ’s pension and retirement division library.</p>
            <a className="textLink" href={link} target="_blank" rel="noreferrer">
              Read Article →
            </a>
          </article>
        ))}
      </section>
    </>
  );
}
