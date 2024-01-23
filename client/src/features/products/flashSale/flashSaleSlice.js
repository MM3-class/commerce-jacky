import API from "../../../lib/api";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const FLASH_SALE_END_POINT = "/products?skip=7&limit=10"
const ALL_FLASH_SALE_END_POINT = "/products?skip=15&limit=50"

export const loadFlashSale = createAsyncThunk(
    "home/flashSale",
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get(FLASH_SALE_END_POINT);
            const data = response.data;
            console.log("Flash Sale", data.products)
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
export const loadAllFlashSale = createAsyncThunk(
    "allFlashSale/flashSale",
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get(ALL_FLASH_SALE_END_POINT);
            const data = await response.data;
            console.log("ALL_FLASH_SALE", data.products);
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
    flashSaleData: [],
    allFlashSale: [],
    isLoading: false,
    error: null
}
const flashSaleSlice = createSlice({
    name: "flashSale",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loadFlashSale.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadFlashSale.fulfilled, (state, action) => {
                state.isLoading = false;
                state.flashSaleData = action.payload;
            })
            .addCase(loadFlashSale.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
            .addCase(loadAllFlashSale.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loadAllFlashSale.fulfilled, (state, action) => {
                state.isLoading = false
                state.allFlashSale = action.payload
            })
            .addCase(loadAllFlashSale.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
});

export const selectIsLoading = (state) => state.flashSale.isLoading;
export const selectFlashSale = (state) => state.flashSale.flashSaleData;
export const selectErrorFlashSale = (state) => state.flashSale.error
export const selectAllFlashSale = (state) => state.flashSale.allFlashSale;

export default flashSaleSlice.reducer