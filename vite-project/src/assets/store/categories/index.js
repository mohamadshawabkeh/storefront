
const initialState = {
  categories: [
    {
      id: 1,
      name: 'Electronics',
      displayName: 'Electronics',
      description: 'Description for Electronics',
      productIds: [1, 2],
    },
    {
      id: 2,
      name: 'Games',
      displayName: 'Games',
      description: 'Description for Games',
      productIds: [], 
    },

  ],
  activeCategory: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload.name,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
