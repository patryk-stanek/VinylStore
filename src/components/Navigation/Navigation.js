//Importing methods
import React from "react";
import { NavLink } from "react-router-dom";

//importing styles
import "./Navigation.scss";

//Navigation component
export const Navigation = props => {
    return (
        <div>
            <NavLink exact to="/" activeClassName="active">
                Home
            </NavLink>
            <NavLink exact to="/catalog" activeClassName="active">
                Catalog
            </NavLink>
            <NavLink exact to="/basket" activeClassName="active">
                Basket
            </NavLink>
            <NavLink exact to="/contact" activeClassName="active">
                Contact
            </NavLink>
        </div>
    )
}