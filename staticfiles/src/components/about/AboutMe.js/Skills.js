import { Col, Row, Container } from "react-bootstrap";

function Skills() {

    return (

            
              
                <span 

                 style={{
                    height: "100vh",
                    overflowY: "scroll",
                }}
                className="about-list-item-content">

      
                        <h3
                            style={{
                                marginTop: "5%",
                                paddingLeft: "5%",
                                borderTop: '5px solid rgb(247, 239, 239, 0.2)',
                                borderLeft: '5px solid rgb(247, 239, 239, 0.2)',
                            }}

                         id="header-about-list-skill"
                        className="main-container">
                            Skills
                        </h3>
                        <p
                        style={{
                            textAlign: "right",
                            padding: "10px",
                            // marginLeft: "20%",
                            width: "100%",
                            backgroundColor: "rgb(247, 239, 239, 0.2)",
                            }}
                        >skills I've learned... </p>
                        <div className="education-item">
                            <ul>
             
               
                        <li 
                            //  style={{
                            //     width: "100%",
                            //     }}
                        id="skill">Frontend/Backend Development</li>
                            <li id="skill">API Integration</li>
                            <li id="skill">Version control and Git</li>
                            <li id="skill">Wireframes</li>
                            <li id="skill">User Stories</li>
                 
                        <li id="skill">UX/UI</li>
                            <li id="skill">Debugging and testing</li>
                            <li id="skill">Collaboration and leadership</li>
                            <li id="skill">Teamwork</li>
                            <li id="skill">Using third party libraries like Material UI and Bootstrap</li>
                   
                    </ul>
                    </div>
                    </span>
            
        
                
               
  
    )
}
export default Skills;