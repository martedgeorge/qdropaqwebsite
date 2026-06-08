export default function Library() {
  const links = [
    ['Articles', '/resources'],
    ['Div Tips', '/faq'],
    ['Our Aspen Press Text Books', '/who-we-are'],
    ['Learn About Pensions', '/resources'],
    ['Methods & Standards', '/resources']
  ];

  return (
    <>
      <section className="pageHero">
        <p className="eyebrow">Library</p>
        <h1>QDROPAQ Library</h1>
        <p className="pageLead">
          Educational resources on pensions, QDROs, divorce, retirement valuation, and related financial issues.
        </p>
      </section>

      <section className="section articleGrid">
        {links.map(([title, link]) => (
          <article className="articleCard" key={title}>
            <h2>{title}</h2>
            <p>Browse this section of QDROPAQ’s educational library.</p>
            <a className="textLink" href={link}>Open Section →</a>
          </article>
        ))}
      </section>
    </>
  );
}
