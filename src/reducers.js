//Importing methods
import { combineReducers } from "redux";

//Importing reducers
import productsReducer from "./components/Product/Product.reducers";
import basketReducer from "./components/Basket/Basket.reducers";

//Combining reducers
const reducers = combineReducers({
    productsReducer,
    basketReducer
});

export default reducers;