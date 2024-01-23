import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../lib/api";

export const getCategoryData = createAsyncThunk(
    "category/categoryResult",
    async (path, { rejectWithValue }) => {
        try {
            const response = await API.get(`/products/category/${path}`);
            const data = await response.data
            console.log("CATEGORY RESULT", data.products)
            return data.products
        }
        catch (err) {
            console.log("CATEGORY ERROR", err.message)
            if (err.response) {
                return rejectWithValue(err.response.data)
            } else if (err.request) {
                return rejectWithValue({ message: "Network Error" })
            } else {
                return rejectWithValue({ message: "Request Failed" })
            }
        }
    }
)
const initialState = {
    isLoading: false,
    isError: null,
    categoryData: []
};

const getCategorySlice = createSlice({
    name: "filter",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getCategoryData.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(getCategoryData.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = null
                state.categoryData = action.payload
            })
            .addCase(getCategoryData.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })
    }
});

export const selectIsLoading = (state) => state.filter.isLoading;
export const selectIsError = (state) => state.filter.isError;
export const selectCategoryData = (state) => state.filter.categoryData;

export default getCategorySlice.reducer