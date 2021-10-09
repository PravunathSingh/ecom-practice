import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../ui/Navbar';

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchDetails = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProductDetails(res.data);
    };
    fetchDetails();
  }, []);
  return (
    <div className='font-rubik'>
      <Navbar />
      <div className='container grid gap-12 place-content-center place-items-center lg:grid-cols-2 my-28 lg:my-40 '>
        <div className=''>
          <img
            src={productDetails.image}
            alt='product-details'
            className='w-full h-auto'
          />
        </div>

        <div>
          <h3 className='mb-8 text-xl font-semibold leading-relaxed text-left md:mb-10 md:text-3xl md:leading-relaxed'>
            {productDetails.title}
          </h3>
          <h5 className='mb-8 text-xl font-medium md:mb-10 md:text-2xl'>
            Price: <span className='font-bold'>${productDetails.price}</span>
          </h5>
          <h5 className='mb-12 text-lg font-normal md:mb-16 md:text-xl'>
            Availability: <span className='font-medium'>In Stock</span>
          </h5>
          <p className='text-base font-normal leading-relaxed md:text-lg md:leading-relaxed'>
            {productDetails.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
