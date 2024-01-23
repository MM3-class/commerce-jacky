import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buyNow: null,
};
const buyNowSlice = createSlice({
  name: "buyNow",
  initialState,
  reducers: {
    addToBuyNow: (state, action) => {
        return {
          ...state,
          buyNow: { ...action.payload },
        };
    },
    resetBuyNow: (state) => {
      state.buyNow = null
    }
  },
});

export default buyNowSlice.reducer;
export const { addToBuyNow, resetBuyNow } = buyNowSlice.actions;
export const selectBuyNowItem = (state) => state.buyNow.buyNow;
