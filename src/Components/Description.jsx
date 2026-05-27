import React from 'react';
import '../CSS/Description.css';

const Description = () => {
  return (
    <section className="tabsSection">
      <div className="tabsHeaderNav">
        <button className="tabLinkItem tabActive">Description</button>
        <button className="tabLinkItem">Features</button>
        <button className="tabLinkItem">Reviews</button>
      </div>

      <div className="tabMainContent">
        <p className="leadDescriptionText">True Wireless Earbuds with 12Hrs Play Time</p>
        
        <article className="contentBlockParagraph">
          <h3 className="blockHeadingTitle">Immersive Stereo Sound & Clear Call</h3>
          <p className="blockBodyText">
            Iron Man Mini Wireless Earbuds comes with 6 mm vibrating diaphragm and HD rendering technology, ensure a pure and high sound quality with crystal crisp treble and deep bass sound.
          </p>
        </article>

        <article className="contentBlockParagraph">
          <h3 className="blockHeadingTitle">5.3 Bluetooth Technology</h3>
          <p className="blockBodyText">
            Iron Man Mini wireless Earbuds adopt the most advanced Bluetooth 5.3 technology and the newest chip(2022), ensure a faster transmission rate, lower latency and lower power consumption, providing fast and stable connection with no signal loss or music dropout.
          </p>
        </article>

        <article className="contentBlockParagraph">
          <h3 className="blockHeadingTitle">One Step Pairing & Easy Touch Control</h3>
          <p className="blockBodyText">
            Simply take out the wireless earbuds from the charging case, they will automatically connect to their last paired device for easy handling. With one touch, you can control your call, music, volume, voice assistant, etc.
          </p>
        </article>

        <article className="contentBlockParagraph">
          <h3 className="blockHeadingTitle">Worry-Free Warranty</h3>
          <p className="blockBodyText">
            At New Age, we believe in our products. That's why we back them all with an 6-month warranty and provide friendly, easy-to-reach support.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Description;
