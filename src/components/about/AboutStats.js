import React from 'react';

const AboutStats = () => {
  return (
    <div className='container mb-16 font-rubik md:mb-24 lg:mb-32'>
      <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-12 w-12 mb-6 md:mb-8'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fill-rule='evenodd'
              d='M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z'
              clip-rule='evenodd'
              fill='#064420'
            />
          </svg>
          <h4 className='mb-2 text-xl font-medium md:text-2xl text-brand-primary md:mb-4'>
            Founded In 1999
          </h4>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            quos at, necessitatibus dolorum eos fugiat.
          </p>
        </div>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-12 w-12 mb-6 md:mb-8'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fill-rule='evenodd'
              d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
              clip-rule='evenodd'
              fill='#064420'
            />
          </svg>
          <h4 className='mb-2 text-xl font-medium md:text-2xl text-brand-primary md:mb-4'>
            1 Million Products
          </h4>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            quos at, necessitatibus dolorum eos fugiat.
          </p>
        </div>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-12 w-12 mb-6 md:mb-8'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z'
              fill='#064420'
            />
          </svg>
          <h4 className='mb-2 text-xl font-medium md:text-2xl text-brand-primary md:mb-4'>
            200k Users
          </h4>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            quos at, necessitatibus dolorum eos fugiat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutStats;
