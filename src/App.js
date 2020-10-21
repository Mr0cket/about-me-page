import React from 'react';
import NormalHeader from './assets/components/Header';
import MainStuff from './assets/components/Main';
import CrazySideBar from './assets/components/SectionBar';
import FunkyFooter from './assets/components/Footer';
// Need to Import style here...?
import './style.css'
import ModalForm from './assets/components/ModalForm';

function App() {
  
  return (
    <div className="App">
      <NormalHeader/>
      <CrazySideBar/>
      <MainStuff/>
      <ModalForm/>
      <FunkyFooter/>
    </div>
  )
}

export default App;
