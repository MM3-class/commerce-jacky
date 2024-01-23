import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const favoriteItem = state.favorite.find(
        (item) => item.id === action.payload.id
      );
      if (favoriteItem) {
        toast.warn(`${action.payload.title} you Added!`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
        });
        return;
      } else {
        toast.info(`${action.payload.title} Added To Favorite!`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
        });
        state.favorite.push({ ...action.payload });
      }
    },
    removeFavorite: (state, action) => {
      const favoriteItem = state.favorite.filter(
        (item) => item.id !== action.payload
      );
      state.favorite = favoriteItem;
      toast.error(`Item's Removed!!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
      });
    },
  },
});

export default favoriteSlice.reducer;
export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export const selectFavorite = (state) => state.favorite.favorite;
