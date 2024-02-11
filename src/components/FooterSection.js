import React from "react";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const Footer = () => {




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
          <div className="support-bar">
        <h3>Our Socials</h3>
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
      

    </footer>
    </div>
  );
};

export default Footer;