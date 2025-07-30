import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cart/cartslice";
import wishlistReducer from "../cart/wishlistSlice"; 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer, 
  },
});
