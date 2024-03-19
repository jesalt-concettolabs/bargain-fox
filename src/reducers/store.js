import { configureStore } from "@reduxjs/toolkit";
import loginDetailReducer from "./loginDetailSlice";

const store = configureStore({
  reducer: {
    loginDetail: loginDetailReducer,
  },
});

export default store;
