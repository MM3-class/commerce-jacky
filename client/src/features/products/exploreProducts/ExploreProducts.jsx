import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import VerticalList from "../../../components/VerticalList";
import Card from "../../../components/Card";
import Error from "../../../components/Error";
import Button from "../../../components/Button";
import SkeletonVerticalCard from "../../../components/loader/SkeletonVerticalCard";
import { useNavigate } from "react-router-dom";
import {
  loadExploreProducts,
  selectExploreProducts,
  selectError,
  selectIsLoading
} from "./exploreProductsSlice"
import { randomProducts } from "../../../utils/helper";

const ExploreProducts = () => {
  const isLoading = useSelector(selectIsLoading)
  const isError = useSelector(selectError)
  const exploreProducts = useSelector(selectExploreProducts)
  const dispatch = useDispatch();
  const navigate= useNavigate();

  useEffect(() => {
    dispatch(loadExploreProducts())
  }, [dispatch])
  return (
    <div className="mx-auto my-6">
      {isLoading ? (<SkeletonVerticalCard data={exploreProducts} />) : (<VerticalList items={randomProducts(exploreProducts)} itemComponent={Card} resourceName='product' />)}
      {<Error>{isError?.message || isError}</Error>}
      <div className=" w-full text-center">
      <Button className='bg-secondary text-white md:py-4 md:px-14  py-3 px-6 rounded-md' onClick={()=>navigate('/all-products')}>View All Products</Button>
      </div>
    </div>
  )
}

export default ExploreProducts