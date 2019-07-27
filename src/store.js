import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

store.subscribe(() => console.log(store.getState()));
store.subscribe(() => console.log('changes'));
export default store;