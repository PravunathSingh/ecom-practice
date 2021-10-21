import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ui/ProductCard';
import Navbar from '../ui/Navbar';
import Sort from '../ui/Sort';

const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    const allProductsFetch = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/`);
      setProductsList(res.data);
    };
    allProductsFetch();
  });

  const allProducts = productsList.map((product) => {
    return (
      <div>
        <ProductCard key={product.id} category={product} />
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
              {allProducts.length} Products
            </span>
          </h1>
          <div>
            <Sort />
          </div>
        </div>

        <div>
          <div className='grid gap-12 md:grid-cols-3 lg:grid-cols-4'>
            {allProducts}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
