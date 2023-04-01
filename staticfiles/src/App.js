import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "./components/auth-context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { Redirect } from "react-router-dom";
import Main from './components/main/main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';


function App() {


  // const { } = useContext(AuthContext);
  return (
    <>
    <Header />
      <Routes>
          <Route path="/" element={<Main />}/>
        {/* <Route path="/" element={<ProtectedRoute />}> */}
          {/* <Route path="main" element={<Main />} /> */}
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} /> 
          <Route path="contact" element={<Contact />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
