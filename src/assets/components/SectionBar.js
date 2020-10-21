import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faHandshake, faHome, faSnowboarding } from '@fortawesome/free-solid-svg-icons';



function TotallyNormalSection(props) {
    return (
    <li className="listless-list"><a href={props.navLink}><FontAwesomeIcon icon={props.icon}/> <span className="optional-text">{props.text}</span></a></li>
    )
}

function CrazySideBar() {
    

    return (
        <nav className="section-bar">
            <ul>
                <TotallyNormalSection text="Home" navLink="#home" icon={faHome}/>
                <TotallyNormalSection text="serious stuff" navLink="#work" icon={faBriefcase}/>
                <TotallyNormalSection text="Fun stuff" navLink="#life" icon={faSnowboarding}/> 
            </ul>
        </nav>
    )
}

export default CrazySideBar;