import { ChevronDown, ChevronUp } from "react-bootstrap-icons"
import { formatPrice } from "../utils/helper"
import { useDispatch } from "react-redux"
import { decrementItem, incrementItem, removeCartItem } from "../features/cart/cartSlice"
import { useNavigate } from "react-router-dom"

const CartItems = ({ thumbnail, title, price, id, stock, quantity = 0 }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Calculate the subtotal upon Quantity
    const subtotalItem = () => {
        let tempSubtotal = 0
        tempSubtotal += price * quantity
        return tempSubtotal
    }
    const handleLink = (id) => {
        return navigate(`/product/${id}`)
    }
    const onRemove = (e) => {
        e.stopPropagation()
        dispatch(removeCartItem(id))
    }
    return (
        <tr
            className="text-center border shadow-md group cursor-pointer"
            onClick={() => handleLink(id)}>
            <td className="flex items-center gap-2 md:p-10 p-4">
                <div className="relative">
                    <span
                        onClick={onRemove}
                        className="invisible group-hover:visible cursor-pointer hover:bg-opacity-75 active:bg-opacity-80 absolute -left-2 -top-5 text-white bg-secondary rounded-full h-6 w-6">x</span>
                    <img className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] object-cover" src={thumbnail} alt={title} />
                </div>
                <p className="xl:block hidden">{title}</p>
            </td>
            <td className="md:p-10">{formatPrice(price)}</td>
            <td className="md:p-10">
                <div
                    className=" flex gap-3 items-center justify-center border xl:w-[20%] m-auto py-1 shadow-md rounded-md"
                    onClick={(e) => e.stopPropagation()}
                    quantity={quantity}
                >
                    <p className="lg:text-lg font-normal">{quantity}</p>
                    <div className="space-y-1 lg:space-y-2 font-normal">
                        <ChevronUp
                            onClick={() => dispatch(incrementItem(id))}
                            className={`cursor-pointer hover:opacity-60 w-3 lg:w-4 ${quantity >= stock && "opacity-20 invisible"}`} />
                        <ChevronDown
                            onClick={() => dispatch(decrementItem(id))}
                            className={`cursor-pointer hover:opacity-60 w-3 lg:w-4 ${quantity === 1 && "opacity-20"}`} />
                    </div>
                </div>
            </td>
            <td className="md:p-10">{formatPrice(subtotalItem())}</td>
        </tr>
    )
}

export default CartItems