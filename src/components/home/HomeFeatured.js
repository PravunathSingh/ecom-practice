import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SingleFeature from '../ui/SingleFeature';

const HomeFeatured = () => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    const fetchFeatured = async () => {
      const res = await axios.get('https://fakestoreapi.com/products?limit=3');
      setFeatured(res.data);
    };
    fetchFeatured();
  });

  const allFeatured = featured.map((singleFeature) => {
    return <SingleFeature singleFeature={singleFeature} />;
  });

  return (
    <div className='container mt-20 mb-20 font-rubik lg:mt-40 lg:mb-40'>
      <div className='max-w-4xl mx-auto mb-12 lg:mb-20'>
        <h4 className='mb-5 text-3xl font-semibold text-center text-brand-primary lg:text-4xl lg:mb-8'>
          Checkout Our Best Sellers
        </h4>
        <p className='text-lg leading-relaxed text-center text-gray-700 lg:text-xl lg:leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          perspiciatis tempore, laboriosam nisi cupiditate fugiat.
        </p>
      </div>

      <div className='grid gap-16 mb-12 md:grid-cols-3 lg:mb-16'>
        {allFeatured}
      </div>

      <div className='mx-auto w-max'>
        <Link to='/all-products'>
          <button className='w-full px-10 py-2 mb-4 text-base font-medium transition-all duration-300 border-2 md:mb-0 md:mr-8 md:text-lg md:w-auto hover:-translate-y-2 bg-brand-primary hover:bg-brand-primary-light border-brand-primary text-bg-brand rounded-xl focus:ring-2 ring-offset-2 ring-brand-primary'>
            Shop Best Sellers
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeFeatured;
