//Importing methods
import React from "react";
import { connect } from "react-redux";

//Importing components
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductsListContainer from "../../components/Product/ProductsListContainer";
import Pagination from "../../components/Pagination/Pagination";

//Importing styles

import "./Home.scss";

//Importing actions for Searchbar states
import { getProducts } from "../../components/Product/Product.actions";

//Home component
class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productsPage: [],
            currentPage: 0
        }

        this.console = this.console.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(getProducts());
        // this.state.currentPage = 0;
        this.setState({currentPage: 0})
    }
    
    handleUpdate() {
        // this.state.productsPage = [];
        this.setState({productsPage: []})
        // this.state.currentPage = 0;
        this.setState({currentPage: 0})
        this.forceUpdate();
    }

    handleChangePage(page) {
        // this.state.productsPage = [];
        this.setState({productsPage: []})        
        // this.state.currentPage = page;
        this.setState({currentPage: page})
        this.forceUpdate();
    }

    mapPropsToArray() {
        let state = this.state.productsPage;
        const props = this.props.visibleProducts;
        const size = 6;
        let newArray;

        for (let i=0; i<this.props.visibleProducts.length; i++) {
            newArray = state[state.length - 1];
            if (!newArray || newArray.length === size) {
                state.push([props[i]]);
            } else {
                newArray.push(props[i]);
            }
        }
        return newArray;
    }

    console() {
        console.log(this.state.productsPage);
        console.log(this.props.visibleProducts);
    }
    
    render() {
        this.mapPropsToArray();
        return (
            <div className="home">
                <Sidebar visibleProducts={this.props.visibleProducts} handleUpdate={this.handleUpdate.bind(this)}/>
                <div className="home__container">
                    <button onClick={this.console}>x</button>
                    <ProductsListContainer visibleProducts={this.state.productsPage[this.state.currentPage]} />
                    <Pagination handleChangePage={this.handleChangePage}/>
                </div>
            </div>
        )
    }
}

//Maping global state
const mapStateToProps = store => ({
    visibleProducts: store.productsReducer.visibleProducts
});

//Connecting state method with component
export default connect(mapStateToProps)(Home);