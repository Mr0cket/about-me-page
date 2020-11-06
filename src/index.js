import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from 'serviceWorker';

// render page.
ReactDOM.render(
  <App />,
document.getElementById('root')
);


//DOM-loaded effects


// Initialise variables
let mainGuy = document.getElementById('the-main-man');
let userInteracted = false;
let addition = document.querySelector('#addition');
let title = document.querySelector('#dream-job')

// declare Audio object (best way to pass variables between play and pause methods without using global scope.)
let Audio = {
  audioPlaying: false,
  sound: document.querySelector("#holySound"),
  timeCount: 0,
  // Play object Method (still messy)
  play: () =>  {
      Audio.audioPlaying = true;
      Audio.sound.volume = 0.01;
      Audio.promise = Audio.sound.play();
      Audio.audioTimeId = setInterval(() => {Audio.sound.volume < 0.06 ? Audio.sound.volume += 0.01 : clearInterval(Audio.audioTimeId)}, 500);
      let volIntervalId = setInterval(()=> {
        Audio.timeCount++;
        if (Audio.timeCount > 5) clearInterval(volIntervalId);
      }, 5000)
  },
  // Pause object method messy as well
  pause: () => {
      clearInterval(Audio.audioTimeId)
      Audio.audioPlaying = false;
      Audio.sound.pause()
  }
}

// Declare user interaction events:

// User clicks on the page to indicate user interaction.
window.onmousedown = () => (userInteracted === false) ? userInteracted = true : null;
mainGuy.onmouseover = () => (userInteracted && !Audio.audioPlaying) ? Audio.play() : null;
mainGuy.onmouseleave = () => Audio.audioPlaying ? setTimeout(Audio.pause, 200) : null;
mainGuy.addEventListener("focus", () => !Audio.audioPlaying ? Audio.play() : null)
/* 
mainGuy.addEventListener('touchstart', () => {
  if (!Audio.audioPlaying) {
    Audio.play()
    setTimeout(Audio.pause, 5000);
   } else console.log("Audio Already playing");
  })
 */
// Handle 2 different transitional events when user mouse hovers over element: 
// - if user has interacted with the page:
// -> Start playing audio, transition volume = 0% to vol = 15% over transition period. (6% is enough) - Done
// -> Transition to a brighter shade of background color over transition period. - Todo
// -> Reverse transition when user mouse leaves heading.   - Done



// text change event on hovering over element
let initialised = false;
title.onmouseover = () => 
{if (!initialised) {
  addition.style.visibility = "visible";
  addition.style.fontSize = '0.7em';
  initialised = true;
} else addition.style.visibility = "visible";
}
// title.onmouseleave = () => {
//   console.log('changing visibility')
//   addition.style.visibility = "hidden" }
// title.onmouseleave = setTimeout(}, 3000)


//Todo: add transitions to slightly brighten background colors from centre point

//Todo: implement scroll locking to create a fixed transition between page views.



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register()