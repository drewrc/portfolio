import React from 'react'
import { Col, Row, Container } from "react-bootstrap";
import Homepage from './pixelperfect.png'

function PixelPerfect() {

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
            <h3>Pixel Perfect</h3>
            <p>
            CSS, HTML, Font-Awesome Icons
            </p>
            <p>
            Created a 'Pixel Perfect' website out of HTML and CSS based off an image that was provided.
            </p>
            <p>
            Used Google Fonts and Font Awesome Icons for UI/UX.        
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
         <a href="https://github.com/drewrc/pixel-perfect/"
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
export default PixelPerfect