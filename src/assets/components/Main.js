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
                        <li>Building this webpage!</li>
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

    fullDisplay () {

    }
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
                    <div class="gallery-scroller">
                        <div>
                            <img className='life pic' src={che}/> 
                        </div>
                        <div>
                            <img className='life pic' src={niseko}/>
                        </div>
                        <div>
                            <img className='life pic' src={snow}/>
                        </div>
                        <div>
                            <img className='life pic' src={mind}/>
                        </div>
                        <div>
                            <img className='life pic' src={rock}/>
                        </div>
                        <div>
                            <img className='life pic' src={tamdao}/>
                        </div>

                    </div>
                      
                    </div>
                 </div>
                </div>
            </section>
        )
    }
}

/*  "display" : "flex",
                        'flexWrap' : 'wrap',
                        'flexDirection' : "row",
                        "overflow-x" : "scroll",
                        "height" : "100%",
                        'width' : "100%",
                        "background" : "#222" */

function GalleryItem(props) {
    
    return (
        <div 
            className="photoDiv" 
            style={{
                'display': "inline-block",
                'margin' : '20px 2%',
                'padding' : '5px',
                'height' : '90%',
                'width' : '200px',
                'background' : 'yellow'
            }
        }>

        </div>
    )
}
/*    <img className="myPics"src={che} alt="A fearless leader"/>
                    <img className="myPics"src={tamdao} alt="A big sign for a small village"/>
                    <img className="myPics"src={snow} alt="I like snow!"/>
                    <img className="myPics"src={rock} alt="A view of HaLong Bay"/>
                    <img className="myPics"src={mind} alt="Ice Scupture"/>
                    <img className="myPics"src={niseko} alt="Snowy mountains!"/> */
export default MainStuff;

