import React from 'react';
import '../CSS/ShippingInfo.css';

const ShippingInfo = () => {
  return (
    <section className="shippingSection">
      <div className="shippingContentWrapper">
        
        <div className="shippingSidebar">
          <h2 className="shippingMainTitle">Shipping Information</h2>
          <p className="shippingSubtitle">
            Everything you need to know about delivery times, costs, and locations. 
          </p>
          <button className="trackOrderBtn">Track Order</button>
        </div>

        <div className="shippingGrid">
          
          <article className="infoCard">
            <h3 className="cardHeader">Delivery Coverage</h3>
            <p className="cardText textRight">
              We deliver across Nigeria, bringing your orders straight to your location.
            </p>
            <span className="bgNumber leftSide">01</span>
          </article>

          <article className="infoCard">
            <h3 className="cardHeader">Delivery Timeline</h3>
            <p className="cardText textRight">
              Orders typically arrive within 2-5 business days, depending on your location.
            </p>
            <span className="bgNumber leftSide">02</span>
          </article>

          <article className="infoCard">
            <h3 className="cardHeader">Shipping Fees</h3>
            <p className="cardText textLeft">
              Delivery fees are calculated at checkout based on your location.
            </p>
            <span className="bgNumber rightSide">03</span>
          </article>

          <article className="infoCard">
            <h3 className="cardHeader">Order Processing</h3>
            <p className="cardText textLeft">
              Orders are processed within 24 hours after confirmation.
            </p>
            <span className="bgNumber rightSide">04</span>
          </article>

        </div>

      </div>
    </section>
  );
};

export default ShippingInfo;
