import music from '../assets/Frame-600.png'
import Button from './Button'
const MusicX = () => {
    return (
        <div className='relative h-[400px] lg:h-[800px] w-full bg-no-repeat bg-contain bg-center' style={{ backgroundImage: `url(${music})` }}>
            <div className='absolute w-[40%] top-[35%] lg:top-[30%] space-y-2 lg:space-y-14 ml-4 lg:ml-14 text-white'>
                <p className='text-button1 text-base font-semibold'>categories</p>
                <h1 className='xl:text-6xl text-xs md:text-2xl font-normal lg:font-semibold sm:leading-6 lg:leading-[70px]'>Enhance Your Music Experience</h1>
                <Button className='bg-button1 md:py-4 md:px-12 py-2 px-4 rounded-md'>Buy Now!</Button>
            </div>
        </div>
    )
}

export default MusicX