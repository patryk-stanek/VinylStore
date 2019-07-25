import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

export const Navigation = props => {
    return (
        <div>
            <NavLink exact to='/' activeClassName="active">
                Home
            </NavLink>
            <NavLink exact to='/basket' activeClassName="active">
                Basket
            </NavLink>
            <NavLink exact to='/contact' activeClassName='active'>
                Contact
            </NavLink>
        </div>
    )
}