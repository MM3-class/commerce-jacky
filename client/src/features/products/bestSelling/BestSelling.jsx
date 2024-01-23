import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import Card from '../../../components/Card';
import SkeletonVerticalCard from '../../../components/loader/SkeletonVerticalCard';
import Error from '../../../components/Error';
import Button from '../../../components/Button';
import { randomProducts } from '../../../utils/helper';
import {
  loadBestSelling,
  selectBestSelling,
  selectIsError,
  selectIsLoading
} from './bestSellingSlice'

const BestSelling = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const bestSellingProducts = useSelector(selectBestSelling);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(loadBestSelling())
  }, [dispatch])

  return (
    <div className='my-6'>
      <Button className="viewAll absolute -bottom-[55px] right-[50%] translate-x-[50%] lg:top-[85px] lg:h-[55px] lg:right-[8%]" onClick={() => navigate('/all-best-selling-products')}>View All </Button>
      <Error>{isError?.message || isError}</Error>
      <div>
        {isLoading ? (<SkeletonVerticalCard data={bestSellingProducts} />) : (
          <div className='flex justify-between gap-6 md:gap-10 overflow-x-auto no-scrollbar'>
            {bestSellingProducts && randomProducts(bestSellingProducts).map((product) => (
              <Card key={uuid()} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default BestSelling