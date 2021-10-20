import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ui/ProductCard';
import Navbar from '../ui/Navbar';

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
      <div className='container my-28 lg:my-40'>
        <div className='grid gap-12 md:grid-cols-3 lg:grid-cols-4'>
          {allProducts}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
