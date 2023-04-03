import React from 'react'
import { Col, Row, Container } from "react-bootstrap";
import Mainpage from './JurassicRumble.png'

function TurnBasedGame() {

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
                <h3>Jurassic Rumble</h3>
                <p>
                CSS, HTML, Midjourney AI, JavaScript, Bootstrap      
                </p>
                <p>
                Made a turn-based game in JS using Midjourney for images and HTML/CSS/Bootstrap for UI. Integrated audio/sound effects using JS.
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
            <a href="https://drewrc.github.io/js-turn-based-game/"
                className="logo-link"
                style={{
                    display: 'inline-block',
                    width: '60%',
                    marginLeft: '20%',
                }}
                >
                <img
                className="logo-image" 
                src={Mainpage} alt="Logo" style={{ width: '100%' }} />
                </a>
                </Col>
                </Row>

            </Container>
        </div>
        </>

    )
}
export default TurnBasedGame