//Importing methods
import React from "react";
import { connect } from "react-redux";

//Importing components
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductsListContainer from "../../components/Product/ProductsListContainer";
import { Pagination } from "../../components/Pagination/Pagination";

//Importing styles

import "./Home.scss";

//Importing actions for Searchbar states
import { getProducts } from "../../components/Product/Product.actions";

//Home component
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getProducts());
    }
    
    handleUpdate() {
        this.forceUpdate();
    }
    
    render() {
        return (
            <div className="home">
                <Sidebar visibleProducts={this.props.visibleProducts} handleUpdate={this.handleUpdate.bind(this)}/>
                <div className="home__container">
                    <ProductsListContainer visibleProducts={this.props.visibleProducts} />
                    <Pagination />
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