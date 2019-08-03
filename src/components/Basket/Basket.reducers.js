import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    CLEAR_BASKET
} from "./Basket.actions";

const initialState = {
    basket: []
};

export default function basketReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_BASKET:
            const product = action.product;
            return {
                ...state,
                basket: [...state.basket, product]
            }

        case REMOVE_FROM_BASKET:
            const newState = state.basket.filter(value => value.id !== action.product);
            return {
                ...state,
                basket: newState
            };

        case CLEAR_BASKET:
            return {basket: []};

        default:
            return state;
    }
}