import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../Context/CartContext'
import '../CSS/Checkout.css'
import HeaderText from '../Components/HeaderText'
import NewAgeHeader from '../Components/NewAgeHeader'
import Footer from '../Components/Footer'

const BaseUrl = import.meta.env.VITE_BASE_URL

const Checkout = () => {
  const nav = useNavigate()
  const { cart, clearCart } = useCart()
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const token = localStorage.getItem('token')

  const [form, setForm] = useState({
    name: `${user.firstName || ''} ${user.lastName || ''}`,
    email: user.email || '',
    address: '',
    state: 'Lagos',
    city: 'Ikeja',
    phone: user.phoneNumber || '',
    postalCode: '',
    country: 'Nigeria',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleOrder = async (e) => {
    e.preventDefault()

    if (!form.address) {
      alert('Please enter your delivery address')
      return
    }

    if (!form.email) {
      alert('Please enter your email')
      return
    }

    if (cart.length === 0) {
      alert('Your cart is empty')
      return
    }

    const payload = {
      customerId: user.id,
      email: form.email,
      deliveryAddress: form.address,
      products: cart.map(item => ({
        productId: item._id,
        quantity: item.quantity
      }))
    }

     console.log('TOKEN:', token)       
  console.log('USER:', user)       
  console.log('PAYLOAD:', payload) 

    setLoading(true)
    try {
      const response = await axios.post(
        `${BaseUrl}/order/create-order`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      console.log('ORDER SUCCESS:', response.data)
      clearCart()
      nav('/order-confirmation')
    } catch (err) {
      console.log('STATUS:', err.response?.status)
      console.log('MESSAGE:', err.response?.data)
      alert(`Order failed: ${err.response?.data?.message || 'Try again'}`)
    } finally {
      setLoading(false)
    }
  }

  const subtotal = cart.reduce((acc, item) => acc + item.productPrice * item.quantity, 0)
  const deliveryFee = 2500
  const total = subtotal + deliveryFee

  return (
    <main className="checkout-page">
      <HeaderText />
      <NewAgeHeader />

      <section className="checkout-cons">
        <article className="checkout-holder">
          <div className="checkout-container">
            <h2 className="checkout-heading">Enter Your Delivery Details To Proceed</h2>

            <form className="checkout-form" onSubmit={handleOrder}>

              <div className="form-grid">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter Your Name" />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Example@gmail.com" />
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Enter Your Address" />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Input Phone Number" />
                </div>

                <div className="form-group">
                  <label>State</label>
                  <select name="state" value={form.state} onChange={handleChange}>
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Rivers</option>
                    <option>Kano</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>City</label>
                  <select name="city" value={form.city} onChange={handleChange}>
                    <option>Ikeja</option>
                    <option>Lekki</option>
                    <option>Victoria Island</option>
                    <option>Surulere</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Postal Code</label>
                  <input type="text" name="postalCode" value={form.postalCode} onChange={handleChange} placeholder="1" />
                </div>

                <div className="form-group">
                  <label>Country</label>
                  <select name="country" value={form.country} onChange={handleChange}>
                    <option>Nigeria</option>
                  </select>
                </div>
              </div>

              <div className="order-summary-box">
                <h3>Order Summary</h3>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Delivery Fee</span>
                  <span>₦{deliveryFee.toLocaleString()}</span>
                </div>
                <div className="summary-row summary-total">
                  <span>Total</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="payment-section">
                <div className="payment-top">
                  <h2 className="payment-title">Payment Method</h2>
                  <div className="card-icons">
                    <span className="card-brand verve">Verve</span>
                    <span className="card-brand visa">VISA</span>
                    <span className="card-brand master">&#9679;</span>
                  </div>
                </div>

                <div className="card-check">
                  <input type="checkbox" defaultChecked id="card" />
                  <label htmlFor="card">Credit/Debit card</label>
                </div>

                <div className="card-fields">
                  <div className="form-group full-width">
                    <label>Card Number</label>
                    <input type="text" placeholder="Input Card Number" />
                  </div>
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="text" placeholder="1" />
                  </div>
                </div>

                <div className="other-payment">
                  <h2 className="other-title">Other Payment Method</h2>
                  <div className="other-options">
                    <label><input type="checkbox" /> Korapay</label>
                    <label><input type="checkbox" /> Pay stack</label>
                    <label><input type="checkbox" /> Bank Transfer</label>
                  </div>
                </div>

                <div className="button-group">
                  <button type="submit" className="pay-btn" disabled={loading}>
                    {loading ? 'Processing...' : 'Pay Now'}
                  </button>
                  <button type="button" className="back-btn" onClick={() => nav('/cart')}>
                    Back
                  </button>
                </div>
              </div>

            </form>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  )
}

export default Checkout