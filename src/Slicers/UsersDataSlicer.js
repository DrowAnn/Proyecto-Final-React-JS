import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const UsersDataSlicer = createSlice({
  initialState,
  name: "UsersData",
  reducers: {
    saveData: (state, actions) => {
      state.users.push(actions.payload);
    },
  },
});

export const UsersDataReducer = UsersDataSlicer.reducer;

export default UsersDataSlicer.actions;
