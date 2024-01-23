import { useDispatch, useSelector } from "react-redux"
import { loadSingleProduct, selectIsError, selectIsLoading, selectSingleProduct } from "./singleProductSlice"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import SkeletonSingleProduct from "../../components/loader/SkeletonSingleProduct";
import ExploreProducts from "../products/exploreProducts/ExploreProducts";
import {Product} from "../../pages/index"
const SingleProduct = () => {
  const singleProduct = useSelector(selectSingleProduct);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadSingleProduct(id))
    window.scrollTo({top: 0})
  }, [dispatch, id])

  return (
    <div>
      <Error>{isError?.message || isError}</Error>
      {isLoading ? <SkeletonSingleProduct /> : (<Product singleProduct={singleProduct} />)}
      <div className="xl:my-[120px]">
        <h1 className="title">Related Items</h1>
        <ExploreProducts />
      </div>
    </div>
  )
}

export default SingleProduct