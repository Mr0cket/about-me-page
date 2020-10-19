import React from 'react';
import audio from "../media/holy.wav";


function MainStuff() {
    

    return (
        <main id="main-stuff-wrapper">
            <HomeSection/>
            <Section 
                name= "this is Work Section" 
                blendStyle={{
                    background: "linear-gradient(to bottom, rgb(55 55 55), #164076)",
                    height: "5px",
                }}
                id= 'work'
                />
            <Section 
                name="this is LifeSection"
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

{/*             <Section 
                name= "Get in Touch!"
                id='contact'
                blendStyle={{
                    background: "linear-gradient(to bottom, #f2b635, #efeeed",
                    height: '5px'
                }}
            /> */}

function HomeSection(param) {

    return (
        <section id="home" className="section-containers">
            <div className="based-titles">
                <h1 id="the-main-man" className="section-headings">Milo Silva</h1>
                    <h3 id="dream-job" className="title"> Full-Stack Developer<span id="addition" className="title" >...Kind of</span></h3> 
                    
                <audio id="holySound">
                    <source src={audio} type="audio/mpeg" onLoad={() => console.log('audio loaded')}/>
                    Your browser does not support the audio element.
                </audio>
            </div>
        </section>
    )
}

class Section extends React.Component {
    constructor(param) {
        super();
        this.sectionName = param.name;
        this.blendStyle = param.blendStyle;
        this.id = param.id;
    }
    render() {

        return (
            <section id={this.id} className="section-containers">
                <div style={this.blendStyle}></div>
                <div className="based-titles">
            <h1 className="section-headings">{this.sectionName}</h1>
                </div>
            </section>
        )
    }
}

export default MainStuff;