import Loader from './Loader'
import Skeleton from 'react-loading-skeleton'

const SkeletonHeader = () => {
    return (
        <Loader>
            <div className='flex gap-10'>
                <Skeleton height={"70vh"} width={"20vw"} />
                <Skeleton height={"70vh"} width={"70vw"} />
            </div>
        </Loader>
    )
}

export default SkeletonHeader