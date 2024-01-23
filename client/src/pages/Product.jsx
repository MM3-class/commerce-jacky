import uuid from "react-uuid";
import { ArrowRepeat, Heart, StarFill } from "react-bootstrap-icons";
import { calculatePrice, formatPrice, reverseColumn, starArray } from "../utils/helper";
import Button from "../components/Button";
import deliveryIcon from '../assets/icon-delivery.png'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addFavorite } from "../features/favorite/favoriteSlice";
import { useNavigate } from "react-router-dom";
import { addToBuyNow } from "../features/buyNow/buyNowSlice";

const Product = ({ singleProduct }) => {
    const { title, price, images, thumbnail, description, rating, stock, brand, category, discountPercentage, id } = singleProduct;
    const [selectedImg, setSelectedImg] = useState(thumbnail);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleSelectedImg = (img) => {
        setSelectedImg(img)
    }
    const handleBuyNow = () => {
        dispatch(addToBuyNow({id, thumbnail, title, price, rating, discountPercentage, stock}))
        navigate("/buyNow")
    }
    return (
        <>
            <small className=" lg:text-lg lg:tracking-widest lg:py-3">
                <span className="opacity-50">{`Account / ${category} / `}</span>
                <span className="!text-black">{brand}</span>
            </small>
            <div className="my-12 grid lg:grid-cols-12 gap-4 justify-center m-auto">
                {/* Images Gallery */}
                <div className="lg:col-span-8 xl:flex-row flex flex-col-reverse w-full lg:gap-0">
                    <div className="lg:col-span-2 xl:h-[650px] overflow-y-scroll no-scrollbar space-y-2 xl:flex-col flex items-center gap-1">
                        {reverseColumn(images)?.map((image) => (
                            <img
                                className={`border lg:h-[138px] lg:w-[170px] h-[80px] w-full object-cover cursor-pointer ${selectedImg === image && "opacity-50"}`}
                                key={uuid()}
                                src={image}
                                alt={title}
                                onClick={() => handleSelectedImg(image)} />
                        ))}
                    </div>
                    {/* Selected Img */}
                    <div className="lg:col-span-6 w-full">
                        <img className="lg:w-full lg:h-[600px] w-full object-contain lg:border xl:border-0" src={selectedImg} alt={title} />
                    </div>
                </div>
                {/* Description Product */}
                <div className="lg:col-span-4 lg:space-y-4">
                    <div className=" border-b lg:pb-6 lg:space-y-4 space-y-2 pb-4">
                        <h1 className="lg:text-2xl font-semibold">{title}</h1>
                        <div className="flex gap-3">
                            <p className="flex items-center space-x-1">{starArray.map((item) => (
                                rating >= item ?
                                    <StarFill key={uuid()} className="text-yellow-500" /> :
                                    <StarFill key={uuid()} className="text-gray-400" />
                            ))}
                                <span>({rating} Reviews)</span>
                            </p>
                            <span>{stock > 10 ?
                                (<span className="text-green-700"> in stock</span>) :
                                (<span className="text-secondary">{stock} left</span>)}
                            </span>
                        </div>
                        <p className="text-xl font-semibold">{formatPrice(price) || "00.00"} <span className="ml-2 opacity-50 line-through">{calculatePrice(price, discountPercentage)}</span></p>
                        <p>{description}</p>
                    </div>
                    <div className="space-y-4 py-4">
                        <p className="text-md font-semibold">{`Brand: ${brand}`}</p>
                        {discountPercentage &&
                            (<p className="text-md font-semibold text-secondary">{`Discount: ${discountPercentage}%`}</p>)}
                        <div className="flex items-center gap-6">
                            <Button
                            onClick={()=> dispatch(addToCart({id, title, price, stock, thumbnail}))}
                            className="bg-text2 text-white px-4 py-2 text-xs xl:text-base xl:px-8 xl:py-3 rounded-md"
                            >Add To Cart</Button>
                            <Button
                            onClick={handleBuyNow}
                             className="bg-secondary text-white px-4 py-2 text-xs xl:text-base xl:px-8 xl:py-3 rounded-md">Buy Now</Button>
                            <div 
                            onClick={() => dispatch(addFavorite({id, thumbnail, title, price, rating, discountPercentage, stock}))}
                            className="border p-3 active:text-secondary">
                                <Heart />
                            </div>
                        </div>
                    </div>
                    <div className="border px-2">
                        <div className="flex items-center xl:py-7 py-3">
                            <img className="bg-black p-1 mx-4 rounded-full w-[40px]" src={deliveryIcon} alt="delivery" />
                            <div className="inline-block">
                                <h3 className="text-lg font-medium">Free Delivery</h3>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex items-center xl:py-7 py-3">
                            <ArrowRepeat className="mx-4" size="40" />
                            <div className="inline-block">
                                <h3 className="text-lg font-medium">Free Delivery</h3>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product