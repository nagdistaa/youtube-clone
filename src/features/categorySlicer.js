import { createSlice } from "@reduxjs/toolkit";

const categorySlicer = createSlice({
  name: "category",
  initialState: 0,
  reducers: {
    setCategory: (state) => {},
  },
});

export const { setCategory } = categorySlicer.actions;

export default categorySlicer.reducer;
