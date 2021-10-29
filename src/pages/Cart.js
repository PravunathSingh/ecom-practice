import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartItem from '../components/ui/CartItem';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';

const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchCart = async () => {
      const res = await axios.get('https://fakestoreapi.com/products?limit=3');
      setCart(res.data);
    };

    fetchCart();
  }, []);

  const cartItems = cart.map((cartItem) => {
    return <CartItem key={cartItem.id} cartItem={cartItem} />;
  });

  return (
    <div className='font-rubik'>
      <Header />
      <div className='container my-20 md:my-24 lg:my-28'>
        <div className='grid lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <h1 className='mb-10 text-3xl font-semibold md:mb-12 lg:mb-14 text-brand-primary md:text-4xl lg:text-5xl'>
              Cart
            </h1>
            <div>{cartItems}</div>
          </div>

          <div>
            <h1 className='mb-10 text-3xl font-semibold md:mb-12 lg:mb-14 text-brand-primary md:text-4xl lg:text-5xl'>
              Summary
            </h1>
            <div>
              <div className='flex flex-wrap justify-between gap-4 mb-6 md:mb-10'>
                <h6 className='text-base font-medium md:text-xl'>Subtoal:</h6>
                <h6 className='text-base font-semibold text-brand-primary md:text-xl'>
                  $999
                </h6>
              </div>
              <div className='flex flex-wrap justify-between gap-4 mb-6 md:mb-10'>
                <h6 className='text-base font-medium md:text-xl'>Shipping:</h6>
                <h6 className='text-base font-semibold text-brand-primary md:text-xl'>
                  $30
                </h6>
              </div>
              <div className='flex flex-wrap justify-between gap-4 mb-12 md:mb-20'>
                <h6 className='text-base font-medium md:text-xl'>Tax:</h6>
                <h6 className='text-base font-semibold text-brand-primary md:text-xl'>
                  $10
                </h6>
              </div>
            </div>

            <div>
              <div className='flex flex-wrap justify-between gap-4 mb-8 md:mb-12'>
                <h6 className='text-xl font-medium md:text-3xl'>Total:</h6>
                <h6 className='text-xl font-semibold text-brand-primary md:text-3xl'>
                  $1349
                </h6>
              </div>
            </div>

            <div className='w-full'>
              <button className='w-full px-8 py-3 mb-4 text-base font-medium transition-all duration-300 border-2 md:mb-0 md:mr-8 md:text-lg hover:-translate-y-2 bg-brand-primary hover:bg-brand-primary-light border-brand-primary text-bg-brand rounded-xl focus:ring-2 ring-offset-2 ring-brand-primary'>
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
