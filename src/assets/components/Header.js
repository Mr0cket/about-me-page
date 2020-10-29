import React from 'react';
import reactLogo from '../media/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class aNormalHeader extends React.Component {
    
    render() {
        return (
            <header className="normal-header">
                <div id="positioner">
                    <a className="social-links"href="https://github.com/Mr0cket"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href='https://reactjs.org/'><img src={reactLogo} className="react-logo" alt="react logo"/></a>
                    <a className="social-links" href="https://www.linkedin.com/in/milo-silva/"><FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
            </header>
        )
    }
}
// 