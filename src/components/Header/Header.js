//Importing methods
import React from "react";

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
            <div className="header">
                <h1 className="header__title"><span className="header__span">Vinyl</span>St<i class="header__icon fas fa-compact-disc"></i>re</h1>
                <Searchbar />
                <Navigation />
            </div>
        )
    }
}