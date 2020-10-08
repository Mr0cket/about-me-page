import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <App />,
document.getElementById('root')
);

window.onload = function() {

const mainGuy = document.querySelector(".the-main-guy");
// let title = document.getElementById('dream-job');
let audio = document.querySelector("#holySound");
let audioPlaying = false; 

let promise;
let userInteraction = false;
window.onmousedown = () => (userInteraction === false) ? userInteraction = true : null

mainGuy.onmouseover = playAudio
mainGuy.onmouseleave = () => setTimeout(pauseAudio, 300)

function playAudio() {
  if (userInteraction === true && audioPlaying === false) {
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







}


/* let titleStr = title.innerHTML;
title.onmouseover = () => title.innerHTML += " ...Well, kind of";
title.onmouseleave = () => title.innerHTML = titleStr; */



  // stop: () => holySound.pause()
  //Todo: add transitions to slightly brighten background colors from centre point

















// todo: implement unique sections on scroll velocity (scroll actions/second) > 20%? 



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()