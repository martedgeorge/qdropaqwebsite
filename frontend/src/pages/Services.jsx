export default function Services() {
  const services = [
    'Pension Valuations',
    'QDROs',
    'Employment Group Pension Expertise',
    'Expert Testimony',
    'Wage Loss',
    'Legal Language Consulting',
    'Stock Options',
    'Personalized Actuarial Consulting',
    'Speaker and CLE Presenter'
  ];

  return (
    <>
      <section className="pageHero">
        <p className="eyebrow">Services</p>
        <h1>Retirement Division, Pension Valuation, and QDRO Services</h1>
        <p className="pageLead">
          Specialized support for divorce-related retirement benefit division, valuation, and court order preparation.
        </p>
      </section>

      <section className="section articleGrid">
        {services.map((service) => (
          <article className="articleCard" key={service}>
            <h2>{service}</h2>
            <p>
              QDROPAQ provides professional guidance and technical support for this service area.
            </p>
            <a className="textLink" href="/contact">Ask About This Service →</a>
          </article>
        ))}
      </section>
    </>
  );
}
