import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    DECREASE_PRODUCT_AMOUNT,
    CLEAR_BASKET
} from "./Basket.actions";

const initialState = {
    basket: [],
    totalCost: 0,
    totalItems: 0
};

export default function basketReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_BASKET:
            const costAdded = parseFloat(Number(action.product.price.replace(/[^0-9.]+/g,"")));
            const costAfterAdd = (state.totalCost * 100 + costAdded * 100) / 100;
            
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
            const stateAfterRemove = state.basket.filter(value => value.id !== action.product.id);
            const costRemoved = parseFloat(Number(action.product.price.replace(/[^0-9.]+/g,"")));
            const costAfterRemove = state.totalCost - (costRemoved * action.product.amount);
            const itemsAfterRemove = state.totalItems - action.product.amount;

            return {
                ...state,
                basket: stateAfterRemove,
                totalCost: costAfterRemove,
                totalItems: itemsAfterRemove
            };

        case DECREASE_PRODUCT_AMOUNT:
            const costDecreased = parseFloat(Number(action.product.price.replace(/[^0-9.]+/g,"")));
            const stateAfterDecrease = state.basket.filter(value => value.id !== action.product.id)

            for (let i=0; i<state.basket.length; i++) {
                if(state.basket[i].name === action.product.name && action.product.amount > 1) {
                    state.basket[i].amount--;

                    return {
                        ...state,
                        totalCost: state.totalCost - costDecreased,
                        totalItems: state.totalItems - 1
                    };
                    
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
            return {
                basket: [],
                totalCost: 0,
                totalItems: 0
            };

        default:
            return state;
    }
}