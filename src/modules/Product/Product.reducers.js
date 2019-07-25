import {
    GET_PRODUCT,
    GET_PRODUCTS,
    SEARCH_PRODUCTS,
    SET_CATEGORY
} from './Product.actions';

import productsData from '../../utils/products.json';

const initialState = {
    products: productsData,
    selectedProduct: {},
    visibleProducts: []
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT:
            const selectedProduct = state.products.find(product => product.id === parseInt(action.id));
            return Object.assign({}, state, {selectedProduct});

        case GET_PRODUCTS:
            return Object.assign({}, state, {product: state.products});

        case SEARCH_PRODUCTS:
            const foundProducts = state.products.filter(product => product.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {visibleProducts: foundProducts});

        case SET_CATEGORY:
            const categoryProducts = state.products.filter(product => product.category === action.name);
            return Object.assign({}, state, {visibleProducts: categoryProducts});

        default:
            return state;
    }
}