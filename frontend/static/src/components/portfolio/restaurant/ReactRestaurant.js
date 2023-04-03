import React from 'react'
import { Col, Row, Container } from "react-bootstrap";
import Homepage from './reactrestaurantapp2.png'


function Restaurant() {

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
            <h3 
            id="portfolio-header"
            >Vic's Pizza</h3>
            <p>
            ReactJS, Python, Django/Django Rest Framework, HTML, CSS, Bootstrap
            </p>
            <p>
            At Vic's Pizza, our main focus is to provide customers with a visually appealing and easy-to-use platform to explore our mouthwatering pizza menu, customize their orders, and enjoy a hassle-free checkout process. 
            </p>
            <p>
            The app's responsive design, made possible by Bootstrap, ensures a consistent user experience across all devices, while the combination of ReactJS and HTML enables smooth navigation and real-time updates.  
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
         <a href="https://github.com/drewrc/react-restaurant-app/"
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
export default Restaurant