export default function FeesForms() {
  return (
    <>
      <section className="pageHero">
        <p className="eyebrow">Fees & Forms</p>
        <h1>Forms and Request Information</h1>
        <p className="pageLead">
          Use this section to access forms and begin a pension valuation or QDRO request.
        </p>
      </section>

      <section className="section articleGrid">
        <article className="articleCard">
          <h2>Pension Valuation Form</h2>
          <p>Request information for pension valuation services.</p>
          <a className="textLink" href="/contact">Request Form →</a>
        </article>

        <article className="articleCard">
          <h2>QDRO Form</h2>
          <p>Request information for QDRO preparation.</p>
          <a className="textLink" href="/contact">Request Form →</a>
        </article>

        <article className="articleCard">
          <h2>Pro Se QDRO Form</h2>
          <p>For self-represented clients seeking QDRO assistance.</p>
          <a className="textLink" href="/contact">Request Form →</a>
        </article>
      </section>
    </>
  );
}
