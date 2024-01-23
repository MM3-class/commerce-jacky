import { useDispatch, useSelector } from "react-redux"
import { clearCart, selectCart } from "../features/cart/cartSlice"
import { formatPrice } from "../utils/helper";
import TotalAmount from "../components/TotalAmount";
import Button from "../components/Button";
import Payment from "../components/Payment";
import CouponForm from "../features/couponForm/CouponForm"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { PersonalForm } from "../features";
import { selectInput, resetForm } from "../features/personalForm/personalFormSlice";
import { resetCoupon, selectIsValidCoupon } from "../features/couponForm/couponFormSlice";
import { CheckCircleFill } from "react-bootstrap-icons";

const Checkout = () => {
  const [isValid, setIsValid] = useState(null)
  const cartItems = useSelector(selectCart);
  const input = useSelector(selectInput);
  const isValidCoupon = useSelector(selectIsValidCoupon)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(input)

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
    dispatch(clearCart())
    dispatch(resetForm())
    dispatch(resetCoupon())
    toast.success("Your Order Placed!", { position: "top-center", autoClose: 2000, hideProgressBar: true })
  }
  useEffect(() => {
    window.scrollTo({ top: 100 })
  })
  return (
    <div className="mb-4">
      <h1 className="text-md lg:text-2xl font-semibold">Billing Details</h1>
      <section className="flex flex-col-reverse gap-4 lg:flex lg:flex-row justify-between w-full m-auto mt-12">
        {/* FORM COMPONENT */}
        <PersonalForm />
        <aside className="lg:w-1/2">
          {cartItems.length && cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center lg:w-[60%] py-2">
              <div className="flex gap-4 items-center">
                <img
                  className="w-12"
                  src={item.thumbnail}
                  alt={item.title} />
                <p className="truncate w-20">{item.title}</p>
              </div>
              <p>{item.quantity}</p>
              <p className="w-20 text-right">{formatPrice(item.price * item.quantity)}</p>
            </div>
          ))}
          <div className="lg:w-[60%] mt-4">
            {/* CALCULATE BILL */}
            <TotalAmount />
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
          <Button onClick={onSubmit} className="px-4 py-2 lg:py-4 lg:px-10 bg-secondary text-white rounded-lg mt-4">Place Order</Button>
        </aside>
      </section>
    </div>
  )
}

export default Checkout