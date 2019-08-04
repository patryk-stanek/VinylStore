//Importing actions
import {
    GET_PRODUCT,
    GET_PRODUCTS,
    SEARCH_PRODUCTS,
    SORT_PRODUCTS_BY_NAME,
    SORT_PRODUCTS_BY_PRICE,
    SET_CATEGORY
} from "./Product.actions";

//Importing .json database
import productsData from "../../utils/products.json";

//Setting initial state
const initialState = {
    products: productsData,
    selectedProduct: {},
    searchedProducts: [],
    visibleProducts: [],
    sortedProducts: []
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
            return Object.assign({}, state, {visibleProducts: state.products});

        case SEARCH_PRODUCTS:
            //Filter objects in database array by it's name
            //Names in array as well as search term is converted to lower cases;
            const foundProducts = state.products.filter(product =>
                product.name.toLowerCase().includes(action.searchText.toLowerCase())
                ||
                product.artist.toLowerCase().includes(action.searchText.toLowerCase())
            );
            //Passing found objects to new array
            console.log(foundProducts);
            return Object.assign({}, state, {searchedProducts: foundProducts});

        case SORT_PRODUCTS_BY_NAME:
            const compareName = (a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                let comparison = 0;

                if (nameA > nameB) {
                    action.option === 0 ? comparison = -1 : comparison = 1;
                } else {
                    action.option === 0 ? comparison = 1 : comparison = -1;
                }
                return comparison;
            }

            const sortedProductsByName = state.products.sort(compareName);
            return Object.assign({}, state, {visibleProducts: sortedProductsByName})

        case SORT_PRODUCTS_BY_PRICE:
            const comparePrice = (a, b) => {
                const priceA = Number(a.price.replace(/[^0-9.-]+/g,""));
                const priceB = Number(b.price.replace(/[^0-9.-]+/g,""));
                
                if (action.option === 1) {
                    return priceA - priceB
                } else {
                    return priceB - priceA
                }
            };

            const sortedProductsByPrice = state.products.sort(comparePrice);
            return Object.assign({}, state, {visibleProducts: sortedProductsByPrice})

        case SET_CATEGORY:
            //Filter objects in database array by chosen category
            const categoryProducts = state.products.filter(product => product.category === action.name);
            //Passing found object to new array
            return Object.assign({}, state, {visibleProducts: categoryProducts});

        default:
            return state;
    }
}