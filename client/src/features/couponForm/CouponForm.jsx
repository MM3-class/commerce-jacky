import { CheckCircleFill, ExclamationTriangleFill } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsValidCoupon, selectUserCode, setUserCode, submitCoupon } from './couponFormSlice';
const CouponForm = () => {
    const userCode = useSelector(selectUserCode)
    const isValidCoupon = useSelector(selectIsValidCoupon)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(submitCoupon())
    }
    const onChange = (e) => {
        dispatch(setUserCode(e.target.value))
    }
    return (
        <form className='space-y-2' onSubmit={handleSubmit}>
            <input
                className=' xl:py-4 xl:px-12 outline-none mr-4 p-2 text-xs md:text-sm border'
                type="text"
                placeholder='Coupon code'
                name="coupon"
                value={userCode.trim()}
                onChange={onChange} />
            <input
                type='submit'
                value="Apply Coupon"
                className="bg-secondary hover:opacity-90 bg-opacity-95 active:bg-red-500 text-white xl:py-4 xl:px-12 p-2 text-xs md:text-sm cursor-pointer" />
            {isValidCoupon ?
                (<p className='text-green-800 text-sm lg:text-base mt-1 lg:mt-2 tracking-wider'>coupon is valid <span className='inline-block'> <CheckCircleFill /></span></p>) :
                <p className='text-blue-400 text-sm lg:text-base mt-1 lg:mt-2 tracking-wider'>type <span className='text-blue-800'>jack</span> to get 20% off <span className='inline-block'> <ExclamationTriangleFill /></span></p>}
        </form>
    )
}

export default CouponForm