import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserCredentials: (state, action) => {
      state.user = action.payload;
    },
    clearUserOnLogout: (state, action) => {
      state.user = {};
    },
  },
});

export const { getUserCredentials, clearUserOnLogout } = userSlice.actions;

export default userSlice;
