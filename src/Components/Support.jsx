import React, { useState } from 'react'
import "../CSS/Support.css"

const Support = () => {
  const [openId, setOpenId] = useState(null)

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <>
      <div className='supportpagewrapper'>
        <div className='support-banner'>
          <h1 className='support-text'>Support Page</h1>
        </div>

        <div className="faq-container" id="faq">
          <div className="faq-sidebar">
            <h2 className="faq-main-title">Frequently<br />Asked Questions</h2>
            <p className="faq-subtitle">
              Find quick answers about orders, delivery, warranty, and product use.
            </p>
            <div className="faq-cta-card">
              <h3>Still Have Questions?</h3>
              <p>Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!</p>
              <a href="mailto:support@example.com" className="faq-btn">Send Email</a>
            </div>
          </div>

          <div className="faq-accordion-list">

            <div className={`faq-item ${openId === 1 ? 'faq-item--open' : ''}`} onClick={() => handleToggle(1)}>
              <div className="faq-header">
                <span className="faq-number">01</span>
                <span className="faq-question">How long does delivery take?</span>
                <span className="faq-icon">{openId === 1 ? '×' : '+'}</span>
              </div>
              {openId === 1 && (
                <div className="faq-answer">
                  Delivery typically takes 2–5 business days, depending on your location.
                </div>
              )}
            </div>

            <div className={`faq-item ${openId === 2 ? 'faq-item--open' : ''}`} onClick={() => handleToggle(2)}>
              <div className="faq-header">
                <span className="faq-number">02</span>
                <span className="faq-question">How can I track my order?</span>
                <span className="faq-icon">{openId === 2 ? '×' : '+'}</span>
              </div>
              {openId === 2 && (
                <div className="faq-answer">
                  Once your order is confirmed, you'll receive a tracking ID to monitor your delivery status.
                </div>
              )}
            </div>

            <div className={`faq-item ${openId === 3 ? 'faq-item--open' : ''}`} onClick={() => handleToggle(3)}>
              <div className="faq-header">
                <span className="faq-number">03</span>
                <span className="faq-question">Do your products come with a warranty?</span>
                <span className="faq-icon">{openId === 3 ? '×' : '+'}</span>
              </div>
              {openId === 3 && (
                <div className="faq-answer">
                  Yes, all products come with a warranty that covers manufacturing defects and faults.
                </div>
              )}
            </div>

            <div className={`faq-item ${openId === 4 ? 'faq-item--open' : ''}`} onClick={() => handleToggle(4)}>
              <div className="faq-header">
                <span className="faq-number">04</span>
                <span className="faq-question">Can I return a product?</span>
                <span className="faq-icon">{openId === 4 ? '×' : '+'}</span>
              </div>
              {openId === 4 && (
                <div className="faq-answer">
                  Yes, you can request a return if the product is faulty or not as described, within the return period.
                </div>
              )}
            </div>

            <div className={`faq-item ${openId === 5 ? 'faq-item--open' : ''}`} onClick={() => handleToggle(5)}>
              <div className="faq-header">
                <span className="faq-number">05</span>
                <span className="faq-question">How do I know if a product is compatible with my device?</span>
                <span className="faq-icon">{openId === 5 ? '×' : '+'}</span>
              </div>
              {openId === 5 && (
                <div className="faq-answer">
                  Check the compatibility tags and specifications on the product page, or chat with us for assistance.
                </div>
              )}
            </div>

            <div className={`faq-item ${openId === 6 ? 'faq-item--open' : ''}`} onClick={() => handleToggle(6)}>
              <div className="faq-header">
                <span className="faq-number">06</span>
                <span className="faq-question">Do you offer bulk purchase options?</span>
                <span className="faq-icon">{openId === 6 ? '×' : '+'}</span>
              </div>
              {openId === 6 && (
                <div className="faq-answer">
                  Yes, we offer bulk pricing for resellers and large orders. You can request this on the product page or contact us.
                </div>
              )}
            </div>

            <div className={`faq-item ${openId === 7 ? 'faq-item--open' : ''}`} onClick={() => handleToggle(7)}>
              <div className="faq-header">
                <span className="faq-number">07</span>
                <span className="faq-question">What payment methods do you accept?</span>
                <span className="faq-icon">{openId === 7 ? '×' : '+'}</span>
              </div>
              {openId === 7 && (
                <div className="faq-answer">
                  We support secure online payments through trusted payment providers.
                </div>
              )}
            </div>

            <div className={`faq-item ${openId === 8 ? 'faq-item--open' : ''}`} onClick={() => handleToggle(8)}>
              <div className="faq-header">
                <span className="faq-number">08</span>
                <span className="faq-question">How can I contact support?</span>
                <span className="faq-icon">{openId === 8 ? '×' : '+'}</span>
              </div>
              {openId === 8 && (
                <div className="faq-answer">
                  You can reach us via WhatsApp or the contact support option for quick assistance.
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Support
