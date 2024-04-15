import { configureStore } from "@reduxjs/toolkit";
import loginDetailReducer from "./loginDetailSlice";
import counterValueReducer from "./counterDetailSlice";
import CartCounterValueReducer from "./cartCounterSlice";

const store = configureStore({
  reducer: {
    loginDetail: loginDetailReducer,
    counterValueDetail: counterValueReducer,
    cartCounterDetail: CartCounterValueReducer,
  },
});

export default store;
