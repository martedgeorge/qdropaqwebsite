import { Link } from 'react-router-dom';

const articleGroups = [
  {
    title: 'Articles',
    description: 'Educational articles on pensions, QDROs, retirement valuation, and divorce-related financial issues.',
    links: [
      ['Age Patterns in Divorce', '/articles/age-patterns-in-divorce'],
      ['Cost of Living Adjustment in Pension Division', '/articles/Cost-of-Living-Adjustment.html'],
      ['Defined Contribution Plans in Divorce', '/articles/Defined-Contribution-Plan.html']
    ]
  }
];

export default function Resources() {
  return (
    <>
      <section className="resourcesHero">
        <p className="eyebrow">Resource Center</p>
        <h1>QDRO & Pension Division Library</h1>
        <p>A professional resource library for articles, divorce tips, pension education, and retirement division guidance.</p>
      </section>

      <section className="section libraryLayout">
        <aside className="librarySidebar">
          <h3>QDROPAQ Resource Library</h3>
          <div className="sideGroup">
            <h4>Library</h4>
            <a href="#articles">Articles</a>
            <Link to="/contact">Contact QDROPAQ</Link>
          </div>
        </aside>

        <main className="libraryMain">
          {articleGroups.map((group) => (
            <section className="resourceSection" id="articles" key={group.title}>
              <div className="libraryIntro">
                <p className="eyebrow">{group.title}</p>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>

              <div className="articleDirectory">
                {group.links.map(([title, link]) => (
                  <Link className="articleDirectoryCard" to={link} key={title}>
                    <span>{group.title}</span>
                    <h3>{title}</h3>
                    <p>View this resource for more information about retirement division, pensions, QDROs, and divorce-related financial issues.</p>
                    <strong>Open Resource →</strong>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </main>
      </section>
    </>
  );
}
