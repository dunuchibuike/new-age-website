import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../CSS/HowItWorks.css"
const HowItWorks = () => {
  const navigate = useNavigate()
  return (
    <div>
       <section class="hiw-section">
 
    <div class="hiw-left">
      <h2 class="hiw-title">How It Works</h2>
      <p class="hiw-desc">
        Easily browse, compare, and shop with tools designed to help you make the right choice faster.
      </p>
      <button className="hiw-btn" type="button" onClick={() => navigate('/shop')}>Shop product &#128722;</button>
    </div>
 
    <div class="hiw-steps">
 
      <div class="hiw-card hiw-card--featured">
        <span class="hiw-number">1</span>
        <div class="hiw-mockup">
          <div class="hiw-mockup-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="hiw-mockup-hero">
            <div class="hiw-mockup-text">
              <div class="hiw-mockup-line wide"></div>
              <div class="hiw-mockup-line narrow"></div>
            </div>
            <div class="hiw-mockup-product"></div>
          </div>
          <div class="hiw-mockup-grid">
            <div class="hiw-mockup-item"></div>
            <div class="hiw-mockup-item"></div>
            <div class="hiw-mockup-item"></div>
          </div>
        </div>
        <h3 class="hiw-card-title">Browse & Find Products</h3>
        <p class="hiw-card-desc">
          Explore chargers, audio, power banks, and more. Use categories and filters to quickly find what you need.
        </p>
      </div>
 
      <div class="hiw-card hiw-card--slim">
        <span class="hiw-number">2</span>
        <h3 class="hiw-card-title hiw-card-title--vertical">Compare Products</h3>
      </div>
 
      <div class="hiw-card hiw-card--slim">
        <span class="hiw-number">3</span>
        <h3 class="hiw-card-title hiw-card-title--vertical">Ask Questions Instantly</h3>
      </div>
 
      <div class="hiw-card hiw-card--slim">
        <span class="hiw-number">4</span>
        <h3 class="hiw-card-title hiw-card-title--vertical">Add to Cart & Checkout</h3>
      </div>
 
      <div class="hiw-card hiw-card--slim">
        <span class="hiw-number">5</span>
        <h3 class="hiw-card-title hiw-card-title--vertical">Track Your Order</h3>
      </div>
 
    </div>
  </section>
    </div>
  )
}

export default HowItWorks
