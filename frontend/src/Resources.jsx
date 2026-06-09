import { Link } from 'react-router-dom';

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
          <h3>QDROPAQ Resource Library</h3>

          <div className="sideGroup">
            <h4>Library</h4>
            <a href="#articles">Articles</a>
            <Link to="/faq">Div Tips</Link>
            <Link to="/library">Learn About Pensions</Link>
          </div>

          <div className="sideGroup">
            <h4>Get Started</h4>
            <Link to="/contact">Contact QDROPAQ</Link>
            <Link to="/fees-forms">Fees & Forms</Link>
          </div>
        </aside>

        <main className="libraryMain">
          <section className="resourceSection" id="articles">
            <div className="libraryIntro">
              <p className="eyebrow">Articles</p>
              <h2>Articles</h2>
              <p>
                Educational articles on pensions, QDROs, retirement valuation,
                and divorce-related financial issues.
              </p>
            </div>

            <div className="articleDirectory">
              <Link
                className="articleDirectoryCard"
                to="/articles/age-patterns-in-divorce"
              >
                <span>Articles</span>
                <h3>Age Patterns in Divorce</h3>
                <p>
                  View this resource for more information about retirement division,
                  pensions, QDROs, and divorce-related financial issues.
                </p>
                <strong>Open Resource →</strong>
              </Link>

              <a className="articleDirectoryCard" href="/articles/Cost-of-Living-Adjustment.html">
                <span>Articles</span>
                <h3>Cost of Living Adjustment in Pension Division</h3>
                <p>Temporary old article link until this page is converted.</p>
                <strong>Open Resource →</strong>
              </a>

              <a className="articleDirectoryCard" href="/articles/Defined-Contribution-Plan.html">
                <span>Articles</span>
                <h3>Defined Contribution Plans in Divorce</h3>
                <p>Temporary old article link until this page is converted.</p>
                <strong>Open Resource →</strong>
              </a>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}
