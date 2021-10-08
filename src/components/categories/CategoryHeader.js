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
    <div className='overflow-hidden font-rubik'>
      <Slider {...settings}>
        <div className='relative bg-cover bg-center bg-no-repeat min-h-[300px] lg:min-h-[450px] bg-electronics-hero'>
          <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-60'></div>
          <div className='relative max-w-4xl mx-auto grid min-h-[300px] lg:min-h-[450px] place-content-center container'>
            <h1 className='mb-8 text-3xl font-semibold leading-relaxed text-center text-gray-100 lg:leading-relaxed lg:mb-10 lg:text-5xl'>
              Best Electronics at the Cheapest Price
            </h1>
            <p className='text-base font-medium text-center text-gray-300 lg:text-xl'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              quia culpa voluptatibus aperiam unde iusto?
            </p>
          </div>
        </div>

        <div className='relative bg-cover bg-center bg-no-repeat min-h-[300px] lg:min-h-[450px] bg-men-hero'>
          <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-60'></div>
          <div className='relative container max-w-2xl mx-auto grid min-h-[300px] lg:min-h-[450px] place-content-center'>
            <h1 className='mb-8 text-3xl font-semibold leading-relaxed text-center text-gray-100 lg:leading-relaxed lg:mb-10 lg:text-5xl'>
              Trending Men's Wear at the Cheapest Price
            </h1>
            <p className='text-base font-medium text-center text-gray-300 lg:text-xl'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              quia culpa voluptatibus aperiam unde iusto?
            </p>
          </div>
        </div>

        <div className='relative container bg-cover bg-center bg-no-repeat min-h-[300px] lg:min-h-[450px] bg-women-hero'>
          <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-60'></div>
          <div className='relative max-w-2xl mx-auto grid min-h-[300px] lg:min-h-[450px] place-content-center'>
            <h1 className='mb-8 text-3xl font-semibold leading-relaxed text-center text-gray-100 lg:leading-relaxed lg:mb-10 lg:text-5xl'>
              Trendy Women's Wear at the Cheapest Price
            </h1>
            <p className='text-base font-medium text-center text-gray-300 lg:text-xl'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              quia culpa voluptatibus aperiam unde iusto?
            </p>
          </div>
        </div>

        <div className='relative container bg-cover bg-center bg-no-repeat min-h-[300px] lg:min-h-[450px] bg-jwellery-hero'>
          <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-60'></div>
          <div className='relative max-w-2xl mx-auto grid min-h-[300px] lg:min-h-[450px] place-content-center'>
            <h1 className='mb-8 text-3xl font-semibold leading-relaxed text-center text-gray-100 lg:leading-relaxed lg:mb-10 lg:text-5xl'>
              Trending Jwellery at the Cheapest Price
            </h1>
            <p className='text-base font-medium text-center text-gray-300 lg:text-xl'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              quia culpa voluptatibus aperiam unde iusto?
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CategoryHeader;
