import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import favProdReducer from './favouriteProdSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    favourites: favProdReducer,
  },
});

export default store;
