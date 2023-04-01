import React from 'react';
import { useState } from 'react';
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
  const [show, setShow] = useState(false);

  // const handleShow = () => {
  //   setShow(true);
  // }
  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);

  const isMobile = window.innerWidth < 768;

  return (
      <>
      <header style={{ 
        display: "flex",
        justifyContent: isMobile ? "center" : "flex-end",
        alignItems: "center",
        paddingTop: "1%" }} id="fixed">

            {[false, ].map((expand) => (
        <Navbar
        style={{zIndex: 2}}
        key={expand} expand={expand} className="mb-3">
          <Container fluid>
            

            <Navbar.Brand className="nav-item">
              <Nav.Link className="nav-link" activeclassname="active" to="/">Home</Nav.Link>
            </Navbar.Brand>
            <Navbar.Brand className="nav-item">
            <Link to="/about" className="nav-link" activeclassname="active">
                  About
                </Link>

            </Navbar.Brand>
            <Navbar.Brand className="nav-item">
              <Nav.Link className="nav-link" activeclassname="active" to="contact">Contact</Nav.Link>
            </Navbar.Brand>
            <Navbar.Brand className="nav-item">
              <Nav.Link className="nav-link" activeclassname="active" to="portfolio">Portfolio</Nav.Link>
            </Navbar.Brand>
  
            
            {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} /> */}
            {/* <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
    
              </Offcanvas.Header>
              <Offcanvas.Body 
              style={{zIndex: 2000}}
              >
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Nav.Link className="nav-link" activeclassname="active" to="/">Home</Nav.Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/about" className="nav-link" activeclassname="active">
                        About
                      </Link>

                  </li>
                  <li >
                    <Nav.Link className="nav-link" activeclassname="active" to="contact">Contact</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="nav-link" activeclassname="active" to="portfolio">Portfolio</Nav.Link>
                  </li>
                </ul>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas> */}
          </Container>
        </Navbar>
      ))}
        </header>
      </>

    // <header id="fixed">
    //   <nav className="navbar navbar-expand-lg">
    //   {/* <img src={logoImage} width='15%' alt="Logo" /> */}
    //     <Nav.Link className="navbar-brand" to="/">
     
    //     </Nav.Link>

    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
          // <ul className="navbar-nav ml-auto">
          //   <li className="nav-item">
          //     <Nav.Link className="nav-link" activeclassname="active" to="/">Home</Nav.Link>
          //   </li>
          //   <li className="nav-item">
          //   <Link to="/about" className="nav-link" activeclassname="active">
          //         About
          //       </Link>

          //   </li>
          //   <li className="nav-item">
          //     <Nav.Link className="nav-link" activeclassname="active" to="contact">Contact</Nav.Link>
          //   </li>
          //   <li className="nav-item">
          //     <Nav.Link className="nav-link" activeclassname="active" to="portfolio">Portfolio</Nav.Link>
          //   </li>
          // </ul>
  
    //     </div>
    //   </nav>
    // </header>

  )
}

export default Header;
