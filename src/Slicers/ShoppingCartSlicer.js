import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const ShoppingCartSlicer = createSlice({
  initialState,
  name: "ShoppingCart",
  reducers: {
    addToCart: (state, actions) => {
      state.products.push(actions.payload);
    },
    deleteProduct: (state, actions) => {
      state.products.splice(actions.payload, 1);
    },
  },
});

export const ShoppingCartReducer = ShoppingCartSlicer.reducer;

export default ShoppingCartSlicer.actions;
