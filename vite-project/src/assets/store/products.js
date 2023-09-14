// reducers/products.js

import { FETCH_PRODUCTS } from './actions/products';

const initialState = [];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;
