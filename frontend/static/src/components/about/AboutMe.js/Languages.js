import { Row, Col, Container } from "react-bootstrap";
function Languages() {

    return(

        <Container>
            <Row>
                <Col xs={12}>
                    
                <h3 
            style={{
                marginTop: "5%",
                paddingLeft: "5%",
                borderTop: '5px solid rgb(247, 239, 239, 0.2)',
                borderLeft: '5px solid rgb(247, 239, 239, 0.2)',
                borderRight: 'none',
                paddingRight: '0px',
          
                width: '80%',
            }}
        className="main-container" id="header-about-list">
          Code
        </h3>
        <p
        id="title"
        style={{
            textAlign: "right",
            padding: "10px",
            // marginLeft: "20%",
            width: "100%",
            backgroundColor: "rgb(247, 239, 239, 0.2)",
             }}
        >languages I've achieved proficiency in... </p>
                </Col>
            </Row>
            <Row>

                <Col xs={6}>
                <div id="language">ReactJS</div>
                <div id="language">HTML</div>
                <div id="language">CSS</div>
                </Col>
                <Col xs={6}>
                <div id="language">JavaScript</div>
                <div id="language">Python</div>
                <div id="language">Django</div>
                </Col>
            </Row>
        </Container>
    )
} 
export default Languages;