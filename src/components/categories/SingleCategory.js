import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Navbar from '../ui/Navbar';
import ProductCard from '../ui/ProductCard';
import SingleCategoryHeader from './SingleCategoryHeader';
import Sort from '../ui/Sort';

const SingleCategory = () => {
  const location = useLocation();
  const url = `https://fakestoreapi.com/${location.pathname}`;
  const lastSegment = url.split('/').pop();

  console.log(lastSegment);

  const [singleCategory, setSingleCategory] = useState([]);
  useEffect(() => {
    const fetchSingleCategory = async () => {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${lastSegment}`
      );
      setSingleCategory(res.data);
    };
    console.log(singleCategory);
    fetchSingleCategory();
  }, []);

  const singleCategoryData = singleCategory.map((single) => {
    return (
      <div>
        <ProductCard key={single.id} category={single} />
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <div className='container my-20 md:my-32'>
        <div className='flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-12'>
          <h1 className='text-lg font-medium text-gray-600 md:text-xl'>
            Showing:{' '}
            <span className='text-brand-primary'>
              {singleCategory.length} Products
            </span>
          </h1>
          <div>
            <Sort />
          </div>
        </div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {singleCategoryData}
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
