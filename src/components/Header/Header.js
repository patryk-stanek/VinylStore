//Importing methods
import React from "react";
import { Link } from "react-router-dom"

//Importing component
import { Navigation } from "../Navigation/Navigation";
import Searchbar from "../Searchbar/Searchbar";

//Importing styles
import "./Header.scss";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

//Header component
export class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Link to="/" className="header__link">
                    <h1 className="header__title">
                        <span className="header__span">Vinyl</span>St<i className="header__icon fas fa-compact-disc"></i>re
                    </h1>
                </Link>
                <Searchbar />
                <Navigation />
            </header>
        )
    }
}