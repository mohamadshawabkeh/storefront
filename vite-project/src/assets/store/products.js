/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */

const initialState = [
  {
    id: 1,
    category: 'Electronics',
    name: 'Samsung 4K Ultra HD Smart TV',
    description: 'Experience stunning 4K visuals with this smart TV.',
    price: 799.99,
    inventoryCount: 10,
    imgPath: 'https://image-us.samsung.com/SamsungUS/home/television-home-theater/tvs/crystal-uhd-tvs/10192022-1/UA65AU8000WXZW_013_L-Perspective2_Black-Gallery-1600x1200.jpg?$product-details-jpg$', // Product 1 image
  },
  {
    id: 2,
    category: 'Electronics',
    name: 'Apple MacBook Pro',
    description: 'Powerful and sleek, the MacBook Pro is perfect for professionals.',
    price: 1299.99,
    inventoryCount: 5,
    imgPath: 'https://www.apple.com/newsroom/images/product/app-store/macOS_Preview_Mac_App_Store_Discover-screen-06042018_big.jpg.large.jpg', // Product 2 image
  },
  {
    id: 3,
    category: 'Games',
    name: 'The Legend of Zelda: Breath of the Wild',
    description: 'Embark on an epic adventure in the world of Hyrule.',
    price: 49.99,
    inventoryCount: 8,
    imgPath: 'https://www.gamespot.com/a/uploads/scale_medium/1197/11970954/3181241-ig-lozbreathofthewildrelease-20170112.jpg', // Game 1 image
  },
  {
    id: 4,
    category: 'Games',
    name: 'Cyberpunk 2077',
    description: 'Enter the dystopian future in this action-packed RPG.',
    price: 39.99,
    inventoryCount: 12,
    imgPath: 'https://i.pinimg.com/originals/8f/da/6f/8fda6f3e00f8bde7b752cfef6ba42e3c.jpg', // Game 2 image
  },
];

const DECREASE_INVENTORY = 'DECREASE_INVENTORY';
const INCREASE_INVENTORY = 'INCREASE_INVENTORY'; 

export const decreaseInventory = (productId) => ({
  type: DECREASE_INVENTORY,
  payload: productId,
});

export const increaseInventory = (productId) => ({
  type: INCREASE_INVENTORY,
  payload: productId,
});

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREASE_INVENTORY:

    const productToUpdate = state.find((product) => product.id === action.payload);

      if (productToUpdate && productToUpdate.inventoryCount > 0) {
        return state.map((product) =>
          product.id === action.payload
            ? { ...product, inventoryCount: product.inventoryCount - 1 }
            : product
        );
      }
      return state; 

    case INCREASE_INVENTORY:
      const productToIncrease = state.find((product) => product.id === action.payload);

      if (productToIncrease) {
        return state.map((product) =>
          product.id === action.payload
            ? { ...product, inventoryCount: product.inventoryCount + 1 } // Increase inventory by 1
            : product
        );
      }
      return state; 

    default:
      return state;
  }
};

export default productsReducer;
