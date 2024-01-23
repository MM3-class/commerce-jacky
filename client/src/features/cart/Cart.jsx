import { useDispatch, useSelector } from 'react-redux'
import CartItems from '../../components/CartItems'
import { selectCart, clearCart } from './cartSlice'
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button'
import TotalAmount from '../../components/TotalAmount';
import CouponForm from '../couponForm/CouponForm';
import { EmojiFrown } from 'react-bootstrap-icons';
import EmptyPage from '../../components/EmptyPage';


const Cart = () => {
  const cartItems = useSelector(selectCart);
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div className='w-full my-8 space-y-8'>
      <h1 className='uppercase text-lg font-medium'>{location.pathname.substring(1)}</h1>
      {cartItems.length !== 0 ?
        (
          <div>
            <table className="w-full m-auto table-fixed text-md font-medium border-separate border-spacing-y-4">
              <thead className="shadow-md w-full">
                <tr>
                  <th className='p-6'>Product</th>
                  <th className='p-6'>Price</th>
                  <th className='p-6'>Quantity</th>
                  <th className='p-6'>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((item) => (
                  <CartItems
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    thumbnail={item.thumbnail}
                    stock={item.stock}
                    quantity={item.quantity} />
                ))}
              </tbody>
            </table>
            <div className='lg:flex justify-between lg:mt-20 space-y-4'>

              {/* COUPON FORM COMPONENT */}
              <CouponForm />
              <div className='border border-black p-4 space-y-4 md:w-[40%]'>
                <h1 className='lg:text-lg text-sm lg:font-bold'>Cart Total</h1>

                {/* TOTAL AMOUNT COMPONENT */}
                <TotalAmount />
                <div className='text-center'>
                  <Button
                    onClick={() => navigate('/checkout')}
                    className="bg-secondary hover:opacity-90 bg-opacity-95 active:bg-red-500 text-white xl:py-4 xl:px-12 p-2 text-xs md:text-sm">Process to Checkout</Button>
                </div>
              </div>
            </div>
          </div>
        ) :
        (
          <EmptyPage className='text-center space-y-7 m-5 text-xl h-[50vh]'>
            <p className='font-semibold tracking-wider -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 absolute flex items-center gap-3 opacity-70'>Cart is Empty <EmojiFrown size={30} /></p>
          </EmptyPage>
        )}
      <div className='flex justify-between lg:text-lg font-semibold'>
        <Button
          onClick={() => navigate('/all-products')}
          className="border border-gray-600 py-2 px-8 lg:py-4 lg:px-12 hover:bg-gray-100">Return To Shop</Button>
        <Button
          onClick={() => dispatch(clearCart())}
          className={`border border-gray-600 py-2 px-8 lg:py-4 lg:px-12 hover:bg-gray-100 ${cartItems.length === 0 && "cursor-not-allowed opacity-50 hover:bg-white"}`}>Clear Cart</Button>
      </div>
    </div>
  )
}

export default Cart