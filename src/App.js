import React from 'react';
import NormalHeader from './assets/components/Header';
import MainStuff from './assets/components/Main';
import CrazySideBar from './assets/components/SectionBar';
import FunkyFooter from './assets/components/Footer';
// Need to Import style here...?
import './style.css'
import './mobile.css'
import ModalForm from './assets/components/ModalForm';


// App state is used to keep track of modal visibity state and to pass modal state between components.
// TODO: rework so that App is the single point of truth for modal visibility state.
// openModal() => toggleModal().
// pass toggleModal to all Components that interact with modal visibility via props - CrazySideBar, ModalForm.
// Then use getDerivedStateFromProps to update state after every call to toggleModal.
class App extends React.Component {
  constructor() {
    super();
  this.openModal = this.openModal.bind(this);
    this.state = {
      modalOpen: false
    }
  }
  openModal() {
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
