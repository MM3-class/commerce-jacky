import Skeleton from 'react-loading-skeleton'
import Loader from './Loader'

const SkeletonSingleProduct = () => {
  return (
      <Loader>
        <div className='text-center m-auto'>
            <Skeleton height={"80vh"} width={"90vw"} />
        </div>
      </Loader>
  )
}

export default SkeletonSingleProduct