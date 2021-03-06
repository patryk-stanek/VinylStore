//Importing methods
import React from "react";

//Importing components
import ProductsList from "./ProductsList";

//ProductsListContainer component
class ProductsListContainer extends React.Component {
    render() {
        //if there's not product in props show information
        if (this.props.visibleProducts !== undefined) {
            return (
                <ProductsList products={this.props.visibleProducts} />
            )
        } else {
            return(
                <span>Loading...</span>
            )
        }
    }
};

export default ProductsListContainer;