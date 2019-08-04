//Importing methods
import React from "react";

//Importing component
import { Navigation } from "../Navigation/Navigation";
import Searchbar from "../Searchbar/Searchbar";

//Importing styles
import "./Header.scss";

//Header component
export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1 className="header__title">VinylStore</h1>
                <Searchbar />
                <Navigation />
            </div>
        )
    }
}