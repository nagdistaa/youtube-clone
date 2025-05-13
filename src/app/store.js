import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebarSlice";

import categoryReducer from "../features/categorySlicer";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    category: categoryReducer,
  },
});
