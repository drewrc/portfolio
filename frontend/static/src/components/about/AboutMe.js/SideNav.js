import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faFolderOpen, faGraduationCap, faUser } from "@fortawesome/free-solid-svg-icons";

function SideNav(props) {
  return (
    <nav >
      <div
      style={{
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
      }}
      id="side-nav-list">
        <div
        id="side-nav-item"
          onClick={() => props.setActiveTab("intro")}
          className={props.activeTab === "intro" ? "active" : ""}
        >
        <FontAwesomeIcon icon={faUser}
             style={{
                paddingLeft: "5%",
                marginRight: "5%"}}
        />
          Intro
        </div>
        <div
         id="side-nav-item"
          onClick={() => props.setActiveTab("education")}
          className={props.activeTab === "education" ? "active" : ""}
        >
        <FontAwesomeIcon icon={faGraduationCap}
        style={{
            paddingLeft: "5%",
            marginRight: "5%"}}
        />
          Education
        </div>
        <div
         id="side-nav-item"
          onClick={() => props.setActiveTab("skills")}
          className={props.activeTab === "skills" ? "active" : ""}
        >
         <FontAwesomeIcon 
          style={{
            textAlign: "center",
            paddingLeft: "5%",
            marginRight: "5%"}}
         icon={faFolderOpen} />
          Skills
        </div>
        <div
         id="side-nav-item"
          onClick={() => props.setActiveTab("languages")}
          className={props.activeTab === "languages" ? "active" : ""}
        >
        <FontAwesomeIcon     
        style={{
            paddingLeft: "5%",
            marginRight: "5%"}}
        icon={faCode} />
          Code
        </div>
      </div>
    </nav>
  );
}

export default SideNav;
