import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/ui/Navbar';
import CartItem from '../components/ui/CartItem';

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
      <Navbar />
      <div className='flex flex-wrap my-20 md:my-24 lg:my-28'>
        <div className='container'>
          <h1 className='mb-10 text-3xl font-semibold md:mb-12 lg:mb-14 text-brand-primary md:text-4xl lg:text-5xl'>
            Cart
          </h1>
          <div>{cartItems}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
