import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [
      {
        id: 1,
        name: 'Electronics',
        displayName: 'Electronics',
        description: 'Description for Electronics',
      },
      {
        id: 2,
        name: 'Games',
        displayName: 'Games',
        description: 'Description for Games',
      },
    ],
    activeCategory: null, 
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload.name; 
    },
  },
});

export const { setActiveCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
