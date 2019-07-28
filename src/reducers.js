//Importing methods
import { combineReducers } from 'redux';

//Importing reducers
import productsReducer from '../src/modules/Product/Product.reducers';

//Combining reducers
const reducers = combineReducers({
    productsReducer
});

export default reducers;