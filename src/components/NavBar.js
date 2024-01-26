import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "./your-logo.png"; // Replace with your logo path

import "./Navbar.css";

const Navigation = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Your Logo" className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle onClick={toggleNavLinks} aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className={`nav-links ${showLinks ? "active" : ""}`}>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#leaders">Leaders</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Button for small screens */}
        <Button variant="light" className="nav-button" onClick={toggleNavLinks}>
          &#9733;
        </Button>
      </Container>
    </Navbar>
  );
};

export default Navigation;