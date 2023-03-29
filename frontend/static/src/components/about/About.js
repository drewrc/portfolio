import React, { useState } from "react";
import Education from "./AboutMe.js/Education";
import Intro from "./AboutMe.js/Intro";
import Languages from "./AboutMe.js/Languages";
import SideNav from "./AboutMe.js/SideNav";
import Skills from "./AboutMe.js/Skills";

function About() {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <main>
        <div className="about-container">
          <SideNav activeTab={activeTab} setActiveTab={setActiveTab} />
          <div>
            {activeTab === "intro" && <Intro />}
            {activeTab === "education" && <Education />}
            {activeTab === "skills" && <Skills />}
            {activeTab === "languages" && <Languages />}
          </div>
      </div>
    </main>
  );
}

export default About;
