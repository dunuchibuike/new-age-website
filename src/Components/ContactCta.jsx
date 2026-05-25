import React from 'react';
import '../CSS/ContactCta.css';

const ContactCta = () => {
  return (
    <section className="contactCtaSection">
      <div className="contactCtaCard">
        <h2 className="contactCtaTitle">Didn't find what you were looking for?</h2>
        <p className="contactCtaText">
          Our team is here to help with any questions about your orders.<br />
          Reach out and we'll guide you.
        </p>
        <button className="contactCtaBtn">Contact Us</button>
      </div>
    </section>
  );
};

export default ContactCta;
