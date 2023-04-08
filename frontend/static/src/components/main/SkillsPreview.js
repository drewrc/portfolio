function SkillsPreview({containerRef}) {

    return(
        <>
           
                      <div 
                      id="icons-wrapper"
                      style={{
                      }}
                      ref={containerRef}>
                        
                        {/* <h3 >Languages and Tools</h3> */}
                            <p > 
                            <a href="https://getbootstrap.com"> 
                                <img
                                className="icon"
                                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"  /></a> 
                            <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
                                <img 
                                className="icon"
                                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" /></a> 
                            <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">
                                 <img 
                                 className="icon"
                                 src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" /></a>
                            <a href="https://heroku.com" target="_blank" rel="noreferrer"> 
                                <img 
                                className="icon"
                                src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" /></a> 
                            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                                 <img 
                                 className="icon"
                                 src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" /></a> 
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
                                <img 
                                className="icon"
                                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a> 
                            <a href="https://www.python.org" target="_blank" rel="noreferrer">
                                 <img 
                                 className="icon"
                                 src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/></a>
                            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
                                <img 
                                className="icon"
                                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></a> </p>
                        </div>
        </>
    )
}
export default SkillsPreview;