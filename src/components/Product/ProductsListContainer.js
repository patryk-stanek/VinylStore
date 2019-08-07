//Importing methods
import React from "react";

//Importing components
import ProductsList from "./ProductsList";

//ProductsListContainer component
class ProductsListContainer extends React.Component {
    render() {
        if (this.props.visibleProducts !== undefined) {
            return (
                <React.Fragment>
                    <ProductsList products={this.props.visibleProducts} />
                </React.Fragment>
            )
        } else {
            return(
                <React.Fragment>
                    <span>loading</span>
                </React.Fragment>
            )
        }
    }
}

export default ProductsListContainer;