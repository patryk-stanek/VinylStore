//Importing methods
import React from "react";

//Importing components
import ProductsList from "./ProductsList";

//ProductsListContainer component
class ProductsListContainer extends React.Component {
    render() {
        if (this.props.visibleProducts !== undefined) {
            return (
                <div>
                    <ProductsList products={this.props.visibleProducts} />
                </div>
            )
        } else {
            return(
                <div>
                    <span>loading</span>
                </div>
            )
        }
    }
}

export default ProductsListContainer;