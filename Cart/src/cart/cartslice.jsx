import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products:[],
  cart:[],
  status:'idle', 
  error:null
}

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
  }
})

export const {addToCart , removeToCart , resetCart} = cartSlice.actions

export default cartSlice.reducer