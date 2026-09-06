import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/ContactCta.css';

const ContactCta = () => {
  const navigate = useNavigate();
  return (
    <section className="contactCtaSection">
      <div className="contactCtaCard">
        <h2 className="contactCtaTitle">Didn't find what you were looking for?</h2>
        <p className="contactCtaText">
          Our team is here to help with any questions about your orders.<br />
          Reach out and we'll guide you.
        </p>
        <button className="contactCtaBtn" type="button" onClick={() => navigate('/contact-us')}>Contact Us</button>
      </div>
    </section>
  );
};

export default ContactCta;
