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
        paddingTop: '10%',
  
    }}
    >
        <Row>   
            <Col 
            md={12}>
                <h1>Let's Get Social <FontAwesomeIcon icon={faUserGroup} /></h1>
                <p>
                <FontAwesomeIcon icon={faEnvelope} />
                    Email: drewrosecoker@gmail.com</p>
                <p>
                <FontAwesomeIcon icon={faPhone} />
                    Phone: (864) 871-2004</p>
                <p>
                <img src={linkedIn} width="2.5%" style={{ filter: "brightness(0) saturate(100%) invert(16%)" }}/>
                    https://www.linkedin.com/in/drew-coker/</p>
                <p>
                <img src={github} width="2.5%" />
                    https://github.com/drewrc/
                    </p>
                <p><ContactForm /></p>
            </Col>
        </Row>
    </Container>
    </div>
    )
}
export default Contact;