import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import RI7 from "../assets/img/RI7.jpg";

export const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
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
        <Navbar.Brand href="#">
          <img src={RI7} alt="Surpassing Mediocrity" className="logo-image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {["home", "mission", "leaders", "events"].map((link) => (
              <Nav.Link
                key={link}
                href={`#${link}`}
                className={activeLink === link ? "active NavBar-link" : "NavBar-link"}
                onClick={() => onUpdateActiveLink(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              {["home", "mission", "leaders", "events"].map((link) => (
                <a key={link} href={`#${link}`}>
                  <img src={''} alt="" />
                </a>
              ))}
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};