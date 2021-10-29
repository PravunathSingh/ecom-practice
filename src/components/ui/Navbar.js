import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = ({ toggleMobileMenu, active }) => {
  return (
    <div className='sticky top-0 z-50 opacity-100 bg-brand-bg'>
      <nav className='shadow-lg bg-bg-brand-dark font-rubik'>
        <div className='container flex flex-wrap items-center justify-between py-3 xl:max-w-full md:py-4'>
          <a href='/'>
            <h1 className='text-3xl font-bold lg:text-5xl text-brand-primary'>
              BrandName
            </h1>
          </a>

          <div className='ml-auto text-4xl cursor-pointer text-text-secondary hover:text-text-primary lg:hidden'>
            <FaBars onClick={toggleMobileMenu} />
          </div>

          <div>
            <ul className='hidden list-none lg:flex'>
              <li className='py-2 ml-8 text-lg font-medium text-gray-500 hover:text-brand-primary'>
                <NavLink to='/' activeClassName='activeLink' exact={true}>
                  Home
                </NavLink>
              </li>
              <li className='py-2 ml-8 text-lg font-medium text-gray-500 hover:text-brand-primary'>
                <NavLink to='/about' activeClassName='activeLink'>
                  About
                </NavLink>
              </li>
              <li className='py-2 ml-8 text-lg font-medium text-gray-500 hover:text-brand-primary'>
                <NavLink to='/categories' activeClassName='activeLink'>
                  Categories
                </NavLink>
              </li>
              <li
                className='py-2 ml-8 text-lg font-medium text-gray-500 hover:text-brand-primary'
                activeClassName='activeLink'
              >
                <NavLink to='/all-products' activeClassName='activeLink'>
                  Products
                </NavLink>
              </li>
              <li
                className='py-2 ml-8 text-lg font-medium text-gray-500 hover:text-brand-primary'
                activeClassName='activeLink'
              >
                <NavLink to='/contactUs' activeClassName='activeLink'>
                  Contact
                </NavLink>
              </li>
              <li
                className='py-2 ml-8 text-lg font-medium text-gray-500 hover:text-brand-primary'
                activeClassName='activeLink'
              >
                <NavLink to='/login' activeClassName='activeLink'>
                  Login / SignUp
                </NavLink>
              </li>
              <li
                className='py-2 ml-8 text-lg font-medium text-gray-500 hover:text-brand-primary'
                activeClassName='activeLink'
              >
                <NavLink to='/wishlist' activeClassName='activeLink'>
                  WishList
                </NavLink>
              </li>
              <li
                className='py-2 ml-8 text-lg font-medium text-gray-500 hover:text-brand-primary'
                activeClassName='activeLink'
              >
                <NavLink to='/cart' activeClassName='activeLink'>
                  My Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <CurtainMenuPage open={open} /> */}
    </div>
  );
};

export default Navbar;
