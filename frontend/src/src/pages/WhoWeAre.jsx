import PageHero from '../components/PageHero.jsx';
import { A, affiliations, stats } from '../data.js';

export default function WhoWeAre() {
  return (
    <>
      <PageHero eyebrow="Who We Are" title="What We’re All About" text="QDROPAQ provides pro se divorce parties with exceptional marital valuation and QDRO service. With no lawyer needed. At a surprisingly affordable fee." />
      <section className="section split">
        <div>
          <h2>We’re all about you.</h2>
          <p>Your business is our business if you are now divorced and done with your lawyer, but still need a QDRO; if you are totally on your own or going through a mediator; or if you need to know the marital present value or marital worth of your retirement plan to create a settlement agreement.</p>
          <p>QDROPAQ helps clients and mediators understand marital settlement language, obtain a proper retirement distribution, and engage a high-quality provider for less than many traditional legal routes.</p>
          <p>We want no stress and full peace of mind.</p>
        </div>
        <img className="roundedImage" src={`${A}fanned-books.jpg`} alt="QDROPAQ published books" />
      </section>

      <section className="section purpleSection">
        <p className="eyebrow light">Expertise Snapshot</p>
        <h2>Published writing, actuarial credentials, awards, and experience.</h2>
        <div className="grid fourCards">
          <article className="colorCard white"><h3>Published Writings</h3><ul><li>Valuation of Specific Assets in Divorce</li><li>Valuation Strategies in Divorce</li><li>Value of Pensions in Divorce</li><li>Dividing Pensions in Divorce</li><li>80+ published articles</li></ul></article>
          <article className="colorCard white"><h3>Credentials</h3><ul><li>Society of Actuaries examinations</li><li>Calculus and Linear Algebra</li><li>Probability and Statistics</li><li>Numerical Methods</li><li>Casualty Actuarial Society examinations</li></ul></article>
          <article className="colorCard white"><h3>Awards</h3><ul><li>American Academy of Financial & Economic Experts</li><li>“Best QDRO” recognition</li><li>“#1 Ranking” Legal Intelligencer</li></ul></article>
          <article className="colorCard white"><h3>Experience</h3><ul>{stats.map(([n,l]) => <li key={l}>{n} {l}</li>)}</ul></article>
        </div>
      </section>

      <section className="section affiliationPreview">
        <p className="eyebrow">Present & Past Affiliations</p>
        <h2>Professional associations and recognition.</h2>
        <div className="logoGrid">
          {affiliations.map(([image, label]) => <div className="logoBox" key={image}><img src={`${A}${image}`} alt={label} /></div>)}
        </div>
      </section>
    </>
  );
}
