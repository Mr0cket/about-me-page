import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';


class ModalForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name : "",
            email : "",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(input) {
        if (input.target.id === "name") {
            this.setState({name: input.target.value});
        } else if (input.target.id === "email"){
            this.setState({email: input.target.value})
        }
    }
    closeModal() {
        var modal = document.querySelector("#modal");
        var modalOverlay = document.querySelector("#modal-overlay");    

        modal.classList.toggle("closed")
        modalOverlay.classList.toggle("closed")
    }
    render() {
        return (
            <div>
                <div className="modal closed" id="modal" style={this.state.formStyle}>
                    <div className="modal-guts">
                        <a onClick={this.closeModal} href=""><FontAwesomeIcon icon={faTimes}/></a>
                        <form className="contact-form">
                            
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
                                onChange={this.handleChange} /><br />
                            <textarea                                      
                                    name="message"
                                    placeholder="Collab Bro...?">
                            </textarea>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <div class="modal-overlay closed" id="modal-overlay">
                </div>
            </div>
        );
    }
}

/* <label htmlFor="name">Name </label>   <label htmlFor='email'>Email </label>  */
export default ModalForm;