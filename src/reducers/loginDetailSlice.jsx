import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoginData: null,
  userLoginOTP: null,
};

const loginDetailSlice = createSlice({
  name: "loginData",
  initialState,
  reducers: {
    addUserDetail: (state, action) => {
      state.userLoginData = action.payload;
    },
    addLoginOTP: (state, action) => {
      state.userLoginOTP = action.payload;
    },
  },
});

export const { addUserDetail, addLoginOTP } = loginDetailSlice.actions;

export default loginDetailSlice.reducer;
