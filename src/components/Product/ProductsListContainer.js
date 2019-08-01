//Importing methods
import React from "react";

//Importing components
import ProductsList from "./ProductsList";

//ProductsListContainer component
class ProductsListContainer extends React.Component {
    render() {
        return (
            <div>
                <ProductsList products={this.props.visibleProducts} />
            </div>
        )
    }
}

export default ProductsListContainer;