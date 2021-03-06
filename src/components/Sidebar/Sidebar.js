//Importing methods
import React from "react";
import { connect } from "react-redux"

//Importing actions for Searchbar states
import {
    sortProductsByName,
    sortProductsByArtist,
    sortProductsByPrice,
    sortProductsById } from "../Product/Product.actions";

//Importing styles
import "./Sidebar.scss";

//Sidebar component
class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: ""
        };

        this.handleSortByName = this.handleSortByName.bind(this);
        this.handleSortByArtist = this.handleSortByArtist.bind(this);
        this.handleSortByPrice = this.handleSortByPrice.bind(this);
        this.handleRecommended = this.handleRecommended.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }
    
    componentWillMount() {
        this.setState({
            selectedOption: this.props.sortingOption
        })
        if (this.props.sortingOption === "sortById") {
            this.props.sortProductsById();
        }
        this.props.handleSortingChanges();
    }
    
    handleSortByName(option) {
        this.props.sortProductsByName(option);
        this.props.handleSortingChanges();
    }

    handleSortByArtist(option) {
        this.props.sortProductsByArtist(option);
        this.props.handleSortingChanges();
        
    }

    handleSortByPrice(option) {
        this.props.sortProductsByPrice(option);
        this.props.handleSortingChanges();
    }

    handleRecommended() {
        this.props.sortProductsById();
        this.props.handleSortingChanges();
    }

    handleOptionChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    render() {
        return (
            <div className="sidebar">
                <span className="sidebar__title">sort by</span>
                <form>
                    <div className="sidebar__item">
                        <input 
                            type="radio"
                            id="option-button1"
                            value="sortById"
                            checked={this.state.selectedOption === "sortById"}
                            onChange={() => this.handleRecommended()}
                            onClick={this.handleOptionChange}
                            className="sidebar__input"
                        />
                        <label htmlFor="option-button1" className="sidebar__button">
                            Recommended
                        </label>
                    </div>
                    <div className="sidebar__item">
                        <input 
                            type="radio"
                            id="option-button2"
                            value="sortByNameAscending"
                            checked={this.state.selectedOption === "sortByNameAscending"}
                            onChange={() => this.handleSortByName(1)}
                            onClick={this.handleOptionChange}
                            className="sidebar__input"
                        />
                        <label htmlFor="option-button2" className="sidebar__button">
                            Sort by album name
                        </label>
                    </div>
                    <div className="sidebar__item">
                        <input 
                            type="radio"
                            id="option-button3"
                            value="sortByArtistAscending"
                            checked={this.state.selectedOption === "sortByArtistAscending"}
                            onChange={() => this.handleSortByArtist(1)}
                            onClick={this.handleOptionChange}
                            className="sidebar__input"
                        />
                        <label htmlFor="option-button3" className="sidebar__button">
                            Sort by artist
                        </label>
                    </div>
                    <div className="sidebar__item">
                        <input 
                            type="radio"
                            id="option-button4"
                            value="sortByPriceAscending"
                            checked={this.state.selectedOption === "sortByPriceAscending"}
                            onChange={() => this.handleSortByPrice(1)}
                            onClick={this.handleOptionChange}
                            className="sidebar__input"
                        />
                        <label htmlFor="option-button4" className="sidebar__button">
                            Sort by lowest price
                        </label>
                    </div>
                    <div className="sidebar__item">
                        <input 
                            type="radio"
                            id="option-button5"
                            value="sortByPriceDescending"
                            checked={this.state.selectedOption === "sortByPriceDescending"}
                            onChange={() => this.handleSortByPrice(0)}
                            onClick={this.handleOptionChange}
                            className="sidebar__input"
                        />
                        <label htmlFor="option-button5" className="sidebar__button">
                            Sort by highest price
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

//Mapping state, dispatch and connecting it with component
const mapStateToProps = store => ({
    visibleProducts: store.productsReducer.visibleProducts,
    sortingOption: store.productsReducer.sortingOption
});

const mapDispatchToProps = dispatch => ({
    sortProductsByName: option => dispatch(sortProductsByName(option)),
    sortProductsByArtist: option => dispatch(sortProductsByArtist(option)),
    sortProductsByPrice: option => dispatch(sortProductsByPrice(option)),
    sortProductsById: () => dispatch(sortProductsById())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Sidebar);