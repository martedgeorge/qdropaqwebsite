export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="pageHero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {text && <p className="pageLead">{text}</p>}
    </section>
  );
}
