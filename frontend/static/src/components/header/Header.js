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
  
     <header
     style={{ 
      display: "flex",
      justifyContent: isMobile ? "center" : "flex-end",
      alignItems: "center",
      paddingTop: "1%" }}
     id="fixed">
       <nav className="navbar navbar-expand-lg">
       {/* <img src={logoImage} width='15%' alt="Logo" /> */}
         <Link className="navbar-brand" to="/">
     
         </Link>

         {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button> */}
         <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav ml-auto">
             <li className="nav-item">
               <Link className="nav-link" activeclassname="active" to="/">Home</Link>
             </li>
             <li className="nav-item">
             <Link to="/about" className="nav-link" activeclassname="active">
                   About
                 </Link>

             </li>
             <li className="nav-item">
               <Link className="nav-link" activeclassname="active" to="contact">Contact</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" activeclassname="active" to="portfolio">Portfolio</Link>
             </li>
           </ul>
  
         </div>
       </nav>
   </header>
    </>

  )
}

export default Header;
