import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {
  loadAllFlashSale,
  selectAllFlashSale,
  selectErrorFlashSale,
  selectIsLoading
} from "./flashSaleSlice"
import RegularList from "../../../components/RegularList"
import Card from "../../../components/Card";
import SkeletonHorizontalCard from "../../../components/loader/SkeletonHorizontalCard";
import Pagination from "../../../components/Pagination";
import Error from "../../../components/Error";
import ExploreProducts from '../exploreProducts/ExploreProducts'

const AllFlashSale = () => {
  const allFlashSale = useSelector(selectAllFlashSale);
  const isLoading = useSelector(selectIsLoading)
  const isError = useSelector(selectErrorFlashSale);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(15);
  const indexOfLastPage = currentPage * recordsPerPage;
  const indexOfFirstPage = indexOfLastPage - recordsPerPage;
  const currentRecord = allFlashSale.slice(indexOfFirstPage, indexOfLastPage);
  const totalPages = Math.ceil(allFlashSale.length / recordsPerPage)

  useEffect(() => {
    dispatch(loadAllFlashSale())
    window.scrollTo({ top: 0 })
  }, [dispatch]);

  return (
    <div className="w-full">
      <h1 className="sub-title">Today's Deals</h1>
      <aside>
        <ExploreProducts />
      </aside>
      <section className="section">
        <h1 className="title mb-5">All Flash Sale Products</h1>
        {isLoading ?
          (<SkeletonHorizontalCard data={allFlashSale} />) :
          (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-center items-center w-full overflow-hidden m-auto">
            <RegularList items={currentRecord} itemComponent={Card} resourceName="product" />
          </div>)}
      </section>
      <Error>{isError?.message || isError}</Error>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </div>
  )
}

export default AllFlashSale