import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <img src="" alt="Your Logo" className="logo" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim.</p>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
        </div>
      </div>
      <div className="footer-section about-section">
        <h3>About</h3>
        <ul>
          <li><a href="#">History</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Brand Guidelines</a></li>
          <li><a href="#">Terms & Condition</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-section services-section">
        <h3>Services</h3>
        <ul>
          <li><a href="#">How to Order</a></li>
          <li><a href="#">Our Product</a></li>
          <li><a href="#">Order Status</a></li>
          <li><a href="#">Promo</a></li>
          <li><a href="#">Payment Method</a></li>
        </ul>
      </div>
      <div className="footer-section other-section">
        <h3>Other</h3>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </div>
    </footer>
  );
}
