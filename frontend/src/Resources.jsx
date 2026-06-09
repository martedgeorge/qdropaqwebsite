import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'Age Patterns in Divorce',
    description:
      'An actuarial look at age patterns in divorce using pension-related divorce data.',
    link: '/articles/age-patterns-in-divorce'
  },
  {
    title: 'Defined Contribution Plans in Divorce',
    description:
      'Explains how account-based retirement plans may be handled during divorce.',
    link: '/articles/defined-contribution-plans-in-divorce'
  },
  {
    title: 'Survivor Annuity is a Marital Asset',
    description:
      'Discusses survivor benefits and why they may matter in pension division.',
    link: '/articles/survivor-annuity-is-a-marital-asset'
  }
];

export default function Resources() {
  return (
    <>
      <section className="resourcesHero">
        <p className="eyebrow">Articles</p>
        <h1>QDRO & Pension Division Articles</h1>
        <p>
          Browse QDROPAQ’s educational articles on pensions, QDROs,
          retirement valuation, survivor benefits, and divorce-related
          financial issues.
        </p>
      </section>

      <section className="section articleDirectory">
        {articles.map((article) => (
          <article className="articleDirectoryCard" key={article.title}>
            <span>Article</span>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <Link className="textLink" to={article.link}>
              Read Full Article →
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
