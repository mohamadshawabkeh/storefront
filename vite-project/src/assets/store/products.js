/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from 'superagent';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { dispatch }) => {
  try {
    const response = await request.get('http://localhost:3000/products');
    dispatch(setProducts(response.body));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
    });
  },
});
export const getProductById = (state, productId) => {
  return state.products.find((product) => product.id === productId);
};


export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
