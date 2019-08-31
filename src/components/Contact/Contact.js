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
        //setting modal to false to prevent problems
        this.setState({
            modal: false
        })
    }

    handleInputChange(event) {
        event.preventDefault();

        //text value variables
        const target = event.target;
        const name = target.id;
        const value = target.value;

        //setting entered text in state for submiting
        this.setState({[name]: value})
    }

    handleSubmit(event) {
        event.preventDefault();

        //acquiring state values 
        const templateParams = {
            from: this.state.name,
            subject: this.state.subject,
            message: this.state.message
        };

        //sending mail with values in variable
        emailjs.send("gmail", "template_QZzvx9yA", templateParams, "user_CoeXiqn6N18KnUJWx2Lyh")
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
            }, function(error) {
                console.log("FAILED...", error);
            });

        //reseting values in state
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: "",
            modal: true
        })
    };

    //closing modal with information
    handleModalClose() {
        this.setState({
            modal: false
        })
    };

    render() {
        //condition for showing ModalBox with custom text
        const modalBox = this.state.modal === true ? <ModalBox handleModalClose={this.handleModalClose.bind(this)} description={this.state.modalDescription}/> : "";

        return (
            <div className="contact">
                {modalBox}
                <h1 className="contact__header">Contact us!</h1>
                <div className="contact__container">
                    <form className="contact__box" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="contact__line">
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
                        <textarea 
                            className="contact__input contact__input--textarea"
                            id="message"
                            value={this.state.message}
                            placeholder="Your message"
                            rows="10"
                            onChange={this.handleInputChange.bind(this)}
                        ></textarea>
                        <button className="contact__button" type="submit">Submit!</button>
                    </form>
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