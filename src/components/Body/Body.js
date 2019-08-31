//Importing methods
import React from "react";

import PageTransition from 'react-router-page-transition';

//Importing components
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

//Importing styles
import "./Body.scss";

//Body component
export class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}