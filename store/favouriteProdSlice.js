import {createSlice} from '@reduxjs/toolkit';

const favProdSlice = createSlice({
  name: 'favourites',
  initialState: [],
  reducers: {
    addFavourite(state, action) {
      state.push(action.payload);
      return state;
    },
    removeAllInstance(state, action) {
      return state.filter(item => item._id !== action.payload._id);
    },
  },
});

export const {addFavourite, removeAllInstance} = favProdSlice.actions;
export default favProdSlice.reducer;
