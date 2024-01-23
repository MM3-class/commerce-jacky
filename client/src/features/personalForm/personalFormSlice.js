import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const handleChangeAsync = createAsyncThunk("personalForm/handleChange",
    async ({ name, value }) => {
        const id = uuid();
        return { id, name, value }
    })

const initialState = {
    id: null,
    payment: "",
    cardInfo: {
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        securityCode: ""
    }
}

const personalFormSlice = createSlice({
    name: "personalForm",
    initialState,
    reducers: {
        resetForm: () => {
            return {
                id: null,
                payment: "",
                cardInfo: {
                    cardNumber: "",
                    cardName: "",
                    expiryDate: "",
                    securityCode: ""
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(handleChangeAsync.fulfilled, (state, action) => {
            const { id, name, value } = action.payload;
            const numericValue = value.trim().replace(/\D/g, "");
            const dateValue = numericValue.replace(/(\d{2})(\d{0,2})/, '$1/$2')

            if (name === "cardNumber") {
                return {
                    ...state,
                    id: id,
                    payment: name === "payment" ? value : state.payment,
                    cardInfo: {
                        ...state.cardInfo,
                        [name]: numericValue
                    }
                }
            }
            if (name === "cardName") {
                return {
                    ...state,
                    id: id,
                    payment: name === "payment" ? value : state.payment,
                    cardInfo: {
                        ...state.cardInfo,
                        [name]: value
                    }
                }
            }
            if (name === "expiryDate") {
                return {
                    ...state,
                    id: id,
                    payment: name === "payment" ? value : state.payment,
                    cardInfo: {
                        ...state.cardInfo,
                        expiryDate: dateValue
                    }
                }
            }
            if (name === "securityCode") {
                return {
                    ...state,
                    id: id,
                    payment: name === "payment" ? value : state.payment,
                    cardInfo: {
                        ...state.cardInfo,
                        securityCode: numericValue
                    }
                }
            }
            return {
                ...state,
                id: id,
                [name]: value,
                payment: name === "payment" ? value : state.payment,
            }
        })
    }
})

export const selectInput = (state) => state.personalForm;
export default personalFormSlice.reducer
export const { resetForm } = personalFormSlice.actions