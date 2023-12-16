import {useEffect, useState} from "react";
import {NavBar, Container, Button } from "bootstrap"
export const NavBar = {} => {
    const [activeLink, setActiveLink] =useState('home');
    const [scolled, seScrolled] = useState[false];

    useEffect(() => {
        const onScroll =() => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return() => window.removeEventListener("scroll", onScroll)
    
    }, [] )
    return(
<Navbar  expand="lg" className={ scrolled ? "scrolled": ""}>
<Container>
  <Navbar.Brand href="#home">
    <img src ={''} alt ="logo" /> 
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav"> </Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home" className={activeLink === "home" ? "active NavBar-link": ""} >Home</Nav.Link>
      <Nav.Link href="#link">What We Do</Nav.Link>
      <Nav.Link href="#link">Events</Nav.Link>
      <Nav.Link href="#link">Countries</Nav.Link>
    </Nav>
    <span className="navbar-text">
        <div className="social-icon">
            <a href="#"><img src={} alt="" /> </a>
            <a href="#"><img src={} alt="" /> </a>
            <a href="#"><img src={} alt="" /> </a>
        </div>
        <button className="contact"> onClick={() => console.log('connect')}</button><span>Contact Us</span>
    </span>
  </Navbar.Collapse>
</Container>
</Navbar>
);
}