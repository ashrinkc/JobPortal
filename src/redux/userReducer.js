import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // user reducer(for login)
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    getUserfailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getUserStart, getUserfailure, getUserSuccess } =
  userSlice.actions;

export default userSlice.reducer;
