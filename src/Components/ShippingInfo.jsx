import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/ShippingInfo.css';

const ShippingInfo = () => {
  const navigate = useNavigate();
  return (
    <section className="shippingSection">
      <div className="shippingContentWrapper">
        
        <div className="shippingSidebar">
          <h2 className="shippingMainTitle">Shipping Information</h2>
          <p className="shippingSubtitle">
            Everything you need to know about delivery times, costs, and locations. 
          </p>
          <button className="trackOrderBtn" type="button" onClick={() => navigate('/track-order')}>Track Order</button>
        </div>

        <div className="shippingGrid">
          
          <article className="infoCard">
            <h3 className="cardHeader">Delivery Coverage</h3>
            <p className="cardText textRight">
              We deliver across <br /> Nigeria, bringing your  <br />orders straight to your <br /> location.
            </p>
            <span className="bgNumber leftSide">01</span>
          </article>

          <article className="infoCard">
            <h3 className="cardHeader">Delivery Timeline</h3>
            <p className="cardText textRight">
              Orders typically arrive <br /> within 2-5 business <br /> days, depending on <br /> your location.
            </p>
            <span className="bgNumber leftSide">02</span>
          </article>

          <article className="infoCard">
            <h3 className="cardHeader">Shipping Fees</h3>
            <p className="cardText textLeft">
              Delivery fees are <br /> calculated at <br /> checkout based on  <br />your location.
            </p>
            <span className="bgNumber rightSide">03</span>
          </article>

          <article className="infoCard">
            <h3 className="cardHeader">Order Processing</h3>
            <p className="cardText textLeft">
              Orders are processed  <br />within 24 hours after <br /> confirmation.
            </p>
            <span className="bgNumber rightSide">04</span>
          </article>

        </div>

      </div>
    </section>
  );
};

export default ShippingInfo;
