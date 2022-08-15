import { createSlice } from "@reduxjs/toolkit";

export const BlogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //get all Blogs
    getBlogsStart: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    getBlogsSuccess: (state, action) => {
      state.isFetching = false;
      state.blogs = action.payload;
    },
    getBlogsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getBlogsFailure, getBlogsStart, getBlogsSuccess } =
  BlogSlice.actions;

export default BlogSlice.reducer;
