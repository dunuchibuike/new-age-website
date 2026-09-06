import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../Context/CartContext'
import '../CSS/Checkout.css'
import HeaderText from '../Components/HeaderText'
import NewAgeHeader from '../Components/NewAgeHeader'
import Footer from '../Components/Footer'

const BaseUrl = import.meta.env.VITE_BASE_URL
const isTestMode = import.meta.env.VITE_PAYMENT_TEST_MODE !== 'false'

const onlyDigits = (value) => value.replace(/\D/g, '')

const isValidCardNumber = (value) => {
  const digits = onlyDigits(value)
  if (digits.length < 13 || digits.length > 19) return false
  let total = 0
  let shouldDouble = false
  for (let index = digits.length - 1; index >= 0; index -= 1) {
    let digit = Number(digits[index])
    if (shouldDouble) {
      digit *= 2
      if (digit > 9) digit -= 9
    }
    total += digit
    shouldDouble = !shouldDouble
  }
  return total % 10 === 0
}

const isValidExpiry = (value) => {
  const match = value.match(/^(0[1-9]|1[0-2])\/(\d{2})$/)
  if (!match) return false
  const expiry = new Date(2000 + Number(match[2]), Number(match[1]), 1)
  const currentMonth = new Date()
  currentMonth.setDate(1)
  currentMonth.setHours(0, 0, 0, 0)
  return expiry > currentMonth
}

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
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [card, setCard] = useState({ number: '', expiry: '', cvv: '' })
  const [accountCopied, setAccountCopied] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleCardChange = (e) => {
    const { name, value } = e.target
    let nextValue = value
    if (name === 'number') nextValue = onlyDigits(value).slice(0, 19).replace(/(.{4})/g, '$1 ').trim()
    if (name === 'expiry') {
      nextValue = onlyDigits(value).slice(0, 4)
      if (nextValue.length > 2) nextValue = `${nextValue.slice(0, 2)}/${nextValue.slice(2)}`
    }
    if (name === 'cvv') nextValue = onlyDigits(value).slice(0, 4)
    setCard({ ...card, [name]: nextValue })
  }

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText('0123456789')
      setAccountCopied(true)
    } catch {
      setAccountCopied(false)
    }
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

    if (paymentMethod === 'card') {
      if (!isValidCardNumber(card.number)) return alert('Enter a valid test card number')
      if (!isValidExpiry(card.expiry)) return alert('Enter a valid future expiry date in MM/YY format')
      if (!/^\d{3,4}$/.test(card.cvv)) return alert('Enter a valid 3 or 4 digit CVV')
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

    setLoading(true)
    try {
      // Test mode never sends card data or attempts a live charge.
      if (isTestMode) {
        sessionStorage.setItem('latestTestOrder', JSON.stringify({
          id: 'TEST-ORDER', ...payload, amount: total, paymentMethod,
          status: 'paid_test', createdAt: new Date().toISOString(),
        }))
        clearCart()
        nav('/order-confirmation')
        return
      }

      if (!BaseUrl) throw new Error('Payment service is not configured')
      await axios.post(
        `${BaseUrl}/order/create-order`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      clearCart()
      nav('/order-confirmation')
    } catch (err) {
      alert(`Order failed: ${err.response?.data?.message || err.message || 'Try again'}`)
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
                {isTestMode && <p className="payment-test-notice">Test mode: no money will be charged. Use any valid test-format card.</p>}
                <div className="payment-top">
                  <h2 className="payment-title">Payment Method</h2>
                  <div className="card-icons">
                    <span className="card-brand verve">Verve</span>
                    <span className="card-brand visa">VISA</span>
                    <span className="card-brand master">&#9679;</span>
                  </div>
                </div>

                <div className="card-check">
                  <input type="radio" name="payment-method" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} id="card" />
                  <label htmlFor="card">Credit/Debit card</label>
                </div>

                <div className="card-fields" aria-disabled={paymentMethod !== 'card'}>
                  <div className="form-group full-width">
                    <label>Card Number</label>
                    <input type="text" name="number" value={card.number} onChange={handleCardChange} inputMode="numeric" autoComplete="cc-number" disabled={paymentMethod !== 'card'} placeholder="4242 4242 4242 4242" />
                  </div>
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" name="expiry" value={card.expiry} onChange={handleCardChange} inputMode="numeric" autoComplete="cc-exp" disabled={paymentMethod !== 'card'} placeholder="MM/YY" />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="text" name="cvv" value={card.cvv} onChange={handleCardChange} inputMode="numeric" autoComplete="cc-csc" disabled={paymentMethod !== 'card'} placeholder="123" />
                  </div>
                </div>

                <div className="other-payment">
                  <h2 className="other-title">Other Payment Method</h2>
                  <div className="other-options">
                    <label><input type="radio" name="payment-method" checked={paymentMethod === 'korapay'} onChange={() => setPaymentMethod('korapay')} /> Korapay</label>
                    <label><input type="radio" name="payment-method" checked={paymentMethod === 'paystack'} onChange={() => setPaymentMethod('paystack')} /> Paystack</label>
                    <label><input type="radio" name="payment-method" checked={paymentMethod === 'bank_transfer'} onChange={() => setPaymentMethod('bank_transfer')} /> Bank Transfer</label>
                  </div>
                </div>

                {paymentMethod === 'bank_transfer' && (
                  <section className="bank-transfer-details" aria-live="polite">
                    <p className="bank-transfer-heading">Transfer to this test account</p>
                    <div><span>Bank</span><strong>New Age Test Bank</strong></div>
                    <div><span>Account name</span><strong>New Age Store (Test)</strong></div>
                    <div><span>Account number</span><strong className="account-number">0123456789</strong><button type="button" className="copy-account-btn" onClick={copyAccountNumber}>{accountCopied ? 'Copied' : 'Copy'}</button></div>
                    <div><span>Amount</span><strong>₦{total.toLocaleString()}</strong></div>
                    <small>This is a test account. No real transfer is required—select Pay Now to complete the test order.</small>
                  </section>
                )}

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
