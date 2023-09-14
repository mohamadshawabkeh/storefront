import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/index';
import productsReducer from './products';
import cartReducer from './cart';
import liveproductsReducer from './liveproducts';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  dataFromApi: liveproductsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
