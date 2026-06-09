import { Link } from 'react-router-dom';

const articles = [
{
title: 'Age Patterns in Divorce',
description:
'An actuarial analysis of divorce age patterns using pension-related divorce data.',
link: '/articles/age-patterns-in-divorce',
active: true
},
{
title: 'Defined Contribution Plans in Divorce',
description:
'How 401(k)s, profit-sharing plans, and other defined contribution plans are handled during divorce.',
active: false
},
{
title: 'Survivor Annuity is a Marital Asset',
description:
'Why survivor benefits may be one of the most important considerations in pension division.',
active: false
},
{
title: 'Present Value vs Deferred Distribution',
description:
'Comparing two common approaches used to divide retirement benefits.',
active: false
},
{
title: 'Marital Portion of Pensions',
description:
'Understanding how the marital portion of a pension is determined and distributed.',
active: false
},
{
title: 'Cost of Living Adjustments',
description:
'The impact of COLAs on pension division and retirement valuations.',
active: false
}
];

export default function Resources() {
return (
<> <section className="resourcesHero"> <p className="eyebrow">Library</p>

```
    <h1>QDRO & Pension Division Articles</h1>

    <p>
      Browse educational articles on pensions, QDROs, retirement valuation,
      survivor benefits, and divorce-related financial issues.
    </p>
  </section>

  <section className="section articleDirectory">
    {articles.map((article) => (
      <article
        className="articleDirectoryCard"
        key={article.title}
      >
        <span>Article</span>

        <h3>{article.title}</h3>

        <p>{article.description}</p>

        {article.active ? (
          <Link
            className="button primary"
            to={article.link}
          >
            Read Full Article
          </Link>
        ) : (
          <span className="comingSoon">
            Coming Soon
          </span>
        )}
      </article>
    ))}
  </section>
</>
```

);
}

