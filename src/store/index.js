import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartInitialState = { numberOfItems: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart(state) {
      state.numberOfItems++;
    },
    subFromCart(state) {
      state.numberOfItems--;
    }
  }
});
export const cartActions = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});
export default store;
