import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <App />,
document.getElementById('root')
);

// Initialise variables
let mainGuy = document.getElementById('the-main-guy');
let audio = document.querySelector("#holySound");
let audioPlaying = false; 
let promise;
let userInteracted = false;
let title = document.getElementById('dream-job');
let titleStr = title.innerHTML;


// Declare user interaction events:

// User click on the page to indicate user interaction.
window.onmousedown = () => (userInteracted === false) ? userInteracted = true : null

// Handle 2 different transitional events when user mouse hovers over element: 
// - if user has interacted with the page:
// - Start playing audio, transition volume = 0% to vol = 100% over transition period. 
// - Transition to a brighter shade of background color over transition period.
// - Reverse transition when user mouse leaves heading with faster transition period.

mainGuy.onmouseover = playAudio;
mainGuy.onmouseleave = () => setTimeout(pauseAudio, 300);


// text change event on hovering over element
title.onmouseover = () => title.innerHTML += " ...Well, kind of"; 
title.onmouseleave = () => title.innerHTML = titleStr;

// Declare Event handler functions
function playAudio() {
  if (userInteracted === true && audioPlaying === false) {
    promise = audio.play();
    audioPlaying = true
    console.log('playing music');
    if (promise !== undefined && promise.state === "fulfilled") {
      console.log('audio is playing');      
    }
  }
}
function pauseAudio() {
  if(audioPlaying === true) { 
    let test = audio.pause()
    console.log('audio paused')
    console.log(test);
    audioPlaying = false;
  }
}




//Todo: add transitions to slightly brighten background colors from centre point

//Todo: implement unique sections on scroll velocity (scroll actions/second) > 20%? 



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()