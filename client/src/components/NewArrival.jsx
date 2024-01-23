import lady from '../assets/lady.png';
import speakers from '../assets/speakers2.png';
import playstation from '../assets/playstation.png';
import perfumes from '../assets/perfumes1.png';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const NewArrival = () => {
  const navigate = useNavigate()
  return (
    <div className="grid grid-rows-4 grid-flow-row lg:grid-rows-2 lg:grid-flow-col my-6 lg:section gap-7 w-full">
      <div className='col-span-2 row-span-full relative'>
        <div className="text-white absolute md:bottom-8 md:left-8 left-2 bottom-2 md:space-y-3 w-[242px]">
          <h3 className='text-lg md:text-2xl font-medium'>Playstation 5</h3>
          <p className='text-sm leading-4 md:leading-6'>Black and White version of the PS5 coming out on sale.</p>
          <Button className='underline underline-offset-4' onClick={()=>navigate('/category/smartphones')}>Shop Now</Button>
        </div>
        <img className='w-full' src={playstation} alt={playstation} />
      </div>
      <div className='col-span-2 relative'>
        <div className="text-white absolute md:bottom-8 md:left-8 left-2 bottom-2 md:space-y-3 w-[242px]">
          <h3 className='text-lg md:text-2xl font-medium'>Women’s Collections</h3>
          <p className='text-sm leading-4 md:leading-6'>Featured woman collections that give you another vibe.</p>
          <Button className='underline underline-offset-4' onClick={()=>navigate('/category/womens-dresses')}>Shop Now</Button>
        </div>
        <img className='w-full' src={lady} alt={lady} />
      </div>
      <div className='relative'>
        <div className="text-white absolute md:bottom-8 md:left-8 left-2 bottom-2 md:space-y-3 w-[242px]">
          <h3 className='text-lg md:text-2xl font-medium'>Speakers</h3>
          <p className='text-sm leading-4 md:leading-6'>Amazon wireless speakers</p>
          <Button className='underline underline-offset-4' onClick={()=>navigate('/category/laptops')}>Shop Now</Button>
        </div>
        <img className='w-full' src={speakers} alt={speakers} />
      </div>
      <div className='relative'>
        <div className="text-white absolute md:bottom-8 md:left-8 left-2 bottom-2 md:space-y-3 w-[242px]">
          <h3 className='text-lg md:text-2xl font-medium'>Perfume</h3>
          <p className='text-sm leading-4 md:leading-6'>GUCCI INTENSE OUD EDP</p>
          <Button className='underline underline-offset-4' onClick={()=>navigate('/category/fragrances')}>Shop Now</Button>
        </div>
        <img className='w-full' src={perfumes} alt={perfumes} />
      </div>
    </div>
  )
}

export default NewArrival