import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import SkeletonHorizontalCard from "../../../components/loader/SkeletonHorizontalCard";
import RegularList from '../../../components/RegularList'
import Card from '../../../components/Card'
import {
  loadAllBestSelling,
  selectAllBestSellingData,
  selectIsError,
  selectIsLoading
} from "./bestSellingSlice"
import Error from "../../../components/Error";
import Pagination from "../../../components/Pagination";
import ExploreProducts from "../exploreProducts/ExploreProducts";

const AllBestSelling = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const allBestSelling = useSelector(selectAllBestSellingData)
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(15);
  const indexOfLastPage = currentPage * recordsPerPage;
  const indexOfFirstPage = indexOfLastPage - recordsPerPage;
  const currentRecord = allBestSelling.slice(indexOfFirstPage, indexOfLastPage)
  const totalPages = Math.ceil(allBestSelling.length / recordsPerPage)
  
  useEffect(() => {
    dispatch(loadAllBestSelling())
    window.scrollTo({top: 0})
  }, [dispatch])
  return (
    <div>
      <aside className="section">
        <ExploreProducts />
      </aside>
      <h1 className="title">All Best Selling</h1>
      {isLoading ? (<SkeletonHorizontalCard data={allBestSelling} />) :
        (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-center items-center w-full overflow-hidden m-auto">
          <RegularList items={currentRecord} itemComponent={Card} resourceName='product' />
        </div>)}
      {isError && (<Error>{isError?.message || isError}</Error>)}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </div>
  )
}

export default AllBestSelling