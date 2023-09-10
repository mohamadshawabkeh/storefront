// store/categories/index.js

const initialState = {
  categories: [
    {
      id: 1,
      name: 'Electronics',
      displayName: 'Electronics',
      description: 'Description for Electronics',
      productIds: [1, 2], // IDs of products associated with Electronics
    },
    {
      id: 2,
      name: 'Games',
      displayName: 'Games',
      description: 'Description for Games',
      productIds: [], // IDs of products associated with Games (add as needed)
    },
    // Add more categories as needed
  ],
  activeCategory: null, // Initially, no active category
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload.name,
      };
    // Handle other actions related to categories here
    default:
      return state;
  }
};

export default categoriesReducer;
