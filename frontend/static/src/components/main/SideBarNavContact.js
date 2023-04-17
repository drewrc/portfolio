import { animateScroll } from 'react-scroll';
import React, { useEffect, useState } from 'react';
import linkedin from '../contact/LI-In-Bug.png'
import  github from '../contact/github-mark.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function SideBarContact() {
    const [buttonStyle, setButtonStyle] = useState({});

    useEffect(() => {
      const buttonTimer = setTimeout(() => {
        setButtonStyle({
          transform: 'translateY(0)',
          opacity: 1,
          transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
        });
      }, 2500); 
    
      return () => {
        clearTimeout(buttonTimer);
      };
    }, []);
  
    const buttonInitialStyle = {
      transform: 'translateY(100%)',
      opacity: 0,
    };
  
  

  return (
    <>
      <div className="button-container">
        <button
        style={{ ...buttonInitialStyle, ...buttonStyle }}
        className="no-bubble"
        >
         <a 
            href="https://www.linkedin.com/in/drew-coker/"> 
        <img src={linkedin} width="90%" style={{ filter: "brightness(1%) saturate(100%) invert(16%)" }}/></a>
         
        </button>
        <button
        style={{ ...buttonInitialStyle, ...buttonStyle }}
        className="side-contact"
        >
        <a 
            href="https://github.com/drewrc/"> 
        <img src={github} width="90%" style={{ filter: "brightness(1%) saturate(100%) invert(16%)" }}/></a>
         
        </button>
        <a href="mailto:drewrosecoker@gmail.com">
        <button
          style={{ ...buttonInitialStyle, ...buttonStyle }}
          className="side-contact"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
      </a>

      </div>
      <div
        style={{ ...buttonInitialStyle, ...buttonStyle }}
      className='line'>
a
      </div>
    </>
  );
}
export default SideBarContact;
