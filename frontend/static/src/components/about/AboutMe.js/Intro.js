import React from 'react';
import selfie from './selfie.png';

function Intro() {

    return (
        <ul>
        <h3 className="main-container" id="header-about">
          About Me
        </h3>
        <li>
        <img id="selfie" src={selfie} width="200px" alt="selfie" />
        <span 
            id="about-3"
        className="about-list-item-content">
            Drew Coker
            <p id="city" className="about-list-item-content">
            Greenville, SC
            </p>
        </span>
        </li>
        <li>
    
        </li>
        <li>
        <span 
        style={{
            marginTop: "5%",
            textAlign: "right"}}
        className="about-list-item-content">
            <p
                 id="about-1"
            >
            Recent graduate of Carolina Code School interested in transitioning from nursing into a software developer role.
            </p>
            <p
            id="about-2"
             style={{
                textAlign: "left"}}> 2 years of self-taught experience and education combined.</p>
           
            </span>
        </li>
        </ul>
    )
}

export default Intro;