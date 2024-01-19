import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faTwitter, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faDonate } from "@fortawesome/free-solid-svg-icons";
import PayPalButton from "react-paypal-button-v2";

const Footer = () => {
  const [showPayment, setShowPayment] = useState(false);

  const handleSupportClick = () => {
    setShowPayment(!showPayment);
  };

  const handlePaymentSuccess = (details, data) => {
    console.log("Payment successful!", details, data);
    // Add logic for handling successful payment
  };

  const handlePaymentError = (error) => {
    console.error("Payment failed!", error);
    // Add logic for handling payment failure
  };

  const handlePaymentCancel = () => {
    console.log("Payment canceled by user");
    // Add logic for handling canceled payment
  };

  return (
    <footer className="footer-section">
      <div className="social-media">
        <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

      <div className="contact-bar">
        <p>Contact Us</p>
      </div>

      <div className="scroll-to-top">
        <a href="#top">
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>

      <div className="support-bar" onClick={handleSupportClick}>
        <p>Support</p>
      </div>

      {showPayment && (
        <div className="payment-methods">
          <p>Choose a payment method:</p>
          <PayPalButton
            amount="10.00" // Set the amount to the desired donation amount
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
            onCancel={handlePaymentCancel}
          />

          {/* Credit Card Payment Method */}
          <div>
            <p>Credit Card:</p>
            {/* Add your credit card payment form or integrate with a payment gateway */}
            <p>Card Number: <input type="text" /></p>
            <p>Expiration Date: <input type="text" /></p>
            <p>CVC: <input type="text" /></p>
            <button onClick={handlePaymentSuccess}>Submit Payment</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;