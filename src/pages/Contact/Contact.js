//Importing methods
import React from "react";

//Import styles
import "./Contact.scss"

//Contact component
// export class Contact extends React.Component {
//     render() {
//         return (
//             <div className="contact">
//                 <h2 className="contact__header">Contact us!</h2>
//                 <div className="contact__container">
//                     <form className="contact__form">
//                         <input type="text" placeholder="Name" />
//                         <input type="text" placeholder="E-Mail" />
//                         <input type="textarea" placeholder="Your message" />
//                         <input type="submit" />
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

export class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <h1 className="contact__header">Contact us!</h1>
                <div className="contact__container">
                    <div className="contact__box">
                        <div className="contact__line">
                            <input
                                className="contact__input contact__input--half"
                                type="text"
                                id="name"
                                placeholder="Your name"
                                minLength="3"
                                required
                            />
                            <input
                                className="contact__input contact__input--half"
                                type="email"
                                id="email"
                                placeholder="Your email"
                                minLength="3"
                                required
                            />
                        </div>
                        <input
                            className="contact__input contact__input--subject"
                            type="text"
                            id="subject"
                            placeholder="Subject"
                            minLength="3"
                            required
                        />
                        <textarea 
                            className="contact__input contact__input--textarea"
                            placeholder="Your message"
                            rows="10"
                        ></textarea>
                        <button className="contact__button" type="submit">Submit!</button>
                    </div>
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