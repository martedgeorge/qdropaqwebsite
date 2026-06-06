import PageHero from '../components/PageHero.jsx';

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact QDROPAQ" title="Start your QDRO or retirement valuation request." text="Send your information and a brief description of what you need help with. QDROPAQ will help you understand the next step." />
      <section className="section contactPage">
        <aside className="contactInfoPanel">
          <h2>Contact Information</h2>
          <p><strong>Email</strong><br /><a href="mailto:carol@qdropaq.com">carol@qdropaq.com</a></p>
          <p><strong>Phone</strong><br /><a href="tel:2157829847">(215) 782-9847</a></p>
          <p className="smallText">QDROPAQ provides retirement valuation and QDRO preparation support. QDROPAQ is not a law firm and does not provide legal advice.</p>
        </aside>
        <div className="formPanel">
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="contactForm">
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <input type="tel" name="phone" placeholder="Your phone number" />
            <select name="service" defaultValue="">
              <option value="" disabled>What do you need help with?</option>
              <option>QDRO Preparation</option>
              <option>Retirement Plan Valuation</option>
              <option>Pension Division Question</option>
              <option>Not Sure Yet</option>
            </select>
            <textarea name="message" placeholder="Tell us what you need help with" rows="8" required></textarea>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
}
