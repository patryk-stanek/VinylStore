//Importing methods
import React from "react";

//Pagination component
class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(page) {
        this.props.handleChangePage(page);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick(0)}>1</button>
                <button onClick={() => this.handleClick(1)}>2</button>
                <button onClick={() => this.handleClick(2)}>3</button>
            </div>
        )
    }
}

export default Pagination;