import { createSlice } from "@reduxjs/toolkit";

export const CategorysSlice = createSlice({
  name: "category",
  initialState: {
    categorys: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // get all Categorys
    getCategorysStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCategorysSuccess: (state, action) => {
      state.isFetching = false;
      state.categorys = action.payload;
    },
    getCategorysFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getCategorysFailure, getCategorysStart, getCategorysSuccess } =
  CategorysSlice.actions;

export default CategorysSlice.reducer;
