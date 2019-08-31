//Importing methods
import React from "react";

//Importing styles
import "./Pagination.scss";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

//Pagination component
class Pagination extends React.Component {

    renderPrevPageButton() {
        if(this.props.currentPage >= 1) {
            return (
                <button
                    onClick={() => this.props.handleChangePage(this.props.currentPage - 1)}
                    className="pagination__button pagination__button--active"
                    aria-label="pagination__button-prev"
                >
                    <i className="pagination__icon fas fa-chevron-left"></i>
                </button>
            )
        } else {
            return (
                <button
                    disabled
                    className="pagination__button pagination__button--inactive"
                    aria-label="pagination__button-prev"
                >
                    <i className="pagination__icon fas fa-chevron-left"></i>
                </button>
            )
        }
    }

    renderNextPageButton() {
        if(this.props.currentPage === this.props.pagesAmount - 1) {
            return (
                <button
                    disabled
                    className="pagination__button pagination__button--inactive"
                    aria-label="pagination__button-next"
                >
                    <i className="pagination__icon fas fa-chevron-right"></i>
                </button>
            )
        } else {
            return (
                <button 
                    onClick={() => this.props.handleChangePage(this.props.currentPage + 1)}
                    className="pagination__button pagination__button--active"
                    aria-label="pagination__button-next"
                >
                    <i className="pagination__icon fas fa-chevron-right"></i>
                </button>
            )
        }
    }

    render() {

        //Pages loop and array
        const pages = [];
        for (let i=0; i<this.props.pagesAmount; i++) {
            const currentPageStyle = this.props.currentPage === i ? "pagination__button--active" : "pagination__button--inactive";
            pages.push(
                <button
                    key={i}
                    onClick={() => this.props.handleChangePage(i)}
                    className={"pagination__button " + currentPageStyle}
                    aria-label={`pagination__button-${i}`}
                >
                    {i + 1}
                </button>
            )
        }
        
        return (
            <div className="pagination">
                {this.renderPrevPageButton()}
                {pages}
                {this.renderNextPageButton()}
            </div>
        )
    }
}

export default Pagination;