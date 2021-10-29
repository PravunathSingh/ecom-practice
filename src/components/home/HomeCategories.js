import React from 'react';
import { Link } from 'react-router-dom';
import heroCategory1 from '../../assests/heroCategory1.jpg';
import heroCategory2 from '../../assests/heroCategory2.jpg';

const HomeCategories = () => {
  return (
    <div className='container my-16 font-rubik lg:my-28'>
      <div className='grid gap-12 lg:grid-cols-3'>
        <div>
          <img src={heroCategory1} alt='' className='h-max rounded-xl' />
        </div>
        <div className='grid px-8 py-4 shadow-lg place-items-center bg-bg-brand-dark rounded-xl'>
          <div>
            <h5 className='mb-6 text-2xl font-semibold leading-relaxed text-center lg:mb-10 lg:leading-relaxed lg:text-4xl text-brand-primary'>
              Shop Your Fav Categories
            </h5>
            <p className='mb-6 text-lg font-medium leading-relaxed text-center text-gray-600 lg:mb-10 lg:leading-relaxed lg:text-xl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
              eius!
            </p>
            <div className='mx-auto w-max'>
              <Link to='/categories'>
                <button className='w-full px-10 py-2 mb-4 text-base font-medium transition-all duration-300 border-2 md:mb-0 md:mr-8 md:text-lg hover:-translate-y-2 bg-brand-primary hover:bg-brand-primary-light border-brand-primary text-bg-brand rounded-xl focus:ring-2 ring-offset-2 ring-brand-primary'>
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src={heroCategory2} alt='' className='rounded-xl' />
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
