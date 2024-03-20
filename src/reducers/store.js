import { configureStore } from "@reduxjs/toolkit";
import loginDetailReducer from "./loginDetailSlice";
import loginOTPReducer from "./loginOTPSlice";

const store = configureStore({
  reducer: {
    loginDetail: loginDetailReducer,
    loginOTPDetail: loginOTPReducer,
  },
});

export default store;
