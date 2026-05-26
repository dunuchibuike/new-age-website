import React from "react";
import "../CSS/Checkout.css";
import HeaderText from "../Components/HeaderText";
import NewAgeHeader from "../Components/NewAgeHeader";
import Footer from "../Components/Footer";

const Checkout = () => {
  return (
    <main className="checkout-page">
      <HeaderText />
      <NewAgeHeader />

      <section className="checkout-cons">
        <article className="checkout-holder">
          <div className="progress-container">
            <div className="step completed">01 Order Summary</div>
            <div className="step active">02 Checkout</div>
            <div className="step">03 Order Confirmation</div>
          </div>

          <div className="checkout-container">
            <h2>Enter Your Delivery Details To Proceed</h2>

           
            <form className="checkout-form">
              <article className="checkout-left">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Enter Your Name" />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" placeholder="Enter Your Address" />
                </div>
                <div className="state-city">
                  <div className="form-group">
                    <label>State</label>
                    <select>
                      <option>Lagos</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <select>
                      <option>Ikeja</option>
                    </select>
                  </div>
                </div>
              </article>
              <article className="checkout-right">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="example@gmail.com" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" placeholder="Input Phone Number" />
                </div>
                <div className="postal-country">
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input type="text" />
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <select>
                      <option>Nigeria</option>
                    </select>
                  </div>
                </div>
              </article>
            </form>

          
            <div className="payment-section">
              <div className="payment-header">
                <h2>Payment Method</h2>
              </div>

              <div className="card-row">
                <div>
                  <input type="checkbox" defaultChecked />
                  <label>Credit/Debit Card</label>
                </div>
                <div className="card-icons">
                  <span>Verve</span>
                  <span className="visa">VISA</span>
                  <span>Mastercard</span>
                </div>
              </div>
              <section className="card-details">
                <div className="details-right">
                  <div className="form-group card-number">
                    <label>Card Number</label>
                    <input type="text" placeholder="Input Card Number" />
                  </div>
                </div>

                <div className="details-left">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" />
                  </div>

                  <div className="form-group">
                    <label>CVV</label>
                    <input type="text" />
                  </div>
                </div>
              </section>

              
              <div className="other-payment">
                <h2>Other Payment Method</h2>

                <div className="other-options">
                  <div className="">
                    <input type="checkbox" />
                    <label>Korapay</label>
                  </div>

                  <div className="">
                    <input type="checkbox" />
                    <label>Paystack</label>
                  </div>

                  <div className="">
                    <input type="checkbox" />
                    <label>Bank Transfer</label>
                  </div>
                </div>
                <div className="button-group">
                  <button className="pay-btn">Pay Now</button>
                  <button className="back-btn">Back</button>
                </div>
              </div>

              
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default Checkout;
