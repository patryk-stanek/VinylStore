//Importing methods
import React from "react";

//Importing styles
import "./Pagination.scss";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

//Pagination component
class Pagination extends React.Component {

    render() {
        //Condition for previous page
        let prevPage = this.props.currentPage >= 1 ? this.props.currentPage - 1 : this.props.currentPage;
        //Condition for next page
        let nextPage = this.props.currentPage <= this.props.pagesAmount ? this.props.currentPage + 1 : this.props.currentPage;
        return (
            <div>
                <button onClick={() => this.props.handleChangePage(prevPage)}><i class="fas fa-chevron-left"></i></button>
                {
                    Array.from(Array(this.props.pagesAmount)).map((id, index) => {
                        //Condition for setting style for active page
                        let currentPageStyle = this.props.currentPage === index ? "current-page" : "inactive-page";
                        return (
                            <button
                                key={index}
                                onClick={() => this.props.handleChangePage(index)}
                                className={currentPageStyle}
                            >
                                {index + 1}
                            </button>
                        )
                    })
                }
                <button onClick={() => this.props.handleChangePage(nextPage)}><i class="fas fa-chevron-right"></i></button>
            </div>
        )
    }
}

export default Pagination;