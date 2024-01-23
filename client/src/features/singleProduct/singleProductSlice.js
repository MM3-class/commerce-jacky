import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../lib/api";

export const loadSingleProduct = createAsyncThunk(
    "product/productById",
    (async (id, { rejectedByValue }) => {
        try {
            const response = await API.get(`/products/${id}`)
            const data = await response.data
            console.log(data)
            return data
        } catch (err) {
            console.log("WARNING ERROR", err.message)
            if (err.response) {
                return rejectedByValue(err.response.data)
            } else if (err.request) {
                return rejectedByValue({ message: "RESPONSE ERROR" })
            } else {
                return rejectedByValue({ message: "REQUEST FAILED" })
            }
        }
    })
);
const initialState = {
    isLoading: false,
    isError: null,
    singleProduct: {}
}
const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loadSingleProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loadSingleProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.singleProduct = action.payload
            })
            .addCase(loadSingleProduct.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })
    }
})

export const selectSingleProduct = (state) => state.singleProduct.singleProduct
export const selectIsLoading = (state) => state.singleProduct.isLoading
export const selectIsError = (state) => state.singleProduct.isError

export default singleProductSlice.reducer