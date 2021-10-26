import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex items-center justify-center my-20 md:my-28 lg:my-32 font-rubik'>
      <div className='max-w-3xl mx-auto'>
        <Link to='/'>
          <h1 className='mb-8 text-4xl font-bold text-center lg:text-6xl text-brand-primary md:mb-12'>
            BrandName
          </h1>
        </Link>
        <div className='flex justify-between mb-16 md:mb-24'>
          <div>
            <Link
              to='/login'
              className='p-2 text-2xl font-medium text-center border-b-4 border-brand-primary text-brand-primary lg:text-3xl'
            >
              Login
            </Link>
          </div>
          <div>
            <Link
              to='/register'
              className='p-2 text-2xl font-medium text-center text-gray-500 transition-all duration-200 hover:text-brand-primary lg:text-3xl'
            >
              Register
            </Link>
          </div>
        </div>

        <div className='px-6 py-10 shadow-xl bg-bg-brand-dark rounded-xl'>
          <h4 className='mb-10 text-xl font-medium text-center text-gray-700 md:mb-16 md:text-2xl'>
            Login To Your Account
          </h4>

          <form>
            <div className='mb-2'>
              <label className='text-lg font-medium text-brand-primary-light'>
                Email
              </label>
            </div>
            <input
              type='email'
              required
              className='w-full mb-8 rounded-lg md:text-lg text-brand-primary-light bg-bg-brand-dark focus:bg-bg-brand'
            />
            <div className='mb-2'>
              <label className='text-lg font-medium text-brand-primary-light'>
                Password
              </label>
            </div>
            <input
              type='password'
              required
              className='w-full rounded-lg md:text-lg text-brand-primary-light bg-bg-brand-dark focus:bg-bg-brand'
            />

            <div className='grid gap-2 mt-2 mb-8 sm:grid-cols-2 place-content-between place-items-center'>
              <div>
                <label className='text-sm text-gray-500'>
                  <input
                    type='checkbox'
                    className='mr-2 rounded-sm focus:ring-1 ring-brand-primary bg-bg-brand-dark focus:bg-brand-primary'
                  />
                  Remember Me
                </label>
              </div>
              <div>
                <h6 className='text-sm text-gray-500 transition-all duration-200 cursor-pointer hover:text-brand-primary'>
                  Forgot Password
                </h6>
              </div>
            </div>

            <button
              type='submit'
              className='w-full px-8 py-2 mb-4 text-base font-medium transition-all duration-300 border-2 md:mb-0 md:mr-8 md:text-lg hover:-translate-y-2 bg-brand-primary hover:bg-brand-primary-light border-brand-primary text-bg-brand rounded-xl focus:ring-2 ring-offset-2 ring-brand-primary'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
