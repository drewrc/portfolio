function Languages() {

    return(
        <span className="about-list-item-content">
        <h3 
            style={{
                marginTop: "5%",
                paddingLeft: "5%",
                borderTop: '5px solid rgb(247, 239, 239, 0.2)',
                borderLeft: '5px solid rgb(247, 239, 239, 0.2)',
                borderRight: 'none',
                paddingRight: '0px',
            }}
        className="main-container" id="header-about-list">
          Languages
        </h3>
        <div className="education-item">
            <ul>
                <li id="language">ReactJS</li>
                <li id="language">HTML</li>
                <li id="language">CSS</li>
                <li id="language">JavaScript</li>
                <li id="language">Python</li>
                <li id="language">Django</li>
            </ul>
        </div>
        </span>
    )
} 
export default Languages;