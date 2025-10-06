import { configureStore } from "@reduxjs/toolkit";
import progressReduser from "../features/progressSlice";

export const store = configureStore({
  reducer: {
    progress: progressReduser,
    //tech: techReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
