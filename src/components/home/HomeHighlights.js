import React from 'react';

const HomeHighlights = () => {
  return (
    <div className='container mt-20 mb-20 font-rubik lg:mt-32 lg:mb-32'>
      <div className='max-w-4xl mx-auto mb-12 lg:mb-16'>
        <h3 className='mb-5 text-3xl font-semibold text-center text-brand-primary lg:text-4xl lg:mb-8'>
          Our Delivery Process
        </h3>
        <p className='text-lg leading-relaxed text-center text-gray-700 lg:text-xl lg:leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
          laudantium.
        </p>
      </div>
      <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
        <div>
          <div className='mx-auto mb-3 w-max lg:mb-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-12 w-12'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
          </div>
          <h6 className='mb-2 text-xl font-medium text-center text-brand-primary lg:text-2xl lg:mb-4'>
            Order Online
          </h6>
          <p className='text-center text-gray-600'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </p>
        </div>

        <div>
          <div className='mx-auto mb-3 w-max lg:mb-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-12 w-12'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
              />
            </svg>
          </div>
          <h6 className='mb-2 text-xl font-medium text-center text-brand-primary lg:text-2xl lg:mb-4'>
            Zero Cost EMIs
          </h6>
          <p className='text-center text-gray-600'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </p>
        </div>

        <div>
          <div className='mx-auto mb-3 w-max lg:mb-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-12 w-12'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z' />
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0'
              />
            </svg>
          </div>
          <h6 className='mb-2 text-xl font-medium text-center text-brand-primary lg:text-2xl lg:mb-4'>
            Free Shipping
          </h6>
          <p className='text-center text-gray-600'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </p>
        </div>

        <div>
          <div className='mx-auto mb-3 w-max lg:mb-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-12 w-12'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
              />
            </svg>
          </div>
          <h6 className='mb-2 text-xl font-medium text-center text-brand-primary lg:text-2xl lg:mb-4'>
            Home Delivery
          </h6>
          <p className='text-center text-gray-600'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHighlights;
