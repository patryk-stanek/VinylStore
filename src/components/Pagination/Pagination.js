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

        const pages = [];
        for (let i=0; i<this.props.pagesAmount; i++) {
            const currentPageStyle = this.props.currentPage === i ? "pagination__button--active" : "pagination__button--inactive";
            pages.push(
                <button
                    key={i}
                    onClick={() => this.props.handleChangePage(i)}
                    className={"pagination__button " + currentPageStyle}
                >
                    {i + 1}
                </button>
            )
        }
        
        return (
            <div className="pagination">
                <button
                    onClick={() => this.props.handleChangePage(prevPage)}
                    className="pagination__button"
                >
                    <i className="pagination__icon fas fa-chevron-left"></i>
                </button>
                {/* {
                    Array.from(Array(this.props.pagesAmount)).map((id, index) => {
                        //Condition for setting style for active page
                        const currentPageStyle = this.props.currentPage === index ? "pagination__button--active" : "pagination__button--inactive";
                        return (
                            <button
                                key={index}
                                onClick={() => this.props.handleChangePage(index)}
                                className={"pagination__button " + currentPageStyle}
                            >
                                {index + 1}
                            </button>
                        )
                    })
                } */}
                {pages}
                <button 
                    onClick={() => this.props.handleChangePage(nextPage)}
                    className="pagination__button"
                >
                    <i className="pagination__icon fas fa-chevron-right"></i>
                </button>
            </div>
        )
    }
}

export default Pagination;