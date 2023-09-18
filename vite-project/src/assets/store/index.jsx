import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/index';
import productsReducer from './products';
import cartReducer from './cart';
import liveproductsReducer from './liveproducts';

const rootReducer = {
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  dataFromApi: liveproductsReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
