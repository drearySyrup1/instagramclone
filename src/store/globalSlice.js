import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wrapperGridSize: 3,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    threeCol: (state) => {
      state.wrapperGridSize = 3;
    },
    twoCol: (state) => {
      state.wrapperGridSize = 2;
    },
  },
});

// Action creators are generated for each case reducer function
export const { threeCol, twoCol } = globalSlice.actions;

export default globalSlice.reducer;
