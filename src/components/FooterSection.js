import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaArrowUp, FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


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
        <h1>Contact</h1>
        <div className="section-heading-line"></div>
        <div className="contact-wrapper">
          <div className="contact-details">
            <div className="phone">
              <FaMobileAlt />
              <h3>Phone</h3>
              <p>+234 905 0821 027</p>
              <p>+234 708 4992 218</p>
            </div>
            <div className="address">
            < FaMapMarkerAlt />
              <h3>Address</h3>
              <p>Old Itu Road, Nigeria</p>
              <p>Lansing, Michigan</p>
            </div>
            <div className="email">
              <FaEnvelope />
              <h3>Email</h3>
              <p>iydeejaymes@gmail.com</p>
              <p>Support@gmail.com</p>
            </div>
          </div>
          <div className="support-bar" onClick={handleSupportClick}>
        <h3>Support</h3>
      </div>
          <h1>Get in Touch</h1>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>

      <div className="scroll-to-top">
        <a href="#top">
          <FaArrowUp />
        </a>
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