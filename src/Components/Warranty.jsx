import React from 'react';
import { FiBox } from 'react-icons/fi';
import { BsCalendar4Event } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
const warrantyImg = '/images/warranty.png'
import '../CSS/Warranty.css';

const Warranty = () => {
  return (
    <section className="warranty">
      <header className="warrantyHeader">
        <h2 className="warrantyTitle">Warranty You Can Rely On</h2>
        <p className="warrantySubtitle">
          Our products are backed by a warranty to give  <br />you confidence with every purchase.
        </p>
      </header>

      <div className="warrantyContent">
        
        <div className="warrantyBadgeWrapper">
          <img 
            src={warrantyImg} 
            alt="12 Month Warranty Seal" 
            className="warrantyBadgeImage" 
          />
        </div>

        <div className="warrantyList">
          
          <div className="warrantyItem">
            <div className="warrantyIconContainer">
              <FiBox className="warrantyIcon" />
            </div>
            <div className="warrantyText">
              <h3 className="warrantyItemTitle">What's Covered</h3>
              <p className="warrantyItemBody">
                Covers manufacturing defects, faults, and <br /> performance issues  under normal use.
              </p>
            </div>
          </div>

          <div className="warrantyItem">
            <div className="warrantyIconContainer">
              <BsCalendar4Event className="warrantyIcon" />
            </div>
            <div className="warrantyText">
              <h3 className="warrantyItemTitle">Warranty Duration</h3>
              <p className="warrantyItemBody">
                Most products come with a 6-month warranty  <br />from the date of purchase.
              </p>
            </div>
          </div>

          <div className="warrantyItem">
            <div className="warrantyIconContainer">
              <BiSupport className="warrantyIcon" />
            </div>
            <div className="warrantyText">
              <h3 className="warrantyItemTitle">Support & Easy Claims</h3>
              <p className="warrantyItemBody">
                Contact support with your order details and  <br />we'll guide you through a quick replacement. <br /> Need help? Reach us instantly via WhatsApp.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Warranty;
