import React from 'react';
import { Col, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import messages2 from './messages2.png'
import Homepage from './Homepage.png'
import MessagingDesktop from './MessagingDesktop.png'
import MessagingMobile from './MessagingMobile.png'
import Profileform from './Profileform.png'
import Profileform2 from './Profileform2.png'
import profilepage from './Profilepage.png'
import profilepage2 from './Profilepage2.png'


import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

function FinalProject() {
  const [currentRow, setCurrentRow] = React.useState(0);
  const images = [
    { src: Homepage, alt: 'Homepage' },
    { src: messages2, alt: 'Messages' },
    { src: MessagingDesktop, alt: 'Messaging Desktop' },
    { src: MessagingMobile, alt: 'Messaging Mobile' },
    { src: Profileform, alt: 'Profile Form' },
    { src: Profileform2, alt: 'Profile Form 2' },
    { src: profilepage, alt: 'Profile Page' },
    { src: profilepage2, alt: 'Profile Page 2' }
  ];

  const rows = [];
  const rowSize = 4;
  const transitionDuration = 100;

  for (let i = 0; i < images.length; i += rowSize) {
    rows.push(
      <CSSTransition key={i} classNames="slide" timeout={transitionDuration}>
        <Row className="justify-content-center mb-4" key={i}>
          {images.slice(i, i + rowSize).map((image, index) => (
            <Col xs={12} md={6} lg={3} key={index}>
              <LazyLoadImage
                src={image.src}
                alt={image.alt}
                height={200}
                width={200}
                effect="blur"
                style={{ objectFit: 'contain' }}
              />
            </Col>
          ))}
        </Row>
      </CSSTransition>
    );
  }

  const currentRowHeight = `${rows[currentRow].props.children.length * 200}px`;

  return (
    <div style={{ 
        // height: '84vh',
    
    overflow: 'hidden' }}>
      <Container>
        <Row
            style={{
                padding: '3em',
                // paddingTop: '2em',
              }}
        >
          <Col
          style={{
            backgroundColor: 'rgb(247, 239, 239, 0.2)',
            padding: '2%',
          }}
          xs={6}>
            <h3
             id="portfolio-header"
            >FitBuddies</h3>
            <p>
            ReactJS, Python, Django/Django Rest Framework, HTML, CSS
            Twilio API, Google Maps API, Material UI, Toastify, React-
            Lottie, React-Tinder-Card, Geopy
            </p>
            <p>
              FitBuddies is a social media platform for fitness enthusiasts. Users can create a profile, swipe on new friends, and send messages to each other. 
            </p>
            <p>
              FitBuddies was built using React and Django. This website is hosted on Heroku.
            </p>
         
          </Col>
          <Col
            xs={6}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgb(247, 239, 239, 0.2)',
                padding: '2%',
            }}
            >
         <a href="https://ccs-final-project-drewrc.herokuapp.com/"
            className="logo-link"
            style={{
                display: 'inline-block',
                width: '60%',
                marginLeft: '20%',
            }}
            >
            <img
            className="logo-image" 
             src={Homepage} alt="Logo" style={{ width: '100%' }} />
            </a>
            </Col>
        {/* <Col 

            style={{
                marginTop: '2em',
                backgroundColor: 'rgb(247, 239, 239, 0.2)',
                padding: '2%',
            }}

        xs={12}
        > */}
        {/* <h3
         style={{
            paddingTop: '1em',
            paddingBottom: '1em',
        }}
        >FitBuddies Image Gallery</h3> */}
            {/* <TransitionGroup>{rows[currentRow]}</TransitionGroup>
          </Col> */}
        </Row>
        {/* <Row style={{
       
            position: 'relative',
            minHeight: '50px' // or whatever height you want
        }}
        className="justify-content-center mb-4">
          <Col 
          style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '2em',
            alignItems: 'center',
            padding: '2%',
            position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}
          xs={12}>
            <button 
            id="change-row"
            className={currentRow === 0 ? 'active' : ''}
            onClick={() => setCurrentRow(0)}>
            <FontAwesomeIcon icon={faBackward} />
            </button>
            <button
            id="change-row"
            className={currentRow === 1 ? 'active' : ''}
            onClick={() => setCurrentRow(1)}>
            <FontAwesomeIcon icon={faForward} />
            </button>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default FinalProject
