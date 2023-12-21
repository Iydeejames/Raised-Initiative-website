import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap"; // using react-bootstrap

export const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={''} alt="Surpassing Mediocrity" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
      <Nav.Link href="#home" className={activeLink === "home" ? "active NavBar-link": ""} onClick={ () => onUpdateActiveLink ("home")} >Home</Nav.Link>
      <Nav.Link href="#link" className={activeLink === "mission" ? "active NavBar-link": ""} onClick={ () => onUpdateActiveLink ("mission")}>Mission</Nav.Link>
      <Nav.Link href="#link" className={activeLink === "events" ? "active NavBar-link": ""} onClick={ () => onUpdateActiveLink ("events")}>Events</Nav.Link>
      <Nav.Link href="#link" className={activeLink === "countries" ? "active NavBar-link": ""} onClick={ () => onUpdateActiveLink ("countries")}>Countries</Nav.Link>
    </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={''} alt="" />
              </a>
              <a href="#">
                <img src={''} alt="" />
              </a>
              <a href="#">
                <img src={''} alt="" />
              </a>
            </div>
            <button className="contact" onClick={() => console.log('connect')}>
              Contact Us
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};



