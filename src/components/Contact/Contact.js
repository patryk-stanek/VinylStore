//Importing methods
import React from "react";
import * as emailjs from "emailjs-com";

//Importing components
import { ModalBox } from "../ModalBox/ModalBox";

//Import styles
import "./Contact.scss";

export class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            modal: false,
            modalDescription: "Thank You. We will contact You soon!"
        };
    }

    componentDidMount() {
        this.setState({
            modal: false
        })
    }

    handleInputChange(event) {
        event.preventDefault();

        const target = event.target;
        const name = target.id;
        const value = target.value;

        this.setState({[name]: value})
    }

    handleSendMessage(event) {
        event.preventDefault();

        const templateParams = {
            from: this.state.name,
            subject: this.state.subject,
            message: this.state.message
        };

        emailjs.send("gmail", "template_QZzvx9yA", templateParams, "user_CoeXiqn6N18KnUJWx2Lyh")
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
            }, function(error) {
                console.log("FAILED...", error);
            });

        this.setState({
            name: "",
            email: "",
            subject: "",
            message: "",
            modal: true
        })
    };

    //closing modal with information
    handleClosingModal() {
        this.setState({
            modal: false
        })
    };

    render() {
        //condition for showing ModalBox with custom text
        const modalBoxConfirmation = this.state.modal === true ? <ModalBox handleClosingModal={this.handleClosingModal.bind(this)} description={this.state.modalDescription}/> : "";

        return (
            <div className="contact">
                { modalBoxConfirmation }
                <h1 className="contact__header">Contact us!</h1>
                <div className="contact__container">
                    {/* Contact form with method onSubmit*/}
                    <form className="contact__box" onSubmit={this.handleSendMessage.bind(this)}>
                        <div className="contact__line">
                            {/* Input for name */}
                            <input
                                className="contact__input contact__input--half"
                                type="text"
                                id="name"
                                value={this.state.name}
                                placeholder="Your name"
                                minLength="3"
                                required
                                onChange={this.handleInputChange.bind(this)}
                            />
                            {/* Input for email */}
                            <input
                                className="contact__input contact__input--half"
                                type="email"
                                id="email"
                                value={this.state.email}
                                placeholder="Your email"
                                minLength="3"
                                required
                                onChange={this.handleInputChange.bind(this)}
                            />
                        </div>
                        {/* Input for subject */}
                        <input
                            className="contact__input contact__input--subject"
                            type="text"
                            id="subject"
                            value={this.state.subject}
                            placeholder="Subject"
                            minLength="3"
                            required
                            onChange={this.handleInputChange.bind(this)}
                        />
                        {/* Input for message */}
                        <textarea 
                            className="contact__input contact__input--textarea"
                            id="message"
                            value={this.state.message}
                            placeholder="Your message"
                            rows="10"
                            onChange={this.handleInputChange.bind(this)}
                        ></textarea>
                        {/* Submit button */}
                        <button className="contact__button" type="submit">Submit!</button>
                    </form>
                    {/* Box with basic information */}
                    <div className="contact__box">
                        <div className="contact__information">
                            <span className="contact__part">
                                Street
                                <span className="contact__main">
                                    3184 Par Drive
                                </span>
                            </span>
                            <span className="contact__part">
                                City
                                <span className="contact__main">
                                    Los Angeles
                                </span>
                            </span>
                            <span className="contact__part">
                                State
                                <span className="contact__main">
                                    California
                                </span>
                            </span>
                            <span className="contact__part">
                                Zip Code
                                <span className="contact__main">
                                    90017
                                </span>
                            </span>
                            <span className="contact__part">
                                Phone Number
                                <span className="contact__main">
                                    805-790-4742
                                </span>
                            </span>
                            <span className="contact__part">
                                E-Mail
                                <span className="contact__main">
                                    vinylstore@vs.com
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};