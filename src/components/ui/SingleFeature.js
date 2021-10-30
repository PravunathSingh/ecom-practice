import React from 'react';
import { Link } from 'react-router-dom';

const SingleFeature = ({ singleFeature }) => {
  return (
    <div>
      <div className='w-full h-auto mb-4 aspect-w-3 lg:mb-6 aspect-h-3'>
        <img
          src={singleFeature.image}
          alt=''
          className='object-cover object-center rounded-xl'
        />
      </div>
      <Link to={`/productDetails/${singleFeature.id}`}>
        <h6 className='font-medium lg:text-lg text-brand-primary-light hover:text-brand-primary'>
          See Product Details
        </h6>
      </Link>
    </div>
  );
};

export default SingleFeature;
