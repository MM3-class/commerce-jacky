import React from 'react'
import { wallpaper } from '../data/homeWallpaper'
import uuid from 'react-uuid'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeaderSlide = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0,
    infinite: true,
    speed: 700,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="home"></div>
    )
  };
  return (
    <div>
      <Slider {...settings}>
        {wallpaper.map((item) => (
          <div className='lg:h-[calc(100vh-150px)] xl:h-[calc(100vh-180px)] w-full' key={uuid()}>
            <img className='h-full w-full object-cover' src={item} alt={item} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default HeaderSlide