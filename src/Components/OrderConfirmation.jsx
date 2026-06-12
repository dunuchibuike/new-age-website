import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCheck, FaMapMarkerAlt, FaPhoneAlt, FaUndo } from 'react-icons/fa'
import '../CSS/OrderConfirmation.css'

const OrderConfirmation = () => {
  const nav = useNavigate()
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  return (
    <section className="confirmationSection">
      <div className="confirmationContainer">

        <div className="stepperContainer">
          <div className="stepItem activeStep">
            <span className="stepIcon"><FaCheck className="orangeCheckIcon" /></span>
            <span className="stepText">Order Summary</span>
          </div>
          <div className="stepArrow"></div>
          <div className="stepItem activeStep">
            <span className="stepIcon"><FaCheck className="orangeCheckIcon" /></span>
            <span className="stepText">Checkout</span>
          </div>
          <div className="stepArrow"></div>
          <div className="stepItem activeStep">
            <span className="stepIcon"><FaCheck className="orangeCheckIcon" /></span>
            <span className="stepText">Order Confirmation</span>
          </div>
        </div>

        <div className="successBadge">
          <FaCheck className="greenCheckIcon" />
        </div>

        <h2 className="confirmationTitle">Order Confirmed!</h2>

        <p className="confirmationMessage">
          Your order has been confirmed. Thanks for your Patronage.
        </p>

        <div className="emailNoticeBox">
          <p className="emailNoticeText">A confirmation Email has been sent to</p>
          <p className="customerEmail">{user.email || 'your email'}</p>
        </div>

        <button className="continueShoppingBtn" onClick={() => nav('/Shop')}>
          Continue Shopping
        </button>

        <div className="featuresFooterGrid">

          <div className="featureFooterCard" onClick={() => nav('/track-order')}>
            <div className="featureFooterIconBox">
              <FaMapMarkerAlt />
            </div>
            <div className="featureFooterTextBox">
              <h4 className="featureFooterTitle">Track Order</h4>
              <p className="featureFooterDesc">Get real-time updates on your order</p>
            </div>
          </div>

          <div className="featureFooterCard">
            <div className="featureFooterIconBox">
              <FaPhoneAlt />
            </div>
            <div className="featureFooterTextBox">
              <h4 className="featureFooterTitle">24/7 Help</h4>
              <p className="featureFooterDesc">Chat with us Anytime</p>
            </div>
          </div>

          <div className="featureFooterCard">
            <div className="featureFooterIconBox">
              <FaUndo />
            </div>
            <div className="featureFooterTextBox">
              <h4 className="featureFooterTitle">Easy Returns</h4>
              <p className="featureFooterDesc">30-day money back</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default OrderConfirmation