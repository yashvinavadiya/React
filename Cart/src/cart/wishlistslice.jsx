// src/cart/wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.push({ ...action.payload });
      }
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
