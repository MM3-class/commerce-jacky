import React from 'react'
import Skeleton from 'react-loading-skeleton'
import uuid from 'react-uuid'
import Loader from './Loader'

const SkeletonVerticalCard = ({ data }) => {
  return (
    <Loader>
      <div className='flex items-center justify-around gap-3 w-full'>
        {data.map((_) => (
          <div key={uuid()}>
            <Skeleton height={200} width={200} />
            <Skeleton width={150} />
            <Skeleton width={200} />
            <Skeleton width={100} />
          </div>
        ))}
      </div>
    </Loader>
  )
}

export default SkeletonVerticalCard