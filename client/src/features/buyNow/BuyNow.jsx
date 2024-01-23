import { useDispatch, useSelector } from 'react-redux'
import { resetBuyNow, selectBuyNowItem } from './buyNowSlice'
import { formatPrice } from '../../utils/helper'
import PersonalForm from '../personalForm/PersonalForm'
import Payment from '../../components/Payment'
import { resetCoupon, selectIsValidCoupon } from '../couponForm/couponFormSlice'
import CouponForm from '../couponForm/CouponForm'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { CheckCircleFill, EmojiSmile } from 'react-bootstrap-icons'
import TotalBuyNow from '../../components/TotalBuyNow'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { resetForm, selectInput } from '../personalForm/personalFormSlice'
import EmptyPage from '../../components/EmptyPage'

const BuyNow = () => {
    const [isValid, setIsValid] = useState(null)
    const buyNowItem = useSelector(selectBuyNowItem)
    const isValidCoupon = useSelector(selectIsValidCoupon)
    const input = useSelector(selectInput);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit = () => {
        const { name, city, email, address, payment, cardInfo } = input
        if (!name || !city || !email || !address || !payment) {
            const missingField = ["name", "city", "email", "address", "payment"].filter(field => !input[field])
            setIsValid(`(${missingField.join(", ")}) ${missingField.length > 1 ? 'are' : 'is'} Required`)
            toast.error(`(${missingField.join(", ")}) ${missingField.length > 1 ? 'are' : 'is'} Required`,
                {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true
                })
            return
        } else if (payment === "card" && (!cardInfo || Object.values(cardInfo).some((value) => !value))) {
            setIsValid("Please fill in the credit card details.");
            toast.error("Please fill in the credit card details.", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true
            });
            return;
        }
        navigate('/submitted')
        dispatch(resetBuyNow())
        dispatch(resetCoupon())
        dispatch(resetForm())

        toast.success("Your Order Placed!", {
            position: "top-center", autoClose: 2000, hideProgressBar: true
        })
    }

    return (
        <div className="mb-4">
            <h1 className="text-md lg:text-2xl font-semibold">Billing Details</h1>
            {buyNowItem ? (<section className="flex flex-col-reverse gap-4 lg:flex lg:flex-row justify-between w-full m-auto mt-12">
                {/* FORM COMPONENT */}
                <PersonalForm />

                <aside className="lg:w-1/2">
                    <div key={buyNowItem?.id} className="flex justify-between items-end lg:w-[60%] py-2">
                        <div>
                            <img
                                className="w-18"
                                src={buyNowItem?.thumbnail}
                                alt={buyNowItem?.title} />
                            <p>{buyNowItem?.title}</p>
                        </div>
                        <p className=" text-right">{formatPrice(buyNowItem?.price)}</p>
                    </div>
                    <div className="lg:w-[60%] mt-4">
                        {/* CALCULATE BILL */}
                        <TotalBuyNow />
                        {/* PAYMENT COMPONENT */}
                        <Payment />
                    </div>
                    <div className="my-2 lg:my-6">
                        {isValidCoupon ? (
                            <p className='text-green-800 text-sm lg:text-base mt-1 lg:mt-2 tracking-wider'>coupon is valid <span className='inline-block'> <CheckCircleFill /></span></p>
                        ) : (<CouponForm />)}
                    </div>
                    <div className="text-secondary">
                        {isValid}
                    </div>
                    <Button onClick={onSubmit} className="px-4 py-2 lg:py-4 lg:px-10 bg-secondary text-white rounded-lg mt-4">Checkout</Button>
                </aside>
            </section>
            ) : (
                <EmptyPage className='text-center space-y-7 m-5 text-xl h-[50vh]'>
                    <p className='font-semibold tracking-wider -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 absolute flex items-center gap-3 opacity-70'>the order has been placed<EmojiSmile size={30} /></p>
                </EmptyPage>
            )}
        </div>
    )
}

export default BuyNow