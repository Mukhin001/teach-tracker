import { createSlice } from "@reduxjs/toolkit";

export interface ProgressState {
  progress: string;
}

const initialState: ProgressState = {
  progress: "",
};

export const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    increase: (state) => {
      state.progress += "";
    },
    decrease: (state) => {
      state.progress = "";
    },
  },
});

export const { increase, decrease } = progressSlice.actions;
export default progressSlice.reducer;
