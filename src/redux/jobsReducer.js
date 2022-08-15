import { createSlice } from "@reduxjs/toolkit";

export const jobsSlice = createSlice({
  name: "job",
  initialState: {
    jobs: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // get all jobs
    getJobsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getJobsSuccess: (state, action) => {
      state.isFetching = false;
      state.jobs = action.payload;
    },
    getJobsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getJobsFailure, getJobsStart, getJobsSuccess } =
  jobsSlice.actions;

export default jobsSlice.reducer;
