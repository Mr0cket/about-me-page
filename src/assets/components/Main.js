import React from 'react';
import audio from "../media/Holy.wav";
import che from "../media/El-Che.jpg"
import niseko from "../media/mt-niseko.jpg"
import mind from "../media/open-your-mind.jpg"
import snow from "../media/sit-in-snow.jpg"
import rock from "../media/sit-on-rock.jpg"
import tamdao from "../media/sit-on-sign.jpg"
import applePen from '../media/I-HAVE-A-PEN.jpg'
import bay from "../media/ha-long-bay.jpeg"
import passion from "../media/passion.jpg"
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
                name="Some 'cool' Photos"
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
                            <p style={{fontSize: '0.5em'}}>
                            I am 26 and am from Australia. I have been travelling away from home for the past 3 years. 
                            I live in amsterdam Oost, 20 mins ride from Codaisseur.
                            Finally, I am a lazy perfectionist, and also terrible with Aesthetic styles - 
                            I can spend half day deciding how a button should look... Only to think it's better not to have the button at all!
                            </p>
                        </div>
                        <div className="work right">
                            <h3 className="work title"> Some facts</h3>
                            <ul className="work list">
                                <li> <span role='img' aria-label='aus'>🦘</span> Moved to Amsterdam January, 2020</li>
                                <li> <span role='img' aria-label='heart'>❤️</span> Snowboarding, bike-riding, travelling, learning, gaming {'&'} Netherlands!</li>
                                <li> <span role='img' aria-label='teacher'>👨🏻‍🏫</span> Taught english in Vietnam {'&'} France </li>
                                <li> <span role='img' aria-label='apple'>🍎</span>  I have grown up disliking apple and everything it stands for, but now am using macOS </li>
                                <li> <span role='img' aria-label='shrug'>🤷🏼‍♂️</span> Until now I have been working in Customer support! </li>
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
                
                 <div className="gallery">
                    <div>
                    <div className="gallery-scroller">
                        <MyPic src={che} alt="Revolutionary Leader (PlaceholderPic)"/>   
                        <MyPic src={niseko} alt="Snowy mountains! - Niseko, Japan"/>
                        <MyPic src={snow} alt="I like snow! - Niseko, Japan"/>
                        <MyPic src={mind} alt="Ice Scupture - Sapporo, Japan"/>
                        <MyPic src={applePen} alt="I have a pen... - Sapporo, Japan"/>
                        <MyPic src={passion} alt="Businessman enjoys a quality pint - Sapporo, Japan"/>
                        <MyPic src={rock} alt="View of HaLong Bay, Vietnam"/>
                        <myPic src={bay} alt="Another view of HaLong Bay, Vietnam"/>
                        <MyPic src={tamdao} alt="Small village with a big sign - Tamdao, Vietnam"/>
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
                <p>{this.props.alt}</p>
            </div>
        )
    }
}


export default MainStuff;

