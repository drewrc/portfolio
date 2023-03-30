import React, { useState } from "react";
import Education from "./AboutMe.js/Education";
import Intro from "./AboutMe.js/Intro";
import Languages from "./AboutMe.js/Languages";
import SideNav from "./AboutMe.js/SideNav";
import Skills from "./AboutMe.js/Skills";
import { Col, Row, Container } from "react-bootstrap";

function About() {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <main>
        <Container>
            <Row
            style={{
                // backgroundColor: "white",
                // paddingTop: "5%",
            }}
            >
                <Col 
              
                xs={4}>
                <div 
                
                id="rendered-side-nav">
                    <SideNav activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                </Col>
                <Col xs={6}>
                <div
                id="rendered-about">
                    {activeTab === "intro" && <Intro />}
                    {activeTab === "education" && <Education />}
                    {activeTab === "skills" && <Skills />}
                    {activeTab === "languages" && <Languages />}
                </div>
                </Col>
            </Row>
        </Container>
        {/* <div className="about-container">
     
     
      </div> */}
    </main>
  );
}

export default About;
