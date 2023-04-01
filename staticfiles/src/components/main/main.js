import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Main() {


    return(
        <>
      
        <main>
            <div  id="main-wrapper"> 
            <div id="main-container">
                <div id="main-container-text">
                <h4> Hello, my name is</h4> 
                        <h3  className="main-container" id="header-main">Drew</h3> 
                    <h2 id="header-minor">  
                        I'm excited to share my work with you. 
                    </h2>
                    </div>
                </div> 
            </div>
            <div className="board">
            <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>  
                        <div className="square"></div>
                        <div className="square"></div>
                        </div>
        </main>
        </>
    )
}
export default Main;