import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    addAuthInfo(state, action) {
      return {...action.payload};
    },
    removeAuthInfo(state) {
      return (state = {});
    },
  },
});

export const {addAuthInfo, removeAuthInfo} = authSlice.actions;
export default authSlice.reducer;
