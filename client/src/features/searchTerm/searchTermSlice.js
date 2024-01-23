import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../lib/api";
export const getSearchTerm = createAsyncThunk(
  "search/searchResult",
  async (path, { rejectWithValue }) => {
    try {
      const response = await API.get(`/products/search?q=${path}`);
      const data = await response.data;
      console.log("SEARCH", data);
      return data.products;
    } catch (err) {
      rejectWithValue({ message: "Warning Error" }, err.message);
      if (err.response) {
        return rejectWithValue(err.response.data);
      } else if (err.request) {
        return rejectWithValue({ message: "Network Error" });
      } else {
        return rejectWithValue({ message: "Request Failed" });
      }
    }
  }
);
const initialState = {
  isLoading: false,
  isError: null,
  searchData: [],
};
const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSearchTerm.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getSearchTerm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.searchData = action.payload;
      })
      .addCase(getSearchTerm.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});
export default searchTermSlice.reducer;
export const selectIsLoading = (state) => state.searchTerm.isLoading;
export const selectIsError = (state) => state.searchTerm.isError;
export const selectSearchData = (state) => state.searchTerm.searchData;
