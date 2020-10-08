import React from 'react';
import './style.css';
import FunkyHeader from './assets/components/Header.js';
import MainStuff from './assets/components/Main';
import CrazySideBar from './assets/components/SectionBar';
import SmellyFooter from './assets/components/Footer';

function App() {
  
  return (
    <div className="App">
      <FunkyHeader/>
      <CrazySideBar/>
      <MainStuff/>
      <SmellyFooter/>
    </div>
  )
}

export default App;
