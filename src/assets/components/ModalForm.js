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
                        <ContactForm />
                    </div>
                </div>
                <div className={`modal-overlay ${modalState}`} id="modal-overlay" onClick={() => this.setState({modalOpen: false})}>
                </div>
            </div>
        );
    }
}


function ContactForm() {
    let [message, setMsg] = useState("")
    const form = useRef(null)

    const submit = function(e) {
        console.log('a message was submitted!')
        console.log(e)
        console.log('initiating post request to local server...')
        // call data transfer method
        uploadData(e)

        // close modal here, somehow?
        
    }
    const uploadData = function(e) {
        e.preventDefault()
        const data = new FormData(form.current)
        fetch('localhost:666', { method: 'POST', body: data })
      .then(res => res.text())
      .then(text => console.log(text))
    }

    return (
        <form ref={form} className="contact-form" onSubmit={submit}>
            
            <input 
                type="text"
                id="name"
                name="message[name]"
                value={message.name}
                placeholder="Name"
                onChange={e => setMsg({ ...message, name: e.target.value })} />
            
            <input 
                type="email"
                id="email"
                name="message[email]"
                value={message.email}
                placeholder="email"
                onChange={e => setMsg({ ...message, email: e.target.value })}/><br />
            <textarea                                      
                    name="message[content]"
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