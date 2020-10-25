import React from 'react';
import NormalHeader from './assets/components/Header';
import MainStuff from './assets/components/Main';
import CrazySideBar from './assets/components/SectionBar';
import FunkyFooter from './assets/components/Footer';
// Need to Import style here...?
import './style.css'
import './mobile.css'
import ModalForm from './assets/components/ModalForm';

class App extends React.Component {
  constructor() {
    super();
  this.openModal = this.openModal.bind(this);
    this.state = {
      modalOpen: false
    }
  }
  openModal() {
    console.log('toggling modal') 

    this.setState({modalOpen: true})

  }
  render() {
    return (
      <div className="App">
        <NormalHeader/>
        <CrazySideBar openModal={this.openModal}/>
        <MainStuff />
        <ModalForm modalOpen={this.state.modalOpen}/>
        <FunkyFooter/>
      </div>
    )
  }
}

export default App;
