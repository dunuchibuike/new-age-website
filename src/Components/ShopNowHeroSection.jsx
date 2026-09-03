import React from 'react'

import '../CSS/ShopNowHeroSection.css'


const ShopNowHeroSection = ({ onShopNow }) => {


  return (
    <section className="hero-section">
  <img src="/images/ShopnowHero2.png" alt="Power That Moves With You" className="hero-img" />
  <div className="hero-overlay" />
  <div className="hero-content">
    <h1 className="hero-title">Power That Moves <br /> With You</h1>
    <p className="hero-desc">
      Fast, reliable, and built for your everyday hustle. Stay charged <br />
      wherever life takes you with NewAge Chargers.
    </p>
    <button className="hero-btn" onClick={onShopNow}>
      Shop Now
    </button>
  </div>
</section>
  )
}

export default ShopNowHeroSection