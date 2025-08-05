export const selectProducts = (state) => state.cart.products
export const selectCartProducts = (state) => state.cart.cart
export const selectCartCount = (state) => state.cart.cart.reduce((total , item) => total + item.quantity , 0)