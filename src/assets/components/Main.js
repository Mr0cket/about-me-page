import React from 'react';
import audio from "../media/holy.wav";
import che from "../media/El-Che.jpg"
import niseko from "../media/mt-niseko.jpg"
import mind from "../media/open-your-mind.jpg"
import snow from "../media/sit-in-snow.jpg"
import rock from "../media/sit-on-rock.jpg"
import tamdao from "../media/sit-on-sign.jpg"
function MainStuff() {
    

    return (
        <main id="main-stuff-wrapper">
            <HomeSection/>
            <WorkSection 
                name= "Work Stuff" 
                blendStyle={{
                    background: "linear-gradient(to bottom, rgb(55 55 55), #164076)",
                    height: "5px",
                }}
                id= 'work'
                />
            <LifeSection 
                name="Some pics and Stuff"
                id='life'
                blendStyle={{
                    background: "linear-gradient(to bottom, #164076, #f2b635)",
                    height: "5px",
                }}
            />
        </main>
    )
}
// for some reason, when I add > 3 sections, the navigation smooth-scrolling effect breaks.
// when transitioning '#home' <-> '#work' and '#contact'. No idea why... but 3 sections is scroll limit for now.



function HomeSection() {

    return (
        <section id="home" className="section-containers">
            <div className="top-content"></div>

            <div className="based-titles">
                <h1 id="the-main-man" className="section-headings">Milo Silva</h1>
                    <h3 id="dream-job" className="title"> Full-Stack Developer<span id="addition" className="title" >...Kind of</span></h3> 
                    
                <audio id="holySound">
                    <source src={audio} type="audio/mpeg" onLoad={() => console.log('audio loaded')}/>
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
                <div className="work right">
                    <h3 className="work title">My Skills</h3>
                    <ul className="work list">
                        <li>Front-End Languages (HTML, css, js)</li>
                        <li>API calls</li>
                        <li>Server request handling</li>  
                        <li>React Framework</li>
                        <li>Domain Knowledge: FinTech {'&'} OnlinePlayments</li>
                    </ul>
                </div>
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

class LifeSection extends Section {

    render () {
        
        return (
            <section id={this.id} className="section-containers">
                <div style={this.blendStyle}></div>
                <div className="top-content"></div>
                <div className="based-titles">
                    <h1 className="section-headings">{this.sectionName}</h1>
                </div>
                <div className="bottom-content"> 
                    <img className="myPics"src={che} alt="A fearless leader"/>
                    <img className="myPics"src={tamdao} alt="A big sign for a small village"/>
                    <img className="myPics"src={snow} alt="I like snow!"/>
                    <img className="myPics"src={rock} alt="A view of HaLong Bay"/>
                    <img className="myPics"src={mind} alt="Ice Scupture"/>
                    <img className="myPics"src={niseko} alt="Snowy mountains!"/>
                </div>
            </section>
        )
    }
}

export default MainStuff;

