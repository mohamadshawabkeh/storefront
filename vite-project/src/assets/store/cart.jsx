import request from 'superagent';

// Action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Initial state
const initialState = {
  cartItems: [],
};

// Reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Add the product to the cartItems array
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case REMOVE_FROM_CART:
      // Remove the product from the cartItems array
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

// Action creators
export const addToCart = (product, quantity) => async (dispatch) => {
  try {
    // Send a PUT request to decrease the inventory when adding to cart
    await request
      .put(`http://localhost:3000/products/${product.id}/decreaseInventory?quantity=${quantity}`);

    // If the request is successful, dispatch the addToCart action
    dispatch({
      type: ADD_TO_CART,
      payload: product,
      quantity, // Optional: You can dispatch the quantity as well if needed
    });
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};

export const removeFromCart = (productId, quantity) => async (dispatch) => {
  try {
    // Send a PUT request to increase the inventory when removing from cart
    await request
      .put(`http://localhost:3000/products/${productId}/increaseInventory?quantity=${quantity}`);

    // If the request is successful, dispatch the removeFromCart action
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productId,
      quantity, // Optional: You can dispatch the quantity as well if needed
    });
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
};

export default cartReducer;
