import { useSelector } from 'react-redux';
import { selectCart } from '../features/cart/cartSlice';
import { formatPrice } from '../utils/helper';
import { selectIsValidCoupon, selectPercentage } from '../features/couponForm/couponFormSlice';

const TotalAmount = () => {
    const cartItems = useSelector(selectCart)
    const isValidCoupon = useSelector(selectIsValidCoupon)
    const percentage = useSelector(selectPercentage)

    const finalBill = () => {
        return {
            // Get subtotal before any charge or discount
            subtotal: function () {
                let totalAmount = 0;
                cartItems.forEach(item => {
                    totalAmount += item.price * item.quantity
                })
                return totalAmount
            },
            // Coupon Code for discount
            couponCode: function () {
                let subtotal = this.subtotal()
                let discountCost
                let afterCoupon
                const priceDiscounted = subtotal * (1 - percentage / 100)

                if (isValidCoupon) {
                    discountCost = subtotal - priceDiscounted
                    afterCoupon = subtotal - discountCost
                } else {
                    discountCost = 0
                    afterCoupon = subtotal
                }
                return { discountCost, priceDiscounted, afterCoupon }
            },
            afterCharge: function () {
                let afterCoupon = this.couponCode().afterCoupon
                let shipping = 30
                let afterShipping = 0
                if (afterCoupon >= 200 || afterCoupon <= 0) {
                    afterShipping = afterCoupon
                    shipping = 0
                } else {
                    afterShipping += afterCoupon + shipping
                }
                return { shipping, afterShipping }
            }
        }
    }
    const finalAmount = finalBill();

    return (
        <>
            <table className='table-fixed lg:border-spacing-y-2 w-full text-xs md:text-sm border-collapse lg:text-lg lg:font-semibold'>
                <tbody className='w-full'>
                    <tr className='border-b'>
                        <td className='lg:py-2 py-1'>Subtotal:</td>
                        <td className='text-right lg:py-2 py-1'>
                            {formatPrice(finalAmount.subtotal())}
                        </td>
                    </tr>
                    <tr className='border-b'>
                        <td className=' lg:py-2 py-1'>Shipping:</td>
                        <td className='text-right lg:py-2 py-1'>
                            {finalAmount.afterCharge().shipping === 0 ?
                                "" : <span className='text-sm mr-3 opacity-50'>$200+ shipping free</span>}
                            {finalAmount.couponCode().subtotal >= 200 ?
                                formatPrice(0) : formatPrice(finalAmount.afterCharge().shipping)}
                        </td>
                    </tr>
                    <tr className='border-b'>
                        <td className=' lg:py-2 py-1'>Discount:</td>
                        <td className='text-right lg:py-2 py-1 text-secondary'>
                            {`-${formatPrice(finalAmount.couponCode().discountCost)}`}
                        </td>
                    </tr>
                    <tr>
                        <td className=' lg:py-2 py-1'>Total:</td>
                        <td className='text-right lg:py-2 py-1'>
                            {formatPrice(finalAmount.afterCharge().afterShipping)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TotalAmount
