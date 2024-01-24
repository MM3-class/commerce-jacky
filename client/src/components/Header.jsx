import { NavLink, useNavigate } from "react-router-dom"
import { Cart3, List, SuitHeart, XCircle } from "react-bootstrap-icons"
import { useSelector } from "react-redux"
import { selectCart } from "../features/cart/cartSlice"
import { selectFavorite } from "../features/favorite/favoriteSlice"
import { SearchTerm } from "../features"
import { useRef } from "react"
import jackyIcon from '../assets/JackyIcon.png'

const Header = ({ isOpen, setIsOpen }) => {
    const navRef = useRef(null)
    const iconRef = useRef(null)
    const navigate = useNavigate()
    const cartItems = useSelector(selectCart);
    const favoriteItems = useSelector(selectFavorite)

    const totalCartItems = () => {
        let total = 0
        cartItems?.forEach(item => {
            total += item.quantity
        });
        return total
    }
    const toggleMenu = () => {
        navRef.current.classList.toggle("toggle")
        iconRef.current.classList.toggle("toggle")
        setIsOpen(false)
    }
    return (
        <div className="flex justify-between items-center py-2 lg:py-6 mb-8 border-b shadow-sm md:px-16 px-2 ">
            <div onClick={() => navigate('/')} className=" cursor-pointer">
                <span className="font-semibold text-secondary">Jacky</span>
                <img className="pb-2 w-10" src={jackyIcon} alt="icon" />
            </div>
            <nav
                ref={navRef}
                className={`lg:space-x-4 lg:w-auto lg:static lg:text-text2 lg:bg-white lg:flex lg:flex-row xl:text-lg flex flex-col w-[100%] space-x-0 px-8 bg-black opacity-80 text-white absolute right-0 top-20 z-10 ${!isOpen && "hidden"}`}>
                <NavLink onClick={toggleMenu} className="focus:text-black lg:aria-[current=page]:border-b aria-[current=page]:border-button2 p-2 hover:opacity-50" to="/">Home</NavLink>
                <NavLink onClick={toggleMenu} className="focus:text-black lg:aria-[current=page]:border-b aria-[current=page]:border-button2 p-2 hover:opacity-50" to="/contact">Contact</NavLink>
                <NavLink onClick={toggleMenu} className="focus:text-black lg:aria-[current=page]:border-b aria-[current=page]:border-button2 p-2 hover:opacity-50" to="/about">About</NavLink>
                <NavLink onClick={toggleMenu} className="focus:text-black lg:aria-[current=page]:border-b aria-[current=page]:border-button2 p-2 hover:opacity-50 whitespace-nowrap" to="/all-products">Shop Now</NavLink>
            </nav>
            <div className="flex space-x-8 items-center">
                <SearchTerm />
                <div ref={iconRef} className={`flex space-x-6 text-2xl absolute top-24 z-10 right-6 lg:static lg:flex ${!isOpen && "hidden"}`}>
                    <div onClick={() => navigate('/favorite')} className="cursor-pointer relative text-center">
                        <SuitHeart onClick={toggleMenu} className=" focus:text-secondary" />
                        <span className="text-xs absolute bg-secondary text-white rounded-[50%] -right-1 -top-4 w-5 h-5">
                            {favoriteItems.length || 0}</span>
                    </div>
                    <div onClick={() => navigate('/cart') } className="cursor-pointer relative text-center">
                        <Cart3 onClick={toggleMenu} className="relative" />
                        <span className="text-xs absolute bg-secondary text-white rounded-[50%] -right-1 -top-4 w-5 h-5">
                            {totalCartItems() || 0}</span>
                    </div>
                </div>
            </div>
            {/* Menu Icon */}
            <div className="lg:hidden z-10 text-2xl opacity-80" onClick={() => setIsOpen(prev => !prev)}>
                {isOpen ? <XCircle /> : <List />}
            </div>
        </div>
    )
}

export default Header