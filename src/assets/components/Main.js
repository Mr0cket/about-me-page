import React from 'react';
import audio from "../media/holy.wav";


function MainStuff() {
    

    return (
        <main className="main-stuff">
            <HomeSection/>
            <Section 
                name= "this is Work Section" 
                
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

function HomeSection(param) {

    return (
        <section id="home" className="section-containers">
            <div className="based-titles">
                <h1 id="the-main-man" className="section-headings">Milo Silva</h1>
                    <h3 id="dream-job" className="title"> Full-Stack Developer<h5 id="addition" className="title" >...Kind of</h5></h3> 
                    <h5 id="addition" className="title" >...Kind of.</h5>
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
                <div style={this.blendStyle}>this is the div that blends background colours</div>
                <div className="based-titles">
            <h1 className="section-headings">{this.sectionName}</h1>
                </div>
            </section>
        )
    }
}

export default MainStuff;