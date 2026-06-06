import PageHero from '../components/PageHero.jsx';

const sections = [
  ['Accurate Retirement Valuations', 'Not all retirement divisions are straightforward. Some plans require specialized calculations that standard software cannot properly address. QDROPAQ combines proprietary valuation tools with hands-on expertise to calculate retirement benefits accurately, even in complex situations involving pensions, defined benefit plans, 401(k) plans with premarital balances, buyout calculations, deferred distributions, executive compensation plans, breaks in service, and unusual employment histories.'],
  ['Custom-Drafted QDROs', 'QDROPAQ does not rely on generic templates. Every QDRO is individually drafted to reflect the parties’ agreement, the specific retirement plan requirements, and applicable state and federal regulations. This plan-specific approach helps avoid drafting errors that can delay approval or cause costly financial consequences.'],
  ['Real Human Support', 'Retirement division can be confusing. QDROPAQ provides access to knowledgeable professionals by phone and email throughout the process. When questions arise, clients have support instead of being left to figure out plan requirements alone.'],
  ['Built for Pro Se Clients', 'Many QDRO providers focus on attorneys. QDROPAQ focuses on individuals handling divorce matters on their own or through mediation, delivering professional-level expertise at affordable fees.'],
  ['No Farming Out', 'Valuations are performed in-house, by hand or using proprietary software. QDROPAQ can clearly explain calculations and offer settlement language insight and strategic guidance for a just distribution.'],
  ['Complex Plan Experience', 'QDROPAQ can address specialized cash balance plans, executive plans, TIAA-CREF plans, SERS, PSERS, PERS, TPAF, OPERS, Police/Fire, FERS, CSRS, Armed Forces, 401(k), 403(b), TSP, and more.']
];

export default function WhyQdropaq() {
  return (
    <>
      <PageHero eyebrow="Why QDROPAQ" title="Specialized expertise for retirement division." text="QDROPAQ combines actuarial knowledge, custom drafting, proprietary tools, plan experience, and personal support for pro se clients and mediated settlements." />
      <section className="section articleGrid">
        {sections.map(([title, text], index) => (
          <article className={index % 2 === 0 ? 'articleCard purpleTop' : 'articleCard orangeTop'} key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </>
  );
}
