import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/ui/Navbar';
import WishListCard from '../components/ui/WishListCard';
import Sort from '../components/ui/Sort';
import Footer from '../components/ui/Footer';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const fetchWishlist = async () => {
      const res = await axios.get('https://fakestoreapi.com/products?limit=5');
      setWishlist(res.data);
    };

    fetchWishlist();
  }, []);

  const wishList = wishlist.map((singleWish) => {
    return (
      <div>
        <WishListCard key={singleWish.id} singleWish={singleWish} />
      </div>
    );
  });
  return (
    <>
      <Navbar />
      <div className='container my-20 font-rubik lg:my-28'>
        <div className='max-w-4xl'>
          <h1 className='mb-6 text-3xl font-semibold lg:text-5xl text-brand-primary lg:mb-8'>
            WishList
          </h1>
          <p className='mb-8 text-lg leading-relaxed text-gray-700 lg:text-xl lg:leading-relaxed lg:mb-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            repudiandae, excepturi iste voluptatem non asperiores ut qui magnam.
          </p>
        </div>

        <div className='flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-12'>
          <h1 className='text-lg font-medium text-gray-600 md:text-xl'>
            Showing:{' '}
            <span className='text-brand-primary'>
              {wishList.length} Products
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

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {wishList}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
