import API from "../../../lib/api";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const BESTSELLING_END_POINT = "/products?skip=58&limit=4"
const ALL_BESTSELLING_END_POINT = "/products?skip=60&limit=40"

export const loadBestSelling = createAsyncThunk(
    "home/bestSelling",
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get(BESTSELLING_END_POINT);
            const data = response.data;
            console.log("Best Selling", data.products)
            return data.products
        }
        catch (err) {
            console.log("Warning: ERROR", err.message)
            if (err.response) {
                return rejectWithValue(err.response.data)
            } else if (err.request) {
                return rejectWithValue({ message: "Network Error" })
            } else {
                return rejectWithValue({ message: "Request Failed" })
            }
        }
    }
);
export const loadAllBestSelling = createAsyncThunk(
    "allBestSelling",
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get(ALL_BESTSELLING_END_POINT)
            const data = await response.data
            console.log("ALL_BEST_SELLING", data)
            return data.products
        } catch (err) {
            console.log("WARNING ERROR", err.message);
            if (err.response) {
                return rejectWithValue(err.response.data)
            } else if (err.request) {
                return rejectWithValue({ message: "NETWORK ERROR" })
            } else {
                return rejectWithValue({ message: "Request Failed" })
            }
        }
    }
)
const initialState = {
    bestSelling: [],
    allBestSelling: [],
    isLoading: false,
    error: null
}
const bestSellingSlice = createSlice({
    name: "bestSelling",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loadBestSelling.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loadBestSelling.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null
                state.bestSelling = action.payload;
            })
            .addCase(loadBestSelling.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
            .addCase(loadAllBestSelling.pending, (state) => {
                state.isLoading = true;
                state.error = null
            })
            .addCase(loadAllBestSelling.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.allBestSelling = action.payload
            })
            .addCase(loadAllBestSelling.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
});

export const selectIsLoading = (state) => state.bestSelling.isLoading;
export const selectIsError = (state) => state.bestSelling.error;
export const selectBestSelling = (state) => state.bestSelling.bestSelling;
export const selectAllBestSellingData = (state) => state.bestSelling.allBestSelling

export default bestSellingSlice.reducer