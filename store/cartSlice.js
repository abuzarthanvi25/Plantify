import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
      return state;
    },
    remove(state, action) {
      state.splice(
        state.indexOf(state.find(item => item._id === action.payload._id)),
        1,
      );
      return state;
    },
    removeAllInstance(state, action) {
      return state.filter(item => item._id !== action.payload._id);
    },
    emptyCart(state) {
      return (state = []);
    },
  },
});

export const {add, remove, removeAllInstance, emptyCart} = cartSlice.actions;
export default cartSlice.reducer;
