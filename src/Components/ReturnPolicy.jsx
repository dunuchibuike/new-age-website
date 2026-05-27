import React from 'react';
import { FiBox } from 'react-icons/fi';
import { FaCalendarDays } from "react-icons/fa6";
import { BiSupport } from 'react-icons/bi';
import "../CSS/ReturnPolicy.css";

 const ReturnPolicy = () => {
  return (
    <section className="returnPolicySection">
      <header className="policyHeader">
        <h2 className="policyTitle">Return Policy</h2>
        <p className="policySubtitle">
          We make returns simple and hassle- <br />free if something isn't right.
        </p>
      </header>

      <div className="policyGrid">
        
        <article className="policyCard">
          <div className="iconContainer">
            <FiBox className="cardIcon" />
          </div>
          <h3 className="cardTitle">01. Return Eligibility</h3>
          <p className="cardBody">
            You can request a return if the  product is faulty, damaged, or not as  described.
          </p>
        </article>

        <article className="policyCard featuredCard">
          <div className="iconContainer">
            <FaCalendarDays  className="cardIcon" />
          </div>
          <h3 className="cardTitle">02. Return Period</h3>
          <p className="cardBody">
            Returns must be requested within 3–7 days after delivery.
          </p>
        </article>

        <article className="policyCard">
          <div className="iconContainer">
            < BiSupport className="cardIcon" />
          </div>
          <h3 className="cardTitle">03. Easy Process</h3>
          <p className="cardBody">
            Contact support, get approval, and we'll guide you through a quick replacement or refund.
          </p>
        </article>

      </div>
    </section>
  );
}
export default ReturnPolicy;