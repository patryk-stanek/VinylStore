//Importing methods
import React from "react";
import * as emailjs from "emailjs-com";

//Import styles
import "./Contact.scss"

export class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.id;
        const value = target.value;

        this.setState({[name]: value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const templateParams = {
            from: this.state.name,
            subject: this.state.subject,
            message: this.state.message
        };
        emailjs.send("gmail", "template_QZzvx9yA", templateParams, "user_CoeXiqn6N18KnUJWx2Lyh")
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
    }
    render() {
        return (
            <div className="contact">
                <h1 className="contact__header">Contact us!</h1>
                <div className="contact__container">
                    <form className="contact__box" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="contact__line">
                            <input
                                className="contact__input contact__input--half"
                                type="text"
                                id="name"
                                placeholder="Your name"
                                minLength="3"
                                required
                                onChange={this.handleInputChange.bind(this)}
                            />
                            <input
                                className="contact__input contact__input--half"
                                type="email"
                                id="email"
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
                            placeholder="Subject"
                            minLength="3"
                            required
                            onChange={this.handleInputChange.bind(this)}
                        />
                        <textarea 
                            className="contact__input contact__input--textarea"
                            id="message"
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
}

/*
<div class="contact__box u-margin-top-huge">
<div class="contact__left">
    <input type="text" id="name" placeholder="Your name *" minlength="3" required>
    <input type="email" id="email" placeholder="Your e-mail *" minlength="3" required>
    <input type="text" id="subject" placeholder="Subject" minlength="3" required>
</div>
<div class="contact__right">
    <textarea placeholder="Your message *"></textarea>
</div>
</div>
<button type="submit" class="btn u-margin-top-medium">Send message</button>
*/