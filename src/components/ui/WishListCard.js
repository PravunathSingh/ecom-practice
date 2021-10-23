import React from 'react';
import { Link } from 'react-router-dom';

const WishListCard = ({ singleWish }) => {
  return (
    <div className='bg-gray-50'>
      <div className='overflow-hidden transition-all duration-200 border-2 border-gray-300 rounded-2xl hover:shadow-xl'>
        <div className='relative grid mb-6 place-content-center aspect-w-16 aspect-h-9'>
          <img
            src={singleWish.image}
            alt='product'
            className='object-cover object-center'
          />
        </div>
        <div className='px-4 py-6 md:px-6 md:py-8'>
          <div className='mb-6'>
            <h2 className='text-lg font-semibold md:text-xl'>
              {singleWish.title}
            </h2>
          </div>

          <div className='flex flex-wrap items-center justify-between gap-8 mb-6'>
            <h5 className='text-lg font-medium'>
              Price: <span className='font-semibold'>${singleWish.price}</span>
            </h5>
            <h5 className='text-lg font-medium'>
              Rating:{' '}
              <span className='font-semibold'>{singleWish.rating.rate}</span>
            </h5>
          </div>

          <div className='flex flex-wrap items-center justify-between gap-6 mb-6'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8 cursor-pointer'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8 cursor-pointer'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8 cursor-pointer'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
                />
              </svg>
            </div>
          </div>

          <div className='cursor-pointer'>
            <Link to={`/productDetails/${singleWish.id}`}>
              <h5 className='font-medium transition-all duration-200 text-brand-secondary hover:text-brand-primary'>
                See Product Details
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
