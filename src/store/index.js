import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./../slices/Events";
export const store = configureStore({
  reducer: {
    event: eventsReducer.reducer,
  },
});
