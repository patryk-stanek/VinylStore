//Importing actions
import {
    GET_PRODUCT,
    GET_PRODUCTS,
    SEARCH_PRODUCTS,
    SET_CATEGORY
} from './Product.actions';

//Importing .json database
import productsData from '../../utils/products.json';

//Setting initial state
const initialState = {
    products: productsData,
    selectedProduct: {},
    visibleProducts: []
}

//Creating reducers
export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT:
            //Finding object in database array by it's id
            const selectedProduct = state.products.find(product => product.id === parseInt(action.id));
            //Passing found object to new array
            return Object.assign({}, state, {selectedProduct});

        case GET_PRODUCTS:
            //Getting objects array from database file
            return Object.assign({}, state, {products: state.products});

        case SEARCH_PRODUCTS:
            //Filter objects in database array by it's name
            //Names in array as well as search term is converted to lower cases;
            const foundProducts = state.products.filter(product => product.name.toLowerCase().includes(action.searchText.toLowerCase()));
            //Passing found objects to new array
            return Object.assign({}, state, {visibleProducts: foundProducts});

        case SET_CATEGORY:
            //Filter objects in database array by chosen category
            const categoryProducts = state.products.filter(product => product.category === action.name);
            //Passing found object to new array
            return Object.assign({}, state, {visibleProducts: categoryProducts});

        default:
            return state;
    }
}