import { configureStore } from "@reduxjs/toolkit";
import { ShoppingCartReducer } from "../Slicers/ShoppingCartSlicer";
import { SpecialFeaturesReducer } from "../Slicers/SpecialFeaturesSlicer";
import { UsersDataReducer } from "../Slicers/UsersDataSlicer";

const Store = configureStore({
  reducer: {
    ShoppingCart: ShoppingCartReducer,
    SpecialFeaturesContent: SpecialFeaturesReducer,
    UsersData: UsersDataReducer,
  },
});

export default Store;
