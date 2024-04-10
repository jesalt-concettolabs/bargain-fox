import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: null,
};

const counterDetailSlice = createSlice({
  name: "counterData",
  initialState,
  reducers: {
    addCounterValue: (state, action) => {
      state.counterValue = action.payload;
    },
  },
});

export const { addCounterValue } = counterDetailSlice.actions;

export default counterDetailSlice.reducer;
