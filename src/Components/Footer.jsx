import React from "react";
import "../CSS/Footer.css";

const Footer = () => {
  return (
     <footer className="footer">

     
      <div className="footer-top">

        
        <div className="footer-brand">
          <img src="/src/assets/newlogo.png" alt="New Age Logo" className="footer-logo" />
          
          <div className="footer-socials">
            <a href="#" className="social-icon" aria-label="Instagram">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="#" className="social-icon" aria-label="TikTok">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tiktok.svg" alt="TikTok" />
            </a>
            <a href="#" className="social-icon" aria-label="X">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg" alt="X" />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>

        
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul>
            <li><a href="#">Blog &amp; Article</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Affiliate</a></li>
            <li><a href="#">FAQ's</a></li>
          </ul>
        </div>

       
        <div className="footer-col">
          <h4 className="footer-col-title">Shop</h4>
          <ul>
            <li><a href="#">All Products</a></li>
            <li><a href="#">Smartwatches</a></li>
            <li><a href="#">Jumpstarters</a></li>
            <li><a href="#">Powerbanks</a></li>
            <li><a href="#">Charger</a></li>
            <li><a href="#">Audios</a></li>
            <li><a href="#">Cables</a></li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h4 className="footer-col-title">Help</h4>
          <ul>
            <li><a href="#">Refund &amp; Return Policy</a></li>
            <li><a href="#">Terms &amp; Condition</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

      
        <div className="footer-col footer-subscribe">
          <h4 className="footer-col-title">Subscribe</h4>
          <p>Signup to be the first to hear about exclusive deals, special offers and upcoming collections</p>
          <div className="footer-form">
            <input type="email" placeholder="Example@gmail.com" />
            <button type="button">Submit</button>
          </div>
        </div>

      </div>

     
      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="footer-big-logo"> <img src="/src/assets/newage.png" alt="" /></div>
        <p className="footer-copy">© 2026 NewAge Mobile Concepts limited.</p>
      </div>

    </footer>

  );
}

export default Footer;
