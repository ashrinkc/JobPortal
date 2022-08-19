import { getBlogsFailure, getBlogsStart, getBlogsSuccess } from "./blogReducer";
import { getUserfailure, getUserStart, getUserSuccess } from "./userReducer";
import { getJobsFailure, getJobsStart, getJobsSuccess } from "./jobsReducer";
import {
  getCategorysFailure,
  getCategorysStart,
  getCategorysSuccess,
} from "./categoryReducer";
import axios from "axios";

// get user
export const getUserAdmin = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await axios.get("/user/user");
    dispatch(getUserSuccess(res.data));
  } catch (error) {
    dispatch(getUserfailure());
    console.log(error);
  }
};

//get all blogs
export const getAllBlogs = async (dispatch) => {
  dispatch(getBlogsStart());
  try {
    const res = await axios.get("http://localhost:5000/api/v1/blog/allBlog");
    // console.log(res);
    dispatch(getBlogsSuccess(res.data));
  } catch (error) {
    dispatch(getBlogsFailure());
    console.log(error);
  }
};

//get all jobs
export const getAllJobs = async (dispatch) => {
  console.log("jobs");
  dispatch(getJobsStart());
  console.log("kkk");
  try {
    const res = await axios.get("http://localhost:5000/api/v1/jobs/allJobs");
    console.log(res);
    dispatch(getJobsSuccess(res.data));
  } catch (error) {
    dispatch(getJobsFailure());
    console.log(error);
  }
};

// get all category
export const getAllCategory = async (dispatch) => {
  dispatch(getCategorysStart());
  try {
    const res = await axios.get("/category/allCategory");
    dispatch(getCategorysSuccess(res.data));
  } catch (error) {
    dispatch(getCategorysFailure());
    console.log(error);
  }
};
