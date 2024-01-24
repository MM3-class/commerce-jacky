import { Heart, StarFill, Trash } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { calculatePrice, formatPrice, starArray } from '../utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import Button from './Button';
import { addFavorite, removeFavorite, selectFavorite } from '../features/favorite/favoriteSlice';

const Card = ({ product }) => {
    const { thumbnail, title, price, rating, discountPercentage, id, stock } = product;
    const dispatch = useDispatch();
    const favoriteItem = useSelector(selectFavorite)
    const isFavorite = favoriteItem.some(item => item.id === id)
    return (
        <div className='relative group m-auto md:m-0'>
            {stock && (
                <div>
                    <Link to={`/product/${id}`} className='mx-auto my-4 transition-opacity duration-300 max-sm:text-xs'>
                        <figure className='md:w-[270px] md:h-[250px] w-[200px] h-[200px] relative'>
                            <img src={thumbnail} alt={title} className='w-full h-full p-0 md:p-4 xl:p-10 bg-slate-300 md:hover:p-0 md:hover:border transition-all duration-700' />

                            <figcaption className='absolute top-0 right-2 flex items-center justify-between m-auto w-full'>
                                <p className='px-2 py-1 bg-button2 text-white m-2 rounded-md'>-<span className='px-1'>{discountPercentage}</span>%</p>
                            </figcaption>
                        </figure>
                        <div className='p-2 space-y-2'>
                            <p className='truncate overflow-hidden'>{title}</p>
                            <p className='text-button2'>{formatPrice(price) || "00.00"}<span className="ml-2 opacity-50 line-through text-black">{calculatePrice(price, discountPercentage)}</span></p>
                            <p className='flex items-center space-x-1'>{starArray.map((item) => (
                                rating >= item ?
                                    <StarFill key={uuid()} className='text-yellow-500' /> :
                                    <StarFill key={uuid()} className='text-gray-400' />
                            ))} <span>({rating})</span>
                                <span>{stock > 10 ?
                                    (<span className="text-green-700"> in stock</span>) :
                                    (<span className="text-secondary bg-red-300 px-4 py-[2px] font-semibold">{stock} left</span>)}
                                </span>
                            </p>
                        </div>
                    </Link>
                </div>
            )}
            {isFavorite ? (
                <Trash
                    onClick={() => dispatch(removeFavorite(id))}
                    className=' hover:bg-button2 hover:text-white transition duration-500 bg-white p-2 rounded-full absolute top-1/4 space-y-1 invisible group-hover:visible z-50'
                    size='30' />
            ) : (

                <Heart
                    onClick={() => dispatch(addFavorite({ id, thumbnail, title, price, rating, discountPercentage, stock }))}
                    className=' hover:bg-button2 hover:text-white transition duration-500 bg-white p-2 rounded-full absolute top-1/4 space-y-1 invisible group-hover:visible z-50'
                    size='30' />
            )}
            <Button
                onClick={() => dispatch(addToCart({ id, title, price, stock, thumbnail }))}
                className='absolute bottom-[80px] md:bottom-[100px] p-2 w-[200px] md:w-[270px] bg-text2 text-white text-center pointer-events-auto invisible group-hover:visible active:bg-gray-700'>Add to Cart</Button>
        </div>

    )
}
export default Card