// import React, { useState, useEffect } from "react";
// import Education from "./AboutMe.js/Education";
// import Intro from "./AboutMe.js/Intro";
// import Languages from "./AboutMe.js/Languages";
// import SideNav from "./AboutMe.js/SideNav";
// import Skills from "./AboutMe.js/Skills";
// import { Col, Row, Container } from "react-bootstrap";

// function withAnimation(WrappedComponent) {
//   return function ComponentWithAnimation(props) {
//     const [shouldAnimate, setShouldAnimate] = useState(false);

//     useEffect(() => {
//       setShouldAnimate(true);
//     }, []);

//     return (
//       <div className={shouldAnimate ? "animate" : ""}>
//         <WrappedComponent {...props} />
//       </div>
//     );
//   };
// }

// const AnimatedEducation = withAnimation(Education);
// const AnimatedIntro = withAnimation(Intro);
// const AnimatedLanguages = withAnimation(Languages);
// const AnimatedSkills = withAnimation(Skills);

// function About() {
//   const [activeTab, setActiveTab] = useState("intro");

//   return (
//     <main>
//         <Container>
//             <Row>
//                 <Col xs={4}>
//                   <div id="rendered-side-nav">
//                     <SideNav activeTab={activeTab} setActiveTab={setActiveTab} />
//                   </div>
//                 </Col>
//                 <Col xs={8}>
//                   <div id="rendered-about">
//                     {activeTab === "intro" && <AnimatedIntro />}
//                     {activeTab === "education" && <AnimatedEducation />}
//                     {activeTab === "skills" && <AnimatedSkills />}
//                     {activeTab === "languages" && <AnimatedLanguages />}
//                   </div>
//                 </Col>
//             </Row>
//         </Container>
//     </main>
//   );
// }

// export default About;
