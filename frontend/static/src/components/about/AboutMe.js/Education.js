import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Education() {
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
                borderTop: '5px solid rgb(247, 239, 239, 0.2)',
                borderLeft: '5px solid rgb(247, 239, 239, 0.2)',
                // fontSize: "2.5rem",
            }}
        className="main-container" id="header-about-list">
            <FontAwesomeIcon 
    
            icon={faGraduationCap} />
            Education
        </h3>
        <p
        style={{
            textAlign: "right",
            padding: "10px",
            // marginLeft: "20%",
            // width: "100%",
            backgroundColor: "rgb(247, 239, 239, 0.2)",
             }}
        >...places I've learned </p>
        <div className="education-item">
            <p 
            style={{
        
            textAlign: "left",
             }}
            id="about-1">
                {/* <FontAwesomeIcon icon={faGraduationCap} /> */}
                Graduated from Carolina Code School - March 2023</p>
            <p 
            style={{
     
                textAlign: "right",
                 }}
            id="about-2">Web Development Immersive Course</p>
        </div>
        <div className="education-item">
            <p 
            style={{
    
                textAlign: "left",
                 }}
            id="about-1">Graduated from Anderson University - May 2021</p>
            <p 
            style={{
  
                textAlign: "right",
                 }}
                 id="about-2">
            Bachelor of Science in Nursing
            </p>
        </div>
        <div className="education-item">
            <p 
            style={{
         
                textAlign: "left",
                 }}
            id="about-1"> Graduated from Clemson University - Dec 2019</p>
            <p 
            style={{
 
                textAlign: "right",
                 }}
            id="about-2"> Bachelor of Science in Psychology with a minor in Fine Arts</p>
        </div>
        </span>
    )
}

export default Education;