import React from "react";

function SideNav(props) {
  return (
    <nav>
      <ul>
        <li
          onClick={() => props.setActiveTab("intro")}
          className={props.activeTab === "intro" ? "active" : ""}
        >
          Intro
        </li>
        <li
          onClick={() => props.setActiveTab("education")}
          className={props.activeTab === "education" ? "active" : ""}
        >
          Education
        </li>
        <li
          onClick={() => props.setActiveTab("skills")}
          className={props.activeTab === "skills" ? "active" : ""}
        >
          Skills
        </li>
        <li
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
