import React from 'react'
import { Col, Row, Container } from "react-bootstrap";
import Homepage from './HackPulse1.png'

function HackPulse() {

    return (
        <>
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
            <h3>HackPulse News</h3>
            <p>
            ReactJS, Python, Django/Django Rest Framework, HTML, CSS, Bootstrap
            </p>
            <p>
            Developed a news website allowing submission, editing, rejection, and publication of articles.  
            </p>
            <p>
            Implemented custom authentication and authorization with Django REST Framework.
            Designed UI with ReactJS.         
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
         <a href="https://github.com/drewrc/drf-react-newspaper-app/"
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

            </Row>

        </Container>
    </div>
        </>

    )
}
export default HackPulse