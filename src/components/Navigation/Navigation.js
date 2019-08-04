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
            <NavLink exact to="/basket" activeClassName="navigation__link--active" className="navigation__link">
                <BasketNavigationButton />
            </NavLink>
        </div>
    )
}

// class Navigation extends React.Component {

//     render() {
//         return (
//             <div className="navigation">
//                 <NavLink exact to="/" activeClassName="navigation__link--active" className="navigation__link">
//                     Home
//                 </NavLink>
//                 <NavLink exact to="/FAQ" activeClassName="navigation__link--active" className="navigation__link">
//                     FAQ
//                 </NavLink>
//                 <NavLink exact to="/rules" activeClassName="navigation__link--active" className="navigation__link">
//                     Rules
//                 </NavLink>
//                 <NavLink exact to="/contact" activeClassName="navigation__link--active" className="navigation__link">
//                     Contact
//                 </NavLink>
//                 <NavLink exact to="/basket" activeClassName="navigation__link--active" className="navigation__link">
//                     <i className="fas fa-shopping-bag"></i>
//                     <span>{this.props.totalItems}</span>
//                     <span>/</span>
//                     <span>€{parseFloat(this.props.totalCost).toFixed(2)}</span>
//                 </NavLink>
//             </div>
//         )
//     }
// }

// //Maping global state
// const mapStateToProps = store => ({
//     totalCost: store.basketReducer.totalCost,
//     totalItems: store.basketReducer.totalItems
// });

// //Connecting state method with component
// export default connect(mapStateToProps)(Navigation);