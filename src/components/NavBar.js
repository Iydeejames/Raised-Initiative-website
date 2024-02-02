import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
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

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo-container">
          <img src={RI7} alt="Logo" className="logo-image" />
        </div>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="leaders" smooth={true} duration={500}>
            Leaders
          </Link>
          <Link to="events" smooth={true} duration={500}>
            Events
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
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