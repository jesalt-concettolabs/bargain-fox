import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: null,
};

const cartCounterSlice = createSlice({
  name: "cartCounterValue",
  initialState,
  reducers: {
    addCartCounterValue: (state, action) => {
      state.counterValue = action.payload;
    },
  },
});

export const { addCartCounterValue } = cartCounterSlice.actions;

export default cartCounterSlice.reducer;
