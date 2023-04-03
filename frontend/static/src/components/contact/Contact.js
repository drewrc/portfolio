import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import linkedIn from "./LI-In-Bug.png";
import github from "./github-mark.png";
import fiverr from './fiverr_logo_icon_248541.png'
import upwork from './1929180_upwork_icon.png'


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
                {/* <p className="social-text">
                <FontAwesomeIcon
                style={{marginRight: "5px"}}
                icon={faEnvelope} />
                     drewrc00@gmail.com</p> */}
                {/* <p className="social-text">
                <FontAwesomeIcon
                style={{marginRight: "5px"}}
                icon={faPhone} /> 
                  </p> */}
                <p className="social-text">
                <a 
                    style={{marginRight: "5%"}}
                href="https://www.linkedin.com/in/drew-coker/"> 
                <img src={linkedIn} width="5.5%" style={{ filter: "brightness(0) saturate(100%) invert(16%)" }}/></a>
                <a 
                href="https://github.com/drewrc/">
                    <img src={github} width="5.5%" />
                    </a>    
                <a 
                style={{paddingLeft: "5%"}}
                href="https://www.fiverr.com/drewcoker335/">
                    {/* <img src={github} width="2.5%" /> */}
                    <img src={fiverr} width="8.5%" />
                    </a>   
                    <a 
                       style={{paddingLeft: "5%"}}
                    href="https://www.upwork.com/freelancers/~01c0dd05b30a24a4ab/">
                    {/* <img src={github} width="2.5%" /> */}
                    <img src={upwork} width="5.5%" />
                    </a>  
                </p>
                <p><ContactForm /></p>
            </Col>
        </Row>
    </Container>
    </div>
    )
}
export default Contact;