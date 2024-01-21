import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaArrowUp, FaDonate } from 'react-icons/fa';


const Footer = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleSupportClick = () => {
    setShowPayment(!showPayment);
  };

  const handlePaymentSubmit = () => {
    // Add logic to handle the credit card payment
    alert("Credit card payment submitted!");
  };

  return (
    <footer className="footer-section">
      <div className="social-media">
        <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <div className="contact-bar">
        <p>Contact Us</p>
      </div>

      <div className="scroll-to-top">
        <a href="#top">
          <FaArrowUp />
        </a>
      </div>

      <div className="support-bar" onClick={handleSupportClick}>
        <p>Support</p>
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
  );
};

export default Footer;