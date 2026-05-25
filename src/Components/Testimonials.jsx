import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiArrowLeft, FiArrowRight, FiExternalLink } from 'react-icons/fi'
import '../CSS/Testimonials.css'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1)
  }

  const handleNext = () => {
    if (current < 1) setCurrent(current + 1)
  }

  return (
    <section className="tm-section">

      <div className="tm-left">
        <h2 className="tm-title">Trusted by Customers Who Stay Powered</h2>
        <p className="tm-desc">See what people are saying about our products, performance, and reliability.</p>
        <button className="tm-btn">View all <FiExternalLink /></button>
      </div>

      <div className="tm-right">
        <div className="tm-cards">

          <div className={`tm-card ${current === 0 ? 'tm-card--visible' : 'tm-card--hidden'}`}>
            <div className="tm-user">
              <div className="tm-avatar tm-avatar--1"></div>
              <div>
                <p className="tm-name">Chinedu A.</p>
                <div className="tm-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>
            <p className="tm-review">
              I've been buying in bulk from NewAge and the quality has been consistent. My customers rarely complain, and that's important for my business.
            </p>
          </div>

          <div className={`tm-card ${current === 1 ? 'tm-card--visible' : 'tm-card--hidden'}`}>
            <div className="tm-user">
              <div className="tm-avatar tm-avatar--2"></div>
              <div>
                <p className="tm-name">Amaka O.</p>
                <div className="tm-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>
            <p className="tm-review">
              The charger works perfectly and charges my phone really fast. I also like that it feels solid, not cheap.
            </p>
          </div>

        </div>

        <div className="tm-controls">
          <button className="tm-arrow tm-arrow--prev" onClick={handlePrev} disabled={current === 0}>
            <FiArrowLeft />
          </button>
          <button className="tm-arrow tm-arrow--next" onClick={handleNext} disabled={current === 1}>
            <FiArrowRight />
          </button>
        </div>
      </div>

    </section>
  )
}

export default Testimonials