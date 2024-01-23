import Skeleton from 'react-loading-skeleton'
import uuid from 'react-uuid'
import Loader from './Loader'

const SkeletonHorizontalCard = ({ data }) => {
  return (
    <Loader>
      <div className='flex flex-wrap gap-4 items-center justify-between'>
        {data && data.map((_) => (
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

export default SkeletonHorizontalCard