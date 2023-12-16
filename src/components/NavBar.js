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

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
    return(
<Navbar  expand="lg" className={ scrolled ? "scrolled": ""}>
<Container>
  <Navbar.Brand href="#home">
    <img src ={''} alt ="logo" /> 
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav"> </Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home" className={activeLink === "home" ? "active NavBar-link": ""} onClick={ () => onUpdateActiveLink ("home")} >Home</Nav.Link>
      <Nav.Link href="#link" className={activeLink === "what we do" ? "active NavBar-link": ""} onClick={ () => onUpdateActiveLink ("what we do")}>What We Do</Nav.Link>
      <Nav.Link href="#link" className={activeLink === "events" ? "active NavBar-link": ""} onClick={ () => onUpdateActiveLink ("events")}>Events</Nav.Link>
      <Nav.Link href="#link" className={activeLink === "countries" ? "active NavBar-link": ""} onClick={ () => onUpdateActiveLink ("countries")}>Countries</Nav.Link>
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