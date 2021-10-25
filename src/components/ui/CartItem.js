import React from 'react';
// import {Link} from 'react-router-dom'

const CartItem = ({ cartItem }) => {
  return (
    <div>
      <div className='col-span-2'>
        <div className='grid gap-8 mb-16 md:mb-24 lg:grid-cols-3'>
          <div className='w-full h-auto aspect-w-3 aspect-h-3'>
            <img src={cartItem.image} alt='cartItem img' />
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
            <span className='mr-5 transition-all duration-200 cursor-pointer text-brand-primary-light hover:text-brand-primary'>
              Add to WishList
            </span>
            <span className='font-medium text-red-700 transition-all duration-200 cursor-pointer hover:text-red-900'>
              Remove Item
            </span>
          </div>

          <div>
            <div className='mb-8 lg:mb-24'>
              <div>
                <label className='font-medium'>Quantity</label>
              </div>
              <input
                type='number'
                value='1'
                className='rounded-lg text-brand-primary bg-bg-brand'
              />
            </div>
            <h5 className='text-xl font-semibold md:text-3xl text-brand-primary'>
              $ {cartItem.price}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
