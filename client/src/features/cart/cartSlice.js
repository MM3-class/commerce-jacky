import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
        toast.info(`${action.payload.title} Added Again!`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
        });
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.title} Added Successfully!`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
        });
      }
    },
    removeCartItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
      toast.error("item has Deleted", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
      });
    },
    incrementItem: (state, action) => {
      const getItem = state.cart.find((item) => item.id === action.payload);
      getItem.quantity++;
    },
    decrementItem: (state, action) => {
      const getItem = state.cart.find((item) => item.id === action.payload);
      if (getItem.quantity === 1) {
        getItem.quantity = 1;
      } else {
        getItem.quantity--;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});
export const {
  addToCart,
  removeCartItem,
  incrementItem,
  decrementItem,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
export const selectCart = (state) => state.cart.cart;
