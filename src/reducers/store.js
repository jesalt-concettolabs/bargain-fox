import { configureStore } from "@reduxjs/toolkit";
import loginDetailReducer from "./loginDetailSlice";
import counterValueReducer from "./counterDetailSlice";

const store = configureStore({
  reducer: {
    loginDetail: loginDetailReducer,
    counterValueDetail: counterValueReducer,
  },
});

export default store;
