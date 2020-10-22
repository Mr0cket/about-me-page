import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faHandshake, faHome, faSnowboarding } from '@fortawesome/free-solid-svg-icons';



class TotallyNormalSection extends React.Component {
    constructor (props) {
        super();
        this.icon = props.icon
        this.navLink = props.navLink
        this.text = props.text
    }
    openModal() {
        var modal = document.querySelector("#modal");
        var modalOverlay = document.querySelector("#modal-overlay");
        modal.classList.toggle("closed");
        modalOverlay.classList.toggle("closed");
    }
    render () {
        if (this.text === "Get in Touch!") { 
            return (
                <li className="listless-list">
                    <a href="#"className="contactMe" onClick={this.openModal}> <FontAwesomeIcon icon={this.icon}/>  <span className="optional-text">{this.text}</span></a>
                </li>
                )
        } else {
            return (
                <li className="listless-list"><a href={this.navLink}><FontAwesomeIcon icon={this.icon}/> <span className="optional-text">{this.text}</span></a></li>
            )
        }   
    }
}

function CrazySideBar() {
    

    return (
        <nav className="section-bar">
            <ul>
                <TotallyNormalSection text="Home" navLink="#home" icon={faHome}/>
                <TotallyNormalSection text="Professional stuff" navLink="#work" icon={faBriefcase}/>
                <TotallyNormalSection text="Life stuff" navLink="#life" icon={faSnowboarding}/> 
                <TotallyNormalSection text="Get in Touch!" navLink='' icon={faHandshake} />
            </ul>
        </nav>
    )
}

export default CrazySideBar;