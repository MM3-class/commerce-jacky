import React from 'react'
import { useSelector } from 'react-redux'
import { selectFavorite } from './favoriteSlice'
import Card from '../../components/Card'
import EmptyPage from '../../components/EmptyPage'
import { EmojiFrown } from 'react-bootstrap-icons'

const Favorite = () => {
  const favoriteItems = useSelector(selectFavorite)
  console.log(favoriteItems)
  return (
    <div className='space-y-4'>
      <h1 className='lg:text-2xl text-md font-semibold'>{`Favorite List ${favoriteItems.length !== 0 ? `(${favoriteItems.length})` : ""}`}</h1>
      <div className='flex flex-wrap justify-center gap-4'>
        {favoriteItems.length ? favoriteItems.map((item) => (
          <Card product={item} key={item.id} />
        )) : (
          <EmptyPage className='text-center space-y-7 m-5 text-xl h-[50vh]'>
            <p className='font-semibold tracking-wider -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 absolute flex items-center gap-3 opacity-70'>Favorite List is Empty <EmojiFrown size={30} /></p>
          </EmptyPage>
        )}
      </div>
    </div>
  )
}

export default Favorite