import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='z-50 py-4 shadow-lg bg-gray-50'>
      <div className='container flex items-center justify-between gap-8 xl:max-w-full'>
        <div>
          <NavLink to='/search' className='text-base font-medium'>
            <i className='fa fa-search'></i> Search
          </NavLink>
        </div>
        <div className='block xl:hidden'>
          <NavLink to='/' className='text-center'>
            Brand Name
          </NavLink>
        </div>
        <div className='hidden xl:block'>
          <ul className='flex items-center gap-4 p-0 list-none'>
            <li className='mr-6 text-base font-medium transition-all duration-300 hover:border-b-2 hover:border-gray-800'>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className='mr-6 text-base font-medium transition-all duration-300 hover:border-b-2 hover:border-gray-800'>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li className='mr-6 text-base font-medium transition-all duration-300 hover:border-b-2 hover:border-gray-800'>
              <NavLink to='/categories'>Category</NavLink>
            </li>
            <li className='mr-6 text-3xl font-semibold'>
              <NavLink to='/'>Brand Name</NavLink>
            </li>
            <li className='mr-6 text-base font-medium transition-all duration-300 hover:border-b-2 hover:border-gray-800'>
              <NavLink to='/all-products'>Products</NavLink>
            </li>
            <li className='mr-6 text-base font-medium transition-all duration-300 hover:border-b-2 hover:border-gray-800'>
              <NavLink to='/contactUs'>Contact</NavLink>
            </li>
            <li className='text-base font-medium transition-all duration-300 hover:border-b-2 hover:border-gray-800'>
              <NavLink to='/blogs'>Blog</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className='flex items-center gap-4'>
            <li className='mr-6 text-base font-medium transition-all duration-300 hover:border-b-2 hover:border-gray-800'>
              <NavLink to='authentication'>Login / Register</NavLink>
            </li>
            <li className='mr-6 text-base font-medium'>
              <NavLink to='/wishlist'>
                <i className='fa fa-heart'></i>
              </NavLink>
            </li>
            <li className='text-base font-medium'>
              <NavLink to='/cart'>
                <i className='fas fa-cart-plus'></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
