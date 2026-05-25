import React from 'react';
import trackpic from '../assets/trackpic.png';
import '../CSS/TrackOrder.css';

const TrackOrder = () => {
  return (
    <section className="trackOrderSection">
      <div className="trackOrderContainer">
        
        <div className="trackOrderLeft">
          <h2 className="trackOrderTitle">Track Your Order</h2>
          <p className="trackOrderSubtitle">
            Enter your order ID to check the current status of your delivery.
          </p>
          <div className="trackInputWrapper">
            <input 
              type="text" 
              placeholder="Enter Your Order ID" 
              className="trackInputField"
            />
            <button className="trackSubmitBtn">Track Order</button>
          </div>
        </div>

        <div className="trackOrderRight">
          <img 
            src={trackpic} 
            alt="Order Delivery Tracking Illustration" 
            className="trackImgAsset"
          />
        </div>

      </div>
    </section>
  );
};

export default TrackOrder;
