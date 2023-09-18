// /* eslint-disable no-unused-vars */
// // actions/products.js

// import superagent from 'superagent';

// // Define an action type for fetching products
// export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

// // Define an action creator for fetching products
// export const fetchProducts = () => {
//   return (dispatch) => {
//     superagent.get('http://localhost:3000/products')
//       .then((response) => {
//         dispatch({ type: FETCH_PRODUCTS, payload: response.body });
//       })
//       .catch((error) => {
//         // Handle the error
//       });
//   };
// };
