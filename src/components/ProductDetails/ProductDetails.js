//Import react from react
import React from "react";

//Import components
import BasketAddButton from "../BasketAddButton/BasketAddButton";
import ProductDetalsTracklist from "./ProductDetailsTracklist";

//Import styles
import "./ProductDetails.scss";

// ProductDetails component
const ProductDetails = props => {
    //variables required for simple responsive image managament
    const imageBig = `../../images/covers/${props.product.id}/cover-l.jpg`;
    const imageMedium = `../../images/covers/${props.product.id}/cover-m.jpg`;
    const imageUrl = window.innerWidth >= 991 ? imageBig : imageMedium;

    return (
        <div className="details">
            <div className="details__cover">
                <img
                    src={imageUrl}
                    alt={props.product.name + "_cover"}
                    className="details__image"
                />
            </div>
            <div className="details__container">
                <div className="details__info">
                    <span className="details__category">{props.product.category}</span>
                    <span className="details__year">{props.product.year}</span>
                </div>
                <h2 className="details__name">
                    {props.product.name}
                </h2>
                <h3 className="details__artist">
                    {props.product.artist}
                </h3>
                <div className="details__box">
                    <span className="details__price">
                        {props.product.price}
                    </span>
                    <BasketAddButton product={props.product}/>
                </div>
                <ProductDetalsTracklist tracks={props.product.tracks}/>
            </div>
        </div>
    )
}

export default ProductDetails;