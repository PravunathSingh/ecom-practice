import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ui/ProductCard';
import Navbar from '../ui/Navbar';
import Sort from '../ui/Sort';
import CategoryHeader from '../categories/CategoryHeader';
import Footer from '../ui/Footer';

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
    <div className='font-rubik'>
      <Navbar />
      <CategoryHeader />
      <div className='container'>
        <h1 className='my-16 text-3xl font-semibold text-center text-brand-primary md:my-24 lg:my-32 md:text-left lg:text-5xl'>
          All Products
        </h1>
      </div>
      <div className='container my-20 md:my-32'>
        <div className='flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-12'>
          <h1 className='text-lg font-medium text-gray-600 md:text-xl'>
            Showing:{' '}
            <span className='text-brand-primary'>
              {allProducts.length} Products
            </span>
          </h1>

          <div>
            <form>
              <select
                name='sort'
                className='font-medium rounded-lg bg-bg-brand md:text-lg text-brand-primary focus:ring-2 focus:ring-brand-primary focus:ring-offset-2'
              >
                <option value='sort'>Filter</option>
                <option value='price from highest to lowest'>
                  Category: Electronics
                </option>
                <option value='price from lowest to highest'>
                  Category: Jewelery
                </option>
                <option value='rating from highest to lowest'>
                  Category: Men's Clothing
                </option>
                <option value='rating from highest to lowest'>
                  Category: Women's Clothing
                </option>
              </select>
            </form>
          </div>

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

      <Footer />
    </div>
  );
};

export default ProductsList;
