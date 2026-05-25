import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import '../CSS/LatestArticles.css'

const LatestArticles = () => {
  return (
    <section className="la-section">

      <div className="la-header">
        <h2 className="la-title">Explore Our Latest Articles</h2>
        <button className="la-view-btn">View all <FiExternalLink /></button>
      </div>

      <div className="la-grid">

        <div className="la-card">
          <div className="la-card-top">
            <h3 className="la-card-title">Low Battery Anxiety in Nigeria: How to Stay Powered</h3>
            <p className="la-card-date">March 9, 2026</p>
          </div>
          <div className="la-card-img-wrap">
            <img src="/src/assets/Manonthe traffic.png" alt="Low Battery Anxiety" className="la-card-img" />
            <button className="la-read-btn">Read Article</button>
          </div>
        </div>

        <div className="la-card">
          <div className="la-card-top">
            <h3 className="la-card-title">Never Panic Again: Jumpstarters for Everyday Emergencies</h3>
            <p className="la-card-date">March 9, 2026</p>
          </div>
          <div className="la-card-img-wrap">
            <img src="/src/assets/ManwithPowerBank.png" alt="Jumpstarters" className="la-card-img" />
            <button className="la-read-btn">Read Article</button>
          </div>
        </div>

        <div className="la-card">
          <div className="la-card-top">
            <h3 className="la-card-title">Smartwatches That Track More Than Time - NewAge</h3>
            <p className="la-card-date">March 9, 2026</p>
          </div>
          <div className="la-card-img-wrap">
            <img src="/src/assets/WristWatch.png" alt="Smartwatches" className="la-card-img" />
            <button className="la-read-btn">Read Article</button>
          </div>
        </div>

      </div>

    </section>
  )
}

export default LatestArticles