import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChangeAsync, selectInput } from './personalFormSlice';

const PersonalForm = () => {
    const dispatch = useDispatch();
    const input = useSelector(selectInput);
    const isFormValid = true
    
    const handleChange = ({ target }) => {
        const { name, value } = target
        dispatch(handleChangeAsync({ name, value }))
    }
    return (
        <form className="flex flex-col sm:w-1/2 text-text1 lg:w-[30%]">
            <label htmlFor="f-name">First Name <span className="text-secondary">*</span></label>
            <input
                onChange={handleChange}
                value={input.name || ""}
                type="text"
                name="name"
                className={`outline-none bg-bg-btn mb-8 mt-2 h-[40px] lg:h-[50px] p-2 lg:p-4 rounded-lg ${!isFormValid && "border border-secondary"}`} />
            <label htmlFor="company-name">Company Name</label>
            <input
                onChange={handleChange}
                value={input.company || ""}
                type="text"
                name="company"
                className={`outline-none bg-bg-btn mb-8 mt-2 h-[40px] lg:h-[50px] p-2 lg:p-4 rounded-lg `} />
            <label htmlFor="address">Street Address <span className="text-secondary">*</span></label>
            <input
                onChange={handleChange}
                value={input.address || ""}
                type="text"
                name="address"
                className={`outline-none bg-bg-btn mb-8 mt-2 h-[40px] lg:h-[50px] p-2 lg:p-4 rounded-lg`} />
            <label htmlFor="apartment">Apartment, floor, etc (optional)</label>
            <input
                onChange={handleChange}
                value={input.apartment || ""}
                type="text"
                name="apartment"
                className={`outline-none bg-bg-btn mb-8 mt-2 h-[40px] lg:h-[50px] p-2 lg:p-4 rounded-lg`} />
            <label htmlFor="city">Town/City <span className="text-secondary">*</span></label>
            <input
                onChange={handleChange}
                value={input.city || ""}
                type="text"
                name="city"
                className={`outline-none bg-bg-btn mb-8 mt-2 h-[40px] lg:h-[50px] p-2 lg:p-4 rounded-lg ${!isFormValid && "border border-secondary"}`} />
            <label htmlFor="phone-number">Phone Number</label>
            <input
                onChange={handleChange}
                value={input.phone || ""}
                type="tel"
                name="phone"
                className={`outline-none bg-bg-btn mb-8 mt-2 h-[40px] lg:h-[50px] p-2 lg:p-4 rounded-lg ${!isFormValid && "border border-secondary"}`} />
            <label htmlFor="email">Email Address <span className="text-secondary">*</span></label>
            <input
                onChange={handleChange}
                value={input.email || ""}
                type="email"
                name="email"
                className={`outline-none bg-bg-btn mb-8 mt-2 h-[40px] lg:h-[50px] p-2 lg:p-4 rounded-lg ${!isFormValid && "border border-secondary"}`} />
        </form>
    )
}

export default PersonalForm