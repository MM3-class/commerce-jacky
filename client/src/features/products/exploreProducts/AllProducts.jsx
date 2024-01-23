import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {
  loadAllProducts,
  selectAllProductsData,
  selectError,
  selectIsLoading
} from "./exploreProductsSlice";
import RegularList from "../../../components/RegularList";
import Card from "../../../components/Card";
import SkeletonHorizontalCard from "../../../components/loader/SkeletonHorizontalCard";
import Error from "../../../components/Error";
import Pagination from "../../../components/Pagination";
import FlashSale from "../flashSale/FlashSale";

const AllProducts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading)
  const isError = useSelector(selectError)
  const allProducts = useSelector(selectAllProductsData);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordPerPage] = useState(40);
  const indexOfLastPage = currentPage * recordPerPage;
  const indexOfFirstPage = indexOfLastPage - recordPerPage;
  const currentRecord = allProducts.slice(indexOfFirstPage, indexOfLastPage);
  const totalPages = Math.ceil(allProducts.length / recordPerPage);

  useEffect(() => {
    dispatch(loadAllProducts())
    window.scrollTo({ top: 0 })
  }, [dispatch])
  return (
    <div>
      <div className="section">
        <h1 className="title">AllProducts</h1>
        {isLoading ?
          (<SkeletonHorizontalCard data={allProducts} />) :
          (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-center items-center w-full overflow-hidden m-auto">
            <RegularList items={currentRecord} itemComponent={Card} resourceName="product" />
          </div>)}
        <Error>{isError?.message || isError}</Error>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </div>
      <div className="section">
        <FlashSale />
      </div>
    </div>
  )
}

export default AllProducts