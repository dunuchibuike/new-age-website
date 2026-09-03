import { useState } from "react";
import "../CSS/Footer.css";
import { Link } from "react-router-dom";
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
            <li><Link to="/blog">Blog &amp; Article</Link></li>
            <li><Link to="/track-order">Track Order</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/affiliate">Affiliate</Link></li>
            <li><Link to="/support#faq">FAQ's</Link></li>
          </ul>
        </div>

       
        <div className="footer-col">
          <h4 className="footer-col-title">Shop</h4>
          <ul>
            <li><Link to="/shop">All Products</Link></li>
            <li><Link to="/shop?category=smartwatches">Smartwatches</Link></li>
            <li><Link to="/shop?category=jumpstarters">Jumpstarters</Link></li>
            <li><Link to="/shop?category=powerbanks">Powerbanks</Link></li>
            <li><Link to="/shop?category=charger">Charger</Link></li>
            <li><Link to="/shop?category=audios">Audios</Link></li>
            <li><Link to="/shop?category=cables">Cables</Link></li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h4 className="footer-col-title">Help</h4>
          <ul>
            <li><Link to="/return-policy">Refund &amp; Return Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms &amp; Condition</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
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
