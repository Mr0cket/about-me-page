import React from 'react';
import '../../style.css'
import logo from '../media/logo.svg';
import audio from "../media/Holy.wav";

function FunkyHeader() {
    return (
        <header className="Funky-header">
            <audio id="holySound">
                <source src={audio} type="audio/mpeg" onLoad={() => console.log('audio loaded')}/>
                Your browser does not support the audio element.
            </audio>
            <span className=""><a className="link"href="https://github.com/Mr0cket">github </a></span>
            <img src={logo} className="react-logo" alt="react logo" />
            <span className=""><a className="link" href="https://www.linkedin.com/in/milo-silva/">Linkedin</a></span>
        </header>
    )
}

export default FunkyHeader