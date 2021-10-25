import React from 'react';

const Footer = () => {
  return (
    <div className='container bg-bg-brand-dark font-rubik'>
      <div className='grid gap-10 md:grid-cols-3'>
        <div className='my-6 md:my-16'>
          <h1 className='mb-8 text-3xl font-semibold text-brand-primary md:text-4xl lg:text-5xl md:mb-12'>
            BrandName
          </h1>
          <h6 className='mb-10 text-lg font-medium md:text-xl md:mb-14 text-brand-primary-light'>
            Made With ❤️ By AchieveX Solutions
          </h6>
          <div>
            <i className='mr-6 transition-all duration-300 cursor-pointer fab fa-facebook md:mr-12 fa-2x text-brand-primary-light hover:text-brand-primary'></i>
            <i className='mr-6 transition-all duration-300 cursor-pointer fab fa-instagram md:mr-12 fa-2x text-brand-primary-light hover:text-brand-primary'></i>
            <i className='transition-all duration-300 cursor-pointer fab fa-twitter fa-2x text-brand-primary-light hover:text-brand-primary'></i>
          </div>
        </div>
        <div className='my-6 md:my-16'>
          <h5 className='mb-6 text-xl font-medium md:text-2xl text-brand-primary md:mb-10'>
            Customer Services
          </h5>
          <ul>
            <li className='mb-2 transition-all duration-200 cursor-pointer md:mb-4 md:text-lg text-brand-primary-light hover:text-brand-primary'>
              Categories
            </li>
            <li className='mb-2 transition-all duration-200 cursor-pointer md:mb-4 md:text-lg text-brand-primary-light hover:text-brand-primary'>
              Products
            </li>
            <li className='mb-2 transition-all duration-200 cursor-pointer md:mb-4 md:text-lg text-brand-primary-light hover:text-brand-primary'>
              My Wishlist
            </li>
            <li className='mb-2 transition-all duration-200 cursor-pointer md:mb-4 md:text-lg text-brand-primary-light hover:text-brand-primary'>
              My Cart
            </li>
            <li className='transition-all duration-200 cursor-pointer md:text-lg text-brand-primary-light hover:text-brand-primary'>
              My Orders
            </li>
          </ul>
        </div>
        <div className='my-6 md:my-16'>
          <h5 className='mb-8 text-xl font-medium md:text-2xl text-brand-primary md:mb-12'>
            Privacy & Legal
          </h5>
          <ul>
            <li className='mb-2 transition-all duration-200 cursor-pointer md:mb-4 md:text-lg text-brand-primary-light hover:text-brand-primary'>
              Cookies
            </li>
            <li className='mb-2 transition-all duration-200 cursor-pointer md:mb-4 md:text-lg text-brand-primary-light hover:text-brand-primary'>
              Terms and Conditions
            </li>
            <li className='mb-2 transition-all duration-200 cursor-pointer md:mb-4 md:text-lg text-brand-primary-light hover:text-brand-primary'>
              Return Policy
            </li>
            <li className='transition-all duration-200 cursor-pointer md:text-lg text-brand-primary-light hover:text-brand-primary'>
              Legal Policy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
