import API from "../../../lib/api";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const EXPLORE_END_POINT = "/products?&skip=50&limit=20"
const ALL_PRODUCTS_END_POINT = "/products?&limit=100"

export const loadExploreProducts = createAsyncThunk(
    "home/exploreProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get(EXPLORE_END_POINT);
            const data = response.data;
            console.log("Explore Products", data.products)
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
export const loadAllProducts = createAsyncThunk(
    "allProducts/exploreProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get(ALL_PRODUCTS_END_POINT);
            const data = await response.data;
            console.log("ALL_PRODUCTS", data.products);
            return data.products
        } catch (err) {
            console.log("WARNING ERROR", err.message)
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
    exploreProducts: [],
    allProducts: [],
    isLoading: false,
    error: null
}
const exploreProductsSlice = createSlice({
    name: "exploreProducts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loadExploreProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loadExploreProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null
                state.exploreProducts = action.payload;
            })
            .addCase(loadExploreProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
            .addCase(loadAllProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loadAllProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.allProducts = action.payload
            })
            .addCase(loadAllProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
});

export const selectIsLoading = (state) => state.exploreProducts.isLoading;
export const selectError = (state) => state.exploreProducts.error
export const selectExploreProducts = (state) => state.exploreProducts.exploreProducts;
export const selectAllProductsData = (state) => state.exploreProducts.allProducts;

export default exploreProductsSlice.reducer