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
            selectedOption: "option1"
        }

        this.handleSortByName = this.handleSortByName.bind(this);
        this.handleSortByArtist = this.handleSortByArtist.bind(this);
        this.handleSortByPrice = this.handleSortByPrice.bind(this);

        this.handleRecommended = this.handleRecommended.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    componentWillMount() {
        this.props.sortProductsById();
        this.props.handleUpdate();
    }

    //Dispatching sorting products by chosen option and updating view
    handleSortByName(option) {
        this.props.sortProductsByName(option);
        this.props.handleUpdate();
    }

    //Dispatching sorting products by chosen option and updating view
    handleSortByArtist(option) {
        this.props.sortProductsByArtist(option);
        this.props.handleUpdate();
    }

    //Dispatching sorting products by chosen option and updating view
    handleSortByPrice(option) {
        this.props.sortProductsByPrice(option);
        this.props.handleUpdate();
    }

    handleRecommended() {
        this.props.sortProductsById();
        this.props.handleUpdate();
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
                            value="option1"
                            checked={this.state.selectedOption === "option1"}
                            onChange={() => this.handleRecommended()}
                            onClick={this.handleOptionChange}
                            className="sidebar__input"
                        />
                        <label for="option-button1" className="sidebar__button">
                            Recommended
                        </label>
                    </div>
                    <div className="sidebar__item">
                        <input 
                            type="radio"
                            id="option-button2"
                            value="option2"
                            checked={this.state.selectedOption === "option2"}
                            onChange={() => this.handleSortByName(1)}
                            onClick={this.handleOptionChange}
                            className="sidebar__input"
                        />
                        <label for="option-button2" className="sidebar__button">
                            Sort by album name
                        </label>
                    </div>
                    <div className="sidebar__item">
                        <input 
                            type="radio"
                            id="option-button3"
                            value="option3"
                            checked={this.state.selectedOption === "option3"}
                            onChange={() => this.handleSortByArtist(1)}
                            onClick={this.handleOptionChange}
                            className="sidebar__input"
                        />
                        <label for="option-button3" className="sidebar__button">
                            Sort by artist
                        </label>
                    </div>
                    <div className="sidebar__item">
                        <input 
                            type="radio"
                            id="option-button4"
                            value="option4"
                            checked={this.state.selectedOption === "option4"}
                            onChange={() => this.handleSortByPrice(1)}
                            onClick={this.handleOptionChange}
                            className="sidebar__input"
                        />
                        <label for="option-button4" className="sidebar__button">
                            Sort by lowest price
                        </label>
                    </div>
                    <div className="sidebar__item">
                        <input 
                            type="radio"
                            id="option-button5"
                            value="option5"
                            checked={this.state.selectedOption === "option5"}
                            onChange={() => this.handleSortByPrice(0)}
                            onClick={this.handleOptionChange}
                            className="sidebar__input"
                        />
                        <label for="option-button5" className="sidebar__button">
                            Sort by highest price
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

//Maping global state
const mapStateToProps = store => ({
    visibleProducts: store.productsReducer.visibleProducts
});

const mapDispatchToProps = dispatch => ({
    sortProductsByName: option => dispatch(sortProductsByName(option)),
    sortProductsByArtist: option => dispatch(sortProductsByArtist(option)),
    sortProductsByPrice: option => dispatch(sortProductsByPrice(option)),
    sortProductsById: () => dispatch(sortProductsById())
})

//Connecting state method with component
export default connect(
    mapStateToProps,
    mapDispatchToProps)(Sidebar);