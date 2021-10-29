import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const HomeHero = () => {
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
        <div className='relative grid place-items-center bg-cover bg-center bg-no-repeat min-h-[300px] lg:min-h-[450px] bg-home-hero1'>
          <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-60'></div>
          <div className='relative max-w-4xl mx-auto grid min-h-[300px] lg:min-h-[450px] place-content-center container'>
            <h1 className='mb-8 text-3xl font-semibold leading-relaxed text-center text-gray-100 lg:leading-relaxed lg:mb-10 lg:text-5xl'>
              Best Collection of Products
            </h1>
            <p className='mb-6 text-base font-medium leading-relaxed text-center text-gray-300 lg:leading-relaxed lg:mb-9 lg:text-xl'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem
              ipsum dolor sit, amet consectetur adipisicing elit
            </p>
            <div className='mx-auto'>
              <Link to='/all-products'>
                <button className='w-full px-10 py-2 mb-40 text-base font-medium transition-all duration-300 border-2 md:mb-0 md:text-lg md:w-auto border-brand-primary hover:bg-brand-primary bg-bg-brand text-brand-primary rounded-xl hover:text-bg-brand'>
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className='relative bg-cover bg-center bg-no-repeat min-h-[300px] lg:min-h-[450px] bg-home-hero2'>
          <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-60'></div>
          <div className='relative max-w-4xl mx-auto grid min-h-[300px] lg:min-h-[450px] place-content-center container'>
            <h1 className='mb-8 text-3xl font-semibold leading-relaxed text-center text-gray-100 lg:leading-relaxed lg:mb-10 lg:text-5xl'>
              Freshest Collection of Products
            </h1>
            <p className='mb-6 text-base font-medium leading-relaxed text-center text-gray-300 lg:leading-relaxed lg:mb-9 lg:text-xl'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem
              ipsum dolor sit, amet consectetur adipisicing elit
            </p>
            <div className='mx-auto'>
              <Link to='/all-products'>
                <button className='w-full px-10 py-2 mb-40 text-base font-medium transition-all duration-300 border-2 md:mb-0 md:text-lg md:w-auto border-brand-primary hover:bg-brand-primary bg-bg-brand text-brand-primary rounded-xl hover:text-bg-brand'>
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeHero;
