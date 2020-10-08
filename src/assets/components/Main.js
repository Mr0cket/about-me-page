import React from 'react';
import '../../style.css';


function MainStuff() {
    

    return (
        <main className="main-stuff">
            <HomeSection/>
            <WorkSection/>
            <LifeSection/>
        </main>
    )
}

function HomeSection(param) {

    return (
        <div id="home" className="section-containers">
            <div className="based-titles">
                <h1 id="the-main-guy" className="section-headings">Milo Silva</h1>
                <h3 id="dream-job"> - Web Developer</h3>
            </div>
        </div>
    )
}

function WorkSection(param) {
    return (
        <div id="work" className="section-containers">
            <div>this is the div that blends sections</div>
            <div className="based-titles">
            <h1 className="section-headings">this is WorkSection</h1>
            </div>
        </div>
    )
}


function LifeSection(param) {
    return (
        <div id="life" className="section-containers">
            <div className="blending div">this is the div that blends sections</div>
            <div className="based-titles">
            <h1 className="section-headings">this is LifeSection</h1>
            </div>
        </div>
    )
}
export default MainStuff;