//Importing methods
import React from "react";
import { Link } from "react-router-dom";

//Importing component
import Product from "./Product";
import BasketAddButton from "../BasketAddButton/BasketAddButton";

//ProductsList component
const ProductsList = props => (
    <div className="product-list">
        {props.products.map(product => {
                return (
                    <div className="product-list__single" key={product.id}>
                        <BasketAddButton product={product}/>
                        <Link to={"catalog/product/" + product.id}>
                            <Product product={product} />
                        </Link>
                    </div>
                )
            })}
    </div>
)

export default ProductsList;