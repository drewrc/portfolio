import React from 'react';
// import { Link } from 'react-scroll';
import logoImage from './logo1.png';
import { NavLink, Link } from 'react-router-dom';


function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
      {/* <img src={logoImage} width='15%' alt="Logo" /> */}
        <NavLink className="navbar-brand" to="/">
     
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
            <Link to="/about" className="nav-link" activeClassName="active">
                  About
                </Link>

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="portfolio">Portfolio</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;
