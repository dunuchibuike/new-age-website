import { useState } from 'react'
import HeaderText from '../Components/HeaderText'
import NewAgeHeader from '../Components/NewAgeHeader'
import Footer from '../Components/Footer'
import '../CSS/ContactUs.css'

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <div>
      <HeaderText />
      <NewAgeHeader />
      <main className="contact-page">
        <section className="contact-page__intro">
          <p className="contact-page__eyebrow">GET IN TOUCH</p>
          <h1>We’re here to help.</h1>
          <p>Have a question about an order, product, or partnership? Send us a message and our team will get back to you as soon as possible.</p>
        </section>

        <section className="contact-page__content" aria-label="Contact information and form">
          <aside className="contact-page__details">
            <h2>Contact details</h2>
            <div>
              <h3>Email us</h3>
              <a href="mailto:support@example.com">support@example.com</a>
            </div>
            <div>
              <h3>Customer support</h3>
              <p>Monday – Friday, 9:00 AM – 5:00 PM</p>
            </div>
            <div>
              <h3>Need an order update?</h3>
              <a href="/track-order">Track your order</a>
            </div>
          </aside>

          <form className="contact-page__form" onSubmit={handleSubmit}>
            <label>Full name<input type="text" name="name" autoComplete="name" required /></label>
            <label>Email address<input type="email" name="email" autoComplete="email" required /></label>
            <label>Subject<input type="text" name="subject" required /></label>
            <label>How can we help?<textarea name="message" rows="5" required /></label>
            <button type="submit">Send message</button>
            {submitted && <p className="contact-page__success" role="status">Thanks — your message has been received.</p>}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ContactUs
