import React from 'react';
import { Link } from 'react-scroll';
import logoImage from './logo1.png';


function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#"> 
         {/* <img src={logoImage} width= '5%' alt="Logo" /> */}
         </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClass="active" to="about" spy={true} smooth={true}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClass="active" to="contact" spy={true} smooth={true}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClass="active" to="portfolio" spy={true} smooth={true}>Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;
