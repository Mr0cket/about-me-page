import React from 'react';

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
                        <button onClick={this.closeModal}>Close</button>
                        <form className="contact-form"action="/post">
                            <label htmlFor="name">Your name: </label>
                            <input type="text"
                                id="name"
                                name="name"
                                value={this.state.name}
                                placeholder="Bob"
                                onChange={this.handleChange} />
                            <label htmlFor='email'>Email: </label>
                            <input type="email"
                                id="email"
                                name="email"
                                value={this.state.email}
                                placeholder="myaddress@..."
                                onChange={this.handleChange} /><br />
                            <textarea rows="7" 
                                    cols="60" 
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

export default ModalForm;