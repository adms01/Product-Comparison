import { configureStore } from "@reduxjs/toolkit";
import compareReducer from "../slices/compareSlice";

export const store = configureStore({
  reducer: {
    compare: compareReducer,
  },
});
