import { Carousel } from "react-bootstrap"
import React, { useRef, useEffect, useState } from 'react';
import FinalProject from '../portfolio/finalproject/FinalProject';
import HackPulse from '../portfolio/hackpulse/HackPulseNews';
import PixelPerfect from '../portfolio/pixelperfect/PixelPerfect';
import TurnBasedGame from '../portfolio/TurnBasedGame/TurnBasedGame';
import Restaurant from '../portfolio/restaurant/ReactRestaurant';

function PortfolioCarousel () {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
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
          if (screenTop + screenHeight > containerTop + containerHeight / 2 && !isVisible) {
            setIsVisible(true);
          }
        }
      };

    return (
        <div ref={containerRef} className={`carousel-fade-in ${isVisible ? 'visible' : ''}`}>
        <Carousel>
        <Carousel.Item>
          <FinalProject />
        </Carousel.Item>
        <Carousel.Item>
          <HackPulse />
        </Carousel.Item>
        <Carousel.Item>
          <Restaurant />
        </Carousel.Item>
        <Carousel.Item>
          <PixelPerfect />
        </Carousel.Item>
        <Carousel.Item>
          <TurnBasedGame />
        </Carousel.Item>
      </Carousel>
      </div>
    )

}
export default PortfolioCarousel