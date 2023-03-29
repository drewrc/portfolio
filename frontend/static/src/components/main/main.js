import React from 'react';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import TriangleCanvas from '../magicfairydust/Triangle';

function Main() {

    return(
        <>
        <main>
            <div  id="main-container">
                    <h3 className="main-container" id="header-main">
                        Hello, my name is Drew </h3>
                    <h2 id="header-minor">  
                        I'm excited to share my work with you... 
                    </h2>
                </div>          
        </main>
        </>
    )
}
export default Main;