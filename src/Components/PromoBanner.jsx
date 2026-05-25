import React from 'react'
import '../CSS/PromoBanner.css'


const PromoBanner = () => {
  return (
    <section className="banner-section">
      <div className="banner-wrap">
        
        <div className="banner-overlay">
          <h2 className="banner-title">Quality Tech for Everyday Use & Resale</h2>
          <p className="banner-desc">
            Shop affordable, reliable accessories for personal use or bulk purchase <br />
            built to perform and sell.
          </p>
          <button className="banner-btn">Shop Now</button>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner