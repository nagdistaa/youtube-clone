import { createSlice } from "@reduxjs/toolkit";

const initialState = { sidebarStatus: true };
const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebar: (state) => {
      return !state;
    },
  },
});

export const { setSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
