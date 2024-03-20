import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoginOTP: null,
};

const loginOTPSlice = createSlice({
  name: "loginOTPData",
  initialState,
  reducers: {
    addUserOTPDetail: (state, action) => {
      state.userLoginOTP = action.payload;
    },
  },
});

export const { addUserOTPDetail } = loginOTPSlice.actions;

export default loginOTPSlice.reducer;
