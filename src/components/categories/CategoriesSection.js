import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Category from './Category';
import { Link } from 'react-router-dom';
// import Spinner from '../ui/Spinner';

const CategoriesSection = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios(
        'https://fakestoreapi.com/products/categories'
      );
      setCategoriesData(response.data);
    };
    console.log(categoriesData);
    fetchCategories();
  }, []);

  const categories = categoriesData.map((category) => {
    return (
      <div className='container my-20 font-rubik md:my-36'>
        <div className='flex items-center justify-between mb-12 md:mb-16'>
          <h1 className='text-2xl italic font-semibold text-gray-800 uppercase xl:text-4xl'>
            {category}
          </h1>
          <Link to={`/products/category/${category}`}>
            <h5 className='text-base font-medium text-blue-600 xl:text-xl'>
              See All Products
            </h5>
          </Link>
        </div>

        <Category category={category} />
      </div>
    );
  });

  return <>{categories}</>;
};

export default CategoriesSection;
