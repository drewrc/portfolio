import React from 'react';
import selfie from './selfie.png';
import { Col, Row, Container } from 'react-bootstrap';

function Intro() {

    return (
        <>
      
<Container
  >
    <Row
    >
        <Col
        xs={12}
        id="about-me-container"
        style={{
            height: "100vh",
            overflowY: "scroll",
        }}
        >
        <div >
        <h3 
        style={{
            marginTop: "5%",
            // paddingLeft: "5%",
            borderTop: '5px solid rgb(247, 239, 239, 0.2)',
            borderLeft: '5px solid rgb(247, 239, 239, 0.2)',
        }}
        className="main-container"
        id="header-about"
        >
          About Me
        </h3>
        <p
        id="title"
        style={{
            textAlign: "right",
            padding: "10px",
            // marginLeft: "20%",
            // width: "100%",
            backgroundColor: "rgb(247, 239, 239, 0.2)",
             }}
        >Full-Stack Software Engineer</p>
        <div>
        <img id="selfie" src={selfie} width="200px" alt="selfie" />
        <span 
            id="about-3"
        className="about-list-item-content">
            Drew Coker
            <p id="city" className="about-list-item-content">
            Greenville, SC
            </p>
        </span>
        </div>
        <div>
    
        </div>
        <div>
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
        </div>
        </div>
        </Col>
    </Row>
</Container>

</>
  
    )
}

export default Intro;