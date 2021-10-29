import React from 'react';

export default function Newsletter() {
  return (
    <div className='py-16 mx-4 2xl:mx-auto 2xl:container font-rubik'>
      <div className='relative flex items-center justify-center w-full '>
        <img
          src='https://i.ibb.co/4sYZ8gC/img-2.png'
          alt='dining'
          className='absolute z-0 hidden w-full h-full xl:block'
        />
        <img
          src='https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png'
          alt='dining'
          className='absolute z-0 hidden w-full h-full sm:block xl:hidden'
        />
        <img
          src='https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png'
          alt='dining'
          className='absolute z-0 w-full h-full sm:hidden '
        />
        <div className='relative z-40 flex flex-col items-center justify-center w-full px-4 py-10 bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 md:mx-24 md:px-12'>
          <h1 className='text-4xl font-semibold leading-9 text-center text-white'>
            Don’t miss out!
          </h1>
          <p className='mt-6 text-base leading-normal text-center text-white'>
            Subscribe to your newsletter to stay in the loop. Our newsletter is
            sent once in <br />a week on every friday so subscribe to get latest
            news and updates.
          </p>
          <div className='flex flex-col items-center w-full mt-12 space-y-4 border-white sm:border sm:flex-row lg:w-5/12 sm:space-y-0'>
            <input
              className='w-full p-4 text-base font-medium leading-none text-white placeholder-white bg-transparent border border-white sm:border-transparent focus:outline-none'
              placeholder='Email Address'
            />
            <button className='w-full px-6 py-4 font-medium border-2 order-brand-primary hover:bg-brand-primary bg-bg-brand text-brand-primary hover:text-bg-brand focus:outline-none focus:ring-offset-2 focus:ring sm:border-transparent sm:w-auto hover:bg-opacity-75'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
