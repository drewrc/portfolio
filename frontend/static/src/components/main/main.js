import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { animateScroll } from 'react-scroll';
import SkillsPreview from './SkillsPreview';

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

  // Scroll to a specific location after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      const container = containerRef.current;
      if (container) {
        const icons = container.querySelectorAll('.icon');
        const iconTop = icons[0].offsetTop;
        const containerTop = container.offsetTop;
        const offset = iconTop - containerTop + 300;

        animateScroll.scrollTo(offset, {
          duration: 1500,
          ease: 'easeInOutCubic',
        });
      }
    }, 5000);
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

  return (
    <>
      <main>
        <div id="main-wrapper">
          <div id="main-container">
            <div id="main-container-text">
              <h4> Hello, my name is</h4>
              <h3 className="main-container" id="header-main">
                Drew
              </h3>
              <h2 id="header-minor">I'm excited to share my work with you.</h2>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SkillsPreview containerRef={containerRef} />
          </div>
        </div>

        <div className="board">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </main>
    </>
  );
}

export default Main;
