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
                           className="link-button"
                            onClick={() => {
                                console.log('changing modalOpen state')
                                this.setState({modalOpen: false})}} 
                            href="">
                                <FontAwesomeIcon icon={faTimes}/>
                        </button>
                        <ContactForm 
                            closeModal={() => {
                                console.log('closeModal call from ContactForm submit()');
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

    // Will think about this in the morning!
    // Need to understand net::ERROR_CONNECTION_REFUSED .
    // most likely: problem with how the server responds to the client 'post' request.
    // Client may be expecting a specific response with a standard message and headers format.
function ContactForm(props) {

    //  [message: statefulVariable, setMsg: fn to update 'message' state.]
    let [message, setMsg] = useState(""); // setMsg similar to this.setState in class components.
    // useState : Returns a stateful value, and a function to update it.


    const form = useRef(null); // null = initial reference (ref) value of form.
    // useRef: returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
    

    const submit = function(e) {
        console.log('a message was submitted!')
        console.log(e)
        console.log('initiating post request to local server...')
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
        fetch('http://localhost:666/', { 
            method: 'POST', 
            body: data,
             headers: new Headers({
                'content-type': 'multipart/form-data'
            })
            } 
        )
            .then(res => {
                console.log(`we got a response!`)  
                console.log(res)
                })
                    .catch(reason => console.log(`there was a problem with request: ${reason}`))
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