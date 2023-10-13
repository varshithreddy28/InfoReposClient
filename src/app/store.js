import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userFeature";

export const store = configureStore({
  reducer: {
    userSlice,
  },
});
