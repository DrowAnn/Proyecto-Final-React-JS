import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const ShoppingCartSlicer = createSlice({
  initialState,
  name: "ShoppingCart",
  reducers: {
    addToCart: (state, actions) => {
      let count = 0;
      for (let product of state.products) {
        if (product[0].id == actions.payload.id) {
          product[1] += 1;
          count += 1;
          break;
        }
      }
      if (count == 0) {
        state.products.push([actions.payload, 1]);
      }
    },
    deleteProduct: (state, actions) => {
      if (state.products[actions.payload][1] == 1) {
        state.products.splice(actions.payload, 1);
      } else {
        state.products[actions.payload][1] -= 1;
      }
    },
    restartProducts: (state) => {
      state.products = [];
    },
  },
});

export const ShoppingCartReducer = ShoppingCartSlicer.reducer;

export default ShoppingCartSlicer.actions;
