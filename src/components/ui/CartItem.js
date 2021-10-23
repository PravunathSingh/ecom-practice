import React from 'react';
// import {Link} from 'react-router-dom'

const CartItem = ({ cartItem }) => {
  return (
    <div className='flex flex-wrap items-center gap-8'>
      <div>
        <img
          src={cartItem.image}
          alt='cartItem img'
          className='aspect-w-3 aspect-h-4'
        />
      </div>
      <div>
        <h4 className='mb-6 text-lg font-medium leading-relaxed lg:text-xl lg:leading-relaxed lg:mb-9'>
          {cartItem.title}
        </h4>
        <h6 className='mb-4 font-medium text-gray-600 lg:mb-7'>
          Rating:{' '}
          <span className='text-brand-primary'>{cartItem.rating.rate}</span>
        </h6>
        <h6 className='mb-4 font-medium text-gray-600 lg:mb-7'>
          Category:{' '}
          <span className='text-brand-primary'>{cartItem.category}</span>
        </h6>
        <span className='mr-5 transition-all duration-200 text-brand-primary-light hover:text-brand-primary'>
          Add to WishList
        </span>
        <span className='font-medium text-red-700 transition-all duration-200 hover:text-red-900'>
          Remove Item
        </span>
      </div>
    </div>
  );
};

export default CartItem;
