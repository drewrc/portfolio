import React from 'react';
import { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';
import logoImage from './logo1.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = (
    <Nav
    // style={{
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    // }}
    className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" activeClassName="active" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className="nav-link"
          activeClassName="active"
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          activeClassName="active"
          to="contact"
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          activeClassName="active"
          to="portfolio"
        >
          Portfolio
        </Link>
      </li>
    </Nav>
  );

  // const handleShow = () => {
  //   setShow(true);
  // }
  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);

  // useEffect(() => {
  //   const handleDocumentClick = (e) => {
  //     if (
  //       menuOpen &&
  //       !e.target.closest("#responsive-navbar-nav") &&
  //       !e.target.closest(".navbar-toggler")
  //     ) {
  //       setMenuOpen(false);
  //     }
  //   };
  
  //   document.addEventListener("click", handleDocumentClick);
  
  //   return () => {
  //     document.removeEventListener("click", handleDocumentClick);
  //   };
  // }, [menuOpen]);

  // const isMobile = window.innerWidth < 768;

  return (
    <>
    <header id="fixed">
  <Navbar collapseOnSelect expand="lg" variant="light">
    {/* <img src={logoImage} width='15%' alt="Logo" /> */}
    <Link className="navbar-brand" to="/" />

    {isMobile && (
            <Navbar.Toggle
              onClick={() => setMenuOpen(!menuOpen)}
              aria-controls="offcanvas-navbar"
            />
          )}

          {!isMobile && navLinks}

          {isMobile && (
            <Offcanvas
              id="offcanvas-navbar"
              show={menuOpen}
              onHide={() => setMenuOpen(false)}
              placement="end"
              className="slide-navbar offcanvas-navbar"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>{navLinks}</Offcanvas.Body>
            </Offcanvas>
          )}
        </Navbar>
</header>

    </>

  )
}

export default Header;
