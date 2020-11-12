import React, { useState, useRef } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class ModalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen : false,
            propsChanged : true
        }
    }
    
    // TODO: Change the way components interact with modal visibility. 
    // - Make App the single point of truth, toggle visibilty in components with toggleModal call.
    // - modalOpen: boolean - toggles between true/false when toggleModal is called from any component.
    // Also: rewrite logic of getDerivedStateFromProps to improve the state stuff.
    // Also: need to check whether this is the correct use case for getDerivedStateFromProps method.
    static getDerivedStateFromProps(props, state) {
        
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

        // use modalState to toggle 'closed' class when modalClosed == true.
        let modalState = this.state.modalOpen ? "" : "closed";

        return (
            <div>
                <div className={`modal ${modalState}`} id="modal" style={this.state.formStyle}>
                    <div className="modal-guts">
                        <button 
                           className="link-button"
                            onClick={() => {
                                this.setState({modalOpen: false})}} 
                            href="">
                                <FontAwesomeIcon icon={faTimes}/>
                        </button>
                        <ContactForm 
                            closeModal={() => {
                                this.setState({modalOpen: false})
                                }
                            }
                        />
                    </div>
                </div>
                <div className={`modal-overlay ${modalState}`} id="modal-overlay" onClick={() => this.setState({modalOpen: false})}>
                </div>
            </div>
        );
    }
}

function ContactForm(props) {

    let [message, setMsg] = useState(""); 


    const form = useRef(null); // null = initial reference (ref) value of form.
    

    const submit = function(e) {
        // call data transfer method
        uploadData(e)

        // close modal here, somehow?
        props.closeModal()
    }
    // can not use new Request() to change to mode: 'no-cors'. Request always uses mode: 'cors'
    const uploadData = function(e) {
        e.preventDefault()
        // The form data is sent using the FormData constructor.
        // data : FormData object.
        let data = new FormData(form.current)
        fetch('http://homesterdam.ydns.eu:666/contacts', { 
            method: 'POST', 
            body: data,
            } 
        )
            .then(res => {
                })
                    .catch(reason => console.log(`there was a problem with request: ${reason}`))
    }

    return (
        <form ref={form} className="contact-form" onSubmit={submit}>
            <input 
                type="text"
                id="name"
                name="name"
                value={message.name}
                placeholder="Name"
                onChange={e => setMsg({ ...message, name: e.target.value })} />
            
            <input 
                type="email"
                id="email"
                name="email"
                value={message.email}
                placeholder="email"
                onChange={e => setMsg({ ...message, email: e.target.value })}/><br />
            <textarea                                      
                    name="message"
                    placeholder="Collab Bro...?"
                    value={message.content}
                    onChange={e => setMsg({ ...message, content: e.target.value })}
                    >
            </textarea>
            <input type="submit" value="Submit" />
        </form>
    )
}
export default ModalForm;