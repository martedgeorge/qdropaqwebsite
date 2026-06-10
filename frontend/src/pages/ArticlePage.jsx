import { Link } from 'react-router-dom';

export default function ArticlePage() {
  return (
    <>
      <section className="articleHero">
        <Link className="backLink" to="/resources">← Back to Resource Library</Link>
        <p className="eyebrow">Divorce & Pension Research</p>
        <h1>Age Patterns in Divorce</h1>
        <p>
          An actuarial look at divorce age patterns using pension-related divorce data,
          probability distributions, percentiles, and demographic analysis.
        </p>

        <div className="articleMeta">
          <span>By Mark K. Altschuler</span>
          <span>QDROPAQ Article Library</span>
        </div>
      </section>

      <section className="section articlePageLayout">
        <aside className="articleSidebar">
          <h3>Need help with a QDRO or valuation?</h3>
          <p>
            Articles can explain the issue, but every retirement plan and divorce matter is different.
          </p>
          <Link className="button primary" to="/contact">Contact QDROPAQ</Link>
        </aside>

        <article className="articleBody">
          <section>
            <h2>Overview</h2>
            <p>
              Matrimonial lawyers observe many divorce cases over a career and often develop
              a sense for age patterns in divorce. This article examines those patterns using
              divorce data connected to pension distribution cases.
            </p>
            <p>
              The analysis looks at general population males, general population females, and
              police officers to better understand where divorce ages tend to cluster and how
              the distributions differ.
            </p>
          </section>

          <section>
            <h2>The Data</h2>
            <p>
              The sample included 15,938 records divided into three categories. The male sample
              included 12,097 records, the female sample included 2,759 records, and the police
              sample included 861 records.
            </p>
            <p>
              Because the sample is based on people with pensions that are equitably distributed
              in divorce cases, the number of women in the sample is smaller than the number of men.
            </p>
          </section>

          <section>
            <h2>Probability and Percentiles</h2>
            <p>
              The article explains how divorce age distributions can be expressed as probabilities,
              percentiles, mean, median, and mode.
            </p>
            <p>
              These measures help identify whether a distribution is symmetric, skewed, or clustered
              around certain ages.
            </p>
          </section>

          <section>
            <h2>Conclusion</h2>
            <p>
              Except for the police sample, the analysis confirms that most divorce cases occur
              in the mid-40s. It also suggests that people over 60 are more likely to get divorced
              than people under 30 in the studied pension-related sample.
            </p>
          </section>

          <div className="articleNotice">
            <strong>Important Notice</strong>
            <p>
              This article is provided for educational purposes only. QDROPAQ is not a law firm
              and does not provide legal advice.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
