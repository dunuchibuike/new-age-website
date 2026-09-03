import HeaderText from '../Components/HeaderText'
import NewAgeHeader from '../Components/NewAgeHeader'
import Footer from '../Components/Footer'
import '../CSS/TermsPage.css'

const TermsPage = () => (
  <div>
    <HeaderText />
    <NewAgeHeader />
    <main className="terms-page">
      <h1>Terms &amp; Conditions</h1>
      <p>By using New Age Mobile Concepts, you agree to use our website and products lawfully and provide accurate information when placing an order.</p>
      <section>
        <h2>Orders and payments</h2>
        <p>Orders are subject to availability and confirmation. Prices, product details, and availability may change before an order is accepted.</p>
      </section>
      <section>
        <h2>Delivery and returns</h2>
        <p>Delivery timelines depend on your location. Please review our return policy for eligibility, timeframes, and support options.</p>
      </section>
      <section>
        <h2>Support</h2>
        <p>If you need help with an order or product, contact our support team and include your order details where available.</p>
      </section>
    </main>
    <Footer />
  </div>
)

export default TermsPage
