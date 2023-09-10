import { createStore, combineReducers } from 'redux';
import categoriesReducer from './categories/index';
import productsReducer from './products';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

const store = createStore(rootReducer);

export default store;
