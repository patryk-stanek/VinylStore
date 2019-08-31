//Importing methods
import React from "react";
import { Link } from "react-router-dom";

//Importing component
import Product from "./Product";

//ProductsList component
const ProductsList = props => (
    <div className="product-list">
        {props.products.map(product => {
                //creating product divs from array
                return (
                    <div className="product-list__single" key={product.id}>
                        <Link to={"catalog/product/" + product.id} style={{textDecoration: "none"}}>
                            <Product product={product} />
                        </Link>
                    </div>
                )
            })}
    </div>
);

export default ProductsList;