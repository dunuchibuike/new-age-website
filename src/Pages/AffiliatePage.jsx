import React, { useState } from "react";
import "../CSS/Affiliate.css";
import { FaPlus, FaMinus, FaCheckCircle } from "react-icons/fa";
import HeaderText from "../Components/HeaderText";
import NewAgeHeader from "../Components/NewAgeHeader";
import Footer from "../Components/Footer";
import "../CSS/Affiliate.css";
import Affiliate from "../assets/Affiliate.jpg";

const AffiliatePage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What is affiliate marketing?",
      answer:
        "Affiliate marketing allows you to earn commissions by promoting products online and getting customers to purchase through your referral.",
    },
    {
      question: "How do i earn from the affiliate program?",
      answer:
        "Simply register, get your referral link, and begin sharing products on social media or with your audience.",
    },
    {
      question:
        "How long does it take for  pending affiliate request to be approved?",
      answer:
        "Payments are processed monthly once your commissions are verified successfully.",
    },
    {
      question: "How will i get my commission?",
      answer: "No, joining the affiliate program is completely free.",
    },
    {
      question: "Do i need to handle product to fulfill order?",
      answer:
        "Yes. You can work remotely from any location using your phone or laptop.",
    },
    {
      question: "Can i buy for customers?",
      answer:
        "Your earnings depend on your consistency, audience reach, and total sales generated.",
    },
    {
      question:
        "What is the maximum monetary value one can place on our website? ",
    },
    {
      question:
        "What if an affiliate has more than N1,000,000 in purchase to be made,how do he/she go about it? ",
    },
    {
      question: "Can i earn bringing orders to join the affiliate program?",
    },
    {
      question: "Can i grow my level as an affiliate member?",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="affiliate-page">
      <HeaderText />
      <NewAgeHeader />
      {/* HERO */}
      <section className="affiliate-hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Make money from home!</h1>
          <p>Just by selling our product online</p>
        </div>
        {/* POPUP BOX */}
        <div className="affiliate-popup">
          <h3>Notice</h3>

          <p>
            We are working on our affiliate program to help give the best. We
            will be back soon.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="affiliate-content">
        <div className="content-block">
          <h2>What is New Age affiliate marketing program?</h2>

          <p>
            New Age affiliate marketing program is a system where you can make
            an extra income by selling New Age inventory. You get a certain
            percentage of sales on any single product you sell through your
            unique affiliate link as a commission. Selling New Age inventory as
            an affiliate does not require you to handle stock physically or move
            stock about from one place to another; it is a seamless process
            automated completely by our software and managed by New Age staff at
            the back end to meet with updates and progressive sales by you the
            affiliate. Whenever a sale is successfully completed through your
            link, you get a notification and a sales update on your dashboard.
          </p>

          <p></p>
        </div>

        <div className="content-block">
          <h2>Who can be a New Age affiliate?</h2>

          <p>
            Anyone with drive to produce result can be an affiliate. It is also
            a plus if you have good social skills, an active social media
            platform where you post your unique affiliate link for your audience
            to use and make purchases, gaining the trust of your audience by
            building credibility through your personality is also a great plus
            to have good turnover rate.
          </p>
        </div>

        <div className="content-block">
          <h2>How do i get paid as an affiliate?</h2>

          <p>
            You get paid monthly and the funds go directly into your bank
            account provided upon sign up. A cumulative of every sale made
            within the period of one month is calculated and paid to you! Why
            not sign up to start making that extra cash.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="benefits-section">
          <h2>What is the process like?</h2>

          <div className="benefit-item">
            <FaCheckCircle />
            <p>Firstly, you sign up and fill in your correct details.</p>
          </div>

          <div className="benefit-item">
            <FaCheckCircle />
            <p>
              Next you copy your unique link made available to you when you sign
              up and post across your social media / share to your friends. (A
              good way to attract sales is by posting content about New Age
              products and having a good knowledge about our products will help
              you sell better).
            </p>
          </div>

          <div className="benefit-item">
            <FaCheckCircle />
            <p>
              Next, when a sale is made through your link, verifications are
              done on the back end by our staff to ensure you get your 10% of
              that purchase made. It is then updated on your dashboard for
              transparency. The verification takes 24hrs..
            </p>
          </div>

          <div className="benefit-item">
            <FaCheckCircle />
            <p>
              Next you get paid the total of all the 10% (s) you have made all
              through the month and this payment is made monthly according to
              how much you have made within the month..
            </p>
          </div>
        </div>

        {/* NOTE */}
        <div className="note-box">
          <h4>Tip:</h4>
          <p>
            You get the opportunity to increase your earning rank and percentage
            based on how much sales you generate as time goes on. You can call
            that a bonus! Click here to get started and start your earning
            journey.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-header">
          <h1>FAQ</h1>
          <p>Find answers to common questions below.</p>
        </div>

        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div className="faq-card" key={index}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <h3>{faq.question}</h3>

                <span>{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
              </div>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AffiliatePage;
