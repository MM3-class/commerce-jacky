import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsError, selectIsLoading, selectSearchData } from '../features/searchTerm/searchTermSlice';
import Error from '../components/Error';
import RegularList from '../components/RegularList';
import Card from '../components/Card';
import SkeletonHorizontalCard from '../components/loader/SkeletonHorizontalCard';

const Search = () => {
  const searchResult = useSelector(selectSearchData);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError)
  console.log(searchResult)
  return (
    <div>
      <h1 className='text-lg mb-4'>{`Search Result (${searchResult.length})`}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-center items-center w-full overflow-hidden m-auto">
        {isLoading ? (
          <SkeletonHorizontalCard data={searchResult} />
        ) : (
          <RegularList items={searchResult} itemComponent={Card} resourceName="product" />
        )}
        <Error>{isError?.message || isError}</Error>
      </div>
    </div>
  )
}

export default Search