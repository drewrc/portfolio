import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { animateScroll } from 'react-scroll';
import SkillsPreview from './SkillsPreview';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong, faLeaf, faMugHot, faSeedling, faStarOfLife, faUserAstronaut, faWandMagic, faWandSparkles } from '@fortawesome/free-solid-svg-icons';

function Main() {
  const containerRef = useRef(null);

  // Hide the icons on page load
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const icons = container.querySelectorAll('.icon');
      icons.forEach(icon => {
        icon.style.opacity = 0;
      });
    }
  }, []);


  // Fade in the icons when the container is scrolled into view
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const screenTop = window.pageYOffset;
      const screenHeight = window.innerHeight;
      if (screenTop + screenHeight > containerTop + containerHeight / 2) {
        const icons = container.querySelectorAll('.icon');
        icons.forEach((icon, i) => {
          setTimeout(() => {
            icon.style.opacity = 1;
          }, i * 200); // delay each icon by 200 milliseconds
        });

        // Fade in the container itself
        container.style.opacity = 1;
      }
    }
  };

  const [h2Style, setH2Style] = useState({});
  const [h4Style, setH4Style] = useState({});

  useEffect(() => {
    const h2Timer = setTimeout(() => {
      setH2Style({
        transform: 'translateX(0)',
        opacity: 1,
        transition: 'transform 2s ease-in-out, opacity 4s ease-in-out',
      });
    }, 1500); 

    const h4Timer = setTimeout(() => {
      setH4Style({
        transform: 'translateX(0)',
        opacity: 1,
        transition: 'transform 2s ease-in-out, opacity 4s ease-in-out',
      });
    }, 500); 

    return () => {
      clearTimeout(h2Timer);
      clearTimeout(h4Timer);
    };
  }, []);

  const h4initialStyle = {
    transform: 'translateX(100%)',
    opacity: 0,
  };
  const h2initialStyle = {
    transform: 'translateX(-100%)',
    opacity: 0,
  };

  const [buttonStyle, setButtonStyle] = useState({});


  useEffect(() => {
    // ...existing code for h2 and h4 animations...
  
    const buttonTimer = setTimeout(() => {
      setButtonStyle({
        transform: 'translateY(0)',
        opacity: 1,
        transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
      });
    }, 2500); // adjust delay as needed
  
    return () => {
      // ...existing clearTimeout calls...
      clearTimeout(buttonTimer);
    };
  }, []);

  const buttonInitialStyle = {
    transform: 'translateY(100%)',
    opacity: 0,
  };

  return (
<>
  <main>
    <Container>
      <Row
      >
        <Col
        
        >

        <div id="main-wrapper">
          <div 
          
          id="main-container">
            <div id="main-container-text">
              <h4 style={{ ...h4initialStyle, ...h4Style }}> 
              {/* <FontAwesomeIcon icon={faUserAstronaut} style= {{
                paddingRight: '10px',
              }}/> */}
              // hello, my name is</h4>
              <h3 className="main-container" id="header-main">
                Drew
              </h3>
              <h2 style={{ ...h2initialStyle, ...h2Style }} id="header-minor"><p>
              <FontAwesomeIcon icon={faUserAstronaut} style= {{
                paddingRight: '10px',
              }}/>
                full-stack software engineer </p></h2>
            </div>
          </div>
          </div>


        </Col>
      </Row>
      <Row>
        <Col>
          <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <SkillsPreview containerRef={containerRef} />
            </div>
            <button
              style={{ ...buttonInitialStyle, ...buttonStyle }}
              className="scroll-down-button"
              onClick={() => animateScroll.scrollToBottom()}
            >
              <div className="vertical-text">Scroll</div>
              <div className="vertical-text">Down</div>
              <div>
              <FontAwesomeIcon icon={faDownLong} />
              </div>
            </button>


        </Col>
      </Row>
    </Container>
      </main>
    </>
  );
}

export default Main;
