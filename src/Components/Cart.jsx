import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'
import '../CSS/Cart.css'
import HeaderText from './HeaderText'
import NewAgeHeader from './NewAgeHeader'

const Cart = () => {
  const nav = useNavigate()
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart()

  const subtotal = cart.reduce((sum, item) => sum + (Number(item.productPrice) || 0) * item.quantity, 0)
  const deliveryFee = 2500
  const discount = 0
  const total = subtotal + deliveryFee - discount

  return (
    <>
      <HeaderText />
      <NewAgeHeader />

      <div className="cart-page">
        <div className="savings-banner">
          You have saved <span className="savings-amount">₦0.00</span>
        </div>

        <div className="cart-table">
          <div className="cart-header">
            <span>PRODUCT</span>
            <span>AMOUNT</span>
            <span>QUANTITY</span>
            <span>SUBTOTAL</span>
          </div>

          {cart.length === 0 ? (
            <p className="cart-empty">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-row" key={item._id}>

                <div className="cart-product">
                  <img src={item.productImage} alt={item.productName} className="product-img" />
                  <span className="product-name">{item.productName}</span>
                </div>

                <span className="cart-amount">₦{Number(item.productPrice).toLocaleString()}</span>

                <div className="qty-control">
                  <button className="qty-btn" onClick={() => decreaseQuantity(item._id)}>−</button>
                  <span className="qty-value">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => increaseQuantity(item._id)}>+</button>
                </div>

                <div className="cart-subtotal">
                  <span>₦{((Number(item.productPrice) || 0) * item.quantity).toLocaleString()}</span>
                  <button className="delete-btn" onClick={() => removeFromCart(item._id)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                      <path d="M10 11v6M14 11v6" />
                      <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                    </svg>
                  </button>
                </div>

              </div>
            ))
          )}
        </div>

        <div className="order-summary">
          <h3 className="summary-title">Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>₦{deliveryFee.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Discount</span>
            <span>₦{discount.toLocaleString()}</span>
          </div>
          <div className="summary-row summary-total">
            <span>Total</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
        </div>

        <button className="checkout-btn" onClick={() => nav('/checkout')}>
          Proceed to Checkout
        </button>

        <div className="order-note">
          <label className="note-label">Order Note(Optional):</label>
          <textarea className="note-textarea" placeholder="Leave us a message" />
        </div>

        <button className="back-btn" onClick={() => nav(-1)}>Back</button>
      </div>
    </>
  )
}

export default Cart