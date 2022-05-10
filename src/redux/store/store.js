import { configureStore } from "@reduxjs/toolkit";
import taskSliceReducer from "../features/taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskSliceReducer,
  },
});

export default store;
