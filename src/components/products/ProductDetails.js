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
      <div className='container'>
        <h1 className='mt-24 text-3xl font-semibold text-center text-brand-primary md:text-left md:text-5xl md:mt-32'>
          Product Details
        </h1>
      </div>
      <div className='container grid gap-12 place-content-center place-items-center lg:grid-cols-2 my-28'>
        <div className='h-full rounded-xl'>
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
          <h5 className='mb-8 text-lg font-normal md:mb-10 md:text-xl'>
            Availability: <span className='font-medium'>In Stock</span>
          </h5>
          {/* <h5 className='mb-8 text-lg font-normal md:mb-10 md:text-xl'>
            Rating:
            <span className='font-medium'>
              {productDetails.rating.rate} / 5
            </span>
          </h5> */}

          <div className='my-4 md:my-6 md:hidden'>
            <h4 className='mb-4 text-lg font-medium text-gray-800 md:mb-6'>
              Description:
            </h4>
            <p className='mb-12 text-sm text-gray-600'>
              {productDetails.description}
            </p>
          </div>

          <button className='w-full px-8 py-3 mb-4 text-base font-medium transition-all duration-300 border-2 md:mb-0 md:mr-8 md:text-lg md:w-auto hover:-translate-y-2 bg-brand-primary hover:bg-brand-primary-light border-brand-primary text-bg-brand rounded-xl focus:ring-2 ring-offset-2 ring-brand-primary'>
            Add To Cart
          </button>

          <button className='w-full px-8 py-3 mb-40 text-base font-medium transition-all duration-300 border-2 md:mb-0 md:text-lg md:w-auto border-brand-primary hover:bg-brand-primary-light rounded-xl hover:text-bg-brand'>
            Add To Wish List
          </button>
        </div>
      </div>

      <div className='container hidden mb-40 md:block'>
        <h4 className='mb-4 text-3xl font-medium text-gray-800 md:mb-6'>
          Description:
        </h4>
        <p className='text-xl text-gray-600'>{productDetails.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
