//Importing actions
import {
    GET_PRODUCT,
    GET_PRODUCTS,
    SEARCH_PRODUCTS,
    SORT_PRODUCTS_BY_NAME,
    SORT_PRODUCTS_BY_ARTIST,
    SORT_PRODUCTS_BY_PRICE,
    SORT_PRODUCTS_BY_ID,
    SET_CATEGORY,
    CHANGE_PAGE
} from "./Product.actions";

//Importing .json database
import productsData from "../../utils/products.json";

//Defining initial state
const initialState = {
    products: productsData,
    selectedProduct: {},
    searchedProducts: [],
    visibleProducts: [],
    sortedProducts: [],
    sortingOption: "" || "sortById",
    currentPage: "" || 0
};

//Creating reducers
export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT:
            //Finding object in database array by it's id
            const selectedProduct = state.products.find(product => product.id === parseInt(action.id));
            //Passing found object to new array
            return Object.assign({}, state, {selectedProduct})

        case GET_PRODUCTS:
            //Getting objects array from database file
            return Object.assign({}, state, {visibleProducts: state.products})

        case SEARCH_PRODUCTS:
            //Filter objects in database array by it's name
            //Names in array as well as search term is converted to lower cases;
            const foundProducts = state.products.filter(product =>
                product.name.toLowerCase().includes(action.searchText.toLowerCase())
                ||
                product.artist.toLowerCase().includes(action.searchText.toLowerCase())
            );
            //Passing found objects to new array
            return Object.assign({}, state, {searchedProducts: foundProducts})

        case SORT_PRODUCTS_BY_NAME:
            //this reducer have prepared reverse sorting for future implementation
            const compareName = (a, b) => {
                const productNameA = a.name.toLowerCase();
                const productNameB = b.name.toLowerCase();
                // if value is 1 objects are sorted from first to last
                let chosenOptionValue = 0;
                if (productNameA > productNameB) {
                    action.option === 0 ? chosenOptionValue = -1 : chosenOptionValue = 1;
                } else {
                    action.option === 0 ? chosenOptionValue = 1 : chosenOptionValue = -1;
                }
                return chosenOptionValue;
            }
            const sortingOptionByName = action.option === 1 ? "sortByNameAscending" : "sortByNameDescending";
            const sortedProductsByName = state.products.sort(compareName);
            return Object.assign({}, state, {visibleProducts: sortedProductsByName, sortingOption: sortingOptionByName, currentPage: 0})

            case SORT_PRODUCTS_BY_ARTIST:
                //this reducer have prepared reverse sorting for future implementation
                const compareArtist = (a, b) => {
                    const productArtistA = a.artist.toLowerCase();
                    const productArtistB = b.artist.toLowerCase();
                    // if value is 1 objects are sorted from first to last
                    let chosenOptionValue = 0;
                    if (productArtistA > productArtistB) {
                        action.option === 0 ? chosenOptionValue = -1 : chosenOptionValue = 1;
                    } else {
                        action.option === 0 ? chosenOptionValue = 1 : chosenOptionValue = -1;
                    }
                    return chosenOptionValue;
                }
                const sortingOptionByArtist = action.option === 1 ? "sortByArtistAscending" : "sortByArtistDescending";
                const sortedProductsByArtist = state.products.sort(compareArtist);
                return Object.assign({}, state, {visibleProducts: sortedProductsByArtist, sortingOption: sortingOptionByArtist, currentPage: 0})

        case SORT_PRODUCTS_BY_PRICE:
            const comparePrice = (a, b) => {
                const productPriceA = Number(a.price.replace(/[^0-9.-]+/g,""));
                const productPriceB = Number(b.price.replace(/[^0-9.-]+/g,""));
                if (action.option === 1) {
                    return productPriceA - productPriceB
                } else {
                    return productPriceB - productPriceA
                }

            };
            const sortingOptionByPrice = action.option === 1 ? "sortByPriceAscending" : "sortByPriceDescending";
            const sortedProductsByPrice = state.products.sort(comparePrice);
            return Object.assign({}, state, {visibleProducts: sortedProductsByPrice, sortingOption: sortingOptionByPrice, currentPage: 0})

        case SORT_PRODUCTS_BY_ID:
            const sortedProductsByid = state.products.sort((a,b) => a.id - b.id);
            return Object.assign({}, state, {visibleProducts: sortedProductsByid, sortingOption: "sortById", currentPage: 0})

        case SET_CATEGORY:
            //Filter objects in database array by chosen category
            const categoryProducts = state.products.filter(product => product.category === action.name);
            //Passing found object to new array
            return Object.assign({}, state, {visibleProducts: categoryProducts})

        case CHANGE_PAGE:
            return Object.assign({}, state, {currentPage: action.page})

        default:
            return state
    }
}