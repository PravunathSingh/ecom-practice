import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const CategoryHeader = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <div className='overflow-hidden'>
      <Slider {...settings}>
        <div className='relative bg-cover bg-center bg-no-repeat min-h-[450px] bg-electronics-hero'>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
          <div className='relative grid min-h-[450px] place-content-center'>
            <h1 className='text-3xl font-medium text-white'>
              Lorem ipsum dolor sit amet.
            </h1>
          </div>
        </div>
        <div className='relative bg-no-repeat bg-cover bg-center min-h-[450px] bg-men-hero'>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
        </div>
        <div className='relative min-h-[450px] bg-cover bg-center bg-no-repeat bg-women-hero'>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
        </div>
        <div className='relative bg-no-repeat bg-cover bg-center min-h-[450px] bg-jwellery-hero'>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
        </div>
      </Slider>
    </div>
  );
};

export default CategoryHeader;
