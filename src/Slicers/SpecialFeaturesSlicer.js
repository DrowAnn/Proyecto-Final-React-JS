import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  features: [
    {
      id: 1,
      image: "src/assets/truck.png",
      title: "Free Shiping",
      description: "Order Over $100",
    },
    {
      id: 2,
      image: "src/assets/credit-card.png",
      title: "Quick Payment",
      description: "100% Secure",
    },
    {
      id: 3,
      image: "src/assets/giftbox.png",
      title: "Big Cashback",
      description: "Over 30% Cashback",
    },
    {
      id: 4,
      image: "src/assets/people-group.png",
      title: "24/7 Support",
      description: "Ready For You",
    },
  ],
};

const SpecialFeaturesSlicer = createSlice({
  initialState,
  name: "SpecialFeaturesContent",
  reducers: {},
});

export const SpecialFeaturesReducer = SpecialFeaturesSlicer.reducer;

export default SpecialFeaturesSlicer.actions;
