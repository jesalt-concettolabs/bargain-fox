import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoginData: null,
};

const loginDetailSlice = createSlice({
  name: "loginData",
  initialState,
  reducers: {
    addUserDetail: (state, action) => {
      state.userLoginData = action.payload;
    },
  },
});

export const { addUserDetail } = loginDetailSlice.actions;

export default loginDetailSlice.reducer;
