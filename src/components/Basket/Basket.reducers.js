//Importing actions
import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    DECREASE_PRODUCT_AMOUNT,
    CLEAR_BASKET
} from "./Basket.actions";

//Defining inital state
const initialState = {
    basket: [],
    totalCost: 0,
    totalItems: 0
};

//Creating reducers
export default function basketReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_BASKET:
            //Converting price to simple number
            const costAdded = parseFloat(Number(action.product.price.replace(/[^0-9.]+/g,"")));
            //Defining new total cost of products in the basket
            const costAfterAdd = (state.totalCost * 100 + costAdded * 100) / 100;
            
            //If the product's already in the basket only change the amount and total price
            for (let i=0; i<state.basket.length; i++) {
                if(state.basket[i].name === action.product.name) {
                    state.basket[i].amount++;
                    return {
                        ...state,
                        totalCost: costAfterAdd,
                        totalItems: state.totalItems + 1
                    };
                }
            }

            const product = action.product;
            product.amount = action.amount;

            return {
                ...state,
                basket: [...state.basket, product],
                totalCost: costAfterAdd,
                totalItems: state.totalItems + 1
            }

        case REMOVE_FROM_BASKET:
            //Filtering chosen product to remove from basket
            const stateAfterRemove = state.basket.filter(value => value.id !== action.product.id);
            //Converting price and removing it from total cost
            const costRemoved = parseFloat(Number(action.product.price.replace(/[^0-9.]+/g,"")));
            const costAfterRemove = state.totalCost - (costRemoved * action.product.amount);
            //Calculating new total items amount
            const itemsAfterRemove = state.totalItems - action.product.amount;

            return {
                ...state,
                basket: stateAfterRemove,
                totalCost: costAfterRemove,
                totalItems: itemsAfterRemove
            };

        case DECREASE_PRODUCT_AMOUNT:
            //Converting price
            const costDecreased = parseFloat(Number(action.product.price.replace(/[^0-9.]+/g,"")));
            //Filtering chosen product
            const stateAfterDecrease = state.basket.filter(value => value.id !== action.product.id)

            //Loop to find chosen product and decrease it's amount and total price of products
            for (let i=0; i<state.basket.length; i++) {
                if(state.basket[i].name === action.product.name && action.product.amount > 1) {
                    state.basket[i].amount--;

                    return {
                        ...state,
                        totalCost: state.totalCost - costDecreased,
                        totalItems: state.totalItems - 1
                    };
                //If the product amount is equal 1, product is completly removed from the basket
                } else if (state.basket[i].name === action.product.name && action.product.amount === 1){
                    state.basket[i].amount--;

                    return {
                        ...state,
                        basket: stateAfterDecrease,
                        totalCost: parseFloat(state.totalCost - costDecreased).toFixed(2),
                        totalItems: state.totalItems - 1
                    };
                }
            }

        case CLEAR_BASKET:
            //Clearing baskek
            return {
                basket: [],
                totalCost: 0,
                totalItems: 0
            };

        default:
            return state;
    }
}