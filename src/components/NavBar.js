import React, { useState, useEffect } from "react";
import RI7 from "../assets/img/RI7.jpg";

const CustomNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    // Close the menu when a navigation link is clicked
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo-container">
          <img src={RI7} alt="Logo" className="logo-image" />
        </div>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={handleNavLinkClick}>Home</a>
          <a href="#leaders" onClick={handleNavLinkClick}>Leaders</a>
          <a href="#events" onClick={handleNavLinkClick}>Events</a>
          <a href="#contact" onClick={handleNavLinkClick}>Contact Us</a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;