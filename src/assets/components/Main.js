import React from 'react';
import audio from "../media/Holy.wav";
import che from "../media/El-Che.jpg"
import niseko from "../media/mt-niseko.jpg"
import mind from "../media/open-your-mind.jpg"
import snow from "../media/sit-in-snow.jpg"
import rock from "../media/sit-on-rock.jpg"
import tamdao from "../media/sit-on-sign.jpg"
import applePen from '../media/I-HAVE-A-PEN.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitkraken, faHtml5, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode, faHammer, faServer, faTrain } from '@fortawesome/free-solid-svg-icons';
function MainStuff() {

    return (
        <main id="main-stuff-wrapper">
            <HomeSection/>
            <WorkSection 
                name= "About me" 
                blendStyle={{
                    background: "linear-gradient(to bottom, rgb(55 55 55), #164076)",
                    height: "5px",
                }}
                id= 'work'
                />
            <LifeSection 
                name="Photos taken along the way"
                id='life'
                blendStyle={{
                    background: "linear-gradient(to bottom, #164076, rgb(32, 42, 54))",
                    height: "5px",
                }}
            />
        </main>
    )
}



function HomeSection() {

    return (
        <section id="home" className="section-containers">
            <div className="top-content"></div>

            <div className="based-titles">
                <h1 id="the-main-man" className="section-headings">Milo Silva</h1>
                    <h3 id="dream-job" className="title"> Full-Stack Developer<span id="addition" className="title" >...almost</span></h3> 
                    
                <audio id="holySound">
                    <source src={audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className="bottom-content"> 
            </div>
        </section>
    )
}

class Section extends React.Component {
    constructor(props) {
        super();
        this.sectionName = props.name;
        this.blendStyle = props.blendStyle;
        this.id = props.id;
    }
    render() {

        return (
            <section id={this.id} className="section-containers">
                <div style={this.blendStyle}></div>
                <div className="top-content"></div>
                <div className="based-titles">
                    <h1 className="section-headings">{this.sectionName}</h1>
                </div>
                <div className="bottom-content"> 
                </div>
            </section>
        )
    }
}

class WorkSection extends Section {


    render() {

        return (
            <section id={this.id} className="section-containers">

                <div style={this.blendStyle}></div>
                    <div className="top-content"></div>
                    <div className="based-titles">
                        <h1 className="section-headings">{this.sectionName}</h1>
                    </div>
                    <div className="bottom-content"> 
                        <div className="work right">
                            <h3 className="work title"> Words I learned recently</h3>
                            <ul className="work list">
                                <li><FontAwesomeIcon icon={faHtml5}/>  Front-End Languages (HTML, css, js)</li>
                                <li><FontAwesomeIcon icon={faCode}/>  API calls</li>
                                <li><FontAwesomeIcon icon={faServer}/> Server stuff </li>  
                                <li><FontAwesomeIcon icon={faReact}/>  React.js </li>
                                <li><FontAwesomeIcon icon={faNodeJs}/>  Node.js </li>
                                <li> <FontAwesomeIcon icon={faTrain}/> Express.js </li>
                                <li><FontAwesomeIcon icon={faGitkraken}/>  Github (not js)</li>
                                <li><FontAwesomeIcon icon={faHammer}/> Building this webpage! </li>
                            </ul>
                        </div>
                        <div className="work left">
                            <h3 className="work title"> Random facts</h3>
                            <ul className="work list">
                                <li> <span role='img' aria-label='aus'>🦘</span> From Australia</li>
                                <li> <span role='img' aria-label='heart'>❤️</span> Snowboarding, bike-riding {'&'} Netherlands!</li>
                                <li> <span role='img' aria-label='teacher'>👨🏻‍🏫</span> Taught english in Vietnam </li>
                                <li> <span role='img' aria-label='frownie-face'>😕</span> Graduated in Engineering, never used my degree </li>
                                <li> <span role='img' aria-label='nerdy-face'>🤓</span> Am a bit of a geek </li>
                                <li> <span role='img' aria-label='nerdy-face'>🤓</span> Prefer back-end to front-end</li>
                                <li> <span role='img' aria-label='investigative-face'>🧐</span> Before deciding to learn to code, <span style={{fontSize: '0.5em'}}>I had a brief existential crisis about the meaning of my life!</span> </li>
                            </ul>
                        </div>
                    </div>
            </section>
        )
    }
    
}

class LifeSection extends Section {
/* TODO: create semi-transparent prevPic and nextPic buttons to both sides of the gallery viewable area. */
    render () {
        
        return (
            <section id={this.id} className="section-containers">
                <div style={this.blendStyle}></div>
                <div className="top-content"></div>
                <div className="based-titles">
                    <h1 className="section-headings">{this.sectionName}</h1>
                </div>
                <div className="bottom-content" style={{'padding': '0 2%'}}> 
                
                 <div className="gallery" 
                    style={{    }}>
                    <div>
                    <div className="gallery-scroller">
                        <MyPic src={che} alt="Revolutionary Leader"/>   
                        <MyPic src={niseko} alt="Snowy mountains!"/>
                        <MyPic src={snow} alt="I like snow!"/>
                        <MyPic src={mind} alt="Ice Scupture"/>
                        <MyPic src={applePen} alt="I have a pen..."/>
                        <MyPic src={rock} alt="A view of HaLong Bay"/>
                        <MyPic src={tamdao} alt="A big sign for a small village"/>
                    </div>
                      
                    </div>
                 </div>
                </div>
            </section>
        )
    }
}

class MyPic extends React.Component {

    render() { 
        return (
            <div>
                <img className='life pic' src={this.props.src} alt={this.props.alt}/> 
            </div>
        )
    }
}


export default MainStuff;

