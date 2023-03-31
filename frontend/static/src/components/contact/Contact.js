import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import linkedIn from "./LI-In-Bug.png";
import github from "./github-mark.png";


function Contact() {

    return (
    <div 
        id="contact-wrapper"
    >
    <Container
    id="social-container"
      style={{
        width: "100%",
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '15%',
        backgroundColor: "rgb(247, 239, 239, 0.2)",
    }}
    >
        <Row
        style={{
            width: "100%",
            textAlign: "center",
            // display: 'flex',
            // justifyContent: 'center',
   
        }}>   
            <Col 

            md={12}>
                <h1
                id="contact-header"
                >Let's Get Social <FontAwesomeIcon icon={faUserGroup} /></h1>
                <p className="social-text">
                <FontAwesomeIcon
                style={{marginRight: "5px"}}
                icon={faEnvelope} />
                     drewrosecoker@gmail.com</p>
                <p className="social-text">
                <FontAwesomeIcon
                style={{marginRight: "5px"}}
                icon={faPhone} /> 
                    (864) 871-2004</p>
                <p className="social-text">
                <a 
                    style={{marginRight: "5px"}}
                href="https://www.linkedin.com/in/drew-coker/"> <img src={linkedIn} width="2.5%" style={{ filter: "brightness(0) saturate(100%) invert(16%)" }}/></a>
                <a href="https://github.com/drewrc/"><img src={github} width="2.5%" /></a>    
                </p>
                <p><ContactForm /></p>
            </Col>
        </Row>
    </Container>
    </div>
    )
}
export default Contact;