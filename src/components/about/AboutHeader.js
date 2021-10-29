import React from 'react';
import aboutHero from '../../assests/aboutHero.jpg';
import Header from '../ui/Header';

const AboutHeader = () => {
  return (
    <div>
      <Header />
      <div className='container my-16 lg:my-32 font-rubik'>
        <div className='grid gap-10 place-content-center place-items-center lg:grid-cols-2'>
          <div className='order-2 lg:order-1'>
            <h1 className='mb-6 text-3xl font-semibold text-center md:mb-8 lg:mb-12 md:text-4xl lg:text-5xl lg:text-left text-brand-primary'>
              Get To Know Us
            </h1>
            <p className='mb-8 leading-relaxed text-center text-gray-700 md:mb-12 lg:mb-26 lg:leading-relaxed lg:text-left lg:text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              assumenda saepe veniam dolor sit amet consectetur adipisicing
              elit. Itaque assumenda saepe veniam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Itaque assumenda saepe veniam dolor
              sit amet consectetur adipisicing elit. Itaque assumenda saepe
              veniam.
            </p>

            {/* <div className='w-max'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-14 w-14'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z'
                  clip-rule='evenodd'
                />
              </svg>
            </div> */}
          </div>

          <div className='order-1 lg:order-2'>
            <img src={aboutHero} alt='' className='rounded-xl' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
