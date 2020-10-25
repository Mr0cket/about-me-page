import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';


class ModalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            email : "",
            modalOpen : false,
            propsChanged : true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
    }
    handleChange(event) {
            this.setState({
                [event.target.name]: event.target.value
            });
    }
    handleSubmit() {
        console.log('a message was submitted!')
        this.setState({
            modalopen : false
        })
        console.log(`modalopen: ${this.state.modalOpen}`)
    }
    // TODO: rewrite logic of getDerivedStateFromProps to improve the state stuff.
    // Also: need to check whether this is the correct use case for getDerivedStateFromProps method.
    static getDerivedStateFromProps(props, state) {
        console.log(`called getDerivedStateFromProps.`)
        
        if (!state.modalOpen && !state.propsChanged) {
            return {
                modalOpen: props.modalOpen,
                propsChanged: true
            } 
        }  else if (state.propsChanged) {
            return {
                modalOpen: false,
                propsChanged: false
            }
        } 

    } 
    

    render() {
        console.log('modal form was rendered')

        // use modalState to toggle 'closed' class when modalClosed == true.
        let modalState = this.state.modalOpen ? "" : "closed";

        console.log(`current modalState: ${modalState}`)
        return (
            <div>
                <div className={`modal ${modalState}`} id="modal" style={this.state.formStyle}>
                    <div className="modal-guts">
                        <button 
                           className="close-button"
                            onClick={() => {
                                console.log('changing modalOpen state')
                                this.setState({modalOpen: false})}} 
                            href="">
                                <FontAwesomeIcon icon={faTimes}/>
                        </button>
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            
                            <input type="text"
                                id="name"
                                name="name"
                                value={this.state.name}
                                placeholder="Name"
                                onChange={this.handleChange} />
                          
                            <input type="email"
                                id="email"
                                name="email"
                                value={this.state.email}
                                placeholder="email"
                                onChange={this.handleChange}/><br />
                            <textarea                                      
                                    name="message"
                                    placeholder="Collab Bro...?"
                                    >
                            </textarea>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <div className={`modal-overlay ${modalState}`} id="modal-overlay" onClick={() => this.setState({modalOpen: false})}>
                </div>
            </div>
        );
    }
}

export default ModalForm;