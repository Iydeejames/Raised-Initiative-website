import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const Footer = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleSupportClick = () => {
    setShowPayment(!showPayment);
  };

  const handlePaymentSubmit = () => {
    // Add logic later to handle the credit card payment
    alert("Credit card payment submitted!");
  };

  return (
    <div id="contact">
    <footer className="footer-section">
    <div className="contact-bar">
        <h1>Contact Us</h1>
        <div className="section-heading-line"></div>
        <div className="contact-wrapper">
          <div className="contact-details">
            <div className="phone">
              <FaMobileAlt />
              <h3>Phone</h3>
              <p>+233 247 447 640</p>
              <p>+234 903 167 4415</p>
            </div>
            <div className="address">
            < FaMapMarkerAlt />
              <h3>Address</h3>
              <p>Ghana</p>
              <p>Nigeria</p>
              <p>Mali</p>
              <p>Liberia</p>
            </div>
            <div className="email">
              <FaEnvelope />
              <h3>Email</h3>
              <p>info.raisedinitiatives@gmail.com 
              </p>
            </div>
          </div>
          <div className="support-bar" onClick={handleSupportClick}>
        <h3>Support</h3>
      </div>
      <div className="social-media">
        <a href="https://wa.me/233247447640" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/raisedinitiatives?igshid=YTQwZjQ0Nml0OA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.x.com/raisedinitiative?t=VlwTiilHy96dk_RPltc4yA&s=09" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/raisedinitiatives?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/company/raisedinitiatives/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
        </div>
      </div>
      
      {showPayment && (
        <div className="payment-methods">
          <p>Choose a payment method:</p>

          {/* Credit Card Payment Method */}
          <div>
            <p>Credit Card:</p>
            <p>Card Number: <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} /></p>
            <p>Expiration Date: <input type="text" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} /></p>
            <p>CVC: <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} /></p>
            <button onClick={handlePaymentSubmit}>Submit Payment</button>
          </div>
        </div>
      )}

    </footer>
    </div>
  );
};

export default Footer;