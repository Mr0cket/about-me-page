import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faHandshake, faHome, faSnowboarding } from '@fortawesome/free-solid-svg-icons';



class TotallyNormalSection extends React.Component {

    render () {
        if (this.props.text === "Get in Touch!") { 
            return (
                <li className="listless-list">
                    <button  className="contactMe link-button" onClick={this.props.openModal}> 
                        <FontAwesomeIcon icon={this.props.icon}/> 
                        <span className="optional-text">{this.props.text}</span></button>
                </li>
                )
        } else {
            return (
                <li className="listless-list"><a href={this.props.navLink}><FontAwesomeIcon icon={this.props.icon}/> <span className="optional-text">{this.props.text}</span></a></li>
            )
        }   
    }
}

function CrazySideBar(props) {
    

    return (
        <nav className="section-bar">
            <ul>
                <TotallyNormalSection text="Home" navLink="#home" icon={faHome}/>
                <TotallyNormalSection text="About Me" navLink="#work" icon={faBriefcase}/>
                <TotallyNormalSection text="Photo Gallery" navLink="#life" icon={faSnowboarding}/> 
                <TotallyNormalSection text="Get in Touch!"  icon={faHandshake} openModal={props.openModal} />
            </ul>
        </nav>
    )
}

export default CrazySideBar;