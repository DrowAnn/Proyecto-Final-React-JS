import { configureStore } from "@reduxjs/toolkit";
import { ShoppingCartReducer } from "../Slicers/ShoppingCartSlicer";
import { SpecialFeaturesReducer } from "../Slicers/SpecialFeaturesSlicer";

const Store = configureStore({
  reducer: {
    ShoppingCart: ShoppingCartReducer,
    SpecialFeaturesContent: SpecialFeaturesReducer,
  },
});

export default Store;
