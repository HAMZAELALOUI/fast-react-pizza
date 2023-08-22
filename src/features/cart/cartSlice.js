import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: 'medeternian',
      unitPrice: 12,
      quantity: 2,
      totalPrice: 24,
    }
  ]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find(item => item.pizzaId === action.payload);
      item.quantity++;
      state.cart.totalPrice = item.quantity * item.unitPrice;

    },
    decreaseQuantity(state, action) {
      const item = state.cart.find(item => item.pizzaId === action.payload);
      item.quantity--;
      state.cart.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  }
})

export const { addItem, deleteItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer