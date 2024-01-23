import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SkeletonHorizontalCard from '../../components/loader/SkeletonHorizontalCard'
import RegularList from '../../components/RegularList'
import Card from '../../components/Card'
import Error from '../../components/Error'
import { getCategoryData, selectCategoryData, selectIsError, selectIsLoading } from './filterSlice'
import { useParams } from 'react-router-dom'

const GetCategory = () => {
    const categoryData = useSelector(selectCategoryData);
    const isLoading = useSelector(selectIsLoading)
    const isError = useSelector(selectIsError)
    const dispatch = useDispatch();
    const { path } = useParams()

    useEffect(() => {
        dispatch(getCategoryData(path))
        window.scrollTo({ top: 0 })
    }, [dispatch, path])
    console.log("CURRENT CATEGORY", path)

    return (
        <div>
            <h1 className='title text-4xl'>Category</h1>
            <p className='text-2xl tracking-wide mt-6'>Result is <span className='text-md font-semibold tracking-wider'>{path}</span></p>
            <div>
                {isLoading ?
                    (<SkeletonHorizontalCard data={categoryData} />) :
                    (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-center items-center w-full overflow-hidden m-auto">
                        <RegularList items={categoryData} itemComponent={Card} resourceName="product" />
                    </div>)}
                <Error>{isError?.message || isError}</Error>
            </div>
        </div>
    )
}

export default GetCategory