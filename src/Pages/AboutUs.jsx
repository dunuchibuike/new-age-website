import React from "react";
import "../CSS/About.css";
import HeaderText from "../Components/HeaderText";
import NewAgeHeader from "../Components/NewAgeHeader";
import Footer from "../Components/Footer";
import team from "../assets/team.PNG";
import Teams from "../assets/Teams.jpg";
import Customer from "../assets/Customer.jpg";

const AboutUs = () => {
  return (
    <main className="about-container">
      <HeaderText />
      <NewAgeHeader />
      <section className="about-holder">
        <section className="about-content">
          <article className="about-up">
            <div className="up-left">
              <img src={team} alt="team" />
            </div>
            <div className="up-right">
              <h3>Our Story</h3>
              <p>
                Incorporated in 2008 by Mr. Kingsley Okpala, New Age Mobile
                Concepts Limited is the first indigenous mobile phone
                accessories brand in Nigeria.
                <br />
                With sales operation of over 15 years in Nigeria, New Age has
                strongdistribution nationwide. Our success story hinges on our
                continued drive for optimal improvement across all products and
                customer service.
                <br />
                Products at a glance: We have a complete range of premium
                products Power Banks, Travel Chargers, Cables, Bluetooth
                Speakers, Earbuds, Batteries etc.
                <br />
                New Age is a brand that thrives on customer satisfaction through
                the delivery of quality and exceptional products.At New Age, we
                just don't sell accessories but we sell a brand and an
                experience you can trust.
              </p>
            </div>
          </article>
          <article className="about-mid">
            <section className="vision-wrapper">
              <h2 className="vision-title">Our Vision and Mission Statement</h2>

              <div className="vision-container">
                
                <div className="vision-card-left">
                  <h3>Our Vision</h3>
                  <p>
                    To become a leading name in charging technology by
                    continuously innovating and creating solutions that power
                    the future of connectivity across the world.
                  </p>
                </div>

                
                <div className="vision-image">
                  <img src={Customer} alt="vision" />
                </div>

                
                <div className="vision-card-right">
                  <h3>Our Mission</h3>
                  <p>
                    To make fast, safe, and reliable chargers to keep your
                    devices powered and ready for whatever your day brings.
                  </p>
                </div>
              </div>
            </section>
          </article>
          <article className="about-bottom">
            <div className="bottom-left">
              <img src={Teams} alt="teams" />
            </div>
            <div className="bottom-right">
              <h2>Why Choose Us?</h2>
              <p>
                Our chargers are built for speed and reliability, combining
                advanced technology with high-quality materials to deliver fast,
                stable, and safe charging for all your devices. We understand
                how important it is to stay connected, which is why our products
                are designed to provide consistent performance without
                compromising your device's battery health. Whether you're at
                home, at work, or on the move, you can count on our charging
                solutions to keep your devices powered efficiently anytime,
                anywhere.
              </p>
            </div>
          </article>
          <Footer />
        </section>
      </section>
    </main>
  );
};

export default AboutUs;
