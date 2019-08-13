//Importing methods
import React from "react";
import { NavLink } from "react-router-dom";

import BasketNavigationButton from "../BasketNavigationButton/BasketNavigationButton";

//importing styles
import "./Navigation.scss";

//Navigation component
export const Navigation = props => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="navigation__link--active" className="navigation__link">
                Home
            </NavLink>
            <NavLink exact to="/FAQ" activeClassName="navigation__link--active" className="navigation__link">
                FAQ
            </NavLink>
            <NavLink exact to="/rules" activeClassName="navigation__link--active" className="navigation__link">
                Rules
            </NavLink>
            <NavLink exact to="/contact" activeClassName="navigation__link--active" className="navigation__link">
                Contact
            </NavLink>
            <NavLink exact to="/cart" activeClassName="navigation__link--basket-active" className="navigation__link navigation__basket">
                <BasketNavigationButton />
            </NavLink>
        </div>
    )
}