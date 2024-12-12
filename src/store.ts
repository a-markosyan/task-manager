import { configureStore } from "@reduxjs/toolkit";
import { taskApi } from "./features/tasks/taskApi";

export const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer, // Add RTK Query reducer for todos
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware), // Add RTK Query middleware
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
