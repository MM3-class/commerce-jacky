import uuid from "react-uuid"
import { paymentMethods } from "../data/paymentMethods"
import CreditCardForm from "./CreditCardForm"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleChangeAsync, selectInput } from "../features/personalForm/personalFormSlice"
const Payment = () => {
    const [showPayment, setShowPayment] = useState(null)
    const dispatch = useDispatch()
    const input = useSelector(selectInput);

    const handleBankChange = ({ target }) => {
        const { name, value } = target;
        dispatch(handleChangeAsync({ name, value }))
        setShowPayment(value)
    }
    return (
        <div className="flex justify-between items-start my-8 relative">
            <aside className="flex flex-col gap-4 text-xl">
                <div>
                    <input
                        type="radio"
                        value="card"
                        name="payment"
                        checked={input.payment === "card"}
                        onChange={handleBankChange}
                        className="accent-text2" />
                    <label className="ml-2">Bank</label>
                </div>
                <div className="block ">
                    {showPayment === "card" ? (<CreditCardForm />) : null}
                </div>
                <div>
                    <input
                        type="radio"
                        value="cash"
                        name="payment"
                        checked={input.payment === "cash"}
                        onChange={handleBankChange}
                        className="accent-text2" />
                    <label className="ml-2">Cash On Delivery</label>
                </div>
            </aside>
            <aside className="flex absolute right-0 items-center gap-2">
                {paymentMethods && paymentMethods.map((payment) => (
                    <img key={uuid()} src={payment} alt="" />
                ))}
            </aside>
        </div>
    )
}

export default Payment