//Importing methods
import React from "react";

import "./Pagination.scss";

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
                <button onClick={() => this.handleClick(0)}>first</button>
                {
                    Array.from(Array(this.props.pagesAmount)).map((id, index) => {
                        let currentPageStyle = this.props.currentPage === index ? "current-page" : "inactive-page";
                        return (
                            <button
                                key={index}
                                onClick={() => this.handleClick(index)}
                                className={currentPageStyle}
                            >
                                {index + 1}
                            </button>
                        )
                    })
                }
                <button onClick={() => this.handleClick(this.props.pagesAmount - 1)}>last</button>
            </div>
        )
    }
}

export default Pagination;