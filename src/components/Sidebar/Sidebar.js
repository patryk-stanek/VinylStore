//Importing methods
import React from "react";

//Sidebar component
export class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>Sort by:</span>
                <ul>
                    <li>Name A-Z</li>
                    <li>Name Z-A</li>
                    <li>Price low-high</li>
                    <li>Price high-low</li>
                </ul>
            </div>
        )
    }
}