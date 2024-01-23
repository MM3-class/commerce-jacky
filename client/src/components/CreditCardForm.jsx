import { useDispatch, useSelector } from "react-redux"
import { handleChangeAsync, selectInput } from "../features/personalForm/personalFormSlice"

const CreditCardForm = () => {
    const creditForm = useSelector(selectInput);
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        const { name, value } = target
        dispatch(handleChangeAsync({ name, value }))
    }
    return (
        <form className='w-full space-y-4 text-xs md:text-base'>
            <div>
                <label>Card Number</label>
                <input
                    type="text"
                    className='border block outline-none rounded-md p-2 w-full'
                    onChange={handleChange}
                    value={creditForm.cardInfo.cardNumber || ""}
                    name="cardNumber" 
                    maxLength="14"
                    pattern='[0-9]*'
                    inputMode='numeric'
                    placeholder='Enter Credit Card Number'/>
            </div>
            <div>
                <label>Name On Card</label>
                <input
                    className='border block outline-none rounded-md p-2 w-full'
                    onChange={handleChange}
                    value={creditForm.cardInfo.cardName || ""}
                    name="cardName"
                    placeholder='Enter Holder Name'
                    type="text" />
            </div>
            <div className='sm:flex gap-2 space-y-2'>
                <div>
                    <label>Expiry date</label>
                    <input
                        className='border block outline-none rounded-md p-2'
                        onChange={handleChange}
                        value={creditForm.cardInfo.expiryDate || ""}
                        name="expiryDate" 
                        inputMode='numeric'
                        placeholder='MM/YY'
                        maxLength="5"
                        type="text" />
                </div>
                <div>
                    <label>Security Code</label>
                    <input
                        className='border block outline-none rounded-md p-2'
                        onChange={handleChange}
                        value={creditForm.cardInfo.securityCode || ""}
                        name="securityCode"
                        pattern='[0-9]*'
                        maxLength="3"
                        placeholder='CCV'
                        type="password" />
                </div>
            </div>
        </form>
    )
}

export default CreditCardForm
