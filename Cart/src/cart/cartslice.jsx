import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./cartActions";

const initialState = {
  products:[],
  cart:[],
  status:'idle', 
  error:null
}
console.log('Store Initial Data' , initialState);

export const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
   addToCart:(state , action) => {
      const item = state.products.find(p => p.id === action.payload)

      if(item && !state.cart.find(c => c.id === item.id)){
        state.cart.push({...item , quantity:1})
      }
    },
    removeToCart:(state , action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload)
    },
    resetCart:(state) => {
      state.cart = []
     }
  },
  extraReducers:(builder) => {
    builder
    .addCase(fetchProducts.pending , (state) => {
      state.status = 'loading'
    })
    .addCase(fetchProducts.fulfilled,  (state , action) => {
      state.status = "success"
      state.products = action.payload
    })
    .addCase(fetchProducts.rejected , (state , action) => {
      state.status = "failed"
      state.error = action.payload
    })
  }
})

export const {addToCart , removeToCart , resetCart} = cartSlice.actions

export default cartSlice.reducer