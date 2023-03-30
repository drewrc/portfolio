import React from "react";

function SideNav(props) {
  return (
    <nav >
      <ul id="side-nav-list">
        <li
        id="side-nav-item"
          onClick={() => props.setActiveTab("intro")}
          className={props.activeTab === "intro" ? "active" : ""}
        >
          Intro
        </li>
        <li
         id="side-nav-item"
          onClick={() => props.setActiveTab("education")}
          className={props.activeTab === "education" ? "active" : ""}
        >
          Education
        </li>
        <li
         id="side-nav-item"
          onClick={() => props.setActiveTab("skills")}
          className={props.activeTab === "skills" ? "active" : ""}
        >
          Skills
        </li>
        <li
         id="side-nav-item"
          onClick={() => props.setActiveTab("languages")}
          className={props.activeTab === "languages" ? "active" : ""}
        >
          Languages
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
