import { useState } from "react";
import "../CSS/Footer.css";
import { Link } from "react-router-dom";

const FooterLink = ({ to, children }) => (
  <Link to={to} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
    {children}
  </Link>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();
    setMessage(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };
  return (
     <footer className="footer">

     
      <div className="footer-top">

        
        <div className="footer-brand">
          <img src="/images/newlogo.png" alt="New Age Logo" className="footer-logo" />
          
          <div className="footer-socials">
            <a href="https://www.instagram.com/" className="social-icon" aria-label="Instagram" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com/" className="social-icon" aria-label="TikTok" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tiktok.svg" alt="TikTok" />
            </a>
            <a href="https://x.com/" className="social-icon" aria-label="X" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg" alt="X" />
            </a>
            <a href="https://www.linkedin.com/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>

        
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul>
            <li><FooterLink to="/blog">Blog &amp; Article</FooterLink></li>
            <li><FooterLink to="/track-order">Track Order</FooterLink></li>
            <li><FooterLink to="/about-us">About Us</FooterLink></li>
            <li><FooterLink to="/support">Support</FooterLink></li>
            <li><FooterLink to="/affiliate">Affiliate</FooterLink></li>
            <li><FooterLink to="/support">FAQ's</FooterLink></li>
          </ul>
        </div>

       
        <div className="footer-col">
          <h4 className="footer-col-title">Shop</h4>
          <ul>
            <li><FooterLink to="/shop">All Products</FooterLink></li>
            <li><FooterLink to="/shop?category=smartwatches">Smartwatches</FooterLink></li>
            <li><FooterLink to="/shop?category=jumpstarters">Jumpstarters</FooterLink></li>
            <li><FooterLink to="/shop?category=powerbanks">Powerbanks</FooterLink></li>
            <li><FooterLink to="/shop?category=charger">Charger</FooterLink></li>
            <li><FooterLink to="/shop?category=audios">Audios</FooterLink></li>
            <li><FooterLink to="/shop?category=cables">Cables</FooterLink></li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h4 className="footer-col-title">Help</h4>
          <ul>
            <li><FooterLink to="/return-policy">Refund &amp; Return Policy</FooterLink></li>
            <li><FooterLink to="/terms-and-conditions">Terms &amp; Condition</FooterLink></li>
            <li><FooterLink to="/contact-us">Contact Us</FooterLink></li>
          </ul>
        </div>

      
        <div className="footer-col footer-subscribe">
          <h4 className="footer-col-title">Subscribe</h4>
          <p>Signup to be the first to hear about exclusive deals, special offers and upcoming collections</p>
          <form className="footer-form" onSubmit={handleSubscribe}>
            <input type="email" placeholder="Example@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <button type="submit">Submit</button>
          </form>
          {message && <p className="footer-subscribe-message" role="status">{message}</p>}
        </div>

      </div>

     
      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="footer-big-logo"> <img src="/images/newage.png" alt="" /></div>
        <p className="footer-copy">© 2026 NewAge Mobile Concepts limited.</p>
      </div>

    </footer>

  );
}

export default Footer;
