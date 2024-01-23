import Slider from 'react-slick'
import about from '../assets/about/about.png'
import group from '../assets/about/group_about.png'
import money from '../assets/about/Moneybag_about.png'
import sale from '../assets/about/Shopping_about.png'
import team from '../data/team'
import uuid from 'react-uuid'
import Services from '../components/Services'
const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="home"></div>
    ),
    responsive: [

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='space-y-4'>
      <h1 className='lg:text-2xl md:mb-10 font-semibold'>About</h1>
      <main>
        <article className='flex lg:flex-row flex-col-reverse items-center justify-between gap-4'>
          <aside className='lg:w-1/2 xl:space-y-10 space-y-4 xl:mr-20'>
            <h1 className='xl:text-6xl text-2xl font-semibold'>Our Story</h1>
            <p className='mb-6'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </aside>
          <figure className='lg:w-1/2 xl:h-[600px] h-[200px] w-full'>
            <img src={about} className='w-full h-full xl:h-[600px] object-cover' alt="about story" />
          </figure>
        </article>
        <section className='flex flex-wrap gap-4 justify-between items-center xl:my-[140px] my-10'>
          <figure className='border lg:py-8 lg:px-12 p-4 text-center m-auto hover:bg-secondary hover:text-white transition duration-700'>
            <img src={group} alt="group" className='text-black m-auto mb-6 bg-text2 rounded-full p-1' />
            <figcaption>
              <h2 className='lg:text-3xl text-xl font-bold mb-2'>10.5K</h2>
              <p>Sellers active our site</p>
            </figcaption>
          </figure>
          <figure className='border lg:py-8 lg:px-12 p-4 text-center m-auto hover:bg-secondary hover:text-white transition duration-700'>
            <img src={money} alt="money" className='text-black m-auto mb-6 bg-text2 rounded-full p-1' />
            <figcaption>
              <h2 className='lg:text-3xl text-xl font-bold mb-2'>33K</h2>
              <p>Monthly Product Sale</p>
            </figcaption>
          </figure>
          <figure className='border lg:py-8 lg:px-12 p-4 text-center m-auto hover:bg-secondary hover:text-white transition duration-700'>
            <img src={money} alt="shopping" className='text-black m-auto mb-6 bg-text2 rounded-full p-1' />
            <figcaption>
              <h2 className='lg:text-3xl text-xl font-bold mb-2'>45.5K</h2>
              <p>Customer active in our site</p>
            </figcaption>
          </figure>
          <figure className='border lg:py-8 lg:px-12 p-4 text-center m-auto hover:bg-secondary hover:text-white transition duration-700'>
            <img src={sale} alt="sale" className='text-black m-auto mb-6 bg-text2 rounded-full p-1' />
            <figcaption>
              <h2 className='lg:text-3xl text-xl font-bold mb-2'>25K</h2>
              <p>Annual gross sale in our site</p>
            </figcaption>
          </figure>
        </section>
        <section className='w-full xl:my-[140px] my-10'>
          <Slider {...settings}>
            {team.map((item) => (
              <figure key={uuid()} className='py-20 m-auto px-2'>
                <img src={item.image} alt={item.name} className='lg:w-[370px] w-[200px] h-[250px] lg:h-[430px] ' />
                <figcaption className='lg:mt-6 mt-2 space-y-2 block'>
                  <h2 className='lg:text-3xl text-xl font-medium'>{item.name.toUpperCase()}</h2>
                  <p className='lg:text-xl'>{item.position.charAt(0).toUpperCase() + item.position.slice(1)}</p>
                  <div className='flex items-center gap-4'>
                    <small className='md:text-xl'>{item.instagram}</small>
                    <small className='md:text-xl'>{item.twitter}</small>
                    <small className='md:text-xl'>{item.linkedin}</small>
                  </div>
                </figcaption>
              </figure>
            ))}
          </Slider>
        </section>
        <section className='section my-[140px]'>
          <Services />
        </section>
      </main>
    </div>
  )
}

export default About