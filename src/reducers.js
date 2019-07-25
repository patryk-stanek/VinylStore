import { combineReducers } from 'redux';
import productsReducer from '../src/modules/Product/Product.reducers';

const reducers = combineReducers({
    productsReducer
});

export default reducers;