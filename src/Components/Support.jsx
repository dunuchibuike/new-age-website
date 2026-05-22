import React from 'react'
import "../CSS/Support.css"
const Support = () => {
  return (
    <>
    
   <div className='supportpagewrapper'>
     <div className='support-banner'>
      <h1> Support Page </h1>
    </div>
     <div className="faq-container">
     
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
        
       
        <div className="faq-item">
          <div className="faq-header">
            <span className="faq-number">01</span>
            <span className="faq-question">How long does delivery take?</span>
            <span className="faq-icon">+</span>
          </div>
        </div>

       
        <div className="faq-item">
          <div className="faq-header">
            <span className="faq-number">02</span>
            <span className="faq-question">How can I track my order?</span>
            <span className="faq-icon">+</span>
          </div>
        </div>

      
        <div className="faq-item">
          <div className="faq-header">
            <span className="faq-number">03</span>
            <span className="faq-question">Do your products come with a warranty?</span>
            <span className="faq-icon">+</span>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-header">
            <span className="faq-number">04</span>
            <span className="faq-question">Can I return a product?</span>
            <span className="faq-icon">+</span>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-header">
            <span className="faq-number">05</span>
            <span className="faq-question">How do I know if a product is compatible with my device?</span>
            <span className="faq-icon">+</span>
          </div>
        </div>

    
        <div className="faq-item">
          <div className="faq-header">
            <span className="faq-number">06</span>
            <span className="faq-question">Do you offer bulk purchase options?</span>
            <span className="faq-icon">+</span>
          </div>
        </div>

     
        <div className="faq-item">
          <div className="faq-header">
            <span className="faq-number">07</span>
            <span className="faq-question">What payment methods do you accept?</span>
            <span className="faq-icon">+</span>
          </div>
        </div>

        
        <div className="faq-item">
          <div className="faq-header">
            <span className="faq-number">08</span>
            <span className="faq-question">How can I contact support?</span>
            <span className="faq-icon">+</span>
          </div>
        </div>

      </div>
    </div>

   </div>
  
</>
  )
}

export default Support
