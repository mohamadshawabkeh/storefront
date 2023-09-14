/* eslint-disable no-undef */
import request from 'superagent';

export const addToCart = (product) => async (dispatch) => {
  try {
    // Send a POST request to your API to add the product to the cart
    await request
      .post(`http://localhost:3000/products/add-to-cart/${product.id}`)
      .send({ quantity: 1 }); // You can adjust the quantity as needed

    // If the request is successful, dispatch the addToCart action
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};

export const removeFromCart = (productId) => async (dispatch) => {
  try {
    // Send a PUT request to your API to remove the product from the cart
    await request
      .put(`http://localhost:3000/products/remove-from-cart/${productId}`)
      .send({ quantity: 1 }); // You can adjust the quantity as needed

    // If the request is successful, dispatch the removeFromCart action
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productId,
    });
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
};
