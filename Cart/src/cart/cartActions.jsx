import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProductsAPI = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data
};

export const fetchProducts = createAsyncThunk(
  "cart/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await fetchProductsAPI()
      return response
      
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);