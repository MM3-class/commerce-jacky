import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadFlashSale, selectErrorFlashSale, selectFlashSale, selectIsLoading } from './flashSaleSlice'
import Error from '../../../components/Error';
import 'react-loading-skeleton/dist/skeleton.css'
import Card from '../../../components/Card';
import VerticalList from '../../../components/VerticalList';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import SkeletonVerticalCard from '../../../components/loader/SkeletonVerticalCard';
import { randomProducts } from '../../../utils/helper';


const FlashSale = () => {
  const flashSaleData = useSelector(selectFlashSale);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectErrorFlashSale);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(loadFlashSale())
  }, [dispatch])

  return (
    <div className='border-b-2 pb-14'>
      <div className='w-full overflow-x-hidden pb-12 pt-6'>
        <Error>{isError?.message || isError}</Error>
        <h3 className='lg:title text-xl font-semibold text-secondary'>Today's</h3>
        <div className='w-full'>
          <h1 className='lg:sub-title text-xl font-semibold'>Flash Sales</h1>
          {isLoading ? (<SkeletonVerticalCard data={flashSaleData} />) :
          (<VerticalList items={randomProducts(flashSaleData)} resourceName="product" itemComponent={Card} />)}
        </div>
      </div>
      <div className='text-center'>
        <Button onClick={() => navigate('/all-flash-sale-products')} className="viewAll">View All Products</Button>
      </div>
    </div>
  )
}

export default FlashSale