//Importing methods
import React from "react";

import { Footer } from "../Footer/Footer";


//Importing styles
import "./Rules.scss"

//Creating Rules container
const Rules = props => (
    <div className="rules">
        <h2 className="rules__header">Rules</h2>
        <ul className="rules__list">
            <li className="rules__item">
                <p className="rules__text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hac fames vestibulum, hendrerit tincidunt dapibus est velit aliquam nisl ac praesent, at sociis cubilia posuere neque justo ante nullam arcu.
                </p>
            </li>
            <li className="rules__item">
                <p className="rules__text">
                Et nisl lacinia senectus suscipit aenean semper, maecenas accumsan dignissim viverra dis.
                </p>
            </li>
            <li className="rules__item">
                <p className="rules__text">
                Enim elementum ante pretium quam metus aliquet porta, per aptent nisl egestas parturient tempus primis, eget ultrices libero lacus sem fames.
                </p>
            </li>
            <li className="rules__item">
                <p className="rules__text">
                Elit porttitor integer aliquam scelerisque litora tortor ante massa diam accumsan fusce vitae sapien ipsum pulvinar, sem feugiat nullam eros potenti torquent a lacinia blandit leo eleifend lorem nisi.
                </p>
            </li>
            <li className="rules__item">
                <p className="rules__text">
                Condimentum in dictum nisi lacus imperdiet nullam a sodales habitant lobortis, dis sit lacinia interdum turpis aenean ridiculus odio tincidunt fringilla, justo faucibus nam ornare amet luctus ante hac fusce.
                </p>
            </li>
            <li className="rules__item">
                <p className="rules__text">
                Sodales egestas proin dictum eget curae, molestie rutrum cubilia.
                </p>
            </li>
            <li className="rules__item">
                <p className="rules__text">
                Viverra porttitor et quam fames orci dictum inceptos lorem, eleifend augue diam in ultrices mi.
                </p>
            </li>
            <li className="rules__item">
                <p className="rules__text">
                Feugiat vel vitae interdum eros egestas habitant torquent orci semper bibendum nam, sed dui suscipit taciti nascetur cras ante condimentum elit viverra.
                </p>
            </li>
        </ul>
    </div>
)

export default Rules