import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogReducer";
import jobsReducer from "./jobsReducer";
import userReducer from "./userReducer";
export default configureStore({
  reducer: {
    blog: blogReducer,
    user: userReducer,
    job: jobsReducer,
  },
});
