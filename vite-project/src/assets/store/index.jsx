import { createStore, combineReducers } from 'redux';
import categoriesReducer from './categories/index';
import productsReducer from './products';

const rootReducer = combineReducers({
  categories: categoriesReducer, // Access the 'categories' property of the categoriesReducer
  products: productsReducer,
  // Add other reducers as needed
});

const store = createStore(rootReducer);

export default store;
