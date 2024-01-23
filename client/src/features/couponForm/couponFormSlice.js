import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userCode: "",
    couponCode: "jack",
    isValidCoupon: false,
    percentage: 20
}

const couponFormSlice = createSlice({
    name: "couponForm",
    initialState,
    reducers: {
        setUserCode: (state, action) => {
            state.userCode = action.payload
        },
        submitCoupon: (state) => {
            state.isValidCoupon = state.userCode === state.couponCode
            state.userCode = ""
        },
        resetCoupon: (state) => {
            state.isValidCoupon = false
        }
    }
})

export default couponFormSlice.reducer
export const { setUserCode, submitCoupon, resetCoupon } = couponFormSlice.actions
export const selectUserCode = state => state.couponForm.userCode
export const selectIsValidCoupon = state => state.couponForm.isValidCoupon
export const selectPercentage = state => state.couponForm.percentage